import { siteConfig } from "@/lib/seo";

const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteConfig.url}/#organization`,
  name: siteConfig.name,
  legalName: siteConfig.legalName,
  url: siteConfig.url,
  logo: {
    "@type": "ImageObject",
    url: `${siteConfig.url}/icon.svg`,
    contentUrl: `${siteConfig.url}/icon.svg`,
    width: 512,
    height: 512,
  },
  description: siteConfig.description,
  email: `mailto:${siteConfig.email}`,
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "new business",
    email: siteConfig.email,
    url: `${siteConfig.url}/contact`,
    availableLanguage: "English",
  },
  knowsAbout: [
    "Peptide marketing",
    "Paid media",
    "Marketing compliance",
    "Wellness marketing",
    "Telehealth marketing",
    "Lifecycle marketing",
    "Conversion rate optimization",
  ],
};

const website = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteConfig.url}/#website`,
  url: siteConfig.url,
  name: siteConfig.name,
  alternateName: "Pep Media",
  description: siteConfig.description,
  inLanguage: "en-US",
  publisher: {
    "@id": `${siteConfig.url}/#organization`,
  },
};

export function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify([organization, website]).replace(/</g, "\\u003c"),
      }}
    />
  );
}
