import { LandingPage } from "@/components/landing-page";
import { siteContent } from "@/components/site-data";
import { AppShell } from "@/components/app-shell";

export const metadata = {
  title: {
    absolute: "Custom Websites with Built-in Booking — Alter Nine"
  },
  description:
    "Alter Nine builds custom-designed websites with integrated booking for salons, clinics, coaches, and studios. No Calendly, no third-party pages.",
  alternates: {
    canonical: "https://alternine.co/",
    languages: {
      en: "https://alternine.co/",
      bg: "https://alternine.co/bg/"
    }
  },
  keywords: [
    "custom website design",
    "integrated booking system",
    "salon website",
    "clinic website",
    "service business website",
    "alter nine"
  ],
  openGraph: {
    title: "Custom Websites with Built-in Booking — Alter Nine",
    description:
      "Custom-designed websites with integrated booking for salons, clinics, coaches, and studios. No Calendly, no third-party pages.",
    url: "https://alternine.co/",
    locale: "en_GB"
  },
  twitter: {
    title: "Custom Websites with Built-in Booking — Alter Nine",
    description:
      "Custom-designed websites with integrated booking for salons, clinics, coaches, and studios."
  }
};

export default function HomePage() {
  return (
    <AppShell locale="en-US">
      <LandingPage locale="en" content={siteContent.en} />
    </AppShell>
  );
}
