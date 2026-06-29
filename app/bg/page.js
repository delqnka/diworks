import { LandingPage } from "@/components/landing-page";
import { siteContent } from "@/components/site-data";
import { AppShell } from "@/components/app-shell";

export const metadata = {
  title: {
    absolute: "Сайтове по поръчка с онлайн записване | Alter Nine"
  },
  description:
    "Alter Nine създава сайтове по поръчка с вградена система за онлайн записване — за салони, клиники, студия и консултанти. Без платформи, без комисионни, без външни страници.",
  alternates: {
    canonical: "https://alternine.co/bg",
    languages: {
      en: "https://alternine.co/",
      bg: "https://alternine.co/bg"
    }
  },
  keywords: [
    "сайт по поръчка",
    "сайт с онлайн записване",
    "система за онлайн записване",
    "сайт за салон",
    "сайт за клиника",
    "сайт за студио",
    "уеб дизайн за услуги",
    "alter nine"
  ],
  openGraph: {
    title: "Сайтове по поръчка с онлайн записване | Alter Nine",
    description:
      "Сайтове по поръчка с вградена система за онлайн записване — за салони, клиники, студия и консултанти. Без платформи, без комисионни.",
    url: "https://alternine.co/bg",
    locale: "bg_BG"
  },
  twitter: {
    title: "Сайтове по поръчка с онлайн записване | Alter Nine",
    description:
      "Сайтове по поръчка с вградена система за онлайн записване. Без платформи, без комисионни, без външни страници."
  }
};

export default function BulgarianPage() {
  return (
    <AppShell locale="bg-BG">
      <LandingPage locale="bg" content={siteContent.bg} />
    </AppShell>
  );
}
