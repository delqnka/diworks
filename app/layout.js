import "./globals.css";
import "@clicka1/booking/styles.css";
import Script from "next/script";
import { headers } from "next/headers";
import { SpeedInsights } from "@vercel/speed-insights/next";
import CookieBanner from "@/components/cookie-banner";
import WhatsAppButton from "@/components/whatsapp-button";
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

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover"
};

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
  verification: {
    other: {
      "msvalidate.01": "E6DAE1F5785F865D04F7A7365F99EA5B"
    }
  },
  icons: {
    icon: [
      { url: "/9-fav.svg", type: "image/svg+xml" },
      { url: "/favicon.png", sizes: "96x96", type: "image/png" }
    ],
    apple: [{ url: "/favicon.png", sizes: "180x180", type: "image/png" }]
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
  const requestHeaders = await headers();
  const htmlLang = requestHeaders.get("x-locale") === "bg" ? "bg" : "en";

  return (
    <html
      lang={htmlLang}
      suppressHydrationWarning
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
        <Script id="ga-consent-default" strategy="beforeInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
window.gtag = gtag;
gtag('consent', 'default', {
  ad_storage: 'denied',
  ad_user_data: 'denied',
  ad_personalization: 'denied',
  analytics_storage: 'denied',
  wait_for_update: 500
});`}
        </Script>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`gtag('js', new Date());
gtag('config', '${GA_ID}');`}
        </Script>
        {children}
        <WhatsAppButton />
        <CookieBanner />
        <SpeedInsights />
      </body>
    </html>
  );
}
