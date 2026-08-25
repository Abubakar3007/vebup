import { createFileRoute } from "@tanstack/react-router";

import { PageHeader } from "@/components/site/PageHeader";
import { LegalBody, type LegalSection } from "@/components/site/LegalBody";
import { SITE } from "@/lib/site-data";

const title = "Privacy Policy | VebUp";
const description =
  "How VebUp collects, uses and protects the information you share through our website and enquiry form.";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/privacy" },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: PrivacyPage,
});

const sections: LegalSection[] = [
  {
    heading: "Information we collect",
    paragraphs: [
      `We only collect information you choose to give us. When you use the enquiry form on this website, your email application prepares a message containing the name, email address, business name, phone number, service, budget and project details you entered. That message is sent from your own email account to ${SITE.email}.`,
      "We do not sell, rent or trade your information, and we do not use it for advertising.",
    ],
  },
  {
    heading: "How we use your information",
    paragraphs: [
      "We use the details you send to understand your requirement, reply to your enquiry, prepare a proposal and deliver the work you engage us for. If we begin a project together, we may keep project-related correspondence and files for the duration of our engagement and for a reasonable period afterwards for reference and legal record-keeping.",
    ],
  },
  {
    heading: "Cookies and analytics",
    paragraphs: [
      "This website does not set advertising or tracking cookies. If we add analytics in the future, it will be limited to aggregated, privacy-respecting usage measurement and this policy will be updated accordingly.",
    ],
  },
  {
    heading: "Third-party services",
    paragraphs: [
      "Our website is delivered through hosting and content-delivery providers, which may process technical information such as IP addresses and request logs for security and reliability. Client projects may involve third-party services such as domain registrars, hosting providers, payment gateways or analytics tools; those services are governed by their own privacy policies.",
    ],
  },
  {
    heading: "Data security",
    paragraphs: [
      "We take reasonable technical and organisational measures to protect the information we hold, including encrypted connections and access controls. No method of transmission or storage is completely secure, so we cannot guarantee absolute security.",
    ],
  },
  {
    heading: "Your choices",
    paragraphs: [
      `You may ask us to correct or delete the personal information we hold about you at any time by emailing ${SITE.email}. We will respond within a reasonable period, subject to any records we are required to retain.`,
    ],
  },
  {
    heading: "Changes to this policy",
    paragraphs: [
      "We may update this policy as our services evolve. The latest version will always be available on this page.",
    ],
  },
  {
    heading: "Contact",
    paragraphs: [
      `Questions about this policy can be sent to ${SITE.email} and we will be happy to help.`,
    ],
  },
];

function PrivacyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Privacy Policy"
        description="Last updated: 1 January 2026. This policy explains what we collect and how we handle it."
      />
      <LegalBody sections={sections} />
    </>
  );
}
