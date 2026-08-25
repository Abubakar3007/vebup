import { createFileRoute } from "@tanstack/react-router";

import { PageHeader } from "@/components/site/PageHeader";
import { LegalBody, type LegalSection } from "@/components/site/LegalBody";
import { SITE } from "@/lib/site-data";

const title = "Terms & Conditions | VebUp";
const description =
  "The terms that apply when you use the VebUp website and when you engage VebUp for website design and development work.";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/terms" },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: TermsPage,
});

const sections: LegalSection[] = [
  {
    heading: "Using this website",
    paragraphs: [
      "By accessing this website you agree to these terms. The content here is provided for general information about our services and does not form a binding offer on its own.",
    ],
  },
  {
    heading: "Portfolio and demo work",
    paragraphs: [
      "The projects shown in our portfolio are in-house demo concepts created by VebUp to illustrate our design and development approach. They are not client websites and no client relationship, endorsement or result is implied by them.",
    ],
  },
  {
    heading: "Quotes, pricing and scope",
    paragraphs: [
      "Prices shown on this website are indicative starting points. The final price depends on the agreed scope, pages, features and integrations, and is confirmed in a written quote before work begins. Work outside the agreed scope is quoted separately.",
    ],
  },
  {
    heading: "Payments",
    paragraphs: [
      "Unless agreed otherwise in writing, projects begin after an advance payment, with the balance due before launch or handover. Domain, hosting, plugins, stock assets and other third-party subscriptions are billed by their providers and are not included in our fees unless stated.",
    ],
  },
  {
    heading: "Client responsibilities",
    paragraphs: [
      "You are responsible for providing content, images, brand assets, access credentials and timely feedback. You confirm that any material you supply does not infringe third-party rights. Delays in providing materials or feedback will extend the project timeline.",
    ],
  },
  {
    heading: "Revisions and delivery",
    paragraphs: [
      "Each package includes a reasonable number of revision rounds at the design and build stages, which we confirm in the project quote. Timelines given are estimates made in good faith and depend on scope and responsiveness from both sides.",
    ],
  },
  {
    heading: "Intellectual property",
    paragraphs: [
      "On full payment, you own the final website design and custom code delivered for your project. VebUp retains ownership of underlying tools, libraries and reusable components, and may display the completed work in its portfolio unless you request otherwise in writing.",
    ],
  },
  {
    heading: "Limitation of liability",
    paragraphs: [
      "We take care to deliver reliable, secure work, but we do not guarantee specific business outcomes, search rankings or revenue. To the extent permitted by law, our total liability for any claim relating to a project is limited to the fees paid for that project.",
    ],
  },
  {
    heading: "Contact",
    paragraphs: [`Questions about these terms can be sent to ${SITE.email}.`],
  },
];

function TermsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Terms & Conditions"
        description="Last updated: 1 January 2026. These terms cover the use of this website and our services."
      />
      <LegalBody sections={sections} />
    </>
  );
}
