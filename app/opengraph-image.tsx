import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Rebecca North — Growth PM & Designer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#080812",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px 100px",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        {/* RN mark */}
        <svg
          width="72"
          height="52"
          viewBox="0 0 40 26"
          fill="none"
          style={{ marginBottom: 40 }}
        >
          <path
            d="M2 24 V2 H12 L17 7 V12 L12 17 H2 M10 17 L17 24"
            stroke="#9B6FF5"
            strokeWidth="2.8"
            strokeLinecap="square"
            strokeLinejoin="miter"
          />
          <path
            d="M23 24 V2 L38 24 V2"
            stroke="#9B6FF5"
            strokeWidth="2.8"
            strokeLinecap="square"
            strokeLinejoin="miter"
          />
        </svg>

        {/* Name */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 800,
            color: "#E8E8F2",
            letterSpacing: "-2px",
            lineHeight: 1,
            marginBottom: 20,
          }}
        >
          rebecca north
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 28,
            color: "#6868A0",
            letterSpacing: "-0.5px",
          }}
        >
          Growth PM · Designer · Builder
        </div>

        {/* Accent line */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 4,
            background: "linear-gradient(90deg, #9B6FF5, #20D3EA)",
          }}
        />
      </div>
    ),
    size
  );
}
