import {
  ArrowRight,
  Download,
  MapPin,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import { personalInfo } from "@/data/portfolio";

export default function Hero() {
  const hasResume = Boolean(personalInfo.resumePath);
  const hasGithub = Boolean(personalInfo.github);
  const hasLinkedin = Boolean(personalInfo.linkedin);

  return (
    <section
      aria-labelledby="hero-title"
      style={{
        paddingTop: "clamp(5rem, 12vw, 9rem)",
        paddingBottom: "clamp(4rem, 10vw, 7rem)",
      }}
    >
      <div className="container">
        {/* Eyebrow */}
        <p className="mono-label" style={{ marginBottom: "1.75rem" }}>
          Computer vision · Machine learning · Software engineering
        </p>

        {/* Headline */}
        <h1
          id="hero-title"
          className="text-hero"
          style={{ color: "var(--tx)", marginBottom: "1.75rem" }}
        >
          Hi, I&apos;m{" "}
          <span style={{ color: "var(--ac)" }}>{personalInfo.firstName}</span>.
        </h1>

        {/* Introduction */}
        <div
          style={{
            maxWidth: "640px",
            marginBottom: "2.5rem",
          }}
        >
          <p
            style={{
              fontSize: "clamp(1.0625rem, 1.5vw, 1.25rem)",
              lineHeight: 1.65,
              color: "var(--t2)",
              marginBottom: "0.875rem",
            }}
          >
            {personalInfo.heroParagraph1}
          </p>
          <p
            style={{
              fontSize: "clamp(1.0625rem, 1.5vw, 1.25rem)",
              lineHeight: 1.65,
              color: "var(--t2)",
            }}
          >
            {personalInfo.heroParagraph2}
          </p>
        </div>

        {/* CTA row */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: "0.75rem",
            marginBottom: "2.5rem",
          }}
        >
          <a href="#work" className="btn-primary" id="hero-selected-work">
            Projects.
            <ArrowRight size={15} aria-hidden="true" />
          </a>

          {hasResume ? (
            <a
              href={personalInfo.resumePath}
              download
              className="btn-secondary"
              id="hero-download-resume"
            >
              <Download size={15} aria-hidden="true" />
              Download résumé
            </a>
          ) : null}

          {hasGithub ? (
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-icon"
              aria-label="GitHub profile"
              id="hero-github"
            >
            <GithubIcon size={16} aria-hidden="true" />
            </a>
          ) : null}

          {hasLinkedin ? (
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-icon"
              aria-label="LinkedIn profile"
              id="hero-linkedin"
            >
            <LinkedinIcon size={16} aria-hidden="true" />
            </a>
          ) : null}
        </div>

        {/* Location + institution */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            color: "var(--t2)",
          }}
        >
          <MapPin size={14} aria-hidden="true" />
          <span
            style={{
              fontFamily: "var(--font-geist-mono), ui-monospace, monospace",
              fontSize: "0.8125rem",
              letterSpacing: "0.03em",
            }}
          >
            {personalInfo.location ? `${personalInfo.location}  ·  ` : ""}
            {personalInfo.institution}
          </span>
        </div>
      </div>
    </section>
  );
}
