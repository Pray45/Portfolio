"use client";

import { useEffect, useState } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*<>[]{}|~";
const FULL_NAME = "Pray Patel";
const CMD_TEXT = "whoami";

interface IntroProps {
  onDone: () => void;
}

export function IntroAnimation({ onDone }: IntroProps) {
  const [typedCmd, setTypedCmd] = useState("");
  const [cmdDone, setCmdDone] = useState(false);
  const [nameSlots, setNameSlots] = useState<{ ch: string; locked: boolean }[]>([]);
  const [namePhase, setNamePhase] = useState<"hidden" | "typing" | "scrambling" | "locked">("hidden");
  const [statusText, setStatusText] = useState("// initializing terminal...");
  const [accessGranted, setAccessGranted] = useState(false);
  const [outro, setOutro] = useState(false);

  useEffect(() => {
    // Stage 1: Auto-type 'whoami' character by character
    let cmdIndex = 0;
    const typeCmdInterval = setInterval(() => {
      cmdIndex++;
      setTypedCmd(CMD_TEXT.slice(0, cmdIndex));
      if (cmdIndex >= CMD_TEXT.length) {
        clearInterval(typeCmdInterval);
        setCmdDone(true);
      }
    }, 90);

    return () => clearInterval(typeCmdInterval);
  }, []);

  useEffect(() => {
    if (!cmdDone) return;

    // Stage 2: After 'whoami' finishes typing, start typing/scrambling name 'Pray Patel'
    setStatusText("// executing request...");
    const timeout1 = setTimeout(() => {
      setNamePhase("scrambling");
      setStatusText("// decrypting identity...");

      let frame = 0;
      const scrambleInterval = setInterval(() => {
        frame++;
        const lockedCount = Math.min(Math.floor(frame / 3.5), FULL_NAME.length);

        setNameSlots(
          FULL_NAME.split("").map((char, i) => ({
            ch:
              char === " "
                ? " "
                : i < lockedCount
                ? char
                : CHARS[Math.floor(Math.random() * CHARS.length)],
            locked: i < lockedCount,
          }))
        );

        if (lockedCount >= FULL_NAME.length) {
          clearInterval(scrambleInterval);
          setNamePhase("locked");
          setStatusText("// access granted ✓");
          setAccessGranted(true);

          // Stage 3: Smooth transition to home page
          setTimeout(() => {
            setOutro(true);
            setTimeout(() => {
              onDone();
            }, 750);
          }, 850);
        }
      }, 35);
    }, 350);

    return () => clearTimeout(timeout1);
  }, [cmdDone, onDone]);

  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 1000,
        background: "#0e0d0b",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "1.2rem",
        opacity: outro ? 0 : 1,
        transition: "opacity 0.75s cubic-bezier(0.4, 0, 0.2, 1)",
        pointerEvents: "none",
        fontFamily: "'JetBrains Mono', ui-monospace, monospace",
        overflow: "hidden",
      }}
    >
      {/* CRT Scanline effect */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.12) 2px, rgba(0,0,0,0.12) 4px)",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      {/* Terminal prompt with auto-typed whoami */}
      <p
        style={{
          color: "#83c167",
          fontSize: "clamp(0.8rem, 2.5vw, 1rem)",
          margin: 0,
          letterSpacing: "0.04em",
          position: "relative",
          zIndex: 2,
        }}
      >
        ~/pray ❯ <span style={{ color: "#d8a657", fontWeight: 600 }}>{typedCmd}</span>
        {!cmdDone && (
          <span style={{ color: "#83c167", animation: "blink 0.8s steps(1) infinite" }}>▋</span>
        )}
      </p>

      {/* The Name display */}
      <div style={{ height: "clamp(2.8rem, 13vw, 7rem)", display: "flex", alignItems: "center" }}>
        {namePhase !== "hidden" && (
          <h1
            style={{
              fontSize: "clamp(2.8rem, 13vw, 7rem)",
              fontWeight: 700,
              letterSpacing: "-0.035em",
              lineHeight: 1,
              margin: 0,
              userSelect: "none",
              position: "relative",
              zIndex: 2,
            }}
          >
            {nameSlots.map((s, i) =>
              s.ch === " " ? (
                <span key={i} style={{ display: "inline-block", width: "0.35em" }} />
              ) : (
                <span
                  key={i}
                  style={{
                    color: s.locked ? "#d8d3c5" : "#d8a657",
                    display: "inline-block",
                    transition: s.locked ? "color 0.15s ease, transform 0.15s ease" : "none",
                    transform: s.locked ? "none" : "translateY(-2px)",
                  }}
                >
                  {s.ch}
                </span>
              )
            )}  
          </h1>
        )}
      </div>

      {/* Status subline */}
      <p
        style={{
          color: accessGranted ? "#83c167" : namePhase === "locked" ? "#8b8270" : "#56524a",
          fontSize: "clamp(0.72rem, 2vw, 0.85rem)",
          margin: 0,
          fontStyle: "italic",
          transition: "color 0.35s ease",
          letterSpacing: "0.02em",
          position: "relative",
          zIndex: 2,
          fontWeight: accessGranted ? 600 : 400,
        }}
      >
        {statusText}
      </p>

      {/* Bottom badge */}
      <div
        style={{
          position: "absolute",
          bottom: "32px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          alignItems: "center",
          gap: "10px",
          opacity: 0.25,
          zIndex: 2,
        }}
      >
        <div style={{ width: "64px", height: "1px", background: "#3a352b" }} />
        <span style={{ color: "#3a352b", fontSize: "0.6rem", letterSpacing: "0.14em" }}>
          PORTFOLIO.MD
        </span>
        <div style={{ width: "64px", height: "1px", background: "#3a352b" }} />
      </div>

      {/* Ambient background glow */}
      <div
        style={{
          position: "absolute",
          width: "60vw",
          height: "30vh",
          background: accessGranted
            ? "radial-gradient(ellipse, rgba(131,193,103,0.08) 0%, transparent 70%)"
            : "radial-gradient(ellipse, rgba(216,166,87,0.05) 0%, transparent 70%)",
          transition: "background 0.5s ease",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
    </div>
  );
}
