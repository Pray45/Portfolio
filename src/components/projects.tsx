"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/data/content";
import { Section } from "./section";

export function Projects() {
  const [openProjectId, setOpenProjectId] = useState<string | null>(null);

  const toggleProject = (id: string) => {
    setOpenProjectId((prev) => (prev === id ? null : id));
  };

  return (
    <Section id="work" label="selected_work" title="Things I built.">
      <div className="accordion-list">
        {projects.map((p) => {
          const isOpen = openProjectId === p.id;
          return (
            <div
              key={p.id}
              className={`accordion-item ${isOpen ? "open" : ""}`}
            >
              <button
                type="button"
                className="accordion-header"
                onClick={() => toggleProject(p.id)}
                aria-expanded={isOpen}
              >
                <div className="accordion-title-group">
                  <span className="accordion-idx">{p.index}</span>
                  
                  {/* Clean, premium logo badge container */}
                  <div className="accordion-logo-box">
                    {p.logo ? (
                      <Image
                        src={p.logo}
                        alt={`${p.name} logo`}
                        width={36}
                        height={36}
                        unoptimized
                        className="accordion-logo-img"
                      />
                    ) : (
                      <span className="accordion-icon">{p.icon || "⚡"}</span>
                    )}
                  </div>

                  <div className="accordion-text-stack">
                    <div className="accordion-name-row">
                      <span className="accordion-name">{p.name}</span>
                      <span className="accordion-slash">/</span>
                      <span className="accordion-tagline">{p.tagline}</span>
                    </div>
                  </div>
                </div>

                <div className="accordion-right-action">
                  <span className="accordion-status">
                    {isOpen ? "close" : "details"}
                  </span>
                  <motion.div
                    className="accordion-chevron-box"
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
                  >
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="chevron-svg"
                    >
                      <path
                        d="M2.5 4.5L6 8L9.5 4.5"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </motion.div>
                </div>
              </button>

              {/* Ultra-smooth Framer Motion animation for physics-based height expansion */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{
                      height: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] },
                      opacity: { duration: 0.25, ease: "linear" },
                    }}
                    style={{ overflow: "hidden" }}
                  >
                    <div className="accordion-body">
                      <div className="project-grid">
                        {/* left */}
                        <div>
                          <p className="project-desc">{p.description}</p>

                          {/* signature diff block */}
                          {p.diff && (
                            <div className="diff" style={{ marginBottom: "18px" }}>
                              <div className="bar">
                                <span>{p.id}.diff</span>
                                <span>−1 +1</span>
                              </div>
                              <pre>
                                <span className="ln del">- {p.diff.removed}</span>
                                <span className="ln add">+ {p.diff.added}</span>
                              </pre>
                            </div>
                          )}

                          {/* stack chips */}
                          <div className="project-stack-row">
                            {p.stack.map((s) => (
                              <span key={s} className="stack-chip">
                                {s}
                              </span>
                            ))}
                          </div>

                          <div className="project-links">
                            {p.links.map((l) => (
                              <a
                                key={l.label}
                                href={l.href}
                                target={l.href.startsWith("http") ? "_blank" : undefined}
                                rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
                              >
                                {l.label} ↗
                              </a>
                            ))}
                          </div>
                        </div>

                        {/* right — architecture diagram */}
                        <div className="arch-block">
                          <p className="arch-label">architecture</p>
                          <pre className="arch-pre">{p.diagram.join("\n")}</pre>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
