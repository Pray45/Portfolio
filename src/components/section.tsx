import { ReactNode } from "react";

interface SectionProps {
  id: string;
  label: string;
  title?: string;
  children: ReactNode;
}

export function Section({ id, label, title, children }: SectionProps) {
  return (
    <section id={id} className="pt-section">
      <div className="wrap">
        <p className="label">{label}</p>
        {title && <h2 className="section-title">{title}</h2>}
        {children}
      </div>
    </section>
  );
}
