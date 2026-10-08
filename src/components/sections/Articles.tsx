import { articles } from "@/data/portfolio";
import { ArrowUpRight } from "lucide-react";



export default function Articles() {
  if (articles.length === 0) return null;

  return (
    <section id="writing" className="section" aria-labelledby="writing-heading">
      <div className="container">
        {/* Header */}
        <div style={{ marginBottom: "3rem" }}>
          <p className="mono-label" style={{ marginBottom: "0.75rem" }}>
            Writing
          </p>
          <h2
            id="writing-heading"
            className="text-display"
            style={{ color: "var(--tx)" }}
          >
            Articles &amp; notes
          </h2>
        </div>

        {/* Article list */}
        <div>
          {articles.map((article) => (
            <a
              key={article.id}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Read: ${article.title}`}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr auto",
                gap: "1.5rem",
                alignItems: "center",
                padding: "1.5rem 0",
                borderTop: "1px solid var(--bd)",
                textDecoration: "none",
                color: "inherit",
                transition: "opacity 0.15s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.opacity = "0.7";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.opacity = "1";
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: "0.375rem" }}>
                <h3
                  style={{
                    fontSize: "1.0625rem",
                    fontWeight: 600,
                    letterSpacing: "-0.015em",
                    color: "var(--tx)",
                    margin: 0,
                    lineHeight: 1.3,
                  }}
                >
                  {article.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.9375rem",
                    color: "var(--t2)",
                    margin: 0,
                    lineHeight: 1.55,
                    maxWidth: "560px",
                  }}
                >
                  {article.description}
                </p>
                <span
                  style={{
                    fontFamily: "var(--font-geist-mono), ui-monospace, monospace",
                    fontSize: "0.75rem",
                    color: "var(--t2)",
                    letterSpacing: "0.03em",
                  }}
                >
                  {new Date(article.publishedAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}{" "}
                  · {article.readingTime}
                </span>
              </div>
              <ArrowUpRight
                size={18}
                aria-hidden="true"
                style={{ color: "var(--t2)", flexShrink: 0 }}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
