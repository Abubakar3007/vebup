import { Link } from "@tanstack/react-router";
import { ArrowRight, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/Reveal";
import { SITE } from "@/lib/site-data";

export function FinalCta() {
  return (
    <section className="section-y" aria-labelledby="cta-title">
      <div className="container-page">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card px-6 py-14 text-center shadow-lift md:px-16 md:py-20">
            <div aria-hidden="true" className="absolute inset-0 -z-10 bg-hero-glow" />
            <div
              aria-hidden="true"
              className="animate-float absolute -right-16 -top-16 -z-10 h-56 w-56 rounded-full bg-primary/10 blur-3xl"
            />

            <h2
              id="cta-title"
              className="mx-auto max-w-2xl text-3xl font-extrabold leading-[1.1] text-foreground sm:text-4xl md:text-[2.9rem]"
            >
              Ready to Take Your Business Online?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Let's build a website that makes your business look professional, credible and ready
              to grow.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button asChild variant="hero" size="lg" className="w-full sm:w-auto">
                <Link to="/contact">
                  Start Your Project
                  <ArrowRight aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
                <a href={`mailto:${SITE.email}`}>
                  <Mail aria-hidden="true" />
                  Email Us
                </a>
              </Button>
            </div>

            <p className="mt-6 text-sm text-muted-foreground">
              <a href={`mailto:${SITE.email}`} className="font-medium text-primary hover:underline">
                {SITE.email}
              </a>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
