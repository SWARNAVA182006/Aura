import { SITE_CONFIG } from "@/config/site";
import type { Metadata } from "next";

export function generateSiteMetadata(): Metadata {
  return {
    metadataBase: new URL(SITE_CONFIG.url),
    title: {
      default: SITE_CONFIG.title,
      template: `%s | ${SITE_CONFIG.name}`,
    },
    description: SITE_CONFIG.description,
    authors: [{ name: SITE_CONFIG.author.name, url: SITE_CONFIG.url }],
    creator: SITE_CONFIG.author.name,
    publisher: SITE_CONFIG.author.name,
    keywords: [
      "Swarnava Sarkar",
      "AI & ML Engineer",
      "Software Architect",
      "Machine Learning Engineer",
      "LLM Infrastructure",
      "Next.js 15",
      "React 19",
      "TypeScript",
      "Deep Learning",
      "Computer Vision",
      "RAG Architecture",
      "Full-Stack AI",
      "Bengaluru AI ML Engineer",
    ],
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: SITE_CONFIG.url,
      title: SITE_CONFIG.title,
      description: SITE_CONFIG.description,
      siteName: SITE_CONFIG.name,
      images: [
        {
          url: SITE_CONFIG.ogImage,
          width: 1200,
          height: 630,
          alt: SITE_CONFIG.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: SITE_CONFIG.title,
      description: SITE_CONFIG.description,
      creator: "@swarnavasarkar",
      images: [SITE_CONFIG.ogImage],
    },
    alternates: {
      canonical: SITE_CONFIG.url,
    },
  };
}

export function generatePersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: SITE_CONFIG.author.name,
    url: SITE_CONFIG.url,
    jobTitle: SITE_CONFIG.author.role,
    worksFor: {
      "@type": "Organization",
      name: "Autonomous AI Research & Systems",
    },
    description: SITE_CONFIG.author.bio,
    sameAs: [
      SITE_CONFIG.social.github,
      SITE_CONFIG.social.linkedin,
      SITE_CONFIG.social.twitter,
    ],
    knowsAbout: [
      "Artificial Intelligence",
      "Large Language Models",
      "Autonomous Agents",
      "Distributed Systems",
      "Frontend Systems Architecture",
      "Next.js & React 19",
    ],
  };
}
