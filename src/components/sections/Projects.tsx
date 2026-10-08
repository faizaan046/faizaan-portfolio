import { ExternalLink, FileText } from "lucide-react";
import { GithubIcon } from "@/components/ui/BrandIcons";
import ProjectImage from "@/components/ui/ProjectImage";
import { projects } from "@/data/portfolio";
import type { Project, ProjectLink } from "@/types/portfolio";


function LinkIcon({ type }: { type: ProjectLink["type"] }) {
  if (type === "github") return <GithubIcon size={14} aria-hidden="true" />;
  if (type === "paper") return <FileText size={14} aria-hidden="true" />;
  return <ExternalLink size={14} aria-hidden="true" />;
}


function StatusBadge({ status }: { status: Project["status"] }) {
  if (status === "completed") return null;
  const cls = status === "ongoing" ? "status-ongoing" : "status-badge status-ongoing";
  return (
    <span className={`status-badge ${cls}`} aria-label="Project status: ongoing">
      <span
        aria-hidden="true"
        style={{
          width: 6,
          height: 6,
          borderRadius: "50%",
          backgroundColor: "currentColor",
          display: "inline-block",
          flexShrink: 0,
        }}
      />
      Ongoing research
    </span>
  );
}


function IndexLabel({ index }: { index: number }) {
  return (
    <span
      className="tag-list"
      style={{ fontSize: "0.6875rem", letterSpacing: "0.04em" }}
    >
      {String(index).padStart(2, "0")}
    </span>
  );
}


function ProjectOne({ project }: { project: Project }) {
  return (
    <article
      id={`project-${project.id}`}
      style={{
        padding: "clamp(3rem, 6vw, 5rem) 0",
        borderTop: "1px solid var(--bd)",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(12, 1fr)",
          gap: "clamp(2rem, 5vw, 4rem)",
          alignItems: "start",
        }}
        className="project-grid"
      >
        {/* Text Area */}
        <div style={{ gridColumn: "span 5" }} className="col-full">
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.5rem" }}>
            <IndexLabel index={project.index} />
            <StatusBadge status={project.status} />
          </div>
          <p
            style={{
              fontFamily: "var(--font-geist-mono), ui-monospace, monospace",
              fontSize: "0.75rem",
              color: "var(--ac)",
              letterSpacing: "0.04em",
              marginBottom: "0.5rem",
            }}
          >
            {project.category}
          </p>
          <h3 className="text-display" style={{ color: "var(--tx)", marginBottom: "1.5rem", fontSize: "clamp(1.75rem, 3vw, 2.25rem)" }}>
            {project.title}
          </h3>
          <p style={{ fontSize: "1rem", color: "var(--t2)", marginBottom: "1rem", lineHeight: 1.65 }}>
            <strong style={{ color: "var(--tx)", fontWeight: 500 }}>Problem. </strong>
            {project.problem}
          </p>
          <p style={{ fontSize: "1rem", color: "var(--t2)", marginBottom: "1.5rem", lineHeight: 1.65 }}>
            <strong style={{ color: "var(--tx)", fontWeight: 500 }}>Contribution. </strong>
            {project.contribution}
          </p>
          <p className="tag-list" style={{ marginBottom: "1.5rem" }}>{project.stack.join(" · ")}</p>
          {project.links.length > 0 && (
            <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
              {project.links.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline"
                  style={{ display: "inline-flex", alignItems: "center", gap: "0.375rem", fontSize: "0.875rem" }}
                >
                  <LinkIcon type={link.type} />
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </div>
        {/* Image Area */}
        <div style={{ gridColumn: "span 7" }} className="col-full">
          <ProjectImage image={project.image} priority={true} className="w-full" />
        </div>
      </div>
    </article>
  );
}


function ProjectTwo({ project }: { project: Project }) {
  return (
    <article
      id={`project-${project.id}`}
      style={{
        padding: "clamp(3rem, 6vw, 5rem) 0",
        borderTop: "1px solid var(--bd)",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(12, 1fr)",
          gap: "clamp(2rem, 5vw, 4rem)",
          alignItems: "center",
        }}
        className="project-grid"
      >
        {/* Image Area */}
        <div style={{ gridColumn: "span 6", order: 1 }} className="col-full order-last-mobile">
          <ProjectImage image={project.image} className="w-full" />
        </div>
        {/* Text Area */}
        <div style={{ gridColumn: "span 6", order: 2 }} className="col-full order-first-mobile">
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
            <IndexLabel index={project.index} />
            <StatusBadge status={project.status} />
          </div>
          <p
            style={{
              fontFamily: "var(--font-geist-mono), ui-monospace, monospace",
              fontSize: "0.75rem",
              color: "var(--ac)",
              letterSpacing: "0.04em",
              marginBottom: "0.5rem",
            }}
          >
            {project.category}
          </p>
          <h3 className="text-title" style={{ color: "var(--tx)", marginBottom: "1.25rem" }}>
            {project.title}
          </h3>
          <p style={{ fontSize: "0.9375rem", color: "var(--t2)", marginBottom: "0.75rem", lineHeight: 1.65 }}>
            <strong style={{ color: "var(--tx)", fontWeight: 500 }}>Problem. </strong>
            {project.problem}
          </p>
          <p style={{ fontSize: "0.9375rem", color: "var(--t2)", marginBottom: "1.5rem", lineHeight: 1.65 }}>
            <strong style={{ color: "var(--tx)", fontWeight: 500 }}>Contribution. </strong>
            {project.contribution}
          </p>
          <p className="tag-list" style={{ marginBottom: "1.25rem" }}>{project.stack.join(" · ")}</p>
          {project.links.length > 0 && (
            <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
              {project.links.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline"
                  style={{ display: "inline-flex", alignItems: "center", gap: "0.375rem", fontSize: "0.875rem" }}
                >
                  <LinkIcon type={link.type} />
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}


function ProjectThree({ project }: { project: Project }) {
  return (
    <article
      id={`project-${project.id}`}
      style={{
        padding: "clamp(3rem, 6vw, 5rem) 0",
        borderTop: "1px solid var(--bd)",
      }}
    >
      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.5rem" }}>
          <div>
            <IndexLabel index={project.index} />
            <p
              style={{
                fontFamily: "var(--font-geist-mono), ui-monospace, monospace",
                fontSize: "0.75rem",
                color: "var(--ac)",
                letterSpacing: "0.04em",
                marginTop: "0.75rem",
              }}
            >
              {project.category}
            </p>
          </div>
          <StatusBadge status={project.status} />
        </div>
        
        <h3 className="text-display" style={{ color: "var(--tx)", marginBottom: "1.5rem", fontSize: "clamp(1.5rem, 3vw, 2rem)" }}>
          {project.title}
        </h3>
        
        <div style={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: "2rem", marginBottom: "2.5rem" }} className="project-grid">
          <div style={{ gridColumn: "span 6" }} className="col-full">
            <p style={{ fontSize: "0.9375rem", color: "var(--t2)", lineHeight: 1.65, margin: 0 }}>
              <strong style={{ color: "var(--tx)", fontWeight: 500 }}>Problem. </strong>
              {project.problem}
            </p>
          </div>
          <div style={{ gridColumn: "span 6" }} className="col-full">
            <p style={{ fontSize: "0.9375rem", color: "var(--t2)", lineHeight: 1.65, margin: 0 }}>
              <strong style={{ color: "var(--tx)", fontWeight: 500 }}>Contribution. </strong>
              {project.contribution}
            </p>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem", marginBottom: "2.5rem" }}>
          <p className="tag-list" style={{ margin: 0 }}>{project.stack.join(" · ")}</p>
          {project.links.length > 0 && (
            <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
              {project.links.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline"
                  style={{ display: "inline-flex", alignItems: "center", gap: "0.375rem", fontSize: "0.875rem" }}
                >
                  <LinkIcon type={link.type} />
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </div>

        <ProjectImage image={project.image} className="w-full" />
      </div>
    </article>
  );
}


export default function Projects() {
  const p1 = projects[0];
  const p2 = projects[1];
  const p3 = projects[2];

  return (
    <section id="work" className="section" aria-labelledby="work-heading">
      <div className="container">
        {/* Section header */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            marginBottom: "3rem",
          }}
        >
          <h2 id="work-heading" className="text-display" style={{ color: "var(--tx)" }}>
            Projects.
          </h2>
          <span
            style={{
              fontFamily: "var(--font-geist-mono), ui-monospace, monospace",
              fontSize: "0.8125rem",
              color: "var(--t2)",
              letterSpacing: "0.03em",
              paddingBottom: "0.375rem",
            }}
          >
            03 projects
          </span>
        </div>

        {p1 && <ProjectOne project={p1} />}
        {p2 && <ProjectTwo project={p2} />}
        {p3 && <ProjectThree project={p3} />}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .project-grid {
            display: flex !important;
            flex-direction: column !important;
          }
          .col-full {
            width: 100% !important;
          }
          .order-last-mobile {
            order: 2 !important;
          }
          .order-first-mobile {
            order: 1 !important;
          }
        }
      `}</style>
    </section>
  );
}
