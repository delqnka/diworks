"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { BookingCta } from "@/components/booking-cta";
import { StaggeredFade } from "@/components/motion-helpers";

const VIDEO_SRC =
  "https://pub-a282b633397549478fc7e2204fa66fc2.r2.dev/pillars-compressed.mp4";

function renderShowcaseTitle(title) {
  const trimmed = title.replace(/[.!?]$/, "");
  const punct = title.slice(trimmed.length);
  const lastSpace = trimmed.lastIndexOf(" ");
  if (lastSpace === -1) {
    return <StaggeredFade text={title} charDelay={0.03} />;
  }
  const head = trimmed.slice(0, lastSpace);
  const accent = trimmed.slice(lastSpace + 1) + punct;
  const headDuration = head.length * 0.03 + 0.5;
  return (
    <>
      <StaggeredFade text={head} charDelay={0.03} />{" "}
      <span className="showcase-title-accent">
        <StaggeredFade text={accent} charDelay={0.03} delay={headDuration} />
      </span>
    </>
  );
}

export function PillarsReveal({ eyebrow, title, subtitle, items, ctaLabel }) {
  return (
    <section className="section-showcase">
      <div className="showcase-shell">
        <header className="showcase-head">
          {eyebrow ? (
            <motion.p
              className="eyebrow"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              {eyebrow}
            </motion.p>
          ) : null}
          <h2 className="showcase-title">{renderShowcaseTitle(title)}</h2>
          {subtitle ? (
            <motion.p
              className="showcase-sub"
              initial={{ opacity: 0, y: 12, color: "#050505" }}
              whileInView={{
                opacity: 1,
                y: 0,
                color: ["#050505", "#3a3a3a", "#8a8a8a", "rgba(255,255,255,0.78)"],
              }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                opacity: { duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] },
                y: { duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] },
                color: { duration: 2, delay: 0.4, ease: "easeOut", times: [0, 0.35, 0.7, 1] },
              }}
            >
              {subtitle}
            </motion.p>
          ) : null}
        </header>

        <motion.div
          className="showcase-stage"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <video
            className="showcase-video"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden="true"
            tabIndex={-1}
            src={VIDEO_SRC}
          />
        </motion.div>

        <ul className="showcase-specs">
          {items.map(([number, label], i) => (
            <li key={number} className="showcase-spec">
              <motion.span
                className="showcase-spec-num"
                initial={{ color: "#050505" }}
                whileInView={{ color: ["#050505", "#6a6a6a", "rgba(255, 255, 255, 0.45)"] }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 1.4, delay: i * 0.55, times: [0, 0.55, 1], ease: "easeInOut" }}
              >
                {number}
              </motion.span>
              <motion.span
                className="showcase-spec-label"
                initial={{ color: "#050505" }}
                whileInView={{ color: ["#050505", "#6a6a6a", "#ffffff"] }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 1.4, delay: i * 0.55, times: [0, 0.55, 1], ease: "easeInOut" }}
              >
                {label}
              </motion.span>
            </li>
          ))}
        </ul>

        {ctaLabel ? (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <BookingCta className="showcase-cta">
              {ctaLabel}
              <ArrowRight size={16} strokeWidth={1.6} />
            </BookingCta>
          </motion.div>
        ) : null}
      </div>
    </section>
  );
}
