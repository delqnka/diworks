import Link from "next/link";
import { AppShell } from "@/components/app-shell";
import { BookingCta } from "@/components/booking-cta";
import styles from "../sait-za-friziorski-salon/page.module.css";

const pageUrl = "https://alternine.co/bg/sait-za-barbershop";

export const metadata = {
  title: "Сайт за barbershop с онлайн записване | Alter Nine",
  description:
    "Сайт за barbershop по поръчка с вградена система за онлайн записване. Покажи стила, услугите и цените си и приемай записвания директно през сайта.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Сайт за barbershop с онлайн записване | Alter Nine",
    description:
      "Сайт за barbershop по поръчка с вградена система за онлайн записване.",
    url: pageUrl,
    locale: "bg_BG",
  },
  twitter: {
    title: "Сайт за barbershop с онлайн записване | Alter Nine",
    description:
      "Сайт за barbershop по поръчка с вградена система за онлайн записване.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: "Сайт за barbershop с онлайн записване | Alter Nine",
      inLanguage: "bg",
      about: { "@id": "https://alternine.co/#organization" },
      isPartOf: { "@id": "https://alternine.co/#website" },
    },
    {
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "Какво трябва да има един сайт за barbershop?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Сайтът трябва да показва стила на бръснарницата, услугите, цените, екипа и да позволява лесно онлайн записване на час.",
          },
        },
        {
          "@type": "Question",
          name: "Подходящ ли е сайтът за barbershop с повече от един бръснар?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Да. Сайтът може да бъде изграден така, че да представя повече от един специалист и да поддържа различни услуги и графици.",
          },
        },
        {
          "@type": "Question",
          name: "Може ли сайтът да отразява стила на самия barbershop?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Да. Сайтът е по поръчка и може да бъде съобразен с визията, цветовете и характера на конкретния barbershop.",
          },
        },
      ],
    },
  ],
};

export default function BarbershopPage() {
  return (
    <AppShell locale="bg-BG">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <p className={styles.eyebrow}>САЙТ ЗА BARBERSHOP</p>
            <h1>Сайт за barbershop с вградена система за онлайн записване</h1>
            <p className={styles.heroLead}>
              Подходящ за бръснарници, които искат силна визия, ясно представени услуги
              и лесен път от първо посещение до записан час.
            </p>
            <div className={styles.heroActions}>
              <BookingCta className={styles.primaryLink}>Нека поговорим</BookingCta>
              <Link className={styles.secondaryLink} href="/bg">
                Виж началната страница
              </Link>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <h2>Защо един barbershop има нужда от собствен сайт</h2>
            <p className={styles.lede}>
              Силен barbershop не се продава само с адрес и Instagram профил. Собственият
              сайт показва атмосферата, работата, екипа и прави записването лесно за клиента.
            </p>
          </div>
        </section>

        <section className={`${styles.section} ${styles.sectionAlt}`}>
          <div className={styles.sectionInner}>
            <h2>Какво трябва да има един добър сайт за barbershop</h2>
            <ul className={styles.list}>
              <li>Ясни услуги и цени</li>
              <li>Представяне на екипа и стила на бръснарницата</li>
              <li>Онлайн записване на час директно през сайта</li>
              <li>Локация, контакт и лесна връзка от телефон</li>
              <li>Визия, която пасва на характера на самия barbershop</li>
            </ul>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <h2>Сайт, който показва стила и води до действие</h2>
            <p>
              При barbershop-ите визията е важна, но не е достатъчна сама по себе си.
              Сайтът трябва едновременно да изглежда уверено и да води клиента бързо
              към записване, без триене и излишни стъпки.
            </p>
          </div>
        </section>

        <section className={`${styles.section} ${styles.sectionAlt}`}>
          <div className={styles.sectionInner}>
            <h2>Подходящ за</h2>
            <ul className={styles.list}>
              <li>Самостоятелни бръснари</li>
              <li>Barbershop с повече от един специалист</li>
              <li>Премиум бръснарници</li>
              <li>Студиа с услуги за коса, брада и оформяне</li>
            </ul>
          </div>
        </section>

        <section className={styles.faq}>
          <div className={styles.faqInner}>
            <h2>Често задавани въпроси</h2>
            <ul className={styles.faqList}>
              <li>
                <strong>Какво трябва да има един сайт за barbershop?</strong>
                Сайтът трябва да показва стила на бръснарницата, услугите, цените, екипа и да позволява лесно онлайн записване на час.
              </li>
              <li>
                <strong>Подходящ ли е сайтът за barbershop с повече от един бръснар?</strong>
                Да. Сайтът може да бъде изграден така, че да представя повече от един специалист и да поддържа различни услуги и графици.
              </li>
              <li>
                <strong>Може ли сайтът да отразява стила на самия barbershop?</strong>
                Да. Сайтът е по поръчка и може да бъде съобразен с визията, цветовете и характера на конкретния barbershop.
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
                <span>За салони, които искат силно представяне на услуги и директни записвания.</span>
              </Link>
              <Link className={styles.relatedCard} href="/bg/sait-za-salon-za-krasota">
                <strong>Сайт за салон за красота</strong>
                <span>За салони с повече услуги, терапии и по-широко портфолио.</span>
              </Link>
              <Link className={styles.relatedCard} href="/bg/sait-za-manikyur-i-pedikyur">
                <strong>Сайт за маникюр и педикюр</strong>
                <span>За специалисти, при които визията и лесното записване са ключови.</span>
              </Link>
            </div>
          </div>
        </section>

        <section className={styles.cta}>
          <div className={styles.ctaInner}>
            <p className={styles.eyebrow}>ГОТОВ ЛИ СИ ЗА ПРОМЯНА?</p>
            <h2>Готов ли си твоят barbershop да има сайт, който работи за него?</h2>
            <p>
              Нека изградим сайт, който представя стила ти уверено и превръща
              посещенията в реални записвания.
            </p>
            <div className={styles.heroActions}>
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
