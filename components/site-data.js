const R2 =
  process.env.NEXT_PUBLIC_R2_PUBLIC_URL ||
  "https://pub-a282b633397549478fc7e2204fa66fc2.r2.dev";

const organizationBase = {
  "@type": "Organization",
  "@id": "https://alternine.co/#organization",
  name: "Alter Nine",
  url: "https://alternine.co/",
  logo: "https://alternine.co/logo-mark.svg",
  email: "hello@alternine.co",
  founder: {
    "@type": "Person",
    name: "Delyana"
  },
  areaServed: ["Europe", "United Kingdom", "United States"]
};

export const siteContent = {
  en: {
    lang: "en",
    htmlLang: "en",
    pageUrl: "https://alternine.co/",
    switchHref: "/bg",
    switchLabel: "BG",
    navHow: "How it works",
    navCta: "Let's talk",
    heroEyebrow: "WEBSITES WITH BUILT IN BOOKING",
    heroTitleStart: "Custom websites with a",
    heroTitleAccent: "built-in booking",
    heroTitleEnd: "system",
    heroLead:
      "Perfect for service businesses that want to accept bookings, deposits and manage appointments from one place.",
    heroSecondary: "Try the bookings",
    heroTrust: "No third-party booking pages. No booking platforms. Everything happens on your website.",
    miniSite: "Your website",
    bookingBadge: "Integrated booking",
    bookingStatus: "Live",
    bookingService: "Signature Facial",
    bookingDuration: "45 min",
    bookingTime: "Tuesday 11:00",
    bookingTimeStatus: "Confirmed",
    bookingPills: ["Your domain", "No redirects", "Instant emails"],
    metricKicker: "Customer journey",
    metricText: "Shorter clicks. Better trust.",
    whyEyebrow: "WHY THIS CONVERTS",
    whyTitle: "Every extra click costs trust.",
    whyAccent: "Every clean step helps.",
    compareBadLabel: "HOW MOST BUSINESSES HANDLE BOOKINGS",
    compareBadFlow: ["Website", "Then", "Calendly, Fresha or another external platform", "Then", "Booking complete"],
    compareBadText:
      "When customers leave your website to make a booking, you lose control over the experience and often lose conversions.",
    compareGoodLabel: "THE ALTER NINE WAY",
    compareGoodFlow: ["Website", "Then", "Booking complete"],
    compareGoodText:
      "Everything happens on your website. Your customers stay on your brand, on your domain, and inside a booking experience designed specifically for your business.",
    compareGoodChips: ["No redirects", "No external platforms", "No unnecessary steps"],
    storyEyebrow: "",
    storyTitle: "How it",
    storyAccent: "started?",
    storyParagraphs: [
      "I never expected running a beauty salon to lead me into software development.",
      "But it did.",
      "While running my salon, I became fascinated by programming. What started as curiosity turned into late nights building websites, experimenting with code and eventually creating my own booking software.",
      "I realised businesses shouldn't have to choose between a beautiful website and a booking system that actually works.",
      "That's why I started this one-man-show agency Urban Again.",
      "I build websites for service businesses that are not only beautiful, but genuinely useful - from online bookings and automation to an experience your customers actually enjoy."
    ],
    storyCta: "Let's talk",
    missionEyebrow: "THE MISSION",
    missionTitle: "Your bookings shouldn't live on someone else's",
    missionAccent: "brand.",
    missionTitleEnd: "",
    missionSubtitle: "Neither should your reviews.",
    missionText:
      "I know because I ran a salon myself. Most service businesses rely on platforms like Fresha or Treatwell. They send customers to a marketplace where they're surrounded by competitors and your business becomes just another listing.\n\nThe booking happens. Your brand doesn't.\n\nI created my service to change that. **Every website I build includes a fully integrated booking experience that lives on your own domain, under your own brand.**",
    portfolioEyebrow: "SELECTED WORK",
    portfolioTitle: "Recent",
    portfolioTitleAccent: "projects",
    portfolioProjects: [
      {
        name: "Urban by Delyana",
        category: "Client",
        description:
          "Hair coloring salon in Varna. A bilingual website (Bulgarian and English) with an integrated booking experience built around their services and pricing.",
        ctaLabel: "Live Project",
        href: "https://salonurban.online",
        images: [
          `${R2}/IMG_2137.jpg`,
          `${R2}/IMG_2138.jpg`,
          `${R2}/IMG_2139.jpg`,
        ],
      },
      {
        name: "Kozrlab",
        category: "Client",
        description:
          "Car detailing studio in Varna. A custom site paired with a Telegram bot that gives the owner full control: they update services, prices, photos and videos directly from the bot, and every new booking from the form lands as a Telegram message they can manage on the go.",
        ctaLabel: "Live Project",
        href: "https://kozrlab.com",
        images: [
          `${R2}/IMG_2141.jpg`,
          `${R2}/IMG_2143.jpg`,
          `${R2}/IMG_2144.jpg`,
        ],
      },
      {
        name: "Salon Paradise",
        category: "Concept",
        description:
          "A concept site for a face treatment salon with the full booking system integrated and ready to go live. The service visuals are placeholder mockups. The real focus is on the booking flow and overall experience.",
        href: "https://salon-paradise.vercel.app",
        isDemo: true,
        ctaLabel: "View Demo",
        images: [
          `${R2}/IMG_2145.jpg`,
          `${R2}/IMG_2146.jpg`,
          `${R2}/IMG_2147.jpg`,
        ],
      },
    ],
    storyAuthor: "Delyana Nikolova",
    storyAuthorRole: "Founder • Designer • Developer",
    founderQuote:
      "A better booking experience feels small on paper, but it changes how professional your whole business feels online.",
    founderName: "Delyana",
    founderRole: "Founder of Alter Nine",
    featuresEyebrow: "MORE THAN A WEBSITE",
    featuresTitle: "A website that becomes",
    featuresAccent: "part of your business.",
    featuresSubtitle: "Not just a place to showcase your services, but a website that helps you take bookings, manage appointments and save time every day.",
    features: [
      ["Custom Website", "A bespoke website designed around your business and your brand."],
      ["Built-in Booking", "Bookings, deposits and confirmations happen directly on your website."],
      ["Business Dashboard", "Manage appointments, services and availability from one simple place."],
      ["AI-Powered Tools", "Import your price list, assist customers and save hours of manual work."],
      ["Smart Automation", "Automatic reminders, confirmations and review requests."],
      ["Your Brand. Your Customers.", "Everything stays on your website. Your customer data remains yours."]
    ],
    whoEyebrow: "WHO WE WORK WITH",
    whoTitle: "Designed for modern service businesses",
    industries: [
      "Hair Salons",
      "Beauty Salons",
      "Barbershops",
      "Nail Salons",
      "Manicure & Pedicure Studios",
      "Cosmetologists",
      "Lash & Brow Artists",
      "Tattoo Studios",
      "Massage Therapists",
      "Physiotherapists",
      "Clinics",
      "Wellness Studios",
      "Personal Trainers",
      "Coaches",
      "Consultants",
      "Aestheticians",
      "Permanent Makeup Artists",
      "Waxing Studios",
      "Skin Care Clinics"
    ],
    reasonsEyebrow: "WHY BUSINESSES CHOOSE ALTER NINE",
    reasons: [
      "Booking happens directly on your website",
      "A smoother customer experience",
      "No dependency on third party booking pages",
      "A stronger and more professional brand",
      "Built specifically around your business",
      "Fast turnaround and clear communication",
      "Designed for long term growth"
    ],
    pillarsEyebrow: "MY FOUR PILLARS",
    pillarsTitle: "My four pillars",
    pillarsItems: [
      ["1×", "Custom & hand-crafted", "Every website is built from scratch around your brand. No recycled templates, no copy-paste themes."],
      ["2×", "Modern, Fast and premium", "Clean, timeless design that's built to convert - not to follow trends that age in a year."],
      ["3×", "Built to grow your business", "Designed for real business outcomes - bookings, retention, repeat customers - not just aesthetics."],
      ["4×", "Direct communication", "You talk to the person actually building it. No account managers, no hand-offs, no telephone game."]
    ],
    speedEyebrow: "BUILT FOR 2026",
    speedTitle: "No WordPress. Just speed.",
    speedChecks: [
      "Sub-second page loads",
      "95+ Lighthouse performance scores",
      "WCAG-ready accessibility",
      "SEO-optimized out of the box",
      "Zero plugin bloat, zero security holes"
    ],
    speedBody: [
      "It's 2026 - there's no reason your website should still run on a 20-year-old PHP CMS with 30 plugins fighting each other.",
      "I build on a modern stack - Next.js, React and edge infrastructure - so your site loads in under a second, ranks higher in Google and feels instant on every device.",
      "I obsess over Google Lighthouse scores. Every site I ship is benchmarked for Performance, Accessibility, Best Practices and SEO - and I don't stop until those numbers are green. Because speed isn't a vanity metric - it's bookings you didn't lose to a slow page."
    ],
    buildEyebrow: "WHAT I BUILD",
    buildTitle: "Three things, done well.",
    buildItems: [
      ["01", "Landing pages", "High-conversion single-page sites built around one clear goal - bookings, leads or sign-ups."],
      ["02", "Personal brand sites", "Portfolio and brand websites for founders, creatives and experts who want their work to look as good as it is."],
      ["03", "Custom-built platforms", "Bespoke web applications tailored to your business. The flagship is my own booking software engine - the same one powering every appointment-based Urban Again website."],
      ["04", "Website redesigns", "Refresh an outdated site with a faster, cleaner, conversion-focused rebuild - on a modern stack."],
      ["05", "Membership portals", "Members-only areas for class packs, subscriptions, gated content and recurring customers."],
      ["06", "AI integrations", "Smart booking assistants, AI chat, automated reminders and pricelist scanners that save you hours every week."],
      ["07", "Telegram bots", "Custom Telegram bots that let you manage your site from your phone - update prices, edit content, check bookings and get instant alerts, all from a chat window."]
    ],
    stepsEyebrow: "THE PROCESS",
    stepsTitle: "From first conversation to live website.",
    steps: [
      ["01", "We talk.", "Tell me about your business, your services, how you currently take bookings, what frustrates you about it, and what designs fascinate you."],
      ["02", "I build it.", "I design and build your website from scratch, then wire the booking system directly into it."],
      ["03", "You go live.", "We launch. From that day, your customers book on your website, pay deposits and get confirmations. No third-party platforms, no redirects. Just yours."]
    ],
    demoEyebrow: "LIVE DEMO",
    demoTitle: "See the booking experience in action",
    demoText:
      "No signup required. Click below to try a real booking flow and experience exactly what your customers will see.",
    demoPoints: ["Booking stays on your domain", "No redirects", "No external accounts", "Instant confirmation emails"],
    demoPrimary: "Try the Booking System",
    demoSecondary: "Book a Free Call",
    pricingEyebrow: "PRICING",
    pricingTitle: "Let's build something that fits your business.",
    pricingBody: [
      "Every project is custom-built, which means there's no fixed package or one-size-fits-all pricing.",
      "We'll start with a conversation, define exactly what you need and I'll send you a clear, transparent quote before any work begins."
    ],
    pricingCta: "Book a free call",
    faqEyebrow: "FREQUENTLY ASKED QUESTIONS",
    faqTitle: "Everything clients usually ask before getting started",
    faqs: [
      ["How long does the project take?", "Most projects are completed within 1 to 2 weeks depending on complexity and content requirements."],
      ["Do I need Calendly or another booking platform?", "No. The booking experience is integrated directly into your website."],
      ["Can you redesign my existing website?", "Yes. We can improve your current website or build a completely new one."],
      ["Can customers pay online?", "Yes. Stripe is fully integrated, so customers can pay deposits or the full amount directly when they book. Refunds and receipts go through Stripe too."],
      ["Who builds the website?", "Every project is designed and built directly by the founder for a consistent and personal experience."],
      ["What happens after launch?", "After launch, I'm here to make sure everything runs smoothly. Whether you need updates, improvements or new features as your business grows, we can discuss it."]
    ],
    ctaEyebrow: "READY TO STOP SENDING CUSTOMERS SOMEWHERE ELSE TO BOOK?",
    ctaTitle: "Give your customers a seamless path from first visit",
    ctaAccent: "to confirmed appointment",
    ctaText: "Book a free consultation and let’s discuss your project.",
    footerText: "Custom websites with built-in booking",
    localeLabel: "en",
    otherLocaleLabel: "bg",
    emailSubject: "Book a Free Call",
    demoSubject: "Booking Demo",
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        {
          ...organizationBase,
          description:
            "Custom websites with integrated booking systems for modern service businesses.",
          knowsAbout: [
            "Web design",
            "Website development",
            "Integrated booking systems",
            "Service business websites"
          ]
        },
        {
          "@type": "Service",
          "@id": "https://alternine.co/#service",
          serviceType: "Custom website design and integrated booking system implementation",
          provider: {
            "@id": "https://alternine.co/#organization"
          },
          areaServed: ["Europe", "United Kingdom", "United States"],
          audience: {
            "@type": "Audience",
            audienceType: "Service businesses"
          },
          offers: {
            "@type": "Offer",
            priceCurrency: "EUR",
            price: "1500",
            priceSpecification: {
              "@type": "PriceSpecification",
              price: "1500",
              priceCurrency: "EUR"
            },
            description: "Custom website with integrated booking system from 1500 EUR."
          }
        },
        {
          "@type": "FAQPage",
          "@id": "https://alternine.co/#faq",
          mainEntity: [
            {
              "@type": "Question",
              name: "How long does the project take?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Most projects are completed within 1 to 2 weeks depending on complexity and content requirements."
              }
            },
            {
              "@type": "Question",
              name: "Do I need Calendly or another booking platform?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "No. The booking experience is integrated directly into your website."
              }
            },
            {
              "@type": "Question",
              name: "Can you redesign my existing website?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Alter Nine can improve your current website or build a completely new one."
              }
            },
            {
              "@type": "Question",
              name: "Can customers pay online?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Stripe is fully integrated, so customers can pay deposits or the full amount directly when they book. Refunds and receipts go through Stripe too."
              }
            },
            {
              "@type": "Question",
              name: "Who builds the website?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Every project is designed and built directly by the founder for a consistent and personal experience."
              }
            },
            {
              "@type": "Question",
              name: "What happens after launch?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "After launch, I'm here to make sure everything runs smoothly. Whether you need updates, improvements or new features as your business grows, we can discuss it."
              }
            }
          ]
        },
        {
          "@type": "WebSite",
          "@id": "https://alternine.co/#website",
          url: "https://alternine.co/",
          name: "Alter Nine",
          description: "Custom websites with built-in booking for modern service businesses.",
          inLanguage: ["en", "bg"],
          publisher: { "@id": "https://alternine.co/#organization" }
        },
        {
          "@type": "WebPage",
          "@id": "https://alternine.co/#webpage",
          url: "https://alternine.co/",
          name: "Custom Websites with Built-in Booking — Alter Nine",
          isPartOf: { "@id": "https://alternine.co/#website" },
          about: { "@id": "https://alternine.co/#organization" },
          primaryImageOfPage: "https://alternine.co/social-card.svg",
          inLanguage: "en"
        },
        {
          "@type": "Person",
          "@id": "https://alternine.co/#delyana",
          name: "Delyana",
          jobTitle: "Founder & Designer",
          worksFor: { "@id": "https://alternine.co/#organization" },
          knowsAbout: [
            "Web design",
            "Custom website development",
            "Booking system integration",
            "Brand identity"
          ],
          image: "https://alternine.co/delyana-bw.webp"
        }
      ]
    }
  },
  bg: {
    lang: "bg",
    htmlLang: "bg",
    pageUrl: "https://alternine.co/bg/",
    switchHref: "/",
    switchLabel: "EN",
    navHow: "Как работи",
    navCta: "Нека поговорим",
    heroEyebrow: "САЙТОВЕ С ВГРАДЕНО ОНЛАЙН ЗАПИСВАНЕ",
    heroTitleStart: "Къстъм сайтове с",
    heroTitleAccent: "вградена система за",
    heroTitleEnd: "онлайн записване",
    heroLead:
      "Идеално за бизнеси с услуги, които искат да приемат резервации, депозити и да управляват часове от едно място.",
    heroSecondary: "Пробвай записването",
    heroTrust: "Без външни страници за резервации. Без booking платформи. Всичко се случва на вашия сайт.",
    miniSite: "Вашият сайт",
    bookingBadge: "Интегрирано записване",
    bookingStatus: "Активно",
    bookingService: "Премиум терапия",
    bookingDuration: "45 мин",
    bookingTime: "Вторник 11:00",
    bookingTimeStatus: "Потвърдено",
    bookingPills: ["Ваш домейн", "Без пренасочване", "Имейл потвърждение"],
    metricKicker: "Път на клиента",
    metricText: "По малко кликове. Повече доверие.",
    whyEyebrow: "ЗАЩО ТОВА КОНВЕРТИРА",
    whyTitle: "Всеки излишен клик струва доверие.",
    whyAccent: "Всеки чист ход помага.",
    compareBadLabel: "КАК ПОВЕЧЕТО БИЗНЕСИ ПРИЕМАТ ЗАПИСВАНИЯ",
    compareBadFlow: ["Сайт", "После", "Calendly, Fresha или друга външна платформа", "После", "Записването е готово"],
    compareBadText:
      "Когато клиентът напусне сайта ви, за да си запази час, губите контрол върху изживяването и често губите и конверсии.",
    compareGoodLabel: "НАЧИНЪТ НА ALTER NINE",
    compareGoodFlow: ["Сайт", "После", "Записването е готово"],
    compareGoodText:
      "Всичко се случва във вашия сайт. Клиентите остават във вашия бранд, на вашия домейн и в буукинг изживяване, направено специално за вашия бизнес.",
    compareGoodChips: ["Без пренасочване", "Без външни платформи", "Без излишни стъпки"],
    storyEyebrow: "ЗАЩО СЪЩЕСТВУВА ALTER NINE",
    storyTitle: "Създадено от реален бизнес проблем,",
    storyAccent: "а не от мода",
    storyParagraphs: [
      "Никога не очаквах, че управлението на салон за красота ще ме отведе в света на софтуерната разработка.",
      "Но се случи.",
      "Докато управлявах салона си, започнах да се интересувам сериозно от програмиране. Това, което започна като любопитство, се превърна в безсънни нощи в правене на сайтове, експерименти с код и в крайна сметка създаване на собствен booking софтуер.",
      "Осъзнах, че бизнесите не би трябвало да избират между красив сайт и booking система, която наистина работи.",
      "Затова създадох Alter Nine."
    ],
    founderQuote:
      "По доброто записване изглежда като малък детайл, но променя колко професионален изглежда целият ви бизнес онлайн.",
    storyCta: "Нека поговорим",
    missionEyebrow: "МИСИЯТА",
    missionTitle: "Резервациите ти не трябва да живеят в чужд",
    missionAccent: "бранд.",
    missionTitleEnd: "",
    missionSubtitle: "Нито отзивите ти.",
    missionText:
      "Знам, защото самата аз управлявах салон. Повечето service бизнеси разчитат на платформи като Fresha или Treatwell. Те изпращат клиентите им в маркетплейс, където са заобиколени от конкуренти, а бизнесът им се превръща в поредното листване.\n\nРезервацията се случва. Брандът ти, не.\n\nСъздадох услугата си, за да променя това. **Всеки сайт, който правя, включва изцяло интегриран booking опит, който живее на твоя домейн, под твоя бранд.**",
    portfolioEyebrow: "ИЗБРАНИ ПРОЕКТИ",
    portfolioTitle: "Последни",
    portfolioTitleAccent: "проекти",
    portfolioProjects: [
      {
        name: "Име на проект",
        category: "Клиент",
        ctaLabel: "Виж сайта",
        href: "",
        images: [],
      },
      {
        name: "Име на проект",
        category: "Клиент",
        ctaLabel: "Виж сайта",
        href: "",
        images: [],
      },
      {
        name: "Име на проект",
        category: "Личен",
        ctaLabel: "Скоро",
        href: "",
        images: [],
      },
    ],
    storyAuthor: "Деляна Николова",
    storyAuthorRole: "Основател • Дизайнер • Разработчик",
    founderName: "Деляна",
    founderRole: "Основател на Alter Nine",
    featuresEyebrow: "ПОВЕЧЕ ОТ САЙТ",
    featuresTitle: "Сайт, който става",
    featuresAccent: "част от твоя бизнес.",
    featuresSubtitle: "Не просто място за услугите ти, а сайт, който ти помага да приемаш резервации, да управляваш часове и да пестиш време всеки ден.",
    features: [
      ["Къстъм сайт", "Сайт, проектиран около твоя бизнес и твоя бранд."],
      ["Вградена буукинг система", "Резервации, депозити и потвърждения директно на твоя сайт."],
      ["Business Dashboard", "Управлявай часове, услуги и наличност от едно място."],
      ["AI инструменти", "Импортирай ценоразписа, помагай на клиентите и спести часове ръчна работа."],
      ["Smart автоматизация", "Автоматични напомняния, потвърждения и заявки за отзиви."],
      ["Твоят бранд. Твоите клиенти.", "Всичко остава на твоя сайт. Клиентските данни остават твои."]
    ],
    whoEyebrow: "С КОГО РАБОТИМ",
    whoTitle: "Създадено за модерни бизнеси с услуги",
    industries: [
      "Фризьорски салони",
      "Салони за красота",
      "Барбершоп",
      "Салони за маникюр и педикюр",
      "Козметолози",
      "Мигли и вежди",
      "Татуировки и пиърсинг",
      "Масажисти",
      "Физиотерапевти",
      "Клиники",
      "Wellness студиа",
      "Лични треньори",
      "Коучове",
      "Консултанти",
      "Естетисти",
      "Перманентен грим",
      "Студиа за кола маска",
      "Дерматолози"
    ],
    reasonsEyebrow: "ЗАЩО БИЗНЕСИТЕ ИЗБИРАТ ALTER NINE",
    reasons: [
      "Записването става директно във вашия сайт",
      "По гладко клиентско изживяване",
      "Без зависимост от външни буукинг страници",
      "По силен и по професионален бранд",
      "Изградено специално за вашия бизнес",
      "Бърз процес и ясна комуникация",
      "Създадено за дългосрочен растеж"
    ],
    pillarsEyebrow: "МОИТЕ ЧЕТИРИ ПРИНЦИПА",
    pillarsTitle: "Моите четири принципа",
    pillarsItems: [
      ["1×", "По поръчка, на ръка", "Всеки сайт се изгражда от нулата около твоя бранд. Без шаблони, без копи-пейст теми."],
      ["2×", "Модерно, бързо и премиум", "Чист, безвременен дизайн, създаден да конвертира - не да следва тенденции, които остаряват за година."],
      ["3×", "За растеж на бизнеса", "Проектирано за реален резултат - записвания, връщащи се клиенти, лоялност - не само за визия."],
      ["4×", "Директна комуникация", "Говориш директно с човека, който прави сайта. Без посредници, без забавяния, без счупен телефон."]
    ],
    speedEyebrow: "СЪЗДАДЕН ЗА 2026",
    speedTitle: "Без WordPress. Само скорост.",
    speedChecks: [
      "Зареждане под секунда",
      "95+ Lighthouse performance",
      "Готов за WCAG достъпност",
      "SEO-оптимизиран по подразбиране",
      "Без излишни плъгини, без дупки в сигурността"
    ],
    speedBody: [
      "2026 е - няма причина сайтът ти все още да върви на 20-годишен PHP CMS с 30 плъгина, които се бият помежду си.",
      "Изграждам върху модерен стак - Next.js, React и edge инфраструктура - така че сайтът ти да зарежда под секунда, да се класира по-високо в Google и да усеща светкавично на всяко устройство.",
      "Държа изключително много на резултатите в Google Lighthouse. Всеки сайт, който пускам, се измерва за Performance, Accessibility, Best Practices и SEO - и не спирам, докато тези оценки не светнат в зелено. Защото скоростта не е козметика - тя е записванията, които не загуби заради бавна страница."
    ],
    buildEyebrow: "КАКВО ИЗГРАЖДАМ",
    buildTitle: "Три неща, направени както трябва.",
    buildItems: [
      ["01", "Лендинг страници", "Едностранични сайтове с висока конверсия, изградени около една ясна цел - записвания, заявки или регистрации."],
      ["02", "Сайтове за личен бранд", "Портфолио и брандови сайтове за основатели, творци и експерти, които искат работата им да изглежда толкова добре, колкото е."],
      ["03", "Платформи по поръчка", "Уеб приложения, изградени специално за твоя бизнес. Флагманът е моят собствен буукинг енджин - същият, който движи всеки сайт на Urban Again с онлайн записвания."],
      ["04", "Редизайн на сайт", "Обновяване на остарял сайт с по-бърз, по-чист и насочен към конверсия рестарт - на модерен стак."],
      ["05", "Мембършип портали", "Зони само за членове - класове, абонаменти, заключено съдържание и връщащи се клиенти."],
      ["06", "AI интеграции", "Умни асистенти за записвания, AI чат, автоматични напомняния и скенери на ценоразписи, които ти спестяват часове седмично."],
      ["07", "Telegram ботове", "Персонални Telegram ботове, с които управляваш сайта си директно от телефона - сменяш цени, редактираш съдържание, проверяваш записвания и получаваш моментални известия, всичко от един чат."]
    ],
    stepsEyebrow: "ПРОЦЕСЪТ",
    stepsTitle: "От първия разговор до готовия сайт.",
    steps: [
      ["01", "Разговаряме.", "Разкажи ми за бизнеса си, услугите ти и как в момента записваш клиенти. Без форми, без презентации. Просто разговор."],
      ["02", "Изграждам го.", "Проектирам и изграждам сайта ти от нулата, след което вграждам буукинг системата директно в него. Виждаш напредъка и участваш в решенията."],
      ["03", "Излизаш на живо.", "Пускаме го. От този ден клиентите ти се записват на твоя сайт, плащат депозити и получават потвърждения. Без пренасочвания. Само твоето."]
    ],
    demoEyebrow: "ДЕМО НА ЖИВО",
    demoTitle: "Вижте как работи буукинг изживяването",
    demoText:
      "Не е нужна регистрация. Натиснете по долу, за да пробвате реален процес на записване и да усетите точно какво ще виждат вашите клиенти.",
    demoPoints: ["Записването остава на вашия домейн", "Без пренасочване", "Без външни акаунти", "Мигновени имейл потвърждения"],
    demoPrimary: "Пробвай системата",
    demoSecondary: "Запази безплатно обаждане",
    pricingEyebrow: "ЦЕНИ",
    pricingTitle: "Нека направим нещо, което подхожда на твоя бизнес.",
    pricingBody: [
      "Всеки проект е изработен по поръчка, което означава, че няма фиксиран пакет или универсална цена.",
      "Започваме с разговор, дефинираме точно какво ти трябва и ще ти изпратя ясна, прозрачна оферта преди да започне каквато и да е работа."
    ],
    pricingCta: "Запази безплатно обаждане",
    faqEyebrow: "ЧЕСТО ЗАДАВАНИ ВЪПРОСИ",
    faqTitle: "Всичко, което клиентите обикновено питат преди старт",
    faqs: [
      ["Колко време отнема проектът?", "Повечето проекти се завършват за 1 до 2 седмици според сложността и нужните материали."],
      ["Трябва ли ми Calendly или друга буукинг платформа?", "Не. Буукинг изживяването е интегрирано директно във вашия сайт."],
      ["Може ли да преработите сегашния ми сайт?", "Да. Можем да подобрим сегашния ви сайт или да създадем изцяло нов."],
      ["Могат ли клиентите да плащат онлайн?", "Да. Stripe е напълно интегриран, така че клиентите могат да платят депозит или цялата сума директно при записването. Възстановяванията и разписките също минават през Stripe."],
      ["Кой прави сайта?", "Всеки проект се дизайнира и изгражда директно от основателя, за да има последователно и лично отношение."],
      ["Какво става след пускането?", "След пускането съм тук, за да се уверя, че всичко работи гладко. Ако ти трябват ъпдейти, подобрения или нови функции с растежа на бизнеса ти, можем да го обсъдим."]
    ],
    ctaEyebrow: "ГОТОВИ ЛИ СТЕ ДА СПРЕТЕ ДА ПРАЩАТЕ КЛИЕНТИТЕ ДРУГАДЕ ЗА ЗАПИСВАНЕ?",
    ctaTitle: "Дайте на клиентите си плавен път от първо посещение",
    ctaAccent: "до потвърден час",
    ctaText: "Запазете безплатна консултация и нека поговорим за вашия проект.",
    footerText: "Къстъм сайтове с вградено онлайн записване",
    localeLabel: "en",
    otherLocaleLabel: "bg",
    emailSubject: "Безплатно обаждане",
    demoSubject: "Демо на буукинг система",
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        {
          ...organizationBase,
          description:
            "Сайтове по поръчка с вградена система за онлайн записване за модерни бизнеси с услуги."
        },
        {
          "@type": "WebSite",
          "@id": "https://alternine.co/#website",
          url: "https://alternine.co/",
          name: "Alter Nine",
          description: "Сайтове по поръчка с вградено онлайн записване за модерни бизнеси с услуги.",
          inLanguage: ["bg", "en"],
          publisher: { "@id": "https://alternine.co/#organization" }
        },
        {
          "@type": "WebPage",
          "@id": "https://alternine.co/bg/#webpage",
          url: "https://alternine.co/bg/",
          name: "Сайтове по поръчка с онлайн записване | Alter Nine",
          isPartOf: { "@id": "https://alternine.co/#website" },
          about: { "@id": "https://alternine.co/#organization" },
          primaryImageOfPage: "https://alternine.co/social-card.svg",
          inLanguage: "bg"
        },
        {
          "@type": "Person",
          "@id": "https://alternine.co/#delyana",
          name: "Delyana",
          jobTitle: "Основател и дизайнер",
          worksFor: { "@id": "https://alternine.co/#organization" },
          knowsAbout: [
            "Уеб дизайн",
            "Сайтове по поръчка",
            "Системи за онлайн записване",
            "Брандинг"
          ],
          image: "https://alternine.co/delyana-bw.webp"
        },
        {
          "@type": "Service",
          "@id": "https://alternine.co/bg/#service",
          serviceType: "Изработка на сайт по поръчка с интегрирана система за онлайн записване",
          provider: { "@id": "https://alternine.co/#organization" },
          areaServed: ["България", "Европа"],
          audience: {
            "@type": "Audience",
            audienceType: "Бизнеси с услуги"
          },
          offers: {
            "@type": "Offer",
            priceCurrency: "EUR",
            price: "1500",
            description: "Сайт по поръчка с вградена система за онлайн записване от 1500 EUR."
          }
        }
      ]
    }
  }
};
