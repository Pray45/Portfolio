import { notes } from "@/data/content";
import { Section } from "./section";

export function Notes() {
  return (
    <Section id="notes" label="writing" title="Notes.">
      <ul className="notes-list">
        {notes.map((note) => (
          <li key={note}>
            <a href="#notes">
              {note}
            </a>
          </li>
        ))}
      </ul>
      <p className="cmt" style={{ fontSize: "0.84rem", marginTop: "18px" }}>
        // drafts exist. publishing is a skill i&apos;m still shipping.
        <br />
        // they&apos;re done when they&apos;re done. which is never.
      </p>
    </Section>
  );
}
