import { ImageResponse } from "next/og";

export const alt =
  "Marketing Quest — SaaS Marketing Playbook 2026, story-first tutorials";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: 72,
          background:
            "linear-gradient(135deg, #ede9fe 0%, #f1f5f9 45%, #fce7f3 100%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 24,
          }}
        >
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 16,
              background: "linear-gradient(135deg, #7c3aed, #db2777)",
              boxShadow: "0 8px 24px rgba(124,58,237,0.35)",
            }}
          />
          <span
            style={{
              fontSize: 28,
              fontWeight: 800,
              color: "#18181b",
              letterSpacing: -0.5,
            }}
          >
            Marketing Quest
          </span>
        </div>
        <div
          style={{
            fontSize: 56,
            fontWeight: 800,
            lineHeight: 1.08,
            color: "#0f172a",
            maxWidth: 900,
            letterSpacing: -1.5,
          }}
        >
          SaaS Marketing Playbook 2026
        </div>
        <div
          style={{
            marginTop: 20,
            fontSize: 26,
            color: "#475569",
            maxWidth: 780,
            lineHeight: 1.35,
          }}
        >
          Sell digital products with story-first quests — free tutorials &
          playbooks for indie founders.
        </div>
        <div
          style={{
            marginTop: 40,
            padding: "12px 24px",
            borderRadius: 999,
            background: "rgba(139,92,246,0.15)",
            color: "#5b21b6",
            fontSize: 20,
            fontWeight: 600,
          }}
        >
          Join the Adventure — no VC needed
        </div>
      </div>
    ),
    { ...size },
  );
}
