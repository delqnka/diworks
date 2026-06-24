import Link from "next/link";
import { BookingCta } from "@/components/booking-cta";
import { JsonLd } from "@/components/json-ld";

function Flow({ items }) {
  return (
    <div className="flow">
      {items.map((item, index) => (
        <span key={`${item}-${index}`} className={index % 2 === 1 ? "flow-arrow" : undefined}>
          {item}
        </span>
      ))}
    </div>
  );
}

export function LandingPage({ locale, content }) {
  return (
    <>
      <JsonLd data={content.jsonLd} />
      <a className="skip-link" href="#main-content">
        {locale === "bg" ? "Към съдържанието" : "Skip to content"}
      </a>
      <header className="site-header">
        <div className="container nav-shell">
          <Link className="brand" href={locale === "bg" ? "/bg" : "/"}>
            <span className="brand-mark" aria-hidden="true"></span>
            <span>DiWorks</span>
          </Link>
          <div className="nav-actions">
            <Link className="language-switch" href={content.switchHref} lang={locale === "bg" ? "en" : "bg"}>
              {content.switchLabel}
            </Link>
            <a className="button button-ghost" href="#how-it-works">
              {content.navHow}
            </a>
            <BookingCta className="button button-primary">{content.navCta}</BookingCta>
          </div>
        </div>
      </header>

      <main id="main-content">
        <section className="hero section">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">{content.heroEyebrow}</p>
              <h1>
                {content.heroTitleStart} <span className="serif">{content.heroTitleAccent}</span> {content.heroTitleEnd}
              </h1>
              <p className="lead">{content.heroLead}</p>
              <div className="hero-actions">
                <BookingCta className="button button-primary">{content.navCta}</BookingCta>
                <a className="button button-ghost" href="#demo">
                  {content.heroSecondary}
                </a>
              </div>
              <p className="micro-copy">{content.heroTrust}</p>
            </div>

            <div className="hero-visual" aria-hidden="true">
              <div className="showcase">
                <div className="showcase-glow"></div>
                <div className="booking-stage">
                  <div className="mini-site-card">
                    <div className="mini-site-top">
                      <span className="dot"></span>
                      <span className="mini-label">{content.miniSite}</span>
                    </div>
                    <div className="mini-site-content">
                      <div className="mini-heading"></div>
                      <div className="mini-paragraph"></div>
                      <div className="mini-paragraph short"></div>
                    </div>
                  </div>

                  <div className="booking-card">
                    <div className="booking-card-top">
                      <span className="booking-badge">{content.bookingBadge}</span>
                      <span className="booking-status">{content.bookingStatus}</span>
                    </div>
                    <div className="booking-card-body">
                      <div className="booking-row">
                        <span>{content.bookingService}</span>
                        <strong>{content.bookingDuration}</strong>
                      </div>
                      <div className="booking-row">
                        <span>{content.bookingTime}</span>
                        <strong>{content.bookingTimeStatus}</strong>
                      </div>
                      <div className="booking-divider"></div>
                      <div className="booking-pill-row">
                        {content.bookingPills.map((pill) => (
                          <span className="booking-pill" key={pill}>
                            {pill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="metric-card">
                    <span className="metric-kicker">{content.metricKicker}</span>
                    <strong>{content.metricText}</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-soft">
          <div className="container">
            <div className="section-intro centered">
              <p className="eyebrow">{content.whyEyebrow}</p>
              <h2>
                {content.whyTitle} <span className="serif">{content.whyAccent}</span>
              </h2>
            </div>
            <div className="comparison-grid">
              <article className="comparison-card muted-card">
                <p className="card-label">{content.compareBadLabel}</p>
                <Flow items={content.compareBadFlow} />
                <p>{content.compareBadText}</p>
              </article>
              <article className="comparison-card accent-card">
                <p className="card-label">{content.compareGoodLabel}</p>
                <Flow items={content.compareGoodFlow} />
                <p>{content.compareGoodText}</p>
                <div className="benefit-chips">
                  {content.compareGoodChips.map((chip) => (
                    <span key={chip}>{chip}</span>
                  ))}
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container story-grid">
            <div className="story-copy">
              <p className="eyebrow">{content.storyEyebrow}</p>
              <h2>
                {content.storyTitle} <span className="serif">{content.storyAccent}</span>
              </h2>
              {content.storyParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <aside className="founder-note">
              <p className="quote-mark">“</p>
              <p className="founder-text">{content.founderQuote}</p>
              <div className="founder-meta">
                <strong>{content.founderName}</strong>
                <span>{content.founderRole}</span>
              </div>
            </aside>
          </div>
        </section>

        <section className="section section-soft">
          <div className="container">
            <div className="section-intro">
              <p className="eyebrow">{content.featuresEyebrow}</p>
              <h2>{content.featuresTitle}</h2>
            </div>
            <div className="feature-grid">
              {content.features.map(([title, text]) => (
                <article className="feature-card" key={title}>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container split-grid">
            <div>
              <p className="eyebrow">{content.whoEyebrow}</p>
              <h2>{content.whoTitle}</h2>
              <div className="industry-chips">
                {content.industries.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
            <div>
              <p className="eyebrow">{content.reasonsEyebrow}</p>
              <ul className="check-list">
                {content.reasons.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="section section-soft">
          <div className="container">
            <div className="section-intro">
              <p className="eyebrow">{content.stepsEyebrow}</p>
              <h2>{content.stepsTitle}</h2>
            </div>
            <div className="steps-grid">
              {content.steps.map(([number, title, text]) => (
                <article className="step-card" key={number}>
                  <span className="step-number">{number}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="demo" className="section">
          <div className="container demo-panel">
            <div>
              <p className="eyebrow">{content.demoEyebrow}</p>
              <h2>{content.demoTitle}</h2>
              <p>{content.demoText}</p>
              <div className="demo-points">
                {content.demoPoints.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
            <div className="demo-actions">
              <a className="button button-primary" href={`mailto:hello@diworks.co?subject=${encodeURIComponent(content.demoSubject)}`}>
                {content.demoPrimary}
              </a>
              <BookingCta className="button button-ghost">{content.demoSecondary}</BookingCta>
            </div>
          </div>
        </section>

        <section className="section section-soft">
          <div className="container">
            <div className="section-intro">
              <p className="eyebrow">{content.pricingEyebrow}</p>
              <h2>{content.pricingTitle}</h2>
            </div>
            <div className="pricing-card">
              <div>
                <p className="price-label">{content.pricingLabel}</p>
                <div className="price-line">
                  <strong>{content.pricingAmount}</strong>
                  <span>{content.pricingSub}</span>
                </div>
                <p>{content.pricingNote}</p>
              </div>
              <ul className="pricing-list">
                {content.pricingItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <BookingCta className="button button-primary">{content.navCta}</BookingCta>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-intro">
              <p className="eyebrow">{content.faqEyebrow}</p>
              <h2>{content.faqTitle}</h2>
            </div>
            <div className="faq-list">
              {content.faqs.map(([question, answer]) => (
                <details className="faq-item" key={question}>
                  <summary>{question}</summary>
                  <p>{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container cta-panel">
            <p className="eyebrow">{content.ctaEyebrow}</p>
            <h2>
              {content.ctaTitle} <span className="serif">{content.ctaAccent}</span>
            </h2>
            <p>{content.ctaText}</p>
            <div className="hero-actions">
              <BookingCta className="button button-primary">{content.navCta}</BookingCta>
              <a className="button button-ghost" href="mailto:hello@diworks.co">
                hello@diworks.co
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-shell">
          <div>
            <Link className="brand footer-brand" href={locale === "bg" ? "/bg" : "/"}>
              <span className="brand-mark" aria-hidden="true"></span>
              <span>DiWorks</span>
            </Link>
            <p>{content.footerText}</p>
          </div>
          <div className="footer-links">
            <Link href="/">{content.localeLabel}</Link>
            <Link href="/bg">{content.otherLocaleLabel}</Link>
            <a href="mailto:hello@diworks.co">hello@diworks.co</a>
          </div>
        </div>
      </footer>
    </>
  );
}
