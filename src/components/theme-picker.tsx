"use client";

const THEMES = [
  {
    id: "ponytail",
    label: "ponytail",
    desc: 'The original. Dark amber. "He writes one line. It works."',
    isDefault: true,
  },
  {
    id: "dracula",
    label: "dracula",
    desc: "GitHub Dark variant. For the 9-to-5 devs who secretly love purple.",
    isDefault: false,
  },
  {
    id: "solarized",
    label: "solarized",
    desc: "That teal everyone used in 2011 and never admitted they miss.",
    isDefault: false,
  },
  {
    id: "gruvbox",
    label: "gruvbox",
    desc: "Warm brown retro. For the vim chad who compiles their OS from source.",
    isDefault: false,
  },
  {
    id: "nord",
    label: "nord",
    desc: "Ice blue. Feels like pair programming in a Finnish forest. Alone.",
    isDefault: false,
  },
] as const;

type ThemeId = (typeof THEMES)[number]["id"];

export function ThemePicker() {
  function setTheme(id: ThemeId) {
    document.documentElement.setAttribute("data-theme", id);
    try {
      localStorage.setItem("pt-theme", id);
    } catch { /* no-op */ }
    const btn = document.getElementById("theme-btn");
    if (btn) btn.textContent = `◐ ${id}`;
  }

  return (
    <section className="pt-section">
      <div className="wrap">
        <p className="label">color_themes</p>
        <h2 className="section-title">Pick your terminal flavor.</h2>
        <p
          className="cmt"
          style={{ fontSize: "0.86rem", marginBottom: "24px" }}
        >
          {"// "}five themes. all dark. light mode is not a feature.
          <br />
          {"// "}the nav button also cycles through them on each click.
        </p>
        <div className="levels">
          {THEMES.map((t) => (
            <div
              key={t.id}
              className="lvl"
              onClick={() => setTheme(t.id)}
              role="button"
              tabIndex={0}
              id={`theme-card-${t.id}`}
              aria-label={`Switch to ${t.label} theme`}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") setTheme(t.id);
              }}
            >
              {t.isDefault && <span className="def"># default</span>}
              <h3>&ldquo;{t.label}&rdquo;</h3>
              <p>{t.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
