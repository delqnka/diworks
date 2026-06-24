import { LandingPage } from "@/components/landing-page";
import { siteContent } from "@/components/site-data";
import { AppShell } from "@/components/app-shell";

export const metadata = {
  title: "Custom Websites with Integrated Booking",
  description:
    "DiWorks designs custom websites with integrated booking systems so clients can discover, trust, and book without leaving your website.",
  alternates: {
    canonical: "https://diworks.co/",
    languages: {
      en: "https://diworks.co/",
      bg: "https://diworks.co/bg/"
    }
  },
  keywords: [
    "custom website design",
    "integrated booking system",
    "salon website",
    "clinic website",
    "service business website",
    "diworks"
  ],
  openGraph: {
    title: "DiWorks | Custom Websites with Integrated Booking",
    description:
      "Premium custom websites with built in booking for modern service businesses.",
    url: "https://diworks.co/",
    locale: "en_GB"
  },
  twitter: {
    title: "DiWorks | Custom Websites with Integrated Booking",
    description:
      "Custom websites with fully integrated booking systems that keep customers on your own site."
  }
};

export default function HomePage() {
  return (
    <AppShell locale="en-US">
      <LandingPage locale="en" content={siteContent.en} />
    </AppShell>
  );
}
