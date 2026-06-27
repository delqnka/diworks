"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { StaggeredFade } from "@/components/motion-helpers";

const VIDEO_SRC =
  "https://pub-a282b633397549478fc7e2204fa66fc2.r2.dev/pillars-compressed.mp4";

export function PillarsReveal({ eyebrow, title, items }) {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const [visibleCount, setVisibleCount] = useState(0);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.25 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    setVisibleCount(1);
    const id = setInterval(() => {
      setVisibleCount((c) => {
        if (c >= items.length) {
          clearInterval(id);
          return c;
        }
        return c + 1;
      });
    }, 2200);
    return () => clearInterval(id);
  }, [inView, items.length]);

  return (
    <section ref={sectionRef} className="section-pillars-reveal">
      <div className="pillars-sticky">
        <video
          ref={videoRef}
          className="pillars-bg-video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
          tabIndex={-1}
          src={VIDEO_SRC}
        />
        <div className="pillars-bg-overlay" aria-hidden="true" />
        <div className="pillars-content">
          <div className="pillars-content-shell">
            <h2 className="pillars-reveal-title">
              <StaggeredFade text={title} charDelay={0.025} />
            </h2>
          </div>
          <ul className="pillars-text-stack">
            {items.slice(0, visibleCount).map(([number, t]) => (
              <motion.li
                key={number}
                layout
                className="pillar-text-row"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  layout: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
                  opacity: { duration: 0.6, ease: "easeOut" },
                }}
              >
                <span className="pillar-text-number">{number}</span>
                <span className="pillar-text-title">
                  <StaggeredFade text={t} charDelay={0.035} />
                </span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
