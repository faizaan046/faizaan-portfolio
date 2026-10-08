import { experience } from "@/data/portfolio";

export default function Experience() {
  return (
    <section
      id="experience"
      className="section"
      aria-labelledby="experience-heading"
    >
      <div className="container">
        {/* Section header */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(12, 1fr)",
            gap: "1.5rem",
            marginBottom: "0.5rem",
          }}
          className="exp-header"
        >
          <div style={{ gridColumn: "span 7" }}>
            <h2
              id="experience-heading"
              className="text-display"
              style={{ color: "var(--tx)" }}
            >
              Experience
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
              Most recent first
            </span>
          </div>
        </div>

        {/* Experience entries */}
        {experience.map((item) => (
          <article
            key={item.id}
            id={`experience-${item.id}`}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(12, 1fr)",
              gap: "1.5rem 2rem",
              padding: "2rem 0",
              borderTop: "1px solid var(--bd)",
            }}
            className="exp-entry"
          >
            {/* Dates */}
            <div style={{ gridColumn: "span 3" }} className="exp-dates">
              <span
                style={{
                  fontFamily: "var(--font-geist-mono), ui-monospace, monospace",
                  fontSize: "0.8125rem",
                  color: "var(--t2)",
                  letterSpacing: "0.03em",
                  display: "block",
                  paddingTop: "0.2rem",
                  lineHeight: 1.5,
                }}
              >
                {item.dates || (
                  <span style={{ color: "var(--bd)", fontStyle: "italic" }}>
                    Add dates
                  </span>
                )}
              </span>
            </div>

            {/* Content */}
            <div
              style={{
                gridColumn: "span 9",
                display: "flex",
                flexDirection: "column",
                gap: "0.375rem",
              }}
              className="exp-content"
            >
              <h3
                style={{
                  fontSize: "1.125rem",
                  fontWeight: 600,
                  letterSpacing: "-0.015em",
                  color: "var(--tx)",
                  margin: "0 0 0.25rem",
                  lineHeight: 1.3,
                }}
              >
                {item.role}
              </h3>

              <p
                style={{
                  fontFamily: "var(--font-geist-mono), ui-monospace, monospace",
                  fontSize: "0.8125rem",
                  color: "var(--ac)",
                  margin: "0 0 0.5rem",
                  letterSpacing: "0.03em",
                }}
              >
                {item.organization}
              </p>

              {item.description ? (
                <p
                  style={{
                    fontSize: "0.9375rem",
                    color: "var(--t2)",
                    lineHeight: 1.65,
                    margin: 0,
                    maxWidth: "600px",
                  }}
                >
                  {item.description}
                </p>
              ) : (
                <p
                  style={{
                    fontSize: "0.9375rem",
                    color: "var(--bd)",
                    fontStyle: "italic",
                    margin: 0,
                  }}
                >
                  Add responsibilities here
                </p>
              )}

              {item.highlights && item.highlights.length > 0 && (
                <ul
                  style={{
                    margin: "0.5rem 0 0",
                    paddingLeft: "1.125rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.25rem",
                  }}
                >
                  {item.highlights.map((h, i) => (
                    <li
                      key={i}
                      style={{
                        fontSize: "0.9375rem",
                        color: "var(--t2)",
                        lineHeight: 1.6,
                      }}
                    >
                      {h}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </article>
        ))}
      </div>

      <style>{`
        @media (max-width: 640px) {
          .exp-header > div,
          .exp-dates,
          .exp-content {
            grid-column: 1 / -1 !important;
          }
          .exp-header > div:last-child {
            justify-content: flex-start !important;
          }
        }
      `}</style>
    </section>
  );
}
