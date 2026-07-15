import type { Metadata } from "next";
import { LegalShell } from "@/components/LegalShell";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Terms of Use",
  description: "Read the terms governing access to and use of the PepMedia website and its marketing content.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <LegalShell
      title="Terms of Use"
      description="The terms governing access to and use of the PepMedia website."
      updated="July 15, 2026"
    >
      <section>
        <h2>1. Acceptance</h2>
        <p>
          By accessing or using this website, you agree to these Terms of Use. If you do not agree, do not use the
          website. Separate written agreements govern any paid services provided by PepMedia.
        </p>
      </section>
      <section>
        <h2>2. Website purpose</h2>
        <p>
          This website provides general information about PepMedia&apos;s marketing capabilities, experience, and
          services. Website content is provided for informational and business-evaluation purposes only and may be
          updated without notice.
        </p>
      </section>
      <section>
        <h2>3. No medical, legal, or regulatory advice</h2>
        <p>
          PepMedia is a marketing agency. Website content is not medical, legal, financial, or regulatory advice and
          should not be relied upon as such. Businesses remain responsible for their products, claims, approvals,
          platform compliance, and legal obligations.
        </p>
      </section>
      <section>
        <h2>4. Performance information</h2>
        <p>
          Metrics, case examples, timelines, and performance statements describe selected historical experiences or
          agency-wide observations. They are not guarantees of future results. Outcomes vary based on offer quality,
          market conditions, budgets, account history, execution, and other factors.
        </p>
      </section>
      <section>
        <h2>5. Intellectual property</h2>
        <p>
          The website and its original text, design, graphics, software, trademarks, and other content are owned by
          PepMedia or used with permission. You may view and print reasonable portions for internal business
          evaluation, but may not reproduce, distribute, modify, sell, or create derivative works without permission.
        </p>
      </section>
      <section>
        <h2>6. Acceptable use</h2>
        <ul>
          <li>Do not interfere with the website, its infrastructure, or another user&apos;s access.</li>
          <li>Do not attempt unauthorized access, automated extraction, or security testing.</li>
          <li>Do not submit unlawful, misleading, infringing, or malicious material.</li>
          <li>Do not misrepresent your identity or affiliation.</li>
        </ul>
      </section>
      <section>
        <h2>7. Third-party services</h2>
        <p>
          Links to third-party websites, platforms, or the PepMedia client portal are provided for convenience. Those
          services operate under their own terms and privacy practices. PepMedia is not responsible for third-party
          content, availability, or security.
        </p>
      </section>
      <section>
        <h2>8. Client services</h2>
        <p>
          A website inquiry does not create an agency-client relationship. Scope, fees, responsibilities,
          confidentiality, data handling, intellectual property, and performance terms for paid work are established
          only in a signed services agreement.
        </p>
      </section>
      <section>
        <h2>9. Disclaimers</h2>
        <p>
          The website is provided on an “as is” and “as available” basis to the extent permitted by law. PepMedia
          disclaims warranties of uninterrupted availability, error-free operation, fitness for a particular purpose,
          and non-infringement.
        </p>
      </section>
      <section>
        <h2>10. Limitation of liability</h2>
        <p>
          To the fullest extent permitted by law, PepMedia will not be liable for indirect, incidental, special,
          consequential, exemplary, or punitive damages arising from use of or inability to use this website.
        </p>
      </section>
      <section>
        <h2>11. Changes to these terms</h2>
        <p>
          We may update these terms as the website or our practices change. Continued use after an update constitutes
          acceptance of the revised terms. The effective date above identifies the latest revision.
        </p>
      </section>
      <section>
        <h2>12. Contact</h2>
        <p>
          Questions about these terms may be sent to
          {" "}
          <a href="mailto:hello@pepmedia.com">hello@pepmedia.com</a>.
        </p>
      </section>
    </LegalShell>
  );
}
