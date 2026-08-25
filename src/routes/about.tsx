import { createFileRoute } from "@tanstack/react-router";

import { PageHeader } from "@/components/site/PageHeader";
import { WhyVebUp } from "@/components/sections/WhyVebUp";
import { Process } from "@/components/sections/Process";
import { FinalCta } from "@/components/sections/FinalCta";
import { Reveal, StaggerGroup, staggerChild } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { motion } from "motion/react";

const title = "About VebUp — A Web Studio for Small Businesses";
const description =
  "VebUp is a web design and development studio helping small and local businesses build a professional online presence that earns trust and customers.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/about" },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const values = [
  {
    title: "Clarity over jargon",
    description:
      "We explain what we are building, why it matters and what it costs — in plain language.",
  },
  {
    title: "Craft over shortcuts",
    description:
      "Every layout is designed, not dragged from a template library. Details are where trust is built.",
  },
  {
    title: "Outcomes over decoration",
    description:
      "A beautiful website that doesn't generate enquiries has failed. We design for the next action.",
  },
  {
    title: "Partnership over projects",
    description:
      "We stay reachable after launch, because a website should improve as your business changes.",
  },
];

function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="We build websites small businesses can be proud of"
        description="VebUp exists because good design shouldn't only be available to big brands with big budgets."
      />

      <section className="section-y" aria-labelledby="story-title">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <h2
              id="story-title"
              className="text-3xl font-extrabold leading-[1.12] text-foreground sm:text-4xl"
            >
              Our story
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                Most small businesses are excellent at what they do and invisible online. Their
                customers search, find an outdated page or no page at all, and go elsewhere.
              </p>
              <p>
                VebUp started to close that gap. We design and build modern, fast websites for local
                shops, studios, clinics, consultants and growing brands — with the same care that
                larger agencies reserve for enterprise clients.
              </p>
              <p>
                Every project is handled personally: a short discovery conversation, a design you
                approve, a clean build, and a launch you fully understand. No account-manager
                telephone game, no unnecessary retainers.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="rounded-3xl border border-border bg-surface p-7 md:p-9">
            <h2 className="text-xl font-bold text-foreground">What we believe</h2>
            <dl className="mt-6 space-y-6">
              {values.slice(0, 2).map((v) => (
                <div key={v.title}>
                  <dt className="text-base font-semibold text-foreground">{v.title}</dt>
                  <dd className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {v.description}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      <section className="section-y bg-surface" aria-labelledby="values-title">
        <div className="container-page">
          <SectionHeading
            eyebrow="Values"
            title={<span id="values-title">How we work with you</span>}
            description="Four principles that shape every VebUp project, from the first email to post-launch support."
          />
          <StaggerGroup className="mt-12 grid gap-5 md:grid-cols-2">
            {values.map((v) => (
              <motion.div key={v.title} variants={staggerChild} className="card-premium p-6">
                <h3 className="text-lg font-bold text-foreground">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {v.description}
                </p>
              </motion.div>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <WhyVebUp />
      <Process />
      <FinalCta />
    </>
  );
}
