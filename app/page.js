import { LandingPage } from "@/components/landing-page";
import { siteContent } from "@/components/site-data";
import { AppShell } from "@/components/app-shell";

export const metadata = {
  title: {
    absolute: "Custom Salon Websites with Online Booking — Alter Nine"
  },
  description:
    "Alter Nine designs custom salon websites with built-in online booking — for hair salons, barbershops, beauty studios, clinics, and coaches. No Calendly, no Squarespace, no third-party booking pages.",
  alternates: {
    canonical: "https://alternine.co/",
    languages: {
      "en-US": "https://alternine.co/",
      "en-GB": "https://alternine.co/",
      en: "https://alternine.co/",
      bg: "https://alternine.co/bg",
      "x-default": "https://alternine.co/"
    }
  },
  keywords: [
    "custom salon website",
    "salon website with online booking",
    "booking website for salons",
    "barbershop website design",
    "hair salon website builder",
    "beauty salon website",
    "website with built-in booking",
    "custom website design for service businesses",
    "online booking website",
    "alter nine"
  ],
  openGraph: {
    title: "Custom Salon Websites with Online Booking — Alter Nine",
    description:
      "Custom-designed websites with built-in online booking for salons, barbershops, clinics, and studios. No Calendly, no third-party pages.",
    url: "https://alternine.co/",
    locale: "en_US",
    alternateLocale: ["en_GB", "bg_BG"]
  },
  twitter: {
    title: "Custom Salon Websites with Online Booking — Alter Nine",
    description:
      "Custom websites with built-in online booking for salons, barbershops, clinics, and studios."
  }
};

export default function HomePage() {
  return (
    <AppShell locale="en-US">
      <LandingPage locale="en" content={siteContent.en} />
    </AppShell>
  );
}
