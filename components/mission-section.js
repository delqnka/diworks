"use client";

import { motion, useReducedMotion } from "framer-motion";

const EASE = [0.25, 0.1, 0.25, 1];

function renderInlineBold(text, keyPrefix) {
  return text.split(/\*\*(.+?)\*\*/g).map((part, i) =>
    i % 2 === 1 ? (
      <strong key={`${keyPrefix}-b-${i}`}>{part}</strong>
    ) : (
      <span key={`${keyPrefix}-t-${i}`}>{part}</span>
    )
  );
}

export function MissionSection({ content }) {
  const reduce = useReducedMotion();
  const initial = reduce ? false : { opacity: 0, y: 16 };
  const animate = reduce ? undefined : { opacity: 1, y: 0 };
  const paragraphs = (content.missionText || "").split("\n\n");

  return (
    <section className="section mission-section">
      <div className="mission-shell">
        <motion.p
          className="eyebrow"
          initial={initial}
          whileInView={animate}
          viewport={{ once: true, margin: "100px" }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          {content.missionEyebrow}
        </motion.p>
        <motion.h2
          className="mission-title"
          initial={initial}
          whileInView={animate}
          viewport={{ once: true, margin: "100px" }}
          transition={{ duration: 0.7, delay: 0.05, ease: EASE }}
        >
          {content.missionTitle}{" "}
          <span className="serif">{content.missionAccent}</span>
          {content.missionTitleEnd ? ` ${content.missionTitleEnd}` : ""}
          {content.missionSubtitle && (
            <span className="mission-subtitle">{content.missionSubtitle}</span>
          )}
        </motion.h2>
        <div className="mission-text">
          {paragraphs.map((para, p) => (
            <motion.p
              key={p}
              initial={initial}
              whileInView={animate}
              viewport={{ once: true, margin: "100px" }}
              transition={{
                duration: 0.7,
                delay: reduce ? 0 : 0.1 + p * 0.08,
                ease: EASE,
              }}
            >
              {renderInlineBold(para, `p${p}`)}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
}
