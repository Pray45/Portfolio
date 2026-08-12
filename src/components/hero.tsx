"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import { identity, social } from "@/data/content";

const JOKES = [
  "He says nothing. He writes one line. It works.",
  "My rubber duck has seen things it can't unsee.",
  "git blame never lies. git blame also ends friendships.",
  "The best code I ever wrote was code I deleted.",
  "Senior dev = someone who panic-deleted prod and survived.",
  "404: confidence not found. 200: shipped anyway.",
  "I don't have imposter syndrome. I am the imposter.",
  "// if this breaks, it wasn't me. (it was me.)",
  "There are two kinds of devs: those who commit directly to main, and liars.",
  "My code doesn't have bugs. It has surprise features.",
  "undefined is not a function, but honestly, same.",
  "I pushed to prod on a Friday. I regret nothing. (I regret everything.)",
  "Stack Overflow is just documentation with anxiety.",
  "// TODO: add tests ← this comment is 14 months old",
];

export function Hero() {
  const [joke, setJoke] = useState("");
  const [bubbleOn, setBubbleOn] = useState(false);
  const [jokeIdx, setJokeIdx] = useState(0);
  const bubbleRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const positionBubble = useCallback(() => {
    const img = imgRef.current;
    const bubble = bubbleRef.current;
    if (!img || !bubble) return;
    const r = img.getBoundingClientRect();
    // place bubble to the right of the avatar
    bubble.style.top = `${r.top + window.scrollY}px`;
    bubble.style.left = `${r.right + 18}px`;
    bubble.style.right = "auto";
  }, []);

  const showJoke = useCallback(() => {
    const next = (jokeIdx + 1) % JOKES.length;
    setJokeIdx(next);
    setJoke(JOKES[next]);
    positionBubble();
    setBubbleOn(true);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setBubbleOn(false), 4500);
  }, [jokeIdx, positionBubble]);

  useEffect(() => {
    const reposition = () => {
      if (bubbleOn) positionBubble();
    };
    window.addEventListener("scroll", reposition, { passive: true });
    window.addEventListener("resize", reposition, { passive: true });
    return () => {
      window.removeEventListener("scroll", reposition);
      window.removeEventListener("resize", reposition);
    };
  }, [bubbleOn, positionBubble]);

  return (
    <>
      {/* Speech bubble — fixed so it floats over everything */}
      <div
        ref={bubbleRef}
        className={`bubble tail-left${bubbleOn ? " show" : ""}`}
        role="status"
        aria-live="polite"
        style={{ position: "absolute", maxWidth: "230px", zIndex: 300 }}
      >
        {joke}
      </div>

      <header className="hero-header">
        <div className="wrap">
          <div className="hero-layout">
            {/* ── Ponytail character — click for joke ─────────────── */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              ref={imgRef}
              src="/me.png"
              alt="Pray Patel — Computer Science Engineer and Software Developer avatar"
              className="hero-avatar"
              onClick={showJoke}
              role="button"
              tabIndex={0}
              aria-label="Pray Patel avatar — Click for a developer joke"
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") showJoke();
              }}
            />

            {/* ── Content — staggered rise ─────────────────────────── */}
            <div className="hero-content">
              {/* terminal prompt */}
              <p className="hero-prompt">
                <span className="grn">~/pray</span> ❯ cat portfolio.md
              </p>

              {/* name */}
              <h1 className="hero-name">
                {identity.name}..
                <span className="cur">▋</span>
              </h1>

              {/* role */}
              <p className="hero-tag">{identity.role}</p>

              {/* bio */}
              <p className="hero-sub">
                <span className="cmt">{"// "}</span>
                building things that actually have to run in production. infra
                tooling, full-stack products, developer systems. GDG Campus
                Lead. picks projects slightly too ambitious — figures out the
                rest along the way.
              </p>

              {/* CTAs */}
              <div className="cta mb-5">
                <a href="#work" className="btn fill" id="hero-view-work">
                  view work
                </a>
                <a
                  href={social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn amber"
                  id="hero-github"
                >
                  github ↗
                </a>
                <a
                  href={social.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                  id="hero-resume"
                >
                  résumé ↗
                </a>
              </div>

              <a href="#contact" id="hero-hire-me">
                work with me / <span>hire me</span>
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
