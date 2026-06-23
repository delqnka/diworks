export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/"
      },
      {
        userAgent: "OAI-SearchBot",
        allow: "/"
      },
      {
        userAgent: "GPTBot",
        allow: "/"
      }
    ],
    sitemap: "https://diworks.co/sitemap.xml"
  };
}
