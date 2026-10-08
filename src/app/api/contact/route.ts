import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function POST(req: Request) {
  try {
    const contentLength = Number(req.headers.get("content-length") || "0");
    if (contentLength > 10240) { // 10KB limit
      return NextResponse.json({ error: "Payload too large" }, { status: 413 });
    }

    let body;
    try {
      body = await req.json();
    } catch (e) {
      return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
    }

    const { name, email, message, turnstileToken, website } = body;

    // Honeypot check
    if (website && website.trim() !== "") {
      return NextResponse.json({ success: true }); // Fake success for bots
    }

    if (!name || typeof name !== "string" || name.trim().length === 0) {
      return NextResponse.json({ error: "Name is required" }, { status: 400 });
    }

    if (!email || typeof email !== "string" || !/^\S+@\S+\.\S+$/.test(email)) {
      return NextResponse.json({ error: "Valid email is required" }, { status: 400 });
    }

    if (!message || typeof message !== "string" || message.trim().length === 0) {
      return NextResponse.json({ error: "Message is required" }, { status: 400 });
    }

    if (message.length > 5000) {
      return NextResponse.json({ error: "Message is too long" }, { status: 400 });
    }

    // Turnstile verification
    if (!process.env.TURNSTILE_SECRET_KEY) {
      console.warn("TURNSTILE_SECRET_KEY is not configured. Skipping Turnstile verification.");
    } else {
      if (!turnstileToken) {
        return NextResponse.json({ error: "Turnstile token is required" }, { status: 400 });
      }

      const turnstileRes = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          secret: process.env.TURNSTILE_SECRET_KEY,
          response: turnstileToken,
        }),
      });

      const turnstileData = await turnstileRes.json();
      if (!turnstileData.success) {
        return NextResponse.json({ error: "Turnstile verification failed" }, { status: 403 });
      }
    }

    if (!resend) {
      console.warn("RESEND_API_KEY is missing. Simulating successful email delivery.");
      return NextResponse.json({ success: true, simulated: true });
    }

    const fromEmail = process.env.CONTACT_FROM_EMAIL || "contact@yourdomain.com";
    const toEmail = process.env.CONTACT_EMAIL;

    if (!toEmail) {
      return NextResponse.json({ error: "Server configuration error: Contact email not set" }, { status: 500 });
    }

    // Safely construct text to avoid HTML injection
    const textContent = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;

    const { error } = await resend.emails.send({
      from: `Portfolio Contact Form <${fromEmail}>`,
      to: [toEmail],
      replyTo: email,
      subject: `New Portfolio Message from ${name}`,
      text: textContent,
    });

    if (error) {
      console.error("Resend API Error:", error);
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
