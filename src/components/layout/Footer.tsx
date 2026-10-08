import { personalInfo } from "@/data/portfolio";

export default function Footer() {
  // Static year — update annually or make this a client component if needed
  const year = 2026;

  return (
    <footer
      style={{
        borderTop: "1px solid var(--bd)",
        padding: "2rem 0",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "0.75rem",
        }}
      >
        <span style={{ fontSize: "0.875rem", color: "var(--t2)" }}>
          © {year} {personalInfo.name}
        </span>
        <span style={{ fontSize: "0.875rem", color: "var(--t2)" }}>
          {personalInfo.location}
        </span>
      </div>
    </footer>
  );
}
