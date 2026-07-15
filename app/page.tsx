import type { Metadata } from "next";
import { HomePage } from "@/components/HomePage";
import { StructuredData } from "@/components/StructuredData";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "PepMedia | Peptide Marketing Agency for Growth & Compliance",
  description:
    "Specialist peptide marketing agency for paid media, compliant creative, CRO, lifecycle, AI automation, and growth strategy across wellness and regulated categories.",
  path: "/",
  absoluteTitle: true,
});

export default function Page() {
  return (
    <>
      <StructuredData />
      <HomePage />
    </>
  );
}
