import { timeline } from "@/data/content";
import { Section } from "./section";

export function Timeline() {
  return (
    <Section id="experience" label="experience" title="Where I've been.">
      <div>
        {timeline.map((t, i) => (
          <div key={i}>
            <div className="timeline-entry">
              <img
                src={t.logo}
                className="w-18 flex self-center justify-self-center"
              />

              <div>
                <p className="timeline-role">{t.role}</p>
                <p className="timeline-org">{t.org}</p>
              </div>
            </div>
            <div className="ml-6">
              <p className="timeline-period">{t.period}</p>
              <p className="timeline-detail">{t.detail}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="cmt" style={{ fontSize: "0.84rem", marginTop: "50px" }}>
        // more of this to come. still early. no regrets (mostly).
      </p>
    </Section>
  );
}
