import type { Metadata } from "next";
import { LegalShell } from "@/components/LegalShell";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Privacy Policy",
  description: "Read the PepMedia privacy policy and information-handling practices for website visitors and inquiries.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <LegalShell
      title="Privacy Policy"
      description="How PepMedia handles information submitted through this website and our direct communications."
      updated="July 15, 2026"
    >
      <section>
        <h2>1. Overview</h2>
        <p>
          This policy explains how PepMedia collects, uses, shares, and protects information when you visit this
          website, contact us, or request a strategy call. It applies to website interactions and does not replace
          privacy terms contained in a separate client services agreement.
        </p>
      </section>
      <section>
        <h2>2. Information you provide</h2>
        <p>
          You may provide your name, email address, company, website, marketing goals, advertising spend range, and
          any other details included in an inquiry. The website&apos;s contact and call-request forms prepare an email in
          your email application; your information is transmitted when you choose to send that email.
        </p>
      </section>
      <section>
        <h2>3. Information collected automatically</h2>
        <p>
          Our hosting and security providers may process standard technical information such as IP address, browser
          type, device information, requested pages, timestamps, and diagnostic logs. This information supports site
          delivery, security, and troubleshooting.
        </p>
      </section>
      <section>
        <h2>4. How we use information</h2>
        <ul>
          <li>Respond to inquiries and evaluate potential engagements.</li>
          <li>Provide, secure, maintain, and improve the website.</li>
          <li>Communicate about requested services and existing client relationships.</li>
          <li>Comply with legal obligations and protect our rights.</li>
        </ul>
      </section>
      <section>
        <h2>5. When information is shared</h2>
        <p>
          We may share information with service providers that support hosting, security, communications, and
          business operations; when required by law or valid legal process; or as part of a business transaction. We
          do not sell personal information submitted through this website.
        </p>
      </section>
      <section>
        <h2>6. Cookies and analytics</h2>
        <p>
          The current website does not use optional advertising cookies. Essential hosting or security technologies
          may be used to deliver and protect the site. If optional analytics or advertising technologies are added,
          this policy and any required consent controls will be updated.
        </p>
      </section>
      <section>
        <h2>7. Retention and security</h2>
        <p>
          We retain information for as long as reasonably necessary for the purpose it was collected, to maintain
          business records, resolve disputes, and meet legal obligations. We use reasonable administrative and
          technical safeguards, but no transmission or storage method is completely secure.
        </p>
      </section>
      <section>
        <h2>8. Your choices</h2>
        <p>
          You may request access, correction, or deletion of information you have provided, subject to applicable law
          and legitimate recordkeeping obligations. You may also opt out of non-transactional communications at any
          time.
        </p>
      </section>
      <section>
        <h2>9. Children</h2>
        <p>
          This website is intended for business users and is not directed to children under 13. We do not knowingly
          collect personal information from children through this website.
        </p>
      </section>
      <section>
        <h2>10. Updates and contact</h2>
        <p>
          We may update this policy as our services or legal obligations change. The effective date above indicates
          the latest revision. Questions or privacy requests may be sent to
          {" "}
          <a href="mailto:hello@pepmedia.com">hello@pepmedia.com</a>.
        </p>
      </section>
    </LegalShell>
  );
}
