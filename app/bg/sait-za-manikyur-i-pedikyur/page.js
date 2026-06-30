import Link from "next/link";
import { AppShell } from "@/components/app-shell";
import { BookingCta } from "@/components/booking-cta";
import styles from "../sait-za-friziorski-salon/page.module.css";

const pageUrl = "https://alternine.co/bg/sait-za-manikyur-i-pedikyur";

export const metadata = {
  title: "Сайт за маникюр и педикюр с онлайн записване | Alter Nine",
  description:
    "Сайт за маникюр и педикюр по поръчка с вградена система за онлайн записване. Покажи услугите, цените и работата си професионално и приемай часове през сайта си.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Сайт за маникюр и педикюр с онлайн записване | Alter Nine",
    description:
      "Сайт за маникюр и педикюр по поръчка с вградена система за онлайн записване.",
    url: pageUrl,
    locale: "bg_BG",
  },
  twitter: {
    title: "Сайт за маникюр и педикюр с онлайн записване | Alter Nine",
    description:
      "Сайт за маникюр и педикюр по поръчка с вградена система за онлайн записване.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: "Сайт за маникюр и педикюр с онлайн записване | Alter Nine",
      inLanguage: "bg",
      about: { "@id": "https://alternine.co/#organization" },
      isPartOf: { "@id": "https://alternine.co/#website" },
    },
    {
      "@type": "Service",
      "@id": `${pageUrl}#service`,
      name: "Сайт за маникюр и педикюр с онлайн записване",
      serviceType: "Изработка на уеб сайт с вградена система за записване",
      provider: { "@id": "https://alternine.co/#organization" },
      areaServed: ["BG", "EU"],
      audience: {
        "@type": "BusinessAudience",
        audienceType: "Маникюристи, педикюристи и студиа за нокти"
      },
      inLanguage: "bg"
    },
    {
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "Какво трябва да има един сайт за маникюр и педикюр?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Сайтът трябва да показва услуги, цени, снимки на работата, свободни часове и удобен начин за записване от телефон.",
          },
        },
        {
          "@type": "Question",
          name: "Подходящ ли е за самостоятелен маникюрист?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Да. Сайтът е подходящ както за самостоятелни специалисти, така и за студиа с повече от един човек.",
          },
        },
        {
          "@type": "Question",
          name: "Може ли клиентът да запази час без да ми пише лично?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Да. Онлайн записването позволява клиентът сам да избере услуга и час директно през сайта.",
          },
        },
      ],
    },
  ],
};

export default function NailsPage() {
  return (
    <AppShell locale="bg-BG">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <p className={styles.eyebrow}>САЙТ ЗА МАНИКЮР И ПЕДИКЮР</p>
            <h1>Сайт за маникюр и педикюр с вградена система за онлайн записване</h1>
            <p className={styles.heroLead}>
              Подходящ за маникюристи, педикюристи и студиа, които искат да покажат
              работата си красиво и да приемат часове директно през собствения си сайт.
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
            <h2>Защо един маникюрист има нужда от собствен сайт</h2>
            <p className={styles.lede}>
              При услуги като маникюр и педикюр клиентът избира с очите си. Затова
              сайтът трябва едновременно да показва стила на работата ти и да направи
              записването лесно, бързо и удобно от телефон.
            </p>
          </div>
        </section>

        <section className={`${styles.section} ${styles.sectionAlt}`}>
          <div className={styles.sectionInner}>
            <h2>Какво трябва да има един добър сайт за маникюр и педикюр</h2>
            <ul className={styles.list}>
              <li>Портфолио със снимки на реална работа</li>
              <li>Ясни услуги, цени и продължителност</li>
              <li>Онлайн записване без излишно писане в чат</li>
              <li>Мобилен дизайн, съобразен с клиентите от Instagram</li>
              <li>Контакт, локация и доверителна визия</li>
            </ul>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <h2>По-малко писане, повече записани часове</h2>
            <p>
              Вместо клиентите да питат за свободни часове на ръка, сайтът може да
              поеме голяма част от този процес. Това спестява време и прави работата
              ти по-подредена още от първия контакт.
            </p>
          </div>
        </section>

        <section className={`${styles.section} ${styles.sectionAlt}`}>
          <div className={styles.sectionInner}>
            <h2>Подходящ за</h2>
            <ul className={styles.list}>
              <li>Самостоятелни маникюристи</li>
              <li>Педикюристи</li>
              <li>Студиа за маникюр и педикюр</li>
              <li>Специалисти с услуги по гел, изграждане и nail art</li>
              <li>Студиа с повече от един специалист</li>
            </ul>
          </div>
        </section>

        <section className={styles.faq}>
          <div className={styles.faqInner}>
            <h2>Често задавани въпроси</h2>
            <ul className={styles.faqList}>
              <li>
                <strong>Какво трябва да има един сайт за маникюр и педикюр?</strong>
                Сайтът трябва да показва услуги, цени, снимки на работата, свободни часове и удобен начин за записване от телефон.
              </li>
              <li>
                <strong>Подходящ ли е за самостоятелен маникюрист?</strong>
                Да. Сайтът е подходящ както за самостоятелни специалисти, така и за студиа с повече от един човек.
              </li>
              <li>
                <strong>Може ли клиентът да запази час без да ми пише лично?</strong>
                Да. Онлайн записването позволява клиентът сам да избере услуга и час директно през сайта.
              </li>
            </ul>
          </div>
        </section>

        <section className={styles.relatedSection}>
          <div className={styles.sectionInner}>
            <h2>Разгледай и други страници по ниши</h2>
            <div className={styles.relatedGrid}>
              <Link className={styles.relatedCard} href="/bg/sait-za-friziorski-salon">
                <strong>Сайт за фризьорски салон</strong>
                <span>За салони, които искат записвания, депозити и професионално присъствие онлайн.</span>
              </Link>
              <Link className={styles.relatedCard} href="/bg/sait-za-salon-za-krasota">
                <strong>Сайт за салон за красота</strong>
                <span>За салони с повече услуги и нужда от по-широко представяне.</span>
              </Link>
              <Link className={styles.relatedCard} href="/bg/sait-za-barbershop">
                <strong>Сайт за barbershop</strong>
                <span>За бизнеси, които искат характер, стил и лесно онлайн записване.</span>
              </Link>
            </div>
          </div>
        </section>

        <section className={styles.cta}>
          <div className={styles.ctaInner}>
            <p className={styles.eyebrow}>ГОТОВ ЛИ СИ ЗА ПРОМЯНА?</p>
            <h2>Готов ли си твоят бизнес за маникюр и педикюр да има сайт, който работи за него?</h2>
            <p>
              Нека изградим сайт, който показва работата ти професионално и превръща
              интереса в реални записвания.
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
