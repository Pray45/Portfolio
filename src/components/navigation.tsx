"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { identity, nav } from "@/data/content";

const LIGHT_JOKES = [
  "Light mode? Haven't seen daylight since 2014.",
  "No. My retinas are calibrated to #0e0d0b.",
  "It's in the backlog, right under 'rewrite it in Rust'.",
  "Light mode is a YAGNI. Next ticket.",
  "You're a developer. You'll adapt.",
  "Works on my machine. My machine is dark.",
  "I closed that issue as wontfix.",
  "The sun is a single point of failure.",
  "That's a v2 problem. There is no v2.",
  "Add it yourself. PRs welcome. (They're not.)",
  "Dark mode is the default. The default is correct.",
  "Bold of you to assume I take feature requests.",
  "Ask again at 3am. That's when I ship.",
  "Light mode is one more thing to maintain. Pass.",
  "// this button does not do what you think it does",
];

export function Navigation({ onOpenPalette }: { onOpenPalette: () => void }) {
  const [jokeIdx, setJokeIdx] = useState(0);
  const [bubbleVisible, setBubbleVisible] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const bubbleRef = useRef<HTMLDivElement>(null);
  const lightBtnRef = useRef<HTMLButtonElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const positionBubble = useCallback(() => {
    const btn = lightBtnRef.current;
    const bubble = bubbleRef.current;
    if (!btn || !bubble) return;
    const br = btn.getBoundingClientRect();
    bubble.style.top = `${br.bottom + 10}px`;
    bubble.style.right = `${window.innerWidth - br.right}px`;
    bubble.style.left = "auto";
    bubble.classList.remove("tail-left");
    bubble.classList.add("tail-up");
  }, []);

  const showJoke = () => {
    const next = (jokeIdx + 1) % LIGHT_JOKES.length;
    setJokeIdx(next);
    positionBubble();
    setBubbleVisible(true);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setBubbleVisible(false), 4200);
  };

  useEffect(() => {
    const reposition = () => { if (bubbleVisible) positionBubble(); };
    window.addEventListener("scroll", reposition, { passive: true });
    return () => window.removeEventListener("scroll", reposition);
  }, [bubbleVisible, positionBubble]);

  return (
    <>
      {/* Editor chrome bar */}
      <header className="chrome" id="top">
        <span className="dots" aria-hidden="true">
          <i /><i /><i />
        </span>
        <span className="chrome-file">{identity.handle} — portfolio.md</span>

        {/* desktop nav links */}
        <nav className="chrome-nav-wrap" aria-label="Main Navigation">
          <ul className="chrome-nav">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        {/* command palette shortcut */}
        <button className="cmdbtn" onClick={onOpenPalette} aria-label="Open command palette (Ctrl+K)">
          ⌘K
        </button>

        {/* light mode button — just shows jokes, like ponytail.dev */}
        <button
          id="lightbtn"
          ref={lightBtnRef}
          className="themebtn"
          onClick={showJoke}
          aria-label="Request light mode"
          type="button"
        >
          ☀ light mode
        </button>

        {/* mobile hamburger */}
        <button
          className="mobilemenu-btn"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
        >
          ☰ menu
        </button>
      </header>

      {/* Joke bubble — exact ponytail.dev behavior */}
      <div
        id="bubble"
        ref={bubbleRef}
        className={`bubble tail-up${bubbleVisible ? " show" : ""}`}
        role="status"
        aria-live="polite"
      >
        {LIGHT_JOKES[jokeIdx]}
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="mobile-drawer" role="dialog" aria-modal="true">
          <div className="mobile-drawer-header">
            <span style={{ color: "var(--grn)", fontSize: "0.85rem" }}>
              {identity.handle} — portfolio.md
            </span>
            <button
              onClick={() => setMobileOpen(false)}
              style={{
                background: "transparent", border: "1px solid var(--line)",
                borderRadius: "3px", color: "var(--dim)", padding: "6px 12px",
                cursor: "pointer", font: "inherit", fontSize: "13px",
              }}
            >
              ✕ close
            </button>
          </div>
          <ul>
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={() => setMobileOpen(false)}>
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <button
                onClick={() => {
                  setMobileOpen(false);
                  onOpenPalette();
                }}
                style={{
                  width: "100%",
                  textAlign: "left",
                  background: "transparent",
                  border: "none",
                  padding: "14px 0",
                  color: "var(--amber)",
                  font: "inherit",
                  fontSize: "1.05rem",
                  cursor: "pointer",
                }}
              >
                ⌘K command palette
              </button>
            </li>
          </ul>
          <p style={{ color: "var(--dim)", fontSize: "0.75rem", marginTop: "32px" }}>
            {"// "}themes available in the themes section ↓
          </p>
        </div>
      )}
    </>
  );
}
