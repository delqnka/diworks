"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Menu, X } from "lucide-react";
import styles from "./hero.module.css";

const NAV_LINKS = ["Wander", "Archive", "Story", "Connect"];

function StaggeredFade({ text, className }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const chars = Array.from(text);

  return (
    <span ref={ref} className={`${styles.headingLine} ${className || ""}`}>
      {chars.map((ch, i) => (
        <motion.span
          key={`${ch}-${i}`}
          className={styles.charSpan}
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.5, delay: i * 0.07, ease: "easeOut" }}
        >
          {ch === " " ? " " : ch}
        </motion.span>
      ))}
    </span>
  );
}

export default function HeroPage() {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.page}>
      <video
        className={styles.video}
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        aria-hidden="true"
        tabIndex={-1}
        src="https://pub-a282b633397549478fc7e2204fa66fc2.r2.dev/hf_20260619_191346_9d19d66e-86a4-47f7-8dc6-712c1788c3b2.mp4"
      />

      <nav className={styles.nav}>
        <span className={styles.brand}>Organic Visions</span>

        <div className={styles.navLinks}>
          {NAV_LINKS.map((link) => (
            <button key={link} className={styles.navLink} type="button">
              {link}
            </button>
          ))}
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
            {NAV_LINKS.map((link, i) => (
              <motion.button
                key={link}
                className={styles.mobileLink}
                type="button"
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25, delay: 0.05 + i * 0.06, ease: "easeOut" }}
                onClick={() => setOpen(false)}
              >
                {link}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <section className={styles.hero}>
        <h1 className={`${styles.heading} ${styles.fontGaramond}`}>
          <StaggeredFade text="WITNESS THE" />
          <StaggeredFade text="HIDDEN REALM" />
        </h1>

        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6, ease: "easeOut" }}
        >
          An odyssey through delicate living forms,
          <br className={styles.subtitleBr} />{" "}
          revealed by lens and curiosity.
        </motion.p>

        <motion.button
          className={styles.cta}
          type="button"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.0, ease: "easeOut" }}
        >
          Begin the Experience
        </motion.button>
      </section>
    </div>
  );
}
