import { createFileRoute } from "@tanstack/react-router";

import { PageHeader } from "@/components/site/PageHeader";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";

const title = "Web Design & Development Services | VebUp";
const description =
  "Business websites, landing pages, e-commerce, redesigns, SEO and maintenance — everything a small business needs to grow online.";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/services" },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Websites and digital work that move your business forward"
        description="We handle design, development, performance and ongoing support — so you can focus on running your business."
      />
      <Services detailed />
      <Process />
      <Faq />
      <FinalCta />
    </>
  );
}
