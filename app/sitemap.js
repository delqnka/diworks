const LAST_MODIFIED = new Date("2026-06-30");

const homeAlternates = {
  languages: {
    en: "https://alternine.co/",
    bg: "https://alternine.co/bg",
    "x-default": "https://alternine.co/"
  }
};

const privacyAlternates = {
  languages: {
    en: "https://alternine.co/privacy",
    bg: "https://alternine.co/bg/privacy",
    "x-default": "https://alternine.co/privacy"
  }
};

const termsAlternates = {
  languages: {
    en: "https://alternine.co/terms",
    bg: "https://alternine.co/bg/terms",
    "x-default": "https://alternine.co/terms"
  }
};

const bgIndustryPages = [
  "sait-za-friziorski-salon",
  "sait-za-salon-za-krasota",
  "sait-za-manikyur-i-pedikyur",
  "sait-za-barbershop"
];

export default function sitemap() {
  return [
    {
      url: "https://alternine.co/",
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 1.0,
      alternates: homeAlternates
    },
    {
      url: "https://alternine.co/bg",
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 1.0,
      alternates: homeAlternates
    },
    ...bgIndustryPages.map((slug) => ({
      url: `https://alternine.co/bg/${slug}`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: {
        languages: {
          bg: `https://alternine.co/bg/${slug}`,
          "x-default": `https://alternine.co/bg/${slug}`
        }
      }
    })),
    {
      url: "https://alternine.co/privacy",
      lastModified: LAST_MODIFIED,
      changeFrequency: "yearly",
      priority: 0.3,
      alternates: privacyAlternates
    },
    {
      url: "https://alternine.co/bg/privacy",
      lastModified: LAST_MODIFIED,
      changeFrequency: "yearly",
      priority: 0.3,
      alternates: privacyAlternates
    },
    {
      url: "https://alternine.co/terms",
      lastModified: LAST_MODIFIED,
      changeFrequency: "yearly",
      priority: 0.3,
      alternates: termsAlternates
    },
    {
      url: "https://alternine.co/bg/terms",
      lastModified: LAST_MODIFIED,
      changeFrequency: "yearly",
      priority: 0.3,
      alternates: termsAlternates
    }
  ];
}
