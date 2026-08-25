import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/lib/site-data";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";

export function Faq() {
  return (
    <section className="section-y bg-surface" aria-labelledby="faq-title">
      <div className="container-page">
        <SectionHeading
          eyebrow="FAQ"
          title={<span id="faq-title">Questions, answered</span>}
          description="Still unsure about something? Email us and we will reply with a straight answer."
        />

        <Reveal className="mx-auto mt-12 max-w-3xl" delay={0.05}>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={faq.question}
                value={`item-${i}`}
                className="overflow-hidden rounded-2xl border border-border bg-card px-5 shadow-soft transition-colors data-[state=open]:border-primary/30"
              >
                <AccordionTrigger className="py-5 text-left text-base font-semibold text-foreground hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
