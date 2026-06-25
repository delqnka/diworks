"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { BookingCta } from "@/components/booking-cta";
import styles from "./cinematic-hero.module.css";

const VIDEO_SRC =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260619_191346_9d19d66e-86a4-47f7-8dc6-712c1788c3b2.mp4";

function StaggeredFade({ text, className }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const words = text.split(" ");
  let charIndex = 0;

  return (
    <span ref={ref} className={className}>
      {words.map((word, wi) => (
        <span key={`w-${wi}`}>
          <span className={styles.wordSpan}>
            {Array.from(word).map((ch) => {
              const i = charIndex++;
              return (
                <motion.span
                  key={`c-${i}`}
                  className={styles.charSpan}
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ duration: 0.5, delay: i * 0.04, ease: "easeOut" }}
                >
                  {ch}
                </motion.span>
              );
            })}
          </span>
          {wi < words.length - 1 ? " " : null}
        </span>
      ))}
    </span>
  );
}

export function CinematicHero({ content, locale = "en" }) {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: content.navHow, href: "#how-it-works", type: "anchor" },
    { label: content.switchLabel, href: content.switchHref, type: "lang" },
  ];

  return (
    <section className={styles.section}>
      <video
        className={styles.video}
        autoPlay
        muted
        loop
        playsInline
        src={VIDEO_SRC}
      />
      <div className={styles.scrim} aria-hidden="true" />

      <nav className={styles.nav}>
        <Link className={styles.brand} href={locale === "bg" ? "/bg" : "/"}>
          DiWorks
        </Link>

        <div className={styles.navLinks}>
          {navItems.map((item) =>
            item.type === "lang" ? (
              <Link
                key={item.label}
                className={styles.navLink}
                href={item.href}
                lang={locale === "bg" ? "en" : "bg"}
              >
                {item.label}
              </Link>
            ) : (
              <a key={item.label} className={styles.navLink} href={item.href}>
                {item.label}
              </a>
            )
          )}
          <BookingCta className={styles.navCtaBtn}>{content.navCta}</BookingCta>
        </div>

        <button
          className={styles.hamburger}
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {navItems.map((item, i) => (
              <motion.span
                key={item.label}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25, delay: 0.05 + i * 0.06, ease: "easeOut" }}
              >
                {item.type === "lang" ? (
                  <Link
                    className={styles.mobileLink}
                    href={item.href}
                    lang={locale === "bg" ? "en" : "bg"}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    className={styles.mobileLink}
                    href={item.href}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </a>
                )}
              </motion.span>
            ))}
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, delay: 0.05 + navItems.length * 0.06, ease: "easeOut" }}
            >
              <BookingCta className={styles.navCtaBtn}>{content.navCta}</BookingCta>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className={styles.inner}>
        <div className={styles.topGroup}>
          <h1 className={styles.title}>
            <StaggeredFade text={content.heroTitleStart} />{" "}
            <StaggeredFade text={content.heroTitleAccent} className={styles.titleAccent} />{" "}
            <StaggeredFade text={content.heroTitleEnd} />
          </h1>

          <motion.p
            className={styles.lead}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4, ease: "easeOut" }}
          >
            {content.heroLead}
          </motion.p>
        </div>

        <div className={styles.bottomGroup}>
        <motion.div
          className={styles.actions}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8, ease: "easeOut" }}
        >
          <BookingCta className={`${styles.glassBtn} ${styles.glassPrimary}`}>
            {content.navCta}
          </BookingCta>
          <a
            className={styles.ghostLink}
            href={locale === "bg" ? "https://www.salonurban.online/bg" : "https://www.salonurban.online/en"}
            target="_blank"
            rel="noopener noreferrer"
          >
            {content.heroSecondary}
            <ArrowRight size={16} strokeWidth={1.6} />
          </a>
        </motion.div>

        <motion.p
          className={styles.trust}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2.2, ease: "easeOut" }}
        >
          {content.heroTrust}
        </motion.p>
        </div>
      </div>
    </section>
  );
}
