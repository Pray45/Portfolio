import { ImageResponse } from "next/og";

export const alt = "Pray Patel — Computer Science Engineer & Software Developer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0e0d0b",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "60px 80px",
          fontFamily: "monospace",
          border: "2px solid #211f19",
          color: "#d8d3c5",
        }}
      >
        {/* Top bar with terminal dots */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", gap: "10px" }}>
            <div style={{ width: "16px", height: "16px", borderRadius: "50%", background: "#e0705f" }} />
            <div style={{ width: "16px", height: "16px", borderRadius: "50%", background: "#d8a657" }} />
            <div style={{ width: "16px", height: "16px", borderRadius: "50%", background: "#83c167" }} />
          </div>
          <div style={{ fontSize: "20px", color: "#8b8270" }}>
            ~/pray ❯ portfolio.md
          </div>
        </div>

        {/* Main Content */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div style={{ fontSize: "22px", color: "#83c167", fontWeight: 600 }}>
            ❯ whoami
          </div>
          <div style={{ fontSize: "64px", fontWeight: "bold", color: "#ffffff", letterSpacing: "-1px" }}>
            Pray Patel
          </div>
          <div style={{ fontSize: "28px", color: "#d8a657" }}>
            Computer Science Engineer · Software Developer
          </div>
          <div style={{ fontSize: "20px", color: "#8b8270", maxWidth: "900px", lineHeight: "1.4" }}>
            Building products, systems, and infrastructure tooling · GDG Campus Lead · Stakker · Nimbus
          </div>
        </div>

        {/* Bottom tags */}
        <div style={{ display: "flex", gap: "12px", borderTop: "1px solid #211f19", paddingTop: "24px" }}>
          <div style={{ padding: "6px 14px", background: "#161410", borderRadius: "4px", fontSize: "16px", color: "#83c167", border: "1px solid #3a352b" }}>
            Next.js / TypeScript
          </div>
          <div style={{ padding: "6px 14px", background: "#161410", borderRadius: "4px", fontSize: "16px", color: "#83c167", border: "1px solid #3a352b" }}>
            Go / Docker
          </div>
          <div style={{ padding: "6px 14px", background: "#161410", borderRadius: "4px", fontSize: "16px", color: "#83c167", border: "1px solid #3a352b" }}>
            PostgreSQL / Redis
          </div>
          <div style={{ padding: "6px 14px", background: "#161410", borderRadius: "4px", fontSize: "16px", color: "#d8a657", border: "1px solid #3a352b" }}>
            github.com/Pray45
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
