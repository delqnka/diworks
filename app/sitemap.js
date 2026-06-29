const LAST_MODIFIED = new Date("2026-06-27");

export default function sitemap() {
  return [
    {
      url: "https://alternine.co/",
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 1.0,
      alternates: {
        languages: {
          en: "https://alternine.co/",
          bg: "https://alternine.co/bg"
        }
      }
    },
    {
      url: "https://alternine.co/bg",
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 1.0,
      alternates: {
        languages: {
          en: "https://alternine.co/",
          bg: "https://alternine.co/bg"
        }
      }
    },
    {
      url: "https://alternine.co/bg/sait-za-friziorski-salon",
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://alternine.co/bg/sait-za-salon-za-krasota",
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://alternine.co/bg/sait-za-manikyur-i-pedikyur",
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://alternine.co/bg/sait-za-barbershop",
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://alternine.co/privacy",
      lastModified: LAST_MODIFIED,
      changeFrequency: "yearly",
      priority: 0.3,
      alternates: {
        languages: {
          en: "https://alternine.co/privacy",
          bg: "https://alternine.co/bg/privacy"
        }
      }
    },
    {
      url: "https://alternine.co/bg/privacy",
      lastModified: LAST_MODIFIED,
      changeFrequency: "yearly",
      priority: 0.3,
      alternates: {
        languages: {
          en: "https://alternine.co/privacy",
          bg: "https://alternine.co/bg/privacy"
        }
      }
    },
    {
      url: "https://alternine.co/terms",
      lastModified: LAST_MODIFIED,
      changeFrequency: "yearly",
      priority: 0.3,
      alternates: {
        languages: {
          en: "https://alternine.co/terms",
          bg: "https://alternine.co/bg/terms"
        }
      }
    },
    {
      url: "https://alternine.co/bg/terms",
      lastModified: LAST_MODIFIED,
      changeFrequency: "yearly",
      priority: 0.3,
      alternates: {
        languages: {
          en: "https://alternine.co/terms",
          bg: "https://alternine.co/bg/terms"
        }
      }
    }
  ];
}
