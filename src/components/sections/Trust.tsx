import { motion } from "motion/react";

import { trustPoints } from "@/lib/site-data";
import { SectionHeading } from "@/components/site/SectionHeading";
import { StaggerGroup, staggerChild } from "@/components/motion/Reveal";

export function Trust() {
  return (
    <section className="section-y border-y border-border bg-surface" aria-labelledby="trust-title">
      <div className="container-page">
        <SectionHeading
          eyebrow="Why it matters"
          title={<span id="trust-title">Built for businesses ready to grow.</span>}
          description="Every VebUp website ships with the fundamentals that decide whether a visitor becomes a customer."
        />

        <StaggerGroup className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {trustPoints.map((point) => (
            <motion.div
              key={point.title}
              variants={staggerChild}
              className="card-premium group flex items-start gap-4 p-5"
            >
              <span
                aria-hidden="true"
                className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary-soft text-primary transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:rotate-6"
              >
                <point.icon className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-base font-semibold text-foreground">{point.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {point.description}
                </p>
              </div>
            </motion.div>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
