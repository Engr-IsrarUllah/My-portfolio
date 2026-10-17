// src/app/actions.js
"use server";

import nodemailer from "nodemailer";

function escapeHtml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function sendEmail(formData) {
  // 1. Honeypot check for automated bot spam
  const honeypot = formData.get("_honey");
  if (honeypot) {
    // Silently drop spam without consuming SMTP quota
    return { success: true };
  }

  const name = formData.get("name")?.trim();
  const email = formData.get("email")?.trim();
  const message = formData.get("message")?.trim();

  // 2. Required fields check
  if (!name || !email || !message) {
    return {
      success: false,
      error: "Please fill out all fields before sending.",
    };
  }

  // 3. Input length constraints (prevent payload exhaustion DoS)
  if (name.length > 100 || email.length > 254 || message.length > 5000) {
    return {
      success: false,
      error: "Input exceeds maximum permitted length.",
    };
  }

  // 4. Basic Email Format Validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return {
      success: false,
      error: "Please provide a valid email address.",
    };
  }

  const gmailUser = process.env.GMAIL_USER || process.env.EMAIL_USER;
  const gmailPass = process.env.GMAIL_PASS || process.env.EMAIL_PASS;

  const mailtoFallback = `mailto:${gmailUser || "engrisrar256@gmail.com"}?subject=${encodeURIComponent(
    `Portfolio Inquiry from ${name}`
  )}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;

  // Check if credentials exist in .env.local / Vercel
  if (!gmailUser || !gmailPass) {
    console.warn(
      "[Nodemailer Alert] Missing GMAIL_USER or GMAIL_PASS environment variables"
    );
    return {
      success: false,
      isConfigError: true,
      error:
        "Email credentials are not configured yet in .env.local (GMAIL_USER & GMAIL_PASS required).",
      fallbackMailto: mailtoFallback,
    };
  }

  // 5. Sanitize fields against HTML Injection / Stored XSS in email clients
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeMessage = escapeHtml(message);

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
            <p style="margin: 0 0 8px 0; font-size: 14px;"><strong>Sender Name:</strong> ${safeName}</p>
            <p style="margin: 0; font-size: 14px;"><strong>Sender Email:</strong> <a href="mailto:${safeEmail}" style="color: #60a5fa; text-decoration: none;">${safeEmail}</a></p>
          </div>
          <div style="padding: 16px; background-color: #18181b; border-radius: 8px; border: 1px solid #27272a;">
            <h4 style="margin: 0 0 8px 0; color: #a1a1aa; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em;">Message Content:</h4>
            <p style="margin: 0; font-size: 14px; line-height: 1.6; white-space: pre-wrap; color: #e4e4e7;">${safeMessage}</p>
          </div>
          <p style="margin-top: 20px; font-size: 12px; color: #71717a; text-align: center;">
            Sent securely via Next.js developer portfolio.
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
          ? "Gmail authentication failed. Please verify your Google App Password."
          : "Failed to deliver message via SMTP. Please try again or use direct email.",
      fallbackMailto: mailtoFallback,
    };
  }
}