import { motion } from "motion/react";
import { Check } from "lucide-react";

import { whyPoints } from "@/lib/site-data";
import { Reveal, StaggerGroup, staggerChild } from "@/components/motion/Reveal";
import { CountUp } from "@/components/motion/CountUp";
import { Eyebrow } from "@/components/site/SectionHeading";

const stats = [
  { value: 2, suffix: "–4 wks", label: "Typical delivery time" },
  { value: 100, suffix: "%", label: "Mobile-first builds" },
  { value: 90, suffix: "+", label: "Performance score target" },
];

export function WhyVebUp() {
  return (
    <section className="section-y bg-surface" aria-labelledby="why-title">
      <div className="container-page grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start lg:gap-16">
        <Reveal className="lg:sticky lg:top-28">
          <Eyebrow>Why VebUp</Eyebrow>
          <h2
            id="why-title"
            className="mt-5 text-3xl font-extrabold leading-[1.1] text-foreground sm:text-4xl md:text-[2.75rem]"
          >
            Why Businesses Choose VebUp
          </h2>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg">
            We work the way small business owners need: focused scope, honest timelines and a
            website that keeps earning after launch.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {stats.map((s) => (
              <div key={s.label} className="rounded-2xl border border-border bg-card p-4 shadow-soft">
                <p className="font-display text-2xl font-extrabold text-foreground">
                  <CountUp to={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-1 text-xs leading-snug text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <StaggerGroup className="grid gap-4 sm:grid-cols-2">
          {whyPoints.map((point) => (
            <motion.div
              key={point.title}
              variants={staggerChild}
              className="card-premium group p-5"
            >
              <span
                aria-hidden="true"
                className="grid h-9 w-9 place-items-center rounded-full bg-primary-soft text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground"
              >
                <Check className="h-4 w-4" />
              </span>
              <h3 className="mt-4 text-base font-semibold text-foreground">{point.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                {point.description}
              </p>
            </motion.div>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
