"use client";

import { motion, useReducedMotion } from "framer-motion";
import styles from "./independence-section.module.css";

const EASE = [0.25, 0.1, 0.25, 1];

function splitTitleAccent(title) {
  if (!title) return { head: "", tail: "" };
  const trimmed = title.trim();
  const lastSpace = trimmed.lastIndexOf(" ");
  if (lastSpace === -1) return { head: "", tail: trimmed };
  return {
    head: trimmed.slice(0, lastSpace),
    tail: trimmed.slice(lastSpace + 1)
  };
}

export function IndependenceSection({ content }) {
  const reduce = useReducedMotion();
  const initial = reduce ? false : { opacity: 0, y: 16 };
  const animate = reduce ? undefined : { opacity: 1, y: 0 };
  const body = content.independenceBody || [];
  if (!content.independenceTitle && body.length === 0) return null;

  const [lead, ...rest] = body;
  const { head, tail } = splitTitleAccent(content.independenceTitle || "");

  return (
    <section className={styles.section} aria-labelledby="independence-title">
      <div className={styles.shell}>
        {content.independenceEyebrow ? (
          <motion.p
            className={`eyebrow ${styles.eyebrow}`}
            initial={initial}
            whileInView={animate}
            viewport={{ once: true, margin: "100px" }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            {content.independenceEyebrow}
          </motion.p>
        ) : null}

        {content.independenceTitle ? (
          <motion.h2
            id="independence-title"
            className={styles.title}
            initial={initial}
            whileInView={animate}
            viewport={{ once: true, margin: "100px" }}
            transition={{ duration: 0.7, delay: 0.05, ease: EASE }}
          >
            {head ? <>{head} </> : null}
            <span className={styles.titleAccent}>{tail}</span>
          </motion.h2>
        ) : null}

        {lead ? (
          <motion.p
            className={styles.lead}
            initial={initial}
            whileInView={animate}
            viewport={{ once: true, margin: "100px" }}
            transition={{ duration: 0.7, delay: 0.12, ease: EASE }}
          >
            {lead}
          </motion.p>
        ) : null}

        {rest.length > 0 ? (
          <div className={styles.body}>
            {rest.map((text, i) => (
              <motion.p
                key={i}
                className={styles.bodyPara}
                initial={initial}
                whileInView={animate}
                viewport={{ once: true, margin: "100px" }}
                transition={{
                  duration: 0.7,
                  delay: reduce ? 0 : 0.18 + i * 0.07,
                  ease: EASE
                }}
              >
                {text}
              </motion.p>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
