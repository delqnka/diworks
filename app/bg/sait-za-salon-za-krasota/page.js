import Link from "next/link";
import { AppShell } from "@/components/app-shell";
import { BookingCta } from "@/components/booking-cta";
import styles from "../sait-za-friziorski-salon/page.module.css";

const pageUrl = "https://alternine.co/bg/sait-za-salon-za-krasota";

export const metadata = {
  title: "Сайт за салон за красота с онлайн записване | Alter Nine",
  description:
    "Сайт за салон за красота по поръчка с вградена система за онлайн записване. Представи услугите си професионално и приемай записвания през собствения си сайт.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Сайт за салон за красота с онлайн записване | Alter Nine",
    description:
      "Сайт за салон за красота по поръчка с вградена система за онлайн записване.",
    url: pageUrl,
    locale: "bg_BG",
  },
  twitter: {
    title: "Сайт за салон за красота с онлайн записване | Alter Nine",
    description:
      "Сайт за салон за красота по поръчка с вградена система за онлайн записване.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: "Сайт за салон за красота с онлайн записване | Alter Nine",
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
          name: "Какво трябва да има един сайт за салон за красота?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Добре изграден сайт за салон за красота трябва да показва услугите, цените, резултатите, локацията и да позволява лесно онлайн записване от телефон.",
          },
        },
        {
          "@type": "Question",
          name: "Може ли сайтът да приема записвания и депозити?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Да. Системата за записване може да приема часове, депозити и потвърждения директно през сайта.",
          },
        },
        {
          "@type": "Question",
          name: "Подходящ ли е сайтът за повече от една услуга?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Да. Сайтът може да бъде структуриран за козметични процедури, терапии, мигли, вежди, почиствания и други услуги в един салон.",
          },
        },
      ],
    },
  ],
};

export default function BeautySalonPage() {
  return (
    <AppShell locale="bg-BG">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <p className={styles.eyebrow}>САЙТ ЗА САЛОН ЗА КРАСОТА</p>
            <h1>Сайт за салон за красота с вградена система за онлайн записване</h1>
            <p className={styles.heroLead}>
              Създаден за салони, които искат да изглеждат професионално онлайн,
              да представят услугите си ясно и да приемат записвания директно през сайта си.
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
            <h2>Защо салонът за красота има нужда от собствен сайт</h2>
            <p className={styles.lede}>
              Социалните мрежи могат да показват работата ти, но не създават същото
              доверие като добре изграден собствен сайт. Сайтът подрежда услугите ти,
              показва реални резултати и води клиента директно до записване.
            </p>
          </div>
        </section>

        <section className={`${styles.section} ${styles.sectionAlt}`}>
          <div className={styles.sectionInner}>
            <h2>Какво трябва да има един добър сайт за салон за красота</h2>
            <ul className={styles.list}>
              <li>Ясно подредени услуги, терапии и цени</li>
              <li>Галерия с резултати и доверие в работата ти</li>
              <li>Онлайн записване на час и възможност за депозити</li>
              <li>Контакт, адрес и лесна връзка от мобилен телефон</li>
              <li>Дизайн, който отговаря на стила на салона ти</li>
            </ul>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <h2>Онлайн записване, което остава под твоя бранд</h2>
            <p>
              Когато записването се случва директно в сайта ти, клиентът не попада в
              чужда платформа и не се разсейва от други бизнеси. Това прави цялото
              изживяване по-чисто, по-професионално и по-доверително.
            </p>
          </div>
        </section>

        <section className={`${styles.section} ${styles.sectionAlt}`}>
          <div className={styles.sectionInner}>
            <h2>Подходящ за</h2>
            <ul className={styles.list}>
              <li>Салони за красота</li>
              <li>Козметични студиа</li>
              <li>Студиа за мигли и вежди</li>
              <li>Студиа за терапии и почиствания</li>
              <li>Бизнеси с повече от една услуга и специалист</li>
            </ul>
          </div>
        </section>

        <section className={styles.faq}>
          <div className={styles.faqInner}>
            <h2>Често задавани въпроси</h2>
            <ul className={styles.faqList}>
              <li>
                <strong>Какво трябва да има един сайт за салон за красота?</strong>
                Добре изграден сайт за салон за красота трябва да показва услугите, цените, резултатите, локацията и да позволява лесно онлайн записване от телефон.
              </li>
              <li>
                <strong>Може ли сайтът да приема записвания и депозити?</strong>
                Да. Системата за записване може да приема часове, депозити и потвърждения директно през сайта.
              </li>
              <li>
                <strong>Подходящ ли е сайтът за повече от една услуга?</strong>
                Да. Сайтът може да бъде структуриран за различни услуги в рамките на един салон.
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
                <span>За салони, които искат услуги, цени и записване на едно място.</span>
              </Link>
              <Link className={styles.relatedCard} href="/bg/sait-za-manikyur-i-pedikyur">
                <strong>Сайт за маникюр и педикюр</strong>
                <span>За студиа и специалисти, които искат да покажат работата си по най-добрия начин.</span>
              </Link>
              <Link className={styles.relatedCard} href="/bg/sait-za-barbershop">
                <strong>Сайт за barbershop</strong>
                <span>За barbershop-и, които търсят силна визия и директни записвания.</span>
              </Link>
            </div>
          </div>
        </section>

        <section className={styles.cta}>
          <div className={styles.ctaInner}>
            <p className={styles.eyebrow}>ГОТОВ ЛИ СИ ЗА ПРОМЯНА?</p>
            <h2>Готов ли си салонът ти за красота да има сайт, който работи за него?</h2>
            <p>
              Нека изградим сайт, който представя бизнеса ти професионално и превръща
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
