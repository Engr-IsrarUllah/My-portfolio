// src/app/actions.js
"use server";

import nodemailer from "nodemailer";

export async function sendEmail(formData) {
  const name = formData.get("name")?.trim();
  const email = formData.get("email")?.trim();
  const message = formData.get("message")?.trim();

  if (!name || !email || !message) {
    return {
      success: false,
      error: "Please fill out all fields before sending.",
    };
  }

  const gmailUser = process.env.GMAIL_USER || process.env.EMAIL_USER;
  const gmailPass = process.env.GMAIL_PASS || process.env.EMAIL_PASS;

  const mailtoFallback = `mailto:${gmailUser || "engrisrar256@gmail.com"}?subject=${encodeURIComponent(
    `Portfolio Inquiry from ${name}`
  )}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;

  // Check if credentials exist in .env.local
  if (!gmailUser || !gmailPass) {
    console.warn(
      "[Nodemailer Alert] Missing GMAIL_USER or GMAIL_PASS environment variables in .env.local"
    );
    return {
      success: false,
      isConfigError: true,
      error:
        "Email credentials are not configured yet in .env.local (GMAIL_USER & GMAIL_PASS required).",
      fallbackMailto: mailtoFallback,
    };
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: gmailUser,
        pass: gmailPass,
      },
    });

    const mailOptions = {
      from: `"${name} (Portfolio)" <${gmailUser}>`,
      to: gmailUser,
      replyTo: email,
      subject: `New Portfolio Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background-color: #09090b; color: #f4f4f5; border-radius: 12px; border: 1px solid #27272a;">
          <h2 style="color: #38bdf8; margin-top: 0; font-size: 20px;">New Message from Portfolio Website</h2>
          <div style="margin: 16px 0; padding: 16px; background-color: #18181b; border-radius: 8px; border: 1px solid #27272a;">
            <p style="margin: 0 0 8px 0; font-size: 14px;"><strong>Sender Name:</strong> ${name}</p>
            <p style="margin: 0; font-size: 14px;"><strong>Sender Email:</strong> <a href="mailto:${email}" style="color: #60a5fa; text-decoration: none;">${email}</a></p>
          </div>
          <div style="padding: 16px; background-color: #18181b; border-radius: 8px; border: 1px solid #27272a;">
            <h4 style="margin: 0 0 8px 0; color: #a1a1aa; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em;">Message Content:</h4>
            <p style="margin: 0; font-size: 14px; line-height: 1.6; white-space: pre-wrap; color: #e4e4e7;">${message}</p>
          </div>
          <p style="margin-top: 20px; font-size: 12px; color: #71717a; text-align: center;">
            Sent automatically from your Next.js developer portfolio.
          </p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    console.error("Nodemailer Execution Error:", error);
    return {
      success: false,
      error:
        error.code === "EAUTH"
          ? "Gmail authentication failed. Please verify your 16-character Google App Password in .env.local."
          : error.message || "Failed to deliver message via SMTP.",
      fallbackMailto: mailtoFallback,
    };
  }
}