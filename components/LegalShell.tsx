import type { ReactNode } from "react";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "./SiteChrome";

type LegalShellProps = {
  title: string;
  description: string;
  updated: string;
  children: ReactNode;
};

export function LegalShell({ title, description, updated, children }: LegalShellProps) {
  return (
    <>
      <SiteHeader />
      <main className="legal-page">
        <header className="legal-header">
          <div className="eyebrow">[ Legal ]</div>
          <h1>{title}</h1>
          <p>{description}</p>
          <span>Effective {updated}</span>
        </header>
        <div className="legal-layout">
          <aside className="legal-nav" aria-label="Legal documents">
            <span>Documents</span>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Use</Link>
            <Link href="/contact">Contact</Link>
          </aside>
          <article className="legal-document">{children}</article>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
