import "./globals.css";
import "@clicka1/booking/styles.css";
import { headers } from "next/headers";
import Script from "next/script";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Geist, Inter, Kanit, Cormorant_Garamond, Instrument_Sans } from "next/font/google";

const GA_ID = "G-6D4DSTYWH7";

const geist = Geist({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
  variable: "--font-geist"
});
const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
  variable: "--font-inter"
});
const kanit = Kanit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-kanit"
});
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
  variable: "--font-cormorant"
});
const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-instrument"
});

export const metadata = {
  metadataBase: new URL("https://alternine.co"),
  title: {
    default: "Alter Nine",
    template: "%s | Alter Nine"
  },
  description: "Custom websites with integrated booking systems for modern service businesses.",
  applicationName: "Alter Nine",
  authors: [{ name: "Delyana" }],
  creator: "Delyana",
  publisher: "Alter Nine",
  icons: {
    icon: [
      { url: "/9-fav.svg", type: "image/svg+xml" },
      { url: "/favicon.png", sizes: "96x96", type: "image/png" }
    ]
  },
  openGraph: {
    siteName: "Alter Nine",
    images: ["/social-card.svg"],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    images: ["/social-card.svg"]
  }
};

export default async function RootLayout({ children }) {
  const hdrs = await headers();
  const pathname = hdrs.get("x-pathname") || "/";
  const lang = pathname.startsWith("/bg") ? "bg" : "en";
  return (
    <html
      lang={lang}
      className={`${geist.variable} ${inter.variable} ${kanit.variable} ${cormorant.variable} ${instrumentSans.variable}`}
    >
      <head>
        <link rel="preconnect" href="https://db.onlinewebfonts.com" />
        <link rel="preconnect" href="https://pub-a282b633397549478fc7e2204fa66fc2.r2.dev" />
        <link rel="preconnect" href="https://app.alternine.co" />
        <link
          rel="preload"
          as="style"
          href="https://db.onlinewebfonts.com/c/2bf40ab72ea4897a3fd9b6e48b233a19?family=Garamond"
        />
        <link
          rel="stylesheet"
          href="https://db.onlinewebfonts.com/c/2bf40ab72ea4897a3fd9b6e48b233a19?family=Garamond"
          media="print"
          suppressHydrationWarning
        />
        <noscript>
          <link
            rel="stylesheet"
            href="https://db.onlinewebfonts.com/c/2bf40ab72ea4897a3fd9b6e48b233a19?family=Garamond"
          />
        </noscript>
        <script
          dangerouslySetInnerHTML={{
            __html: `document.querySelectorAll('link[media="print"][href*="onlinewebfonts"]').forEach(l=>l.media='all');`
          }}
        />
      </head>
      <body>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}');`}
        </Script>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
