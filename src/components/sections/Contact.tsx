"use client";

import { useState, useRef, FormEvent } from "react";
import { Mail, ArrowUpRight, FileText, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { GithubIcon, LinkedinIcon, MediumIcon } from "@/components/ui/BrandIcons";
import { personalInfo } from "@/data/portfolio";
import { Turnstile } from "@marsidev/react-turnstile";

export default function Contact() {
  const hasEmail = Boolean(personalInfo.email);
  const hasGithub = Boolean(personalInfo.github);
  const hasLinkedin = Boolean(personalInfo.linkedin);
  const hasMedium = Boolean(personalInfo.medium);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);

  const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;

    if (turnstileSiteKey && !turnstileToken) {
      setError("Please complete the captcha.");
      return;
    }

    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
      website: formData.get("website"), // Honeypot field
      turnstileToken,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.error || "Failed to send message.");
      }

      setSuccess(true);
      formRef.current?.reset();
    } catch (err: any) {
      setError(err.message || "An unexpected error occurred.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      style={{
        backgroundColor: "var(--sub)",
        paddingTop: "var(--section-py)",
        paddingBottom: "var(--section-py)",
      }}
    >
      <div className="container">
        {/* Green accent bar */}
        <div
          aria-hidden="true"
          style={{
            width: "2.5rem",
            height: "3px",
            backgroundColor: "var(--ac)",
            marginBottom: "2rem",
            borderRadius: "2px",
          }}
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(12, 1fr)",
            gap: "clamp(2rem, 5vw, 4rem)",
          }}
          className="contact-grid"
        >
          {/* Left Column: Text and Links */}
          <div style={{ gridColumn: "span 6" }} className="col-full">
            {/* Headline */}
            <h2
              id="contact-heading"
              className="text-hero"
              style={{
                color: "var(--tx)",
                marginBottom: "1.5rem",
              }}
            >
              Let&apos;s build something useful.
            </h2>

            {/* Description */}
            <p
              style={{
                fontSize: "clamp(1rem, 1.5vw, 1.1875rem)",
                lineHeight: 1.65,
                color: "var(--t2)",
                marginBottom: "1.25rem",
              }}
            >
              I&apos;m interested in opportunities involving machine learning,
              computer vision, and software engineering.
            </p>
            <p
              style={{
                fontSize: "clamp(1rem, 1.5vw, 1.1875rem)",
                lineHeight: 1.65,
                color: "var(--t2)",
                marginBottom: "2.5rem",
              }}
            >
              The best way to reach me is by{" "}
              <a
                href="mailto:shaikfaizaanullah@gmail.com"
                className="link-underline"
                style={{ color: "var(--tx)", fontWeight: 500, display: "inline-flex", alignItems: "center", gap: "0.2rem" }}
              >
                email
                <ArrowUpRight size={14} aria-hidden="true" style={{ color: "var(--t2)" }} />
              </a>
              . I&apos;m happy to talk about applied AI, research opportunities,
              and engineering challenges.
            </p>

            {/* Contact links */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "1rem",
                alignItems: "center",
              }}
            >
              {hasEmail && (
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="btn-primary"
                  id="contact-email"
                >
                  <Mail size={15} aria-hidden="true" />
                  Send an email
                </a>
              )}

              <a
                href={personalInfo.resumePath || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                id="contact-resume"
              >
                <FileText size={15} aria-hidden="true" />
                View my résumé
              </a>

              {hasGithub && (
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                  id="contact-github"
                >
                  <GithubIcon size={15} aria-hidden="true" />
                  GitHub
                </a>
              )}

              {hasLinkedin && (
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                  id="contact-linkedin"
                >
                  <LinkedinIcon size={15} aria-hidden="true" />
                  LinkedIn
                </a>
              )}

              {hasMedium && (
                <a
                  href={personalInfo.medium}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                  id="contact-medium"
                >
                  <MediumIcon size={15} aria-hidden="true" />
                  Medium
                </a>
              )}

              {/* Shown only when no links are configured yet */}
              {!hasEmail && !hasGithub && !hasLinkedin && (
                <p
                  style={{
                    fontSize: "0.875rem",
                    color: "var(--t2)",
                    fontStyle: "italic",
                  }}
                >
                  Add your email, GitHub, and LinkedIn URLs in{" "}
                  <code
                    style={{
                      fontFamily: "var(--font-geist-mono), ui-monospace, monospace",
                      fontSize: "0.8125rem",
                      backgroundColor: "var(--sf)",
                      padding: "0.1em 0.3em",
                      borderRadius: "3px",
                    }}
                  >
                    src/data/portfolio.ts
                  </code>{" "}
                  to activate contact links.
                </p>
              )}
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div style={{ gridColumn: "span 6" }} className="col-full">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.25rem",
                backgroundColor: "var(--bg)",
                padding: "2rem",
                borderRadius: "8px",
                border: "1px solid var(--bd)",
              }}
            >
              <h3 style={{ fontSize: "1.125rem", fontWeight: 600, color: "var(--tx)", margin: "0 0 0.5rem" }}>
                Send a message
              </h3>
              
              {/* Honeypot field (hidden from humans) */}
              <div style={{ position: "absolute", left: "-9999px" }} aria-hidden="true">
                <label htmlFor="website">Website</label>
                <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" />
              </div>

              {success ? (
                <div style={{ padding: "1.5rem", backgroundColor: "var(--sub)", borderRadius: "4px", borderLeft: "4px solid var(--ac)", display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                  <CheckCircle size={20} color="var(--ac)" />
                  <div>
                    <h4 style={{ fontWeight: 600, marginBottom: "0.25rem", color: "var(--tx)" }}>Message sent!</h4>
                    <p style={{ fontSize: "0.9375rem", color: "var(--t2)" }}>Thank you for reaching out. I&apos;ll get back to you shortly.</p>
                  </div>
                </div>
              ) : (
                <>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    <label htmlFor="name" style={{ fontSize: "0.875rem", color: "var(--t2)", fontWeight: 500 }}>
                      Name <span style={{ color: "var(--ac)" }}>*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      disabled={isSubmitting}
                      style={{
                        padding: "0.75rem",
                        borderRadius: "4px",
                        border: "1px solid var(--bd)",
                        backgroundColor: "var(--sf)",
                        color: "var(--tx)",
                        fontSize: "0.9375rem",
                        fontFamily: "inherit",
                        opacity: isSubmitting ? 0.7 : 1,
                      }}
                    />
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    <label htmlFor="email" style={{ fontSize: "0.875rem", color: "var(--t2)", fontWeight: 500 }}>
                      Email <span style={{ color: "var(--ac)" }}>*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      disabled={isSubmitting}
                      style={{
                        padding: "0.75rem",
                        borderRadius: "4px",
                        border: "1px solid var(--bd)",
                        backgroundColor: "var(--sf)",
                        color: "var(--tx)",
                        fontSize: "0.9375rem",
                        fontFamily: "inherit",
                        opacity: isSubmitting ? 0.7 : 1,
                      }}
                    />
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    <label htmlFor="message" style={{ fontSize: "0.875rem", color: "var(--t2)", fontWeight: 500 }}>
                      Message <span style={{ color: "var(--ac)" }}>*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      disabled={isSubmitting}
                      style={{
                        padding: "0.75rem",
                        borderRadius: "4px",
                        border: "1px solid var(--bd)",
                        backgroundColor: "var(--sf)",
                        color: "var(--tx)",
                        fontSize: "0.9375rem",
                        fontFamily: "inherit",
                        resize: "vertical",
                        opacity: isSubmitting ? 0.7 : 1,
                      }}
                    />
                  </div>
                  
                  {turnstileSiteKey && (
                     <Turnstile
                       siteKey={turnstileSiteKey}
                       onSuccess={(token) => setTurnstileToken(token)}
                       options={{
                         size: "flexible"
                       }}
                     />
                  )}

                  {error && (
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "#e11d48", fontSize: "0.875rem", backgroundColor: "#ffe4e6", padding: "0.75rem", borderRadius: "4px" }}>
                      <AlertCircle size={16} />
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    className="btn-primary"
                    disabled={isSubmitting}
                    style={{
                      marginTop: "0.5rem",
                      justifyContent: "center",
                      padding: "0.75rem",
                      width: "100%",
                      opacity: isSubmitting ? 0.7 : 1,
                      cursor: isSubmitting ? "not-allowed" : "pointer",
                    }}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={16} className="animate-spin" style={{ animation: "spin 1s linear infinite" }} />
                        Sending...
                      </>
                    ) : (
                      "Submit Message"
                    )}
                  </button>
                </>
              )}
            </form>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @media (max-width: 768px) {
          .contact-grid {
            display: flex !important;
            flex-direction: column !important;
            gap: 3rem !important;
          }
          .col-full {
            width: 100% !important;
          }
        }
      `}</style>
    </section>
  );
}
