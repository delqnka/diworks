import "./globals.css";
import "@clicka1/booking/styles.css";

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
      <head>
        <link
          rel="stylesheet"
          href="https://db.onlinewebfonts.com/c/2bf40ab72ea4897a3fd9b6e48b233a19?family=Garamond"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500&family=Inter:wght@300;400;500&family=Kanit:wght@300;400;500;600;700;800;900&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
