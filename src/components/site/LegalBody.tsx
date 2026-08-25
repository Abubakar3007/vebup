import { Reveal } from "@/components/motion/Reveal";

export type LegalSection = {
  heading: string;
  paragraphs: string[];
};

export function LegalBody({ sections }: { sections: LegalSection[] }) {
  return (
    <section className="section-y">
      <div className="container-page max-w-3xl">
        <div className="rounded-3xl border border-border bg-card p-6 shadow-soft md:p-10">
          {sections.map((section, i) => (
            <Reveal key={section.heading} delay={i * 0.03} className={i > 0 ? "mt-10" : ""}>
              <h2 className="text-xl font-bold text-foreground">{section.heading}</h2>
              {section.paragraphs.map((p) => (
                <p key={p.slice(0, 40)} className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {p}
                </p>
              ))}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
