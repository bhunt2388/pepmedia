import type { Metadata } from "next";

export const siteConfig = {
  name: "PepMedia",
  legalName: "PepMedia",
  url: "https://pepmedia.com",
  email: "hello@pepmedia.com",
  defaultTitle: "PepMedia | The Peptide Marketing Agency",
  description:
    "Performance marketing for peptide brands, wellness companies, telehealth providers, and research chemical suppliers.",
  socialImage: "/opengraph-image",
};

type PageMetadata = {
  title: string;
  description: string;
  path: string;
  absoluteTitle?: boolean;
};

export function createPageMetadata({ title, description, path, absoluteTitle = false }: PageMetadata): Metadata {
  const canonicalPath = path === "/" ? "/" : path.replace(/\/$/, "");
  const socialTitle = absoluteTitle ? title : `${title} | ${siteConfig.name}`;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title: socialTitle,
      description,
      url: canonicalPath,
      siteName: siteConfig.name,
      locale: "en_US",
      type: "website",
      images: [
        {
          url: siteConfig.socialImage,
          width: 1200,
          height: 630,
          alt: "PepMedia — The Peptide Marketing Agency",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [siteConfig.socialImage],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}
