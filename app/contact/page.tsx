import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, LogIn, Mail } from "lucide-react";
import { ContactForm } from "@/components/LeadForms";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Contact PepMedia",
  description:
    "Contact PepMedia about peptide marketing, new business, strategic partnerships, media inquiries, or an existing client account.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main className="subpage-main">
        <section className="subpage-hero compact-hero">
          <div className="eyebrow">[ Contact ]</div>
          <h1>
            Start the <span className="signal-text">conversation.</span>
          </h1>
          <p>
            New business, partnerships, press, or support. Send the right signal and we&apos;ll route it to the right
            person.
          </p>
        </section>

        <section className="subpage-section">
          <div className="subpage-grid contact-grid">
            <aside className="contact-options">
              <a href="mailto:hello@pepmedia.com">
                <Mail aria-hidden="true" />
                <span>
                  <small>General email</small>
                  <strong>hello@pepmedia.com</strong>
                </span>
                <ArrowUpRight aria-hidden="true" />
              </a>
              <a href="https://pepmedia-dashboard.vercel.app/login" target="_blank" rel="noopener noreferrer">
                <LogIn aria-hidden="true" />
                <span>
                  <small>Existing client</small>
                  <strong>Open Client Login</strong>
                </span>
                <ArrowUpRight aria-hidden="true" />
              </a>
              <div className="contact-callout">
                <span>Growth inquiry?</span>
                <p>Use the dedicated strategy call request so we can review fit before the conversation.</p>
                <Link className="text-link" href="/book-call">
                  Book a Call <ArrowUpRight aria-hidden="true" />
                </Link>
              </div>
            </aside>
            <ContactForm />
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
