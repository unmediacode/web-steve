import express from 'express';
import cors from 'cors';
import { Resend } from 'resend';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

// Configure dotenv
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Initialize Resend
let resend;
if (process.env.RESEND_API_KEY) {
    resend = new Resend(process.env.RESEND_API_KEY);
}

// Paths
const DATA_DIR = path.join(__dirname, '../data');
const MESSAGES_FILE = path.join(DATA_DIR, 'messages.json');
const BRIEFS_FILE = path.join(DATA_DIR, 'briefs.json');

// Ensure data directory exists
async function ensureDataDir() {
    try {
        await fs.access(DATA_DIR);
    } catch {
        await fs.mkdir(DATA_DIR, { recursive: true });
    }
}

// Helper to save data to JSON file
async function saveData(file, data) {
    await ensureDataDir();
    let existingData = [];
    try {
        const content = await fs.readFile(file, 'utf-8');
        existingData = JSON.parse(content);
    } catch (error) {
        // File doesn't exist or is empty, start with empty array
    }

    existingData.push(data);
    await fs.writeFile(file, JSON.stringify(existingData, null, 2));
}

// Quick Contact Endpoint
app.post('/api/contact', async (req, res) => {
    try {
        const { name, email, message } = req.body;

        if (!name || !email || !message) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        const newContact = {
            id: Date.now().toString(),
            type: 'quick_contact',
            name,
            email,
            message,
            submittedAt: new Date().toISOString()
        };

        // Save to local JSON
        await saveData(MESSAGES_FILE, newContact);

        // Send Email
        if (resend) {
            await resend.emails.send({
                from: 'Sklair Films <onboarding@resend.dev>',
                to: ['unmedia@me.com'],
                subject: `Quick Contact from ${name}`,
                html: `
          <h2>Quick Contact Received</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `
            });
        }

        res.json({ success: true, message: 'Message sent successfully' });
    } catch (error) {
        console.error('Error processing contact:', error);
        res.status(500).json({ error: 'Failed to process request' });
    }
});

// Project Brief Endpoint
app.post('/api/brief', async (req, res) => {
    try {
        const body = req.body;

        // Basic validation
        if (!body.name || !body.email || !body.projectTitle) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        const newBrief = {
            id: `brief_${Date.now()}`,
            type: 'project_brief',
            ...body,
            submittedAt: new Date().toISOString()
        };

        // Save to local JSON
        await saveData(BRIEFS_FILE, newBrief);

        // Send Email
        if (resend) {
            await resend.emails.send({
                from: 'Sklair Films Brief <onboarding@resend.dev>',
                to: ['unmedia@me.com'],
                subject: `New Project Brief: ${body.projectTitle}`,
                html: `
          <h1>New Project Brief</h1>
          <p><strong>Client:</strong> ${body.name} (${body.email})</p>
          <p><strong>Project:</strong> ${body.projectTitle}</p>
          <p><strong>Type:</strong> ${body.projectType}</p>
          <p><strong>Description:</strong> ${body.description}</p>
          <hr>
          <p><em>Full details saved in database.</em></p>
        `
            });
        }

        res.json({ success: true, message: 'Brief submitted successfully', briefId: newBrief.id });
    } catch (error) {
        console.error('Error processing brief:', error);
        res.status(500).json({ error: 'Failed to process request' });
    }
});

// Serve static files in production
// Serve static files in production
if (process.env.NODE_ENV === 'production') {
    const BUILD_DIR = path.join(__dirname, '../build');
    app.use(express.static(BUILD_DIR));

    app.get('*', (req, res) => {
        res.sendFile(path.join(BUILD_DIR, 'index.html'));
    });
}

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
