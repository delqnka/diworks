import Link from "next/link";
import { AppShell } from "@/components/app-shell";
import { BookingCta } from "@/components/booking-cta";
import styles from "./page.module.css";

const pageUrl = "https://alternine.co/bg/sait-za-friziorski-salon";

export const metadata = {
  title: "Сайт за фризьорски салон с онлайн записване | Alter Nine",
  description:
    "Сайт за фризьорски салон по поръчка с вградена система за онлайн записване. Приемай часове, депозити и запитвания директно през собствения си сайт.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Сайт за фризьорски салон с онлайн записване | Alter Nine",
    description:
      "Сайт за фризьорски салон по поръчка с вградена система за онлайн записване.",
    url: pageUrl,
    locale: "bg_BG",
  },
  twitter: {
    title: "Сайт за фризьорски салон с онлайн записване | Alter Nine",
    description:
      "Сайт за фризьорски салон по поръчка с вградена система за онлайн записване.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: "Сайт за фризьорски салон с онлайн записване | Alter Nine",
      inLanguage: "bg",
      about: { "@id": "https://alternine.co/#organization" },
      isPartOf: { "@id": "https://alternine.co/#website" },
    },
    {
      "@type": "Service",
      "@id": `${pageUrl}#service`,
      name: "Сайт за фризьорски салон с онлайн записване",
      serviceType: "Изработка на уеб сайт с вградена система за записване",
      provider: { "@id": "https://alternine.co/#organization" },
      areaServed: ["BG", "EU"],
      audience: {
        "@type": "BusinessAudience",
        audienceType: "Фризьорски салони и фризьори"
      },
      inLanguage: "bg"
    },
    {
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "Колко време отнема изработката на сайт за фризьорски салон?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Повечето проекти се завършват за 1 до 2 седмици според сложността, съдържанието и нужните функционалности.",
          },
        },
        {
          "@type": "Question",
          name: "Мога ли сама да сменям цени, снимки и услуги?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Да. Всеки сайт идва с лесен за ползване админ панел, съобразен и с телефон, така че да можеш да обновяваш съдържанието без разработчик.",
          },
        },
        {
          "@type": "Question",
          name: "Може ли сайтът да приема онлайн записвания и депозити?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Да. Системата за записване е вградена директно в сайта и може да приема часове, депозити и потвърждения.",
          },
        },
        {
          "@type": "Question",
          name: "Може ли сайтът да е на български и английски?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Да. При нужда сайтът може да бъде изграден двуезично, така че да обслужва и български, и чуждестранни клиенти.",
          },
        },
      ],
    },
  ],
};

export default function HairSalonPage() {
  return (
    <AppShell locale="bg-BG">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <p className={styles.eyebrow}>САЙТ ЗА ФРИЗЬОРСКИ САЛОН</p>
            <h1>Сайт за фризьорски салон с вградена система за онлайн записване</h1>
            <p className={styles.heroLead}>
              Създаден за салони, които искат да представят услугите си професионално
              и да приемат записвания, депозити и запитвания директно през собствения си сайт.
            </p>
            <div className={styles.heroActions}>
              <BookingCta className={styles.primaryLink}>Нека поговорим</BookingCta>
              <a
                className={styles.secondaryLink}
                href="https://salonurban.online/bg"
                target="_blank"
                rel="noopener noreferrer"
              >
                Виж реален пример
              </a>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <h2>Защо един фризьорски салон има нужда от собствен сайт</h2>
            <p className={styles.lede}>
              Instagram може да привлича внимание, но не е достатъчен за бизнес, който
              иска да изглежда професионално и да превръща интереса в записани часове.
              Собственият сайт показва услугите ти, изгражда доверие и води клиента
              директно до действие.
            </p>
          </div>
        </section>

        <section className={`${styles.section} ${styles.sectionAlt}`}>
          <div className={styles.sectionInner}>
            <h2>Какво трябва да има един добър сайт за фризьорски салон</h2>
            <ul className={styles.list}>
              <li>Ясно представяне на услуги, терапии и цени</li>
              <li>Галерия с реални резултати и усещане за стила на салона</li>
              <li>Онлайн записване на час директно през сайта</li>
              <li>Възможност за депозити при нужда</li>
              <li>Контакт, локация и лесна връзка от телефон</li>
              <li>Мобилна версия, която работи бързо и без дразнещи проблеми</li>
            </ul>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <h2>Онлайн записване директно през твоя сайт</h2>
            <p>
              Клиентите не трябва да напускат сайта ти, за да си запазят час. Когато
              системата за записване е вградена, всичко остава под твоя бранд, на твоя
              домейн и в изживяване, което изглежда като част от салона ти, а не като
              чужда платформа.
            </p>
          </div>
        </section>

        <section className={`${styles.section} ${styles.sectionAlt}`}>
          <div className={styles.sectionInner}>
            <h2>Сайт по поръчка, а не шаблон</h2>
            <p>
              Всеки фризьорски салон има различен стил, различни услуги и различна
              клиентела. Затова сайтът трябва да е съобразен с твоята визия, начин на
              работа и цели, а не да изглежда като поредния масов шаблон.
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <h2>Подходящ за</h2>
            <ul className={styles.list}>
              <li>Фризьорски салони</li>
              <li>Студиа за коса</li>
              <li>Салони за боядисване и терапии</li>
              <li>Самостоятелни фризьори</li>
              <li>Салони с повече от един специалист</li>
            </ul>
          </div>
        </section>

        <section className={`${styles.section} ${styles.sectionAlt}`}>
          <div className={styles.sectionInner}>
            <h2>Какво получаваш</h2>
            <ul className={styles.list}>
              <li>Сайт по поръчка, създаден за твоя салон</li>
              <li>Вградена система за записване</li>
              <li>Приемане на депозити</li>
              <li>Админ панел, удобен и от телефон</li>
              <li>Бързо зареждане и добра SEO основа</li>
              <li>Възможност за двуезична версия при нужда</li>
            </ul>
          </div>
        </section>

        <section className={styles.faq}>
          <div className={styles.faqInner}>
            <h2>Често задавани въпроси</h2>
            <ul className={styles.faqList}>
              <li>
                <strong>Колко време отнема изработката на сайт за фризьорски салон?</strong>
                Повечето проекти се завършват за 1 до 2 седмици според сложността, съдържанието и нужните функционалности.
              </li>
              <li>
                <strong>Мога ли сама да сменям цени, снимки и услуги?</strong>
                Да. Всеки сайт идва с лесен за ползване админ панел, съобразен и с телефон.
              </li>
              <li>
                <strong>Може ли сайтът да приема онлайн записвания и депозити?</strong>
                Да. Системата за записване е вградена директно в сайта и може да приема часове, депозити и потвърждения.
              </li>
              <li>
                <strong>Може ли сайтът да е на български и английски?</strong>
                Да. При нужда сайтът може да бъде изграден двуезично.
              </li>
            </ul>
          </div>
        </section>

        <section className={styles.relatedSection}>
          <div className={styles.sectionInner}>
            <h2>Разгледай и други страници по ниши</h2>
            <div className={styles.relatedGrid}>
              <Link className={styles.relatedCard} href="/bg/sait-za-salon-za-krasota">
                <strong>Сайт за салон за красота</strong>
                <span>За салони с повече услуги, терапии и силно визуално представяне.</span>
              </Link>
              <Link className={styles.relatedCard} href="/bg/sait-za-manikyur-i-pedikyur">
                <strong>Сайт за маникюр и педикюр</strong>
                <span>За специалисти и студиа, които разчитат на силно портфолио и лесно записване.</span>
              </Link>
              <Link className={styles.relatedCard} href="/bg/sait-za-barbershop">
                <strong>Сайт за barbershop</strong>
                <span>За barbershop-и, които искат стилен сайт и уверен път до записване.</span>
              </Link>
            </div>
          </div>
        </section>

        <section className={styles.cta}>
          <div className={styles.ctaInner}>
            <p className={styles.eyebrow}>ГОТОВ ЛИ СИ ЗА ПРОМЯНА?</p>
            <h2>Готов ли си твоят фризьорски салон да има сайт, който работи за него?</h2>
            <p>
              Нека създадем уебсайт, който представя работата ти професионално и
              превръща интереса в реални записвания.
            </p>
            <div className={styles.heroActions} style={{ flexDirection: "column", alignItems: "center", gap: "1rem" }}>
              <BookingCta className={styles.primaryLink}>Нека поговорим</BookingCta>
              <Link className={styles.secondaryLink} href="/bg">
                Назад към началната страница
              </Link>
            </div>
          </div>
        </section>
      </main>
    </AppShell>
  );
}
