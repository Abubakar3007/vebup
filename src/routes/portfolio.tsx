import { createFileRoute } from "@tanstack/react-router";

import { PageHeader } from "@/components/site/PageHeader";
import { Portfolio } from "@/components/sections/Portfolio";
import { FinalCta } from "@/components/sections/FinalCta";

const title = "Portfolio — Website Concepts by VebUp";
const description =
  "Demo website concepts for restaurants, salons, gyms, local services, consultants and online stores, designed and built by VebUp.";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/portfolio" },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/portfolio" }],
  }),
  component: PortfolioPage,
});

function PortfolioPage() {
  return (
    <>
      <PageHeader
        eyebrow="Portfolio"
        title="Concept work built to show how we think"
        description="These are in-house demo projects, not client websites. Each one shows the structure, design language and conversion flow we would build for that industry."
      />
      <Portfolio />
      <FinalCta />
    </>
  );
}
