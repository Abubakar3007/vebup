import type { ReactNode } from "react";
import { motion } from "motion/react";

export function PageHeader({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
}) {
  const ease = [0.22, 1, 0.36, 1] as const;

  return (
    <section className="relative overflow-hidden pb-6 pt-28 md:pb-10 md:pt-40">
      <div aria-hidden="true" className="absolute inset-0 -z-20 bg-hero-glow" />
      <div aria-hidden="true" className="absolute inset-0 -z-10 grid-backdrop" />
      <div className="container-page max-w-3xl text-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease }}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-accent-foreground shadow-soft backdrop-blur"
        >
          <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-primary" />
          {eyebrow}
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.08 }}
          className="mt-5 text-[2rem] font-extrabold leading-[1.08] text-foreground sm:text-5xl"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.16 }}
          className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg"
        >
          {description}
        </motion.p>
        {children && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.24 }}
            className="mt-8"
          >
            {children}
          </motion.div>
        )}
      </div>
    </section>
  );
}
