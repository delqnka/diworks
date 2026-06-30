import Link from "next/link";
import { AppShell } from "@/components/app-shell";
import { BookingCta } from "@/components/booking-cta";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import styles from "../sait-za-friziorski-salon/page.module.css";

const pageUrl = "https://alternine.co/bg/sait-za-barbershop";

export const metadata = {
  title: "Сайт за barbershop с онлайн записване",
  description:
    "Сайт за barbershop по поръчка с вградена система за онлайн записване. Покажи стила, услугите и цените си и приемай записвания директно през сайта.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Сайт за barbershop с онлайн записване",
    description:
      "Сайт за barbershop по поръчка с вградена система за онлайн записване.",
    url: pageUrl,
    locale: "bg_BG",
  },
  twitter: {
    title: "Сайт за barbershop с онлайн записване",
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
      name: "Сайт за barbershop с онлайн записване",
      inLanguage: "bg",
      about: { "@id": "https://alternine.co/#organization" },
      isPartOf: { "@id": "https://alternine.co/#website" },
    },
    {
      "@type": "Service",
      "@id": `${pageUrl}#service`,
      name: "Сайт за barbershop с онлайн записване",
      serviceType: "Изработка на уеб сайт с вградена система за записване",
      provider: { "@id": "https://alternine.co/#organization" },
      areaServed: ["BG", "EU"],
      audience: {
        "@type": "BusinessAudience",
        audienceType: "Barbershop-и и бръснари"
      },
      inLanguage: "bg"
    },
    {
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "Какво трябва да има един сайт за бръснарница?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Сайтът трябва да показва стила на бръснарницата, услугите, цените, екипа и да позволява лесно онлайн записване на час.",
          },
        },
        {
          "@type": "Question",
          name: "Подходящ ли е сайтът за салон с повече от един бръснар?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Да. Сайтът може да бъде изграден така, че да представя повече от един специалист и да поддържа различни услуги и графици.",
          },
        },
        {
          "@type": "Question",
          name: "Може ли сайтът да отразява стила на самия салон?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Да. Сайтът е по поръчка и може да бъде съобразен с визията, цветовете и характера на конкретния салон.",
          },
        },
        {
          "@type": "Question",
          name: "Чий е сайтът след пускането?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Домейнът, съдържанието и самият сайт остават твои - винаги. Единственото изключение е вградената система за записване: тя работи върху моята инфраструктура, така че ако някога приключим работа, тази част спира да работи.",
          },
        },
        {
          "@type": "Question",
          name: "Мога ли сам да правя промени в текста и снимките?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Абсолютно - не зависиш от мен. Всеки сайт идва с персонализиран админ панел, направен за телефона ти. Смени цена, качи нова снимка или редактирай описание - сайтът се обновява за секунди, без да ти трябва разработчик.",
          },
        },
        {
          "@type": "Question",
          name: "Трябва ли да плащам за хостинг или да се притеснявам за лимит на посещенията?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Не. Хостингът е включен и работи върху модерна инфраструктура, която се разширява автоматично. Дали сайтът ти има 100 посещения месечно или 100 000, плащаш същото - без изненадващи сметки и без забавяне в пикови моменти.",
          },
        },
        {
          "@type": "Question",
          name: "Ще работи ли сайтът на телефон и iPad?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Абсолютно. Всеки сайт е създаден първо за мобилни устройства и се тества на телефони, таблети и десктоп преди пускане.",
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
      <SiteHeader locale="bg" />
      <main className={styles.page} style={{ background: "#fff" }}>
        <section
          className={styles.hero}
          style={{
            backgroundImage:
              "linear-gradient(180deg, rgba(11,11,12,0.72) 0%, rgba(11,11,12,0.6) 40%, rgba(80,80,82,0.55) 70%, rgba(200,200,200,0.7) 88%, rgba(245,245,245,0.95) 96%, rgba(255,255,255,1) 100%), url('https://pub-a282b633397549478fc7e2204fa66fc2.r2.dev/barber.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className={styles.heroInner}>
            <h1>Сайт за барбъри с онлайн записвания</h1>
            <p className={styles.heroLead}>
              Собствен сайт за твоя barbershop с вградено онлайн записване, без комисионни
              и без чужд бранд между теб и клиента. Изграден по поръчка, за бръснарници
              в България, които искат сайтът да работи като част от салона.
            </p>
            <div className={styles.heroActions} style={{ flexDirection: "column", alignItems: "flex-start" }}>
              <BookingCta className={styles.primaryLink}>Нека поговорим</BookingCta>
              <p className={styles.heroHint}>
                Кликни „Нека поговорим“ - точно така клиентите ти ще резервират.
              </p>
              <Link
                className={styles.secondaryLink}
                href="/bg"
                style={{
                  background: "transparent",
                  border: "none",
                  padding: "0.85rem 0",
                  textDecoration: "underline",
                  textUnderlineOffset: "4px",
                }}
              >
                Виж началната страница
              </Link>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <p className={styles.eyebrow}>Защо да работиш с мен?</p>
            <h2>Сайт, който остава под твой контрол.</h2>
            <p className={styles.lede}>
              Най-голямото предимство на сайтовете, които изграждам, е че няма да ти се
              налага да плащаш за всяка дребна корекция.
            </p>
            <p className={styles.lede}>
              Винаги съм държала на независимостта в собствения си бизнес и точно затова
              искам да дам същото и на клиентите си.
            </p>
            <p className={styles.lede}>
              Създадох контролен панел, през който можеш сам да редактираш цени, заглавия,
              текстове, услуги, както и да качваш и триеш снимки, без да зависиш от
              програмист за всяка малка промяна.
            </p>
            <p className={styles.lede}>
              Интегрирах и изкуствен интелект, който може да прочете ценоразписа ти за
              секунда и автоматично да въведе услугите в сайта, без да се налага да ги
              добавяш ръчно.
            </p>
            <p className={styles.lede}>
              Всеки записан клиент влиза в клиентската база на сайта ти, където можеш да
              виждаш посещенията, историята на записванията и похарчените суми.
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <p className={styles.eyebrow}>Есенцията</p>
            <h2>Какво трябва да има един добър сайт за barbershop</h2>
            <ul className={styles.essentials}>
              <li>
                <span className={styles.essentialNum}>01</span>
                <span className={styles.essentialTitle}>Ясни услуги и цени</span>
                <p className={styles.essentialDesc}>
                  Прозрачност от първия скрол — клиентът знае какво получава и колко струва, преди да натисне „запиши“.
                </p>
              </li>
              <li>
                <span className={styles.essentialNum}>02</span>
                <span className={styles.essentialTitle}>Екип и стил</span>
                <p className={styles.essentialDesc}>
                  Лицата зад машинките и характерът на салона — това превръща случаен посетител в редовен клиент.
                </p>
              </li>
              <li>
                <span className={styles.essentialNum}>03</span>
                <span className={styles.essentialTitle}>Онлайн записване директно</span>
                <p className={styles.essentialDesc}>
                  Без редирект към чужда платформа и без комисионни — часът се резервира за секунди, в твоя бранд. Ти и клиентът получавате имейл с потвърждение, а след това автоматични напомнящи имейли преди часа.
                </p>
              </li>
              <li>
                <span className={styles.essentialNum}>04</span>
                <span className={styles.essentialTitle}>100% mobile first</span>
                <p className={styles.essentialDesc}>
                  Сайтът е проектиран първо за телефон, защото оттам идват клиентите ти.
                </p>
              </li>
              <li>
                <span className={styles.essentialNum}>05</span>
                <span className={styles.essentialTitle}>AI чат асистент</span>
                <p className={styles.essentialDesc}>
                  По избор — собствен AI асистент, който разговаря с клиентите ти и запазва часове вместо теб, директно през сайта, без да вдигаш телефона.
                </p>
              </li>
              <li>
                <span className={styles.essentialNum}>06</span>
                <span className={styles.essentialTitle}>Визия с характер</span>
                <p className={styles.essentialDesc}>
                  Дизайн, изграден около твоя салон с модерна технология, а не нагласен върху темплейт от 2015 год.
                </p>
              </li>
            </ul>
          </div>
        </section>

        <section className={`${styles.section} ${styles.sectionAlt}`}>
          <div className={styles.sectionInner}>
            <h2>Подходящ за</h2>
            <ul className={styles.pills}>
              <li>Самостоятелни бръснари</li>
              <li>Барбършопи с повече от един специалист</li>
            </ul>
          </div>
        </section>

        <section className={styles.faq}>
          <div className={styles.faqInner}>
            <h2>Често задавани въпроси</h2>
            <div className={styles.faqList}>
              {[
                ["Какво трябва да има един сайт за бръснарница?", "Сайтът трябва да показва стила на бръснарницата, услугите, цените, екипа и да позволява лесно онлайн записване на час."],
                ["Подходящ ли е сайтът за салон с повече от един бръснар?", "Да. Сайтът може да бъде изграден така, че да представя повече от един специалист и да поддържа различни услуги и графици."],
                ["Може ли сайтът да отразява стила на самия салон?", "Да. Сайтът е по поръчка и може да бъде съобразен с визията, цветовете и характера на конкретния салон."],
                ["Чий е сайтът след пускането?", "Домейнът, съдържанието и самият сайт остават твои - винаги. Единственото изключение е вградената система за записване: тя работи върху моята инфраструктура, така че ако някога приключим работа, тази част спира да работи."],
                ["Мога ли сам да правя промени в текста и снимките?", "Абсолютно - не зависиш от мен. Всеки сайт идва с персонализиран админ панел, направен за телефона ти. Смени цена, качи нова снимка или редактирай описание - сайтът се обновява за секунди, без да ти трябва разработчик."],
                ["Трябва ли да плащам за хостинг или да се притеснявам за лимит на посещенията?", "Не. Хостингът е включен и работи върху модерна инфраструктура, която се разширява автоматично. Дали сайтът ти има 100 посещения месечно или 100 000, плащаш същото - без изненадващи сметки и без забавяне в пикови моменти."],
                ["Ще работи ли сайтът на телефон и iPad?", "Абсолютно. Всеки сайт е създаден първо за мобилни устройства и се тества на телефони, таблети и десктоп преди пускане."],
              ].map(([q, a]) => (
                <details key={q} className={styles.faqItem}>
                  <summary className={styles.faqQ}>
                    <span>{q}</span>
                    <span className={styles.faqIcon} aria-hidden="true">+</span>
                  </summary>
                  <p className={styles.faqA}>{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.relatedSection}>
          <div className={styles.sectionInner}>
            <h2>Разгледай и други страници по ниши</h2>
            <ul className={styles.relatedLinks}>
              <li><Link href="/bg/sait-za-friziorski-salon">Сайт за фризьорски салон</Link></li>
              <li><Link href="/bg/sait-za-salon-za-krasota">Сайт за салон за красота</Link></li>
              <li><Link href="/bg/sait-za-manikyur-i-pedikyur">Сайт за маникюр и педикюр</Link></li>
            </ul>
          </div>
        </section>

        <section className={styles.cta}>
          <div className={styles.ctaInner}>
            <h2>Готов ли си твоят салон да има сайт, който работи за него?</h2>
            <div className={styles.heroActions} style={{ flexDirection: "column", alignItems: "center", gap: "1rem" }}>
              <BookingCta className={styles.primaryLink}>Нека поговорим</BookingCta>
              <Link
                href="/bg"
                style={{
                  background: "transparent",
                  border: "none",
                  padding: "0.2rem 0",
                  color: "#fff",
                  fontSize: "0.85rem",
                  textDecoration: "underline",
                  textUnderlineOffset: "4px",
                }}
              >
                Начална страница
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter locale="bg" />
    </AppShell>
  );
}
