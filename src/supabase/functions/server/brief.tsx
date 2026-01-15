import { Hono } from "npm:hono";
import * as kv from "./kv_store.tsx";
import { Resend } from "npm:resend";

export const briefRoutes = new Hono();

// Initialize Resend
const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

// Submit a brief
briefRoutes.post("/make-server-39720f7e/brief/submit", async (c) => {
  try {
    const body = await c.req.json();
    
    // Validate required fields
    const requiredFields = ['name', 'email', 'projectType', 'projectTitle', 'description', 'objectives', 'targetAudience'];
    for (const field of requiredFields) {
      if (!body[field]) {
        return c.json({ error: `Missing required field: ${field}` }, 400);
      }
    }

    // Generate unique ID for the brief
    const briefId = `brief_${Date.now()}_${Math.random().toString(36).substring(7)}`;
    
    // Prepare brief data
    const briefData = {
      id: briefId,
      ...body,
      submittedAt: new Date().toISOString(),
    };

    // Save to KV store
    await kv.set(briefId, briefData);

    console.log(`Brief submitted successfully: ${briefId}`);

    // Send email notification via Resend
    try {
      const emailHtml = `
        <h1>New Project Brief Submission</h1>
        <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
        <p><strong>Brief ID:</strong> ${briefId}</p>
        
        <h2>Contact Information</h2>
        <p><strong>Name:</strong> ${body.name}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Phone:</strong> ${body.phone || 'N/A'}</p>
        <p><strong>Company:</strong> ${body.company || 'N/A'}</p>
        
        <h2>Project Details</h2>
        <p><strong>Project Type:</strong> ${body.projectType}</p>
        <p><strong>Project Title:</strong> ${body.projectTitle}</p>
        <p><strong>Description:</strong> ${body.description}</p>
        <p><strong>Objectives:</strong> ${body.objectives}</p>
        <p><strong>Target Audience:</strong> ${body.targetAudience}</p>
        
        <h2>Budget & Timeline</h2>
        <p><strong>Budget:</strong> ${body.budget || 'N/A'}</p>
        <p><strong>Timeline:</strong> ${body.timeline || 'N/A'}</p>
        
        <h2>Additional Information</h2>
        <p><strong>Deliverables:</strong> ${body.deliverables || 'N/A'}</p>
        <p><strong>References:</strong> ${body.references || 'N/A'}</p>
        <p><strong>Additional Comments:</strong> ${body.additionalInfo || 'N/A'}</p>
      `;

      await resend.emails.send({
        from: "Sklair Films Brief <onboarding@resend.dev>",
        to: ["unmedia@me.com", "steve_sklair@yahoo.co.uk"],
        subject: `New Project Brief: ${body.projectTitle} - ${body.name}`,
        html: emailHtml,
      });

      console.log(`Email notification sent for brief: ${briefId}`);
    } catch (emailError) {
      console.error("Error sending email notification:", emailError);
      // Don't fail the request if email fails, data is already saved
    }

    return c.json({ 
      success: true, 
      message: "Brief submitted successfully",
      briefId 
    }, 201);

  } catch (error) {
    console.error("Error submitting brief:", error);
    return c.json({ 
      error: "Failed to submit brief", 
      details: error.message 
    }, 500);
  }
});

// Get all briefs (optional - for admin viewing)
briefRoutes.get("/make-server-39720f7e/brief/all", async (c) => {
  try {
    const briefs = await kv.getByPrefix("brief_");
    
    // Sort by submission date (newest first)
    briefs.sort((a, b) => {
      return new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime();
    });

    return c.json({ 
      success: true, 
      briefs,
      count: briefs.length 
    });

  } catch (error) {
    console.error("Error fetching briefs:", error);
    return c.json({ 
      error: "Failed to fetch briefs", 
      details: error.message 
    }, 500);
  }
});

// Get a specific brief by ID
briefRoutes.get("/make-server-39720f7e/brief/:id", async (c) => {
  try {
    const briefId = c.req.param("id");
    const brief = await kv.get(briefId);

    if (!brief) {
      return c.json({ error: "Brief not found" }, 404);
    }

    return c.json({ 
      success: true, 
      brief 
    });

  } catch (error) {
    console.error("Error fetching brief:", error);
    return c.json({ 
      error: "Failed to fetch brief", 
      details: error.message 
    }, 500);
  }
});