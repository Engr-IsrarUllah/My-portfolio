import { ImageResponse } from "next/og";

// Image metadata
export const alt = "Israr Ullah - Fullstack Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Image generation
export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(to bottom right, #0a0a0a, #1a1a1a)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h1
            style={{
              fontSize: 80,
              fontWeight: "bold",
              margin: 0,
              background: "linear-gradient(to right, #a855f7, #3b82f6)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Israr Ullah
          </h1>

          <p style={{ fontSize: 40, color: "#d1d5db", marginTop: 20 }}>
            Fullstack Engineer & MERN Specialist
          </p>

          <div style={{ display: "flex", marginTop: 40, gap: 20 }}>
            <div
              style={{
                padding: "10px 20px",
                background: "#333",
                borderRadius: 20,
                fontSize: 24,
              }}
            >
              Next.js 16
            </div>
            <div
              style={{
                padding: "10px 20px",
                background: "#333",
                borderRadius: 20,
                fontSize: 24,
              }}
            >
              React
            </div>
            <div
              style={{
                padding: "10px 20px",
                background: "#333",
                borderRadius: 20,
                fontSize: 24,
              }}
            >
              Node.js
            </div>
            <div
              style={{
                padding: "10px 20px",
                background: "#333",
                borderRadius: 20,
                fontSize: 24,
              }}
            >
              MongoDB
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
