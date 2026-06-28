import Link from "next/link";
import Image from "next/image";
import { Instagram, Linkedin } from "lucide-react";
import { BookingCta } from "@/components/booking-cta";
import { Reveal, CountUp } from "@/components/motion-helpers";
import { PillarsReveal } from "@/components/pillars-reveal";
import { BuildPills } from "@/components/build-pills";
import { CinematicHero } from "@/components/cinematic-hero";
import { FeaturesHeading } from "@/components/features-heading";
import { AboutSection } from "@/components/about-section";
import { MissionSection } from "@/components/mission-section";
import { PortfolioSection } from "@/components/portfolio-section";
import { FaqList } from "@/components/faq-list";
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
      <main id="main-content">
        <CinematicHero content={content} locale={locale} />

        <MissionSection content={content} />

        <AboutSection content={content} />

        <PillarsReveal
          eyebrow={content.pillarsEyebrow}
          title={content.pillarsTitle}
          subtitle={content.pillarsSubtitle}
          items={content.pillarsItems}
          ctaLabel={content.pillarsCta}
        />

        <PortfolioSection content={content} />

        <section className="section section-speed">
          <div className="container speed-shell">
            <Reveal>
              <p className="eyebrow">{content.speedEyebrow}</p>
              <h2 className="speed-title">{content.speedTitle}</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="speed-body">
                {content.speedBody.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="speed-checks">
                {content.speedChecks.map((item, i) => {
                  const match = item.match(/^(\d+)\+\s(.*)/);
                  return (
                    <span key={item} className="speed-check-item">
                      {i > 0 && <span className="speed-check-sep" aria-hidden="true">·</span>}
                      {match ? (
                        <>
                          <CountUp to={parseInt(match[1], 10)} suffix="+" /> {match[2]}
                        </>
                      ) : (
                        item
                      )}
                    </span>
                  );
                })}
              </p>
            </Reveal>
          </div>
        </section>

        <section className="section section-build">
          <div className="container build-shell">
            <Reveal>
              <header className="build-pill-header">
                <p className="eyebrow">{content.buildEyebrow}</p>
                <BuildPills items={content.buildItems} featureIndex={2} />
              </header>
            </Reveal>
          </div>
        </section>

        <section className="section section-dark features-dark">
          <div className="container">
            <div className="section-intro">
              <p className="eyebrow">{content.featuresEyebrow}</p>
              <FeaturesHeading title={content.featuresTitle} accent={content.featuresAccent} />
              {content.featuresSubtitle && (
                <p className="section-lede">{content.featuresSubtitle}</p>
              )}
            </div>
          </div>
          <div className="features-video features-video-bleed">
            <video
              src="https://pub-a282b633397549478fc7e2204fa66fc2.r2.dev/hf_20260402_054547_9875cfc5-155a-4229-8ec8-b7ba7125cbf8.mp4"
              muted
              autoPlay
              loop
              playsInline
              preload="metadata"
              aria-hidden="true"
              tabIndex={-1}
            />
          </div>
          <div className="container">
            <div className="feature-grid">
              {content.features.map(([title, text]) => (
                <article className="feature-card liquid-glass" key={title}>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="visually-hidden" aria-hidden="true">
          <h2>Website with built-in booking system for service businesses</h2>
          <p>Alter Nine builds custom websites with integrated booking systems for hair salons, beauty salons, barbershops, wellness studios, clinics, coaches and consultants. No Calendly, no third-party booking pages - everything lives on your own website and brand.</p>
          <ul>
            {content.industries.map((item) => (
              <li key={item}>Custom website with booking system for {item.toLowerCase()}</li>
            ))}
          </ul>
          <p>Features include: built-in online booking, deposit collection, automated appointment reminders, AI pricelist scanner, business dashboard, and branded customer experience.</p>
        </section>

        <section className="section-pricing">
          <div className="pricing-block">
            <p className="eyebrow">{content.pricingEyebrow}</p>
            <h2 className="pricing-title">{content.pricingTitle}</h2>
            <div className="pricing-body">
              {content.pricingBody.map((para) => (
                <p key={para}>{para}</p>
              ))}
            </div>
            <BookingCta className="button button-primary pricing-cta">
              {content.pricingCta}
            </BookingCta>
          </div>
        </section>

        <section className="section-faq">
          <div className="faq-block">
            <div className="section-intro">
              <p className="eyebrow">{content.faqEyebrow}</p>
              <h2 className="faq-title">{content.faqTitle}</h2>
            </div>
            <div className="faq-list">
              <FaqList
                faqs={content.faqs}
                showMoreLabel={content.faqShowMore}
                showLessLabel={content.faqShowLess}
              />
            </div>
          </div>
        </section>

      </main>

      <footer className="site-footer">
        <div className="container footer-shell">
          <div className="footer-top">
            <div>
              <Link className="brand footer-brand" href={locale === "bg" ? "/bg" : "/"}>
                <Image src="/9-logo.svg" alt="Alter Nine" width={100} height={28} />
              </Link>
              <p>{content.footerText}</p>
            </div>
            {content.footerSocials?.length ? (
              <div className="footer-socials">
                {content.footerSocials.map(([key, url, label]) => (
                  <a
                    key={key}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="footer-social"
                  >
                    {key === "instagram" ? (
                      <Instagram size={18} strokeWidth={1.6} />
                    ) : key === "linkedin" ? (
                      <Linkedin size={18} strokeWidth={1.6} />
                    ) : null}
                  </a>
                ))}
              </div>
            ) : null}
          </div>
          <div className="footer-links">
            <Link href="/" hrefLang="en" lang="en" aria-label="English">
              {content.localeLabel}
            </Link>
            <Link href="/bg" hrefLang="bg" lang="bg" aria-label="Български">
              {content.otherLocaleLabel}
            </Link>
            <a href="mailto:hello@mail.alternine.co">hello@mail.alternine.co</a>
          </div>
          <div className="footer-bottom">
            {content.footerLegal?.length ? (
              <div className="footer-legal">
                {content.footerLegal.map(([label, href]) => (
                  <Link key={href} href={href}>
                    {label}
                  </Link>
                ))}
              </div>
            ) : null}
            {content.footerRights ? (
              <p className="footer-rights">{content.footerRights}</p>
            ) : null}
          </div>
        </div>
      </footer>
    </>
  );
}
