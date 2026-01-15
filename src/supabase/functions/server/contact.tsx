import { Hono } from "npm:hono";

const contactRoutes = new Hono();

contactRoutes.post("/make-server-39720f7e/send-quick-contact", async (c) => {
  try {
    const { name, email, message } = await c.req.json();

    if (!name || !email || !message) {
      return c.json({ error: "Missing required fields" }, 400);
    }

    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    
    if (!RESEND_API_KEY) {
      console.error("RESEND_API_KEY not configured");
      return c.json({ error: "Email service not configured" }, 500);
    }

    // Email HTML
    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
        </head>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
            <h2 style="color: #001A28; border-bottom: 2px solid #B91D20; padding-bottom: 10px;">
              Quick Contact Form Submission
            </h2>
            
            <div style="background-color: #f9f9f9; padding: 20px; border-radius: 5px; margin: 20px 0;">
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Message:</strong></p>
              <p style="background-color: white; padding: 15px; border-radius: 5px;">${message}</p>
            </div>
            
            <p style="color: #666; font-size: 12px; margin-top: 30px;">
              This email was sent from the Sklair Films website contact form.
            </p>
          </div>
        </body>
      </html>
    `;

    // Send email using Resend
    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Sklair Films <onboarding@resend.dev>",
        to: ["unmedia@me.com", "steve_sklair@yahoo.co.uk"],
        subject: `Quick Contact from ${name}`,
        html: emailHtml,
        reply_to: email,
      }),
    });

    if (!resendResponse.ok) {
      const errorData = await resendResponse.text();
      console.error("Resend API error:", errorData);
      throw new Error(`Failed to send email: ${errorData}`);
    }

    const result = await resendResponse.json();
    console.log("Email sent successfully:", result);

    return c.json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("Error in send-quick-contact route:", error);
    return c.json(
      { 
        error: "Failed to send email", 
        details: error instanceof Error ? error.message : String(error) 
      },
      500
    );
  }
});

export { contactRoutes };
