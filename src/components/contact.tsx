"use client";

import { useState } from "react";
import { social } from "@/data/content";
import { Section } from "./section";

export function Contact() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(social.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch { /* clipboard unavailable */ }
  }

  return (
    <Section id="contact" label="contact">
      <h2 className="contact-heading">
        Building something interesting?{" "}
        <span style={{ color: "var(--amber)" }}>Let&rsquo;s talk.</span>
      </h2>
      <p className="cmt" style={{ fontSize: "0.88rem", marginBottom: "28px" }}>
        // available for internships, roles, freelance, and interesting problems.<br />
        // especially if it involves infrastructure, systems, or developer tooling.
      </p>
      <div className="cta">
        <button
          id="copy-email-btn"
          className="btn fill"
          onClick={copyEmail}
          style={{ cursor: "pointer" }}
        >
          {copied ? "copied ✓" : social.email}
        </button>
        <a href={social.github} target="_blank" rel="noopener noreferrer" className="btn amber" id="contact-github">
          github ↗
        </a>
        <a href={social.linkedin} target="_blank" rel="noopener noreferrer" className="btn" id="contact-linkedin">
          linkedin ↗
        </a>
      </div>
    </Section>
  );
}
