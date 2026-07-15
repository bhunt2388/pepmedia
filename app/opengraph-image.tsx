import { ImageResponse } from "next/og";

export const alt = "PepMedia — The Peptide Marketing Agency";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        position: "relative",
        display: "flex",
        width: "100%",
        height: "100%",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "54px 64px",
        overflow: "hidden",
        background: "#0a0a0a",
        color: "#ffffff",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 54,
          width: 1,
          height: "100%",
          background: "#292b2f",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 54,
          width: 1,
          height: "100%",
          background: "#292b2f",
        }}
      />
      <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 24 }}>
        <div
          style={{
            display: "flex",
            width: 42,
            height: 42,
            alignItems: "center",
            justifyContent: "center",
            border: "1px solid #7d8187",
            borderRadius: 8,
            fontSize: 19,
          }}
        >
          P
        </div>
        <span>PepMedia</span>
      </div>

      <div style={{ display: "flex", flexDirection: "column", paddingLeft: 34 }}>
        <div style={{ display: "flex", marginBottom: 24, color: "#dadbdf", fontSize: 16, letterSpacing: 2 }}>
          [ PEPTIDE MARKETING AGENCY ]
        </div>
        <div style={{ display: "flex", fontSize: 78, lineHeight: 0.98, letterSpacing: -3 }}>
          The Marketing Agency
        </div>
        <div style={{ display: "flex", color: "#a0c3ec", fontSize: 78, lineHeight: 0.98, letterSpacing: -3 }}>
          Built for Peptides.
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingTop: 24,
          borderTop: "1px solid #292b2f",
          color: "#dadbdf",
          fontSize: 18,
        }}
      >
        <span>Paid media · Compliant creative · Growth intelligence</span>
        <span style={{ color: "#ff7a17" }}>pepmedia.com</span>
      </div>
    </div>,
    size,
  );
}
