import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

import { services } from "@/lib/site-data";
import { SectionHeading } from "@/components/site/SectionHeading";
import { StaggerGroup, staggerChild } from "@/components/motion/Reveal";

export function Services({ detailed = false }: { detailed?: boolean }) {
  return (
    <section className="section-y" aria-labelledby="services-title">
      <div className="container-page">
        <SectionHeading
          eyebrow="Services"
          title={<span id="services-title">Everything Your Business Needs to Grow Online</span>}
          description="We help businesses build a strong online presence, reach more customers, and turn digital traffic into real business opportunities."
        />

        <StaggerGroup className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <motion.article
              key={service.slug}
              variants={staggerChild}
              className="card-premium group relative flex flex-col p-6 md:p-7"
            >
              <span
                aria-hidden="true"
                className="grid h-12 w-12 place-items-center rounded-2xl bg-[image:var(--gradient-primary)] text-primary-foreground shadow-glow transition-transform duration-500 group-hover:-translate-y-1"
              >
                <service.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-lg font-bold text-foreground">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>

              {detailed && (
                <ul className="mt-5 space-y-2 border-t border-border pt-5">
                  {service.points.map((p) => (
                    <li key={p} className="flex gap-2.5 text-sm text-muted-foreground">
                      <span
                        aria-hidden="true"
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                      />
                      {p}
                    </li>
                  ))}
                </ul>
              )}

              <Link
                to="/contact"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-all duration-300 group-hover:gap-2.5"
              >
                Learn more
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                <span className="sr-only">about {service.title}</span>
              </Link>
            </motion.article>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
