import ProjectImage from "@/components/ui/ProjectImage";
import { personalInfo } from "@/data/portfolio";

const profilePhoto = {
  src: "",
  alt: "Portrait photograph of FaizaanUllah Shaik",
  width: 800,
  height: 1000,
  placeholderLabel: "Add profile photo",
  placeholderDimensions: "Recommended 800 × 1000",
};

export default function About() {
  return (
    <section id="about" className="section" aria-labelledby="about-heading">
      <div className="container">
        {/* Asymmetric layout — no repeated heading-divider pattern */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(12, 1fr)",
            gap: "clamp(2rem, 5vw, 4rem)",
            alignItems: "start",
          }}
          className="about-grid"
        >
          {/* Text — takes 7 columns */}
          <div
            style={{
              gridColumn: "span 7",
              display: "flex",
              flexDirection: "column",
              gap: "0",
            }}
            className="about-text"
          >
            {personalInfo.location && (
              <p className="mono-label" style={{ marginBottom: "1.25rem" }}>
                {personalInfo.location}
              </p>
            )}
            <h2
              id="about-heading"
              className="text-display"
              style={{ color: "var(--tx)", marginBottom: "2rem" }}
            >
              About
            </h2>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.125rem",
                maxWidth: "560px",
              }}
            >
              <p
                style={{
                  fontSize: "1rem",
                  lineHeight: 1.75,
                  color: "var(--t2)",
                  margin: 0,
                }}
              >
                I&apos;m a Computer Science master&apos;s student at the
                University of Texas at Arlington, focusing on AI, machine
                learning, and computer vision.
              </p>
              <p
                style={{
                  fontSize: "1rem",
                  lineHeight: 1.75,
                  color: "var(--t2)",
                  margin: 0,
                }}
              >
                My work sits at the intersection of computer vision and
                practical applications, and I enjoy turning complex ideas into useful, working software.
              </p>
              <p
                style={{
                  fontSize: "1rem",
                  lineHeight: 1.75,
                  color: "var(--t2)",
                  margin: 0,
                }}
              >
                On the engineering side, I&apos;ve built systems with Python,
                FastAPI, and LLMs, and I have experience working across the
                stack. I&apos;m drawn to projects where the software has to
                actually work — not just look good.
              </p>
              <p
                style={{
                  fontSize: "1rem",
                  lineHeight: 1.75,
                  color: "var(--t2)",
                  margin: 0,
                }}
              >
                I care about the engineering behind intelligent systems and want
                to build things that are useful, not just technically
                impressive.
              </p>
            </div>
          </div>

          {/* Portrait — takes 5 columns */}
          <div style={{ gridColumn: "span 5" }} className="about-photo">
            <ProjectImage image={profilePhoto} className="w-full" />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-text,
          .about-photo {
            grid-column: 1 / -1 !important;
          }
          .about-photo {
            order: -1;
          }
        }
      `}</style>
    </section>
  );
}
