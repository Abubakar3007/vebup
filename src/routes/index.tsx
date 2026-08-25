import { createFileRoute } from "@tanstack/react-router";

import { Hero } from "@/components/sections/Hero";
import { Trust } from "@/components/sections/Trust";
import { Services } from "@/components/sections/Services";
import { WhyVebUp } from "@/components/sections/WhyVebUp";
import { Process } from "@/components/sections/Process";
import { Portfolio } from "@/components/sections/Portfolio";
import { Pricing } from "@/components/sections/Pricing";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";

const title = "VebUp | Professional Websites for Small Businesses";
const description =
  "VebUp designs and develops modern, fast and professional websites for small businesses and growing brands.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      {
        name: "keywords",
        content:
          "website design, website development, small business website, business website, web design agency, website development India",
      },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "VebUp",
          description,
          url: "https://vebup.in",
          email: "info@vebup.info",
          areaServed: "India",
          serviceType: "Website design and development",
        }),
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <Trust />
      <Services />
      <WhyVebUp />
      <Process />
      <Portfolio limit={4} />
      <Pricing />
      <Faq />
      <FinalCta />
    </>
  );
}
