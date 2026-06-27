"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { BookingCta } from "@/components/booking-cta";
import styles from "./about-section.module.css";

const EASE = [0.25, 0.1, 0.25, 1];

function AnimatedChar({ progress, range, children }) {
  const opacity = useTransform(progress, range, [0.2, 1]);
  return (
    <span className={styles.charWrap}>
      <span className={styles.charPlaceholder} aria-hidden="true">
        {children}
      </span>
      <motion.span className={styles.charAnimated} style={{ opacity }}>
        {children}
      </motion.span>
    </span>
  );
}

function AnimatedParagraph({ text, className }) {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.4"],
  });

  if (reduce) {
    return (
      <p ref={ref} className={className}>
        {text}
      </p>
    );
  }

  const chars = Array.from(text);
  const total = chars.length;

  return (
    <p ref={ref} className={className}>
      {chars.map((ch, i) => {
        const start = i / total;
        const end = Math.min((i + 1) / total, 1);
        return (
          <AnimatedChar key={i} progress={scrollYProgress} range={[start, end]}>
            {ch}
          </AnimatedChar>
        );
      })}
    </p>
  );
}

export function AboutSection({ content }) {
  const paragraphs = content.storyParagraphs || [];
  const lastIndex = paragraphs.length - 1;
  const hasByline = content.storyAuthor || content.storyAuthorRole;

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <motion.figure
          className={styles.portrait}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "100px" }}
          variants={{
            hidden: { opacity: 0, y: 24, clipPath: "inset(0 0 100% 0)" },
            visible: {
              opacity: 1,
              y: 0,
              clipPath: "inset(0 0 0% 0)",
              transition: { duration: 1.1, ease: EASE, when: "beforeChildren" },
            },
          }}
        >
          <motion.div
            className={styles.portraitInner}
            variants={{
              hidden: { scale: 1.18 },
              visible: { scale: 1, transition: { duration: 1.4, ease: EASE } },
            }}
          >
            <Image
              src="/delyana-bw.webp"
              alt={`${content.storyAuthor || "Delyana"}, founder of Alter Nine`}
              width={910}
              height={1138}
              sizes="(max-width: 768px) 90vw, 455px"
              loading="lazy"
            />
          </motion.div>
        </motion.figure>

        <div className={styles.content}>
          {hasByline && (
            <motion.div
              className={styles.byline}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "100px" }}
              transition={{ duration: 0.7, ease: EASE }}
            >
              {content.storyAuthor && (
                <span className={styles.bylineName}>{content.storyAuthor}</span>
              )}
              {content.storyAuthorRole && (
                <span className={styles.bylineRole}>{content.storyAuthorRole}</span>
              )}
            </motion.div>
          )}

          <motion.h2
          className={styles.heading}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "100px" }}
          transition={{ duration: 0.8, ease: EASE }}
        >
          {content.storyTitle}{" "}
          <span className={styles.headingAccent}>{content.storyAccent}</span>
        </motion.h2>

        <div className={styles.paragraphs}>
          {paragraphs.map((p, i) => (
            <AnimatedParagraph
              key={i}
              text={p}
              className={`${styles.paragraph} ${
                i === lastIndex ? styles.paragraphSmall : ""
              }`}
            />
          ))}
        </div>

        <motion.div
          className={styles.ctaWrap}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "80px" }}
          transition={{ duration: 0.7, delay: 0.15, ease: EASE }}
        >
          <BookingCta className={styles.cta}>{content.storyCta}</BookingCta>
        </motion.div>
        </div>
      </div>
    </section>
  );
}
