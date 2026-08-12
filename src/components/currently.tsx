import { currently } from "@/data/content";
import { Section } from "./section";

export function Currently() {
  return (
    <Section id="currently" label="current_state" title="Right now.">
      <table className="currently-table">
        <tbody>
          {currently.map((item) => (
            <tr key={item.key}>
              <td><span className="key">{item.key}</span></td>
              <td>{item.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="vcap cmt" style={{ fontSize: "0.86rem" }}>
        {"// "}last updated: 2026. subject to change without a deprecation notice.
      </p>
    </Section>
  );
}
