"use server";

import { Resend } from "resend";

const getResendClient = () => {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return null;
  return new Resend(apiKey);
};

/**
 * Generates an email-client safe HTML template matching the portfolio design style
 */
export async function generateContactEmailTemplate({
  name,
  email,
  projectType,
  budget,
  message,
}) {
  const formattedDate = new Date().toLocaleString("en-US", {
    timeZone: "UTC",
    dateStyle: "full",
    timeStyle: "short",
  });

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Portfolio Inquiry</title>
</head>
<body style="margin: 0; padding: 0; background-color: #060913; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #f1f5f9;">
  <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #060913; padding: 40px 15px;">
    <tr>
      <td align="center">
        <!-- Main Container -->
        <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width: 600px; background-color: #0c1222; border: 1px solid rgba(6, 182, 212, 0.25); border-radius: 18px; overflow: hidden; box-shadow: 0 10px 40px rgba(0, 0, 0, 0.8);">
          
          <!-- Top Accent Glow Bar -->
          <tr>
            <td style="background: linear-gradient(90deg, #00f2fe 0%, #4facfe 50%, #10b981 100%); height: 4px;"></td>
          </tr>

          <!-- Header -->
          <tr>
            <td style="padding: 32px 32px 24px 32px; border-bottom: 1px solid rgba(255, 255, 255, 0.08);">
              <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
                <tr>
                  <td>
                    <span style="display: inline-block; padding: 4px 12px; background-color: rgba(6, 182, 212, 0.15); border: 1px solid rgba(6, 182, 212, 0.4); border-radius: 9999px; color: #38bdf8; font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">
                      ✦ New Client Inquiry
                    </span>
                    <h1 style="margin: 12px 0 4px 0; font-size: 22px; font-weight: 800; color: #ffffff; letter-spacing: -0.5px;">
                      You have a new message from <span style="color: #38bdf8;">${name}</span>
                    </h1>
                    <p style="margin: 0; font-size: 13px; color: #94a3b8;">
                      Received on ${formattedDate} (UTC) via your portfolio website.
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Summary Badges Table -->
          <tr>
            <td style="padding: 24px 32px 12px 32px;">
              <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #090e1a; border: 1px solid rgba(255, 255, 255, 0.06); border-radius: 12px; padding: 18px;">
                <tr>
                  <td width="50%" style="padding: 8px 12px; vertical-align: top;">
                    <span style="display: block; font-size: 11px; text-transform: uppercase; letter-spacing: 0.5px; color: #64748b; font-weight: 600; margin-bottom: 4px;">Client Name</span>
                    <strong style="font-size: 15px; color: #ffffff;">${name}</strong>
                  </td>
                  <td width="50%" style="padding: 8px 12px; vertical-align: top;">
                    <span style="display: block; font-size: 11px; text-transform: uppercase; letter-spacing: 0.5px; color: #64748b; font-weight: 600; margin-bottom: 4px;">Email Address</span>
                    <a href="mailto:${email}" style="color: #38bdf8; text-decoration: none; font-size: 14px; font-weight: 500;">${email}</a>
                  </td>
                </tr>
                <tr>
                  <td width="50%" style="padding: 12px 12px 4px 12px; vertical-align: top; border-top: 1px solid rgba(255, 255, 255, 0.05);">
                    <span style="display: block; font-size: 11px; text-transform: uppercase; letter-spacing: 0.5px; color: #64748b; font-weight: 600; margin-bottom: 4px;">Project Scope</span>
                    <span style="display: inline-block; background-color: rgba(6, 182, 212, 0.12); color: #22d3ee; border: 1px solid rgba(6, 182, 212, 0.3); border-radius: 6px; padding: 3px 8px; font-size: 12px; font-weight: 600;">
                      ${projectType || "General Web Project"}
                    </span>
                  </td>
                  <td width="50%" style="padding: 12px 12px 4px 12px; vertical-align: top; border-top: 1px solid rgba(255, 255, 255, 0.05);">
                    <span style="display: block; font-size: 11px; text-transform: uppercase; letter-spacing: 0.5px; color: #64748b; font-weight: 600; margin-bottom: 4px;">Budget Range</span>
                    <span style="font-size: 13px; color: #10b981; font-weight: 600;">
                      ${budget || "Flexible"}
                    </span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Message Body -->
          <tr>
            <td style="padding: 12px 32px 28px 32px;">
              <span style="display: block; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; color: #94a3b8; font-weight: 600; margin-bottom: 8px;">
                Project Details & Requirements:
              </span>
              <div style="background-color: #090e1a; border: 1px solid rgba(255, 255, 255, 0.08); border-left: 3px solid #38bdf8; border-radius: 10px; padding: 18px 20px; font-size: 14px; line-height: 1.6; color: #e2e8f0; white-space: pre-wrap;">${message}</div>
            </td>
          </tr>

          <!-- Action Button -->
          <tr>
            <td style="padding: 0 32px 32px 32px;" align="center">
              <a href="mailto:${email}?subject=${encodeURIComponent("Re: Inquiry regarding " + (projectType || "Project"))}" style="display: inline-block; padding: 12px 32px; background: linear-gradient(90deg, #06b6d4 0%, #14b8a6 100%); color: #060913; font-weight: 700; font-size: 14px; text-decoration: none; border-radius: 9999px; box-shadow: 0 4px 20px rgba(6, 182, 212, 0.4);">
                Reply to ${name} (${email})
              </a>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding: 20px 32px; background-color: #070a14; border-top: 1px solid rgba(255, 255, 255, 0.06); text-align: center;">
              <p style="margin: 0; font-size: 12px; color: #64748b;">
                This message was dispatched from your portfolio contact form.
              </p>
              <p style="margin: 4px 0 0 0; font-size: 11px; color: #475569;">
                Pranjal Singh • Full-Stack Developer • All rights reserved
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}

/**
 * Server Action: Process and send contact form inquiries
 */
export async function sendContactEmail(formData) {
  try {
    const { name, email, projectType, budget, message } = formData || {};

    // Server-side validation
    if (!name || typeof name !== "string" || !name.trim()) {
      return { success: false, error: "Please provide your full name." };
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== "string" || !emailRegex.test(email.trim())) {
      return { success: false, error: "Please provide a valid email address." };
    }

    if (!message || typeof message !== "string" || message.trim().length < 10) {
      return {
        success: false,
        error: "Message must be at least 10 characters long.",
      };
    }

    const resend = getResendClient();

    if (!resend) {
      console.warn(
        "RESEND_API_KEY environment variable is not defined in .env.local"
      );
      return {
        success: false,
        error:
          "Email service is not yet configured. Please add RESEND_API_KEY to your environment variables.",
      };
    }

    const fromAddress =
      process.env.RESEND_FROM_EMAIL ||
      "Portfolio Contact <onboarding@resend.dev>";
    const toAddress =
      process.env.CONTACT_RECEIVER_EMAIL || "pranjalhanu66@gmail.com";

    const subject = `New Inquiry: ${projectType || "Web Project"} from ${name.trim()}`;
    const html = await generateContactEmailTemplate({
      name: name.trim(),
      email: email.trim(),
      projectType,
      budget,
      message: message.trim(),
    });

    const { data, error } = await resend.emails.send({
      from: fromAddress,
      to: toAddress,
      replyTo: email.trim(),
      subject,
      html,
    });

    if (error) {
      console.error("Resend API error:", error);
      return {
        success: false,
        error: error.message || "Failed to send email inquiry through Resend.",
      };
    }

    return {
      success: true,
      data,
    };
  } catch (err) {
    console.error("Error in sendContactEmail:", err);
    return {
      success: false,
      error: err.message || "An unexpected error occurred while sending your message.",
    };
  }
}

/**
 * Generic email sending function
 */
export const sendEmail = async ({
  from = process.env.RESEND_FROM_EMAIL || "Portfolio <onboarding@resend.dev>",
  to,
  subject,
  html,
}) => {
  try {
    const resend = getResendClient();
    if (!resend) {
      console.error("RESEND_API_KEY is not defined");
      return { error: "RESEND_API_KEY missing" };
    }

    const { data, error } = await resend.emails.send({
      from,
      to,
      subject,
      html,
    });

    if (error) {
      console.error({ error });
      return { error };
    }

    return { data };
  } catch (err) {
    console.error("Error in sending email", err);
    return { error: err.message };
  }
};