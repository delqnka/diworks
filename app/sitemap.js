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
    }
  ];
}
