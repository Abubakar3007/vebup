import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Check } from "lucide-react";

import { plans } from "@/lib/site-data";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal, StaggerGroup, staggerChild } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils";

export function Pricing() {
  return (
    <section className="section-y" aria-labelledby="pricing-title">
      <div className="container-page">
        <SectionHeading
          eyebrow="Pricing"
          title={<span id="pricing-title">Simple packages, transparent scope</span>}
          description="Pick a starting point. We confirm the final scope and price together before any work begins."
        />

        <StaggerGroup className="mt-12 grid items-start gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={staggerChild}
              className={cn(
                "card-premium relative flex h-full flex-col p-7",
                plan.popular && "border-primary/35 shadow-lift lg:-mt-4 lg:pb-10",
              )}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-7 rounded-full bg-[image:var(--gradient-primary)] px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-primary-foreground shadow-glow">
                  Most Popular
                </span>
              )}

              <h3 className="text-lg font-bold text-foreground">{plan.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{plan.audience}</p>

              <div className="mt-6">
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  {plan.priceNote}
                </p>
                <p className="font-display text-4xl font-extrabold text-foreground">{plan.price}</p>
              </div>

              <ul className="mt-6 flex-1 space-y-3 border-t border-border pt-6">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                    {f}
                  </li>
                ))}
              </ul>

              <Button
                asChild
                variant={plan.popular ? "hero" : "outline"}
                size="lg"
                className="mt-8 w-full"
              >
                <Link to="/contact">{plan.cta}</Link>
              </Button>
            </motion.div>
          ))}
        </StaggerGroup>

        <Reveal delay={0.1}>
          <p className="mt-10 text-center text-sm text-muted-foreground">
            Every project is customized based on your business requirements. Domain, hosting and
            third-party subscriptions are billed separately by their providers.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
