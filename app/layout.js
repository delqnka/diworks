import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://diworks.co"),
  title: {
    default: "DiWorks",
    template: "%s | DiWorks"
  },
  description: "Custom websites with integrated booking systems for modern service businesses.",
  applicationName: "DiWorks",
  authors: [{ name: "Delyana" }],
  creator: "Delyana",
  publisher: "DiWorks",
  icons: {
    icon: "/logo-mark.svg"
  },
  openGraph: {
    siteName: "DiWorks",
    images: ["/social-card.svg"],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    images: ["/social-card.svg"]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
