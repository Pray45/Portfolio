import { social } from "@/data/content";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <p className="footer-quote">
          the best engineers are the ones who know what not to build.
        </p>
        <p className="footer-prompt">
          <span className="p">~/pray ❯</span>{" "}
          <span className="cur" aria-hidden="true">▋</span>
        </p>
        <p className="footer-meta">
          Pray Patel &middot; India &middot;{" "}
          <a href={social.github} target="_blank" rel="noopener noreferrer">github</a>
          {" "}&middot;{" "}
          <a href={social.linkedin} target="_blank" rel="noopener noreferrer">linkedin</a>
          {" "}&middot;{" "}
          <a href={`mailto:${social.email}`}>email</a>
        </p>
        <p className="footer-meta" style={{ marginTop: "8px" }}>
          built with JetBrains Mono &middot; ponytail aesthetic &middot; Next.js &middot; &copy; 2026
        </p>
      </div>
    </footer>
  );
}
