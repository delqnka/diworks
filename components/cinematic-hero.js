"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { BookingCta } from "@/components/booking-cta";
import styles from "./cinematic-hero.module.css";

const VIDEO_SRC =
  "https://pub-a282b633397549478fc7e2204fa66fc2.r2.dev/hf_20260619_191346_9d19d66e-86a4-47f7-8dc6-712c1788c3b2.mp4";

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
  return (
    <section className={styles.section}>
      <video
        className={styles.video}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
        tabIndex={-1}
        src={VIDEO_SRC}
      >
        <track kind="captions" src="/hero-captions.vtt" srcLang="en" label="No dialogue" default />
      </video>
      <div className={styles.scrim} aria-hidden="true" />

      <nav className={styles.nav}>
        <Link className={styles.brand} href={locale === "bg" ? "/bg" : "/"}>
          <Image src="/9-logo.svg" alt="DiWorks" width={160} height={90} priority unoptimized />
        </Link>

        <Link
          className={styles.langSwitch}
          href={content.switchHref}
          lang={locale === "bg" ? "en" : "bg"}
        >
          {content.switchLabel}
        </Link>

        <div className={styles.navLinks}>
          <Link
            className={styles.navLink}
            href={content.switchHref}
            lang={locale === "bg" ? "en" : "bg"}
          >
            {content.switchLabel}
          </Link>
          <BookingCta className={styles.navCtaBtn}>{content.navCta}</BookingCta>
        </div>
      </nav>

      <div className={styles.inner}>
        <div className={styles.topGroup}>
          <h1 className={styles.title}>
            <StaggeredFade text={content.heroTitleStart} />{" "}
            <StaggeredFade text={content.heroTitleAccent} className={styles.titleAccent} />{" "}
            <StaggeredFade text={content.heroTitleEnd} />
          </h1>

          <p className={styles.lead}>{content.heroLead}</p>
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
