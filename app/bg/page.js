import { LandingPage } from "@/components/landing-page";
import { siteContent } from "@/components/site-data";
import { AppShell } from "@/components/app-shell";

export const metadata = {
  title: "Къстъм сайтове с интегрирано онлайн записване",
  description:
    "DiWorks създава къстъм сайтове с интегрирана система за записвания, така че клиентите ви да резервират без да напускат сайта ви.",
  alternates: {
    canonical: "https://diworks.co/bg/",
    languages: {
      en: "https://diworks.co/",
      bg: "https://diworks.co/bg/"
    }
  },
  keywords: [
    "къстъм сайт",
    "сайт с онлайн записване",
    "сайт за салон",
    "сайт за клиника",
    "уеб дизайн за услуги",
    "diworks"
  ],
  openGraph: {
    title: "DiWorks | Къстъм сайтове с интегрирано онлайн записване",
    description:
      "Премиум къстъм сайтове с вградена буукинг система за модерни бизнеси с услуги.",
    url: "https://diworks.co/bg/",
    locale: "bg_BG"
  },
  twitter: {
    title: "DiWorks | Къстъм сайтове с интегрирано онлайн записване",
    description:
      "Къстъм сайтове с напълно интегрирана система за записване, която държи клиентите във вашия собствен сайт."
  }
};

export default function BulgarianPage() {
  return (
    <AppShell locale="bg-BG">
      <LandingPage locale="bg" content={siteContent.bg} />
    </AppShell>
  );
}
