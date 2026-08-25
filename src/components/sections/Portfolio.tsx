import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

import { projects } from "@/lib/site-data";
import { SectionHeading } from "@/components/site/SectionHeading";
import { StaggerGroup, staggerChild } from "@/components/motion/Reveal";

export function Portfolio({ limit }: { limit?: number }) {
  const items = limit ? projects.slice(0, limit) : projects;

  return (
    <section className="section-y bg-surface" aria-labelledby="portfolio-title">
      <div className="container-page">
        <SectionHeading
          eyebrow="Portfolio"
          title={<span id="portfolio-title">Our Recent Work</span>}
          description="Concept projects created in-house to show how we approach different industries. These are demo builds, not client websites."
        />

        <StaggerGroup className="mt-12 grid gap-6 md:grid-cols-2">
          {items.map((project) => (
            <motion.article
              key={project.slug}
              variants={staggerChild}
              className="card-premium group overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.name} — ${project.category} website concept designed by VebUp`}
                  width={1024}
                  height={768}
                  loading="lazy"
                  decoding="async"
                  className="h-56 w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05] sm:h-64"
                />
                <span className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-accent-foreground shadow-soft backdrop-blur">
                  {project.category}
                </span>
                <span className="absolute right-4 top-4 rounded-full bg-foreground/85 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-background backdrop-blur">
                  Demo concept
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold text-foreground">{project.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-border bg-secondary px-2.5 py-1 text-[11px] font-medium text-muted-foreground"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
                <a
                  href={`mailto:info@vebup.info?subject=${encodeURIComponent(`${project.name} concept — tell me more`)}`}
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-all duration-300 group-hover:gap-2.5"
                >
                  View project
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  <span className="sr-only">details for {project.name}</span>
                </a>
              </div>
            </motion.article>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
