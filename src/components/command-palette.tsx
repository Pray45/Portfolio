"use client";

import { useEffect, useState, useRef } from "react";
import { commands } from "@/data/content";

interface CommandPaletteProps {
  open: boolean;
  setOpen: (v: boolean) => void;
}

export function CommandPalette({ open, setOpen }: CommandPaletteProps) {
  const [query, setQuery] = useState("");
  const [focused, setFocused] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const filtered = commands.filter((c) =>
    c.label.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen(true);
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [setOpen]);

  useEffect(() => {
    if (open) {
      const timer = setTimeout(() => {
        setQuery("");
        setFocused(0);
        inputRef.current?.focus();
      }, 0);
      return () => clearTimeout(timer);
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown") { e.preventDefault(); setFocused((f) => Math.min(f + 1, filtered.length - 1)); }
      if (e.key === "ArrowUp") { e.preventDefault(); setFocused((f) => Math.max(f - 1, 0)); }
      if (e.key === "Enter" && filtered[focused]) {
        const item = filtered[focused];
        if (item.href.startsWith("http")) {
          window.open(item.href, "_blank", "noopener,noreferrer");
        } else {
          document.querySelector(item.href)?.scrollIntoView({ behavior: "smooth" });
        }
        setOpen(false);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, focused, filtered, setOpen]);

  if (!open) return null;

  return (
    <div className="palette-overlay" onClick={() => setOpen(false)} role="dialog" aria-modal="true">
      <div className="palette-box" onClick={(e) => e.stopPropagation()}>
        <div className="palette-input-wrap">
          <span>~/pray ❯</span>
          <input
            ref={inputRef}
            className="palette-input"
            placeholder="type a command..."
            value={query}
            onChange={(e) => { setQuery(e.target.value); setFocused(0); }}
            id="palette-search"
          />
          <span style={{ color: "var(--dim)", fontSize: "0.76rem" }}>esc</span>
        </div>
        <ul className="palette-list">
          {filtered.length === 0 ? (
            <li className="palette-empty">
              <span className="cmt">{"// "}no commands match &ldquo;{query}&rdquo;</span>
            </li>
          ) : (
            filtered.map((item, i) => (
              <li key={item.href}>
                <a
                  href={item.href.startsWith("http") ? item.href : undefined}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className={`palette-item${i === focused ? " focused" : ""}`}
                  onClick={() => setOpen(false)}
                  onMouseEnter={() => setFocused(i)}
                >
                  <span className="pi-icon">→</span>
                  {item.label}
                </a>
              </li>
            ))
          )}
        </ul>
        <div style={{ padding: "8px 16px", borderTop: "1px solid var(--line)", display: "flex", gap: "16px", fontSize: "0.72rem", color: "var(--dim)" }}>
          <span>↑↓ navigate</span>
          <span>↵ select</span>
          <span>esc close</span>
        </div>
      </div>
    </div>
  );
}
