import type { Metadata } from "next";
import { ArrowRight, Check } from "lucide-react";
import { BookCallForm } from "@/components/LeadForms";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Book a Peptide Marketing Strategy Call",
  description:
    "Request a PepMedia strategy call and paid media account audit for your peptide, wellness, telehealth, or research chemical brand.",
  path: "/book-call",
});

const agenda = [
  "Your current acquisition economics and growth targets",
  "Platform, compliance, and account constraints",
  "The highest-leverage moves for the next 90 days",
];

export default function BookCallPage() {
  return (
    <>
      <SiteHeader />
      <main className="subpage-main">
        <section className="subpage-hero">
          <div className="eyebrow">[ Strategy Call ]</div>
          <h1>
            Let&apos;s map the <span className="signal-text">next 90 days.</span>
          </h1>
          <p>
            Bring us the account, the offer, and the real numbers. We&apos;ll identify where growth is being constrained
            and what it will take to scale responsibly.
          </p>
          <a className="text-link" href="#request">
            Start your request <ArrowRight aria-hidden="true" />
          </a>
        </section>

        <section id="request" className="subpage-section">
          <div className="subpage-grid">
            <aside className="request-context">
              <div className="eyebrow">[ What We&apos;ll Cover ]</div>
              <h2>A working session, not a sales script.</h2>
              <ul className="check-list">
                {agenda.map((item) => (
                  <li key={item}>
                    <Check aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <dl className="request-facts">
                <div>
                  <dt>Best fit</dt>
                  <dd>$20K+/mo ad spend</dd>
                </div>
                <div>
                  <dt>Launch window</dt>
                  <dd>7–14 days</dd>
                </div>
                <div>
                  <dt>Call format</dt>
                  <dd>Video strategy session</dd>
                </div>
              </dl>
            </aside>
            <BookCallForm />
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
