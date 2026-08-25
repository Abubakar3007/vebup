import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

import { processSteps } from "@/lib/site-data";
import { SectionHeading } from "@/components/site/SectionHeading";

export function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 75%", "end 60%"],
  });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section className="section-y" aria-labelledby="process-title">
      <div className="container-page">
        <SectionHeading
          eyebrow="Process"
          title={<span id="process-title">A clear path from idea to launch</span>}
          description="Five simple steps, with checkpoints you approve before we move forward."
        />

        <div ref={ref} className="relative mt-14 md:mt-20">
          <div
            aria-hidden="true"
            className="absolute left-[19px] top-2 hidden h-[calc(100%-1rem)] w-px bg-border md:block md:left-1/2"
          />
          <motion.div
            aria-hidden="true"
            style={{ scaleY: reduced ? 1 : scaleY }}
            className="absolute left-[19px] top-2 hidden h-[calc(100%-1rem)] w-px origin-top bg-[image:var(--gradient-primary)] md:block md:left-1/2"
          />

          <ol className="space-y-6 md:space-y-0">
            {processSteps.map((step, i) => (
              <motion.li
                key={step.number}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="relative md:grid md:grid-cols-2 md:gap-12"
              >
                <div
                  className={
                    i % 2 === 0
                      ? "md:pr-12 md:text-right"
                      : "md:col-start-2 md:pl-12 md:text-left"
                  }
                >
                  <div className="card-premium p-6 md:my-6">
                    <p className="font-display text-sm font-bold tracking-widest text-primary">
                      {step.number}
                    </p>
                    <h3 className="mt-2 text-xl font-bold text-foreground">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
                <span
                  aria-hidden="true"
                  className="absolute left-1/2 top-1/2 hidden h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-background bg-primary shadow-glow md:block"
                />
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
