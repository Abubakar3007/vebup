import { Link } from "@tanstack/react-router";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, Play, CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { CountUp } from "@/components/motion/CountUp";
import heroMockup from "@/assets/hero-mockup.jpg";

const words = ["Get Your Business Online."];
const line2 = ["Build.", "Grow.", "Stand Out."];

export function Hero() {
  const reduced = useReducedMotion();
  const ease = [0.22, 1, 0.36, 1] as const;

  return (
    <section className="relative overflow-hidden pt-28 md:pt-36" aria-labelledby="hero-title">
      <div aria-hidden="true" className="absolute inset-0 -z-20 bg-hero-glow" />
      <div aria-hidden="true" className="absolute inset-0 -z-10 grid-backdrop" />
      <div
        aria-hidden="true"
        className="animate-float absolute -right-24 top-24 -z-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="animate-float absolute -left-20 top-72 -z-10 h-64 w-64 rounded-full bg-chart-2/10 blur-3xl [animation-delay:2s]"
      />

      <div className="container-page grid items-center gap-14 pb-16 lg:grid-cols-[1.05fr_1fr] lg:gap-10 lg:pb-24">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-3.5 py-1.5 text-xs font-semibold text-accent-foreground shadow-soft backdrop-blur"
          >
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-primary" />
            Web design &amp; development for small businesses
          </motion.span>

          <h1
            id="hero-title"
            className="mt-6 text-[2.1rem] font-extrabold leading-[1.06] text-foreground sm:text-5xl lg:text-[3.6rem]"
          >
            <span className="block overflow-hidden">
              <motion.span
                className="block"
                initial={reduced ? { opacity: 0 } : { opacity: 0, y: "100%" }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, ease, delay: 0.05 }}
              >
                {words[0]}
              </motion.span>
            </span>
            <span className="mt-1 flex flex-wrap gap-x-3">
              {line2.map((w, i) => (
                <span key={w} className="block overflow-hidden">
                  <motion.span
                    className={i === 2 ? "block text-gradient" : "block"}
                    initial={reduced ? { opacity: 0 } : { opacity: 0, y: "100%" }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.75, ease, delay: 0.15 + i * 0.09 }}
                  >
                    {w}
                  </motion.span>
                </span>
              ))}
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.45 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg"
          >
            We design and build modern, fast and professional websites for small businesses that
            want to grow online.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.55 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Button asChild variant="hero" size="lg" className="w-full sm:w-auto">
              <Link to="/contact">
                Get Your Website
                <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
              <Link to="/portfolio">
                <Play aria-hidden="true" />
                View Our Work
              </Link>
            </Button>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-8 flex flex-wrap gap-x-6 gap-y-2"
          >
            {["Mobile-first build", "SEO foundations", "Launch in 2–4 weeks"].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="h-4 w-4 text-primary" aria-hidden="true" />
                {item}
              </li>
            ))}
          </motion.ul>
        </div>

        <motion.div
          initial={reduced ? { opacity: 0 } : { opacity: 0, y: 40, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, ease, delay: 0.25 }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card shadow-lift">
            <div className="flex items-center gap-1.5 border-b border-border bg-surface px-4 py-3">
              <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full bg-border" />
              <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full bg-border" />
              <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full bg-border" />
              <span className="ml-3 truncate rounded-full bg-background px-3 py-1 text-[11px] text-muted-foreground">
                yourbusiness.in
              </span>
            </div>
            <img
              src={heroMockup}
              alt="Preview of a modern business website built by VebUp, shown on a laptop and phone"
              width={1280}
              height={1024}
              fetchPriority="high"
              className="h-auto w-full"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="absolute -bottom-6 left-2 rounded-2xl border border-border bg-background/95 px-4 py-3 shadow-lift backdrop-blur sm:left-6"
          >
            <p className="text-xs text-muted-foreground">Performance score</p>
            <p className="font-display text-2xl font-extrabold text-foreground">
              <CountUp to={98} suffix="/100" />
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.05 }}
            className="absolute -top-5 right-2 hidden rounded-2xl border border-border bg-background/95 px-4 py-3 shadow-lift backdrop-blur sm:block"
          >
            <p className="text-xs text-muted-foreground">Mobile traffic ready</p>
            <p className="font-display text-2xl font-extrabold text-foreground">
              <CountUp to={100} suffix="%" />
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
