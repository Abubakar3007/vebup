import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { Mail, Clock, MessageSquare, CheckCircle2, AlertCircle } from "lucide-react";

import { PageHeader } from "@/components/site/PageHeader";
import { FinalCta } from "@/components/sections/FinalCta";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/button";
import { SITE, serviceOptions, budgetOptions } from "@/lib/site-data";
import { cn } from "@/lib/utils";

const title = "Contact VebUp — Let's Build Something Great";
const description =
  "Tell us about your business and what you need. Share your project details and we'll reply from info@vebup.info with next steps.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/contact" },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

type Fields = {
  name: string;
  email: string;
  business: string;
  phone: string;
  service: string;
  budget: string;
  message: string;
};

const empty: Fields = {
  name: "",
  email: "",
  business: "",
  phone: "",
  service: "",
  budget: "",
  message: "",
};

const fieldClass =
  "w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground shadow-soft outline-none transition-colors placeholder:text-muted-foreground focus:border-primary/50";

function validate(values: Fields) {
  const errors: Partial<Record<keyof Fields, string>> = {};
  if (values.name.trim().length < 2) errors.name = "Please enter your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim()))
    errors.email = "Please enter a valid email address.";
  if (values.phone.trim() && !/^[+\d][\d\s\-()]{6,}$/.test(values.phone.trim()))
    errors.phone = "Please enter a valid phone number.";
  if (!values.service) errors.service = "Please choose a service.";
  if (values.message.trim().length < 15)
    errors.message = "Please add a little more detail (at least 15 characters).";
  return errors;
}

function ContactPage() {
  const [values, setValues] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [status, setStatus] = useState<"idle" | "ready">("idle");

  const set = (key: keyof Fields) => (event: { target: { value: string } }) => {
    setValues((v) => ({ ...v, [key]: event.target.value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      setStatus("idle");
      return;
    }

    const body = [
      `Name: ${values.name}`,
      `Email: ${values.email}`,
      `Business: ${values.business || "—"}`,
      `Phone: ${values.phone || "—"}`,
      `Service needed: ${values.service}`,
      `Budget: ${values.budget || "Not specified"}`,
      "",
      values.message,
    ].join("\n");

    setStatus("ready");
    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(
      `Website enquiry — ${values.business || values.name}`,
    )}&body=${encodeURIComponent(body)}`;
  };

  const errorId = (key: keyof Fields) => (errors[key] ? `${key}-error` : undefined);

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's Build Something Great"
        description="Share a few details about your business and what you need. We usually reply within one working day."
      />

      <section className="section-y" aria-labelledby="contact-form-title">
        <div className="container-page grid gap-10 lg:grid-cols-[1fr_1.35fr] lg:gap-14">
          <Reveal className="space-y-4">
            <div className="card-premium p-6">
              <span
                aria-hidden="true"
                className="grid h-11 w-11 place-items-center rounded-xl bg-primary-soft text-primary"
              >
                <Mail className="h-5 w-5" />
              </span>
              <h2 className="mt-4 text-base font-semibold text-foreground">Email us directly</h2>
              <a
                href={`mailto:${SITE.email}`}
                className="mt-1 inline-block text-sm font-medium text-primary hover:underline"
              >
                {SITE.email}
              </a>
            </div>
            <div className="card-premium p-6">
              <span
                aria-hidden="true"
                className="grid h-11 w-11 place-items-center rounded-xl bg-primary-soft text-primary"
              >
                <Clock className="h-5 w-5" />
              </span>
              <h2 className="mt-4 text-base font-semibold text-foreground">Response time</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                We typically respond within one business day, Monday to Saturday.
              </p>
            </div>
            <div className="card-premium p-6">
              <span
                aria-hidden="true"
                className="grid h-11 w-11 place-items-center rounded-xl bg-primary-soft text-primary"
              >
                <MessageSquare className="h-5 w-5" />
              </span>
              <h2 className="mt-4 text-base font-semibold text-foreground">What happens next</h2>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                We’ll discuss your requirements, define the scope and timeline, then provide a clear quote before we get started.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <form
              onSubmit={onSubmit}
              noValidate
              className="rounded-3xl border border-border bg-card p-6 shadow-lift md:p-8"
            >
              <h2 id="contact-form-title" className="text-xl font-bold text-foreground">
                Project enquiry
              </h2>
              <p className="mt-1.5 text-sm text-muted-foreground">
                This form opens your email app with the details pre-filled, so nothing is sent
                without you.
              </p>

              <div className="mt-7 grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="text-sm font-medium text-foreground">
                    Name <span className="text-destructive">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    autoComplete="name"
                    value={values.name}
                    onChange={set("name")}
                    aria-invalid={!!errors.name}
                    aria-describedby={errorId("name")}
                    className={cn(fieldClass, "mt-2", errors.name && "border-destructive")}
                    placeholder="Your full name"
                  />
                  {errors.name && (
                    <p id="name-error" className="mt-1.5 text-xs text-destructive">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="text-sm font-medium text-foreground">
                    Email <span className="text-destructive">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={values.email}
                    onChange={set("email")}
                    aria-invalid={!!errors.email}
                    aria-describedby={errorId("email")}
                    className={cn(fieldClass, "mt-2", errors.email && "border-destructive")}
                    placeholder="you@company.com"
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-1.5 text-xs text-destructive">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="business" className="text-sm font-medium text-foreground">
                    Business name
                  </label>
                  <input
                    id="business"
                    name="business"
                    autoComplete="organization"
                    value={values.business}
                    onChange={set("business")}
                    className={cn(fieldClass, "mt-2")}
                    placeholder="Your business"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="text-sm font-medium text-foreground">
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    value={values.phone}
                    onChange={set("phone")}
                    aria-invalid={!!errors.phone}
                    aria-describedby={errorId("phone")}
                    className={cn(fieldClass, "mt-2", errors.phone && "border-destructive")}
                    placeholder="+91 90000 00000"
                  />
                  {errors.phone && (
                    <p id="phone-error" className="mt-1.5 text-xs text-destructive">
                      {errors.phone}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="service" className="text-sm font-medium text-foreground">
                    Service needed <span className="text-destructive">*</span>
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={values.service}
                    onChange={set("service")}
                    aria-invalid={!!errors.service}
                    aria-describedby={errorId("service")}
                    className={cn(fieldClass, "mt-2", errors.service && "border-destructive")}
                  >
                    <option value="">Select a service</option>
                    {serviceOptions.map((o) => (
                      <option key={o} value={o}>
                        {o}
                      </option>
                    ))}
                  </select>
                  {errors.service && (
                    <p id="service-error" className="mt-1.5 text-xs text-destructive">
                      {errors.service}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="budget" className="text-sm font-medium text-foreground">
                    Budget
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={values.budget}
                    onChange={set("budget")}
                    className={cn(fieldClass, "mt-2")}
                  >
                    <option value="">Select a range</option>
                    {budgetOptions.map((o) => (
                      <option key={o} value={o}>
                        {o}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">
                    Message <span className="text-destructive">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={values.message}
                    onChange={set("message")}
                    aria-invalid={!!errors.message}
                    aria-describedby={errorId("message")}
                    className={cn(fieldClass, "mt-2 resize-y", errors.message && "border-destructive")}
                    placeholder="Tell us about your business, what you sell and what you'd like the website to do."
                  />
                  {errors.message && (
                    <p id="message-error" className="mt-1.5 text-xs text-destructive">
                      {errors.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <Button type="submit" variant="hero" size="lg" className="w-full sm:w-auto">
                  Send Enquiry
                </Button>
                <p className="text-xs text-muted-foreground">
                  Prefer email? Write to{" "}
                  <a href={`mailto:${SITE.email}`} className="font-medium text-primary hover:underline">
                    {SITE.email}
                  </a>
                </p>
              </div>

              <div aria-live="polite" className="mt-4">
                <AnimatePresence mode="wait">
                  {status === "ready" && (
                    <motion.p
                      key="ready"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      className="flex items-start gap-2 rounded-xl border border-border bg-primary-soft px-4 py-3 text-sm text-accent-foreground"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                      Your details are ready. We've opened your email app with the enquiry — press
                      send there and it reaches us at {SITE.email}.
                    </motion.p>
                  )}
                  {status === "idle" && Object.keys(errors).length > 0 && (
                    <motion.p
                      key="errors"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      className="flex items-start gap-2 rounded-xl border border-destructive/30 bg-destructive/5 px-4 py-3 text-sm text-destructive"
                    >
                      <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                      Please fix the highlighted fields and try again.
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </form>
          </Reveal>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
