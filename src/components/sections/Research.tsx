import { FileText, ExternalLink } from "lucide-react";
import { research } from "@/data/portfolio";
import type { ResearchItem } from "@/types/portfolio";

function StatusLabel({ status }: { status: ResearchItem["status"] }) {
  const labels: Record<ResearchItem["status"], string> = {
    published: "Published",
    "under-review": "Under review",
    ongoing: "In progress",
  };

  const classes: Record<ResearchItem["status"], string> = {
    published: "status-badge status-published",
    "under-review": "status-badge status-under-review",
    ongoing: "status-badge status-ongoing",
  };

  return (
    <span className={classes[status]} aria-label={`Status: ${labels[status]}`}>
      {labels[status]}
    </span>
  );
}

export default function Research() {
  return (
    <section id="research" className="section" aria-labelledby="research-heading">
      <div className="container">
        {/* Section header */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(12, 1fr)",
            gap: "1.5rem",
            marginBottom: "3rem",
          }}
          className="research-header"
        >
          <div style={{ gridColumn: "span 7" }}>
            <h2
              id="research-heading"
              className="text-display"
              style={{ color: "var(--tx)" }}
            >
              Research &amp; publications
            </h2>
          </div>
          <div
            style={{
              gridColumn: "span 5",
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "flex-end",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-geist-mono), ui-monospace, monospace",
                fontSize: "0.8125rem",
                color: "var(--t2)",
                letterSpacing: "0.03em",
                paddingBottom: "0.25rem",
              }}
            >
              Published &amp; ongoing
            </span>
          </div>
        </div>

        {/* Research entries */}
        {research.map((item) => (
          <article
            key={item.id}
            id={`research-${item.id}`}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(12, 1fr)",
              gap: "1.5rem 2rem",
              padding: "2rem 0",
              borderTop: "1px solid var(--bd)",
            }}
            className="research-entry"
          >
            {/* Year */}
            <div style={{ gridColumn: "span 2" }} className="research-year">
              <span
                style={{
                  fontFamily: "var(--font-geist-mono), ui-monospace, monospace",
                  fontSize: "0.8125rem",
                  color: "var(--t2)",
                  letterSpacing: "0.03em",
                  display: "block",
                  paddingTop: "0.25rem",
                }}
              >
                {item.year || "—"}
              </span>
            </div>

            {/* Content */}
            <div
              style={{
                gridColumn: "span 10",
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
              }}
              className="research-content"
            >
              {/* Title + status */}
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  gap: "1rem",
                  flexWrap: "wrap",
                }}
              >
                <h3
                  style={{
                    fontSize: "1.1875rem",
                    fontWeight: 600,
                    letterSpacing: "-0.015em",
                    color: "var(--tx)",
                    lineHeight: 1.3,
                    margin: 0,
                  }}
                >
                  {item.title}
                </h3>
                <StatusLabel status={item.status} />
              </div>

              {/* Venue */}
              {item.venue && (
                <p
                  style={{
                    fontFamily: "var(--font-geist-mono), ui-monospace, monospace",
                    fontSize: "0.8125rem",
                    color: "var(--ac)",
                    margin: 0,
                    letterSpacing: "0.03em",
                  }}
                >
                  {item.venue}
                </p>
              )}

              {/* Abstract */}
              <p
                style={{
                  fontSize: "0.9375rem",
                  color: "var(--t2)",
                  lineHeight: 1.65,
                  margin: 0,
                  maxWidth: "680px",
                }}
              >
                {item.abstract}
              </p>

              {/* Tags */}
              <p className="tag-list">{item.tags.join(" · ")}</p>

              {/* Links */}
              {item.links.length > 0 && (
                <div style={{ display: "flex", gap: "1.25rem", flexWrap: "wrap" }}>
                  {item.links.map((link) => (
                    <a
                      key={link.url}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-underline"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.375rem",
                        fontSize: "0.875rem",
                      }}
                    >
                      {link.label.toLowerCase().includes("paper") ? (
                        <FileText size={14} aria-hidden="true" />
                      ) : (
                        <ExternalLink size={14} aria-hidden="true" />
                      )}
                      {link.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>

      <style>{`
        @media (max-width: 640px) {
          .research-header > div,
          .research-year,
          .research-content {
            grid-column: 1 / -1 !important;
          }
          .research-header > div:last-child {
            justify-content: flex-start !important;
          }
        }
      `}</style>
    </section>
  );
}
