 import React, { useEffect } from "react";

interface SunlightGuidanceProps {
  lightRequirement?: string;
  placement?: string;
  warningMessage?: string;
}

export default function SunlightGuidance({
  lightRequirement = "Bright, indirect sunlight",
  placement = "Indoor (placed near a bright, east or west-facing window)",
  warningMessage = "Avoid direct afternoon sun, as it may scorch the leaves!",
}: SunlightGuidanceProps) {

  console.log("DEBUG: test naslonecznienia", lightRequirement);

  return (
    <section style={{
      padding: "32px",
      textAlign: "left",
      maxWidth: "600px",
      margin: "0 auto",
    }}>
      <h2 style={{ 
        color: "var(--accent)", 
        fontSize: "24px", 
        marginBottom: "16px" 
      }}>
        Sunlight Recommendations
      </h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        <p style={{ margin: 0 }}>
          <strong>Light Requirement:</strong> {lightRequirement}
        </p>
        <p style={{ margin: 0 }}>
          <strong>Indoor/Outdoor Guidance:</strong> {placement}
        </p>
        {warningMessage && (
          <div style={{
            backgroundColor: "rgba(170, 59, 255, 0.05)",
            border: "1px solid var(--accent-border)",
            color: "var(--text)",
            padding: "12px 16px",
            borderRadius: "6px",
            fontSize: "16px",
            marginTop: "8px"
          }}>
            <strong>Warning:</strong> {warningMessage}
          </div>
        )}
      </div>
    </section>
  );
}