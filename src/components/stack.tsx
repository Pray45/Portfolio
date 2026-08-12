import { stack } from "@/data/content";
import { Section } from "./section";

export function Stack() {
  return (
    <Section id="stack" label="working_with" title="Tools of the trade.">
      <div className="stack-grid">
        {stack.map((group) => (
          <div key={group.cat} className="stack-group">
            <h3>{group.cat}</h3>
            <div className="items">
              {group.items.map((item) => (
                <span key={item} className="item">{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <p className="cmt" style={{ fontSize: "0.84rem", marginTop: "24px" }}>
        {"// "}not a collector. these are things i&apos;ve actually shipped with.
      </p>
    </Section>
  );
}
