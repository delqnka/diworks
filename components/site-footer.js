import Link from "next/link";
import Image from "next/image";
import { Instagram, Linkedin } from "lucide-react";
import { siteContent } from "@/components/site-data";

export function SiteFooter({ locale = "bg" }) {
  const content = siteContent[locale] ?? siteContent.bg;

  return (
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
  );
}
