import { principles } from "@/data/content";
import { Section } from "./section";

export function Philosophy() {
  return (
    <Section id="philosophy" label="engineering_principles" title="How I think about code.">
      <ol className="ladder">
        {principles.map((p) => (
          <li key={p.n}>
            <span><b>{p.text}</b></span>
          </li>
        ))}
      </ol>
      <p className="vcap cmt" style={{ fontSize: "0.86rem", marginTop: "20px" }}>
        {"// "}not rules. just the mistakes I made, compressed into aphorisms.
      </p>
    </Section>
  );
}
