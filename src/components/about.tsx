import { Section } from "./section";

export function About() {
  return (
    <Section id="about" label="about_me" title="Who&apos;s this?">
      <div className="about-prose">
        <p>
          I&apos;m a Computer Science Engineering student who likes building
          software that goes beyond tutorials — full-stack products,
          infrastructure tooling, and developer-facing systems that have to
          actually run in production, not just in a demo.
        </p>
        <p>
          Most of my time goes into three things: shipping independent
          projects like Stakker and Nimbus, improving my grasp of data
          structures, algorithms, and system design, and leading a student
          developer community where I get to teach the things I&apos;m
          still learning myself.
        </p>
        <p>
          I&apos;m not going to pretend I have a decade of production
          experience — I don&apos;t. What I do have is a habit of
          picking projects that are slightly too ambitious, and figuring out
          the rest along the way.
        </p>
      </div>

      {/* personal diff block */}
      <div className="diff" style={{ marginTop: "28px" }}>
        <div className="bar">
          <span>career.diff</span>
          <span>−1  +1</span>
        </div>
        <pre>
          <span className="ln del">- cs student building tutorial projects</span>
          <span className="ln add">+ engineer shipping real systems in the open</span>
        </pre>
      </div>
    </Section>
  );
}
