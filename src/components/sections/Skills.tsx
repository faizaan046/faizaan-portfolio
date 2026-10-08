import { skills } from "@/data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="section" aria-labelledby="skills-heading">
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: "clamp(2rem, 5vw, 4rem)" }} className="skills-layout">
          {/* Section header */}
          <div style={{ gridColumn: "span 4" }} className="skills-header-col">
            <h2
              id="skills-heading"
              className="text-display"
              style={{ color: "var(--tx)", marginBottom: "1rem" }}
            >
              Technical expertise
            </h2>
            <p className="mono-label" style={{ color: "var(--t2)" }}>
              Tools and technologies I work with.
            </p>
          </div>

          {/* Skill categories */}
          <div
            style={{
              gridColumn: "span 8",
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "2.5rem 2rem",
            }}
            className="skills-grid"
          >
            {skills.map((category) => (
              <div key={category.id} className="skill-cell">
                <h3
                  style={{
                    fontFamily: "var(--font-geist-mono), ui-monospace, monospace",
                    fontSize: "0.8125rem",
                    fontWeight: 500,
                    color: "var(--tx)",
                    margin: "0 0 1rem",
                  }}
                >
                  {category.title}
                </h3>
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.5rem",
                  }}
                >
                  {category.items.map((item) => (
                    <li
                      key={item}
                      style={{
                        fontSize: "0.9375rem",
                        color: "var(--t2)",
                      }}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .skills-layout {
            display: flex !important;
            flex-direction: column !important;
            gap: 2.5rem !important;
          }
          .skills-header-col {
            margin-bottom: 0.5rem;
          }
          .skills-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 480px) {
          .skills-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
}
