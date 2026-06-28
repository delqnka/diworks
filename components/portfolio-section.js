"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Play } from "lucide-react";
import { BookingCta } from "@/components/booking-cta";
import styles from "./portfolio-section.module.css";

function ProjectVideo({ src }) {
  const ref = useRef(null);
  const [playing, setPlaying] = useState(false);

  const start = () => {
    const v = ref.current;
    if (!v) return;
    v.play().then(() => setPlaying(true)).catch(() => {});
  };
  const stop = () => {
    const v = ref.current;
    if (!v) return;
    v.pause();
    setPlaying(false);
  };

  return (
    <div
      className={styles.videoFrame}
      onClick={() => (playing ? stop() : start())}
      role="button"
      tabIndex={0}
      aria-label={playing ? "Pause preview" : "Play preview"}
    >
      <video
        ref={ref}
        className={styles.videoEl}
        src={src}
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
        tabIndex={-1}
      />
      {!playing && (
        <span className={styles.playOverlay} aria-hidden="true">
          <Play size={22} strokeWidth={1.8} fill="currentColor" />
        </span>
      )}
    </div>
  );
}

function ProjectImages({ images }) {
  return (
    <div className={styles.imageGrid}>
      {images.slice(0, 3).map((src, i) => (
        <div className={`${styles.image} ${styles[`image${i}`]}`} key={src}>
          <Image src={src} alt="" fill sizes="(max-width: 768px) 90vw, 480px" loading="lazy" />
        </div>
      ))}
    </div>
  );
}

function ProjectRow({ project, readMoreLabel, readLessLabel }) {
  const [expanded, setExpanded] = useState(false);
  const meta = [project.category, project.location, project.languages]
    .filter(Boolean)
    .join(" · ");

  return (
    <motion.article
      className={styles.row}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-15% 0px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <header className={styles.rowHeader}>
        <h3 className={styles.rowTitle}>{project.name}</h3>
        {meta ? <p className={styles.rowMeta}>{meta}</p> : null}
      </header>

      {project.video ? (
        <ProjectVideo src={project.video} />
      ) : project.images?.length ? (
        <ProjectImages images={project.images} />
      ) : null}

      {project.href ? (
        <a
          className={styles.rowLink}
          href={project.href}
          target="_blank"
          rel="noreferrer"
        >
          {project.ctaLabel || "Live Project"}
          <ArrowUpRight size={16} strokeWidth={1.6} />
        </a>
      ) : null}

      {project.description ? (
        <div className={styles.rowDescriptionWrap}>
          <div className={`${styles.rowDescription} ${expanded ? styles.rowDescriptionOpen : ""}`}>
            {typeof project.description === "string" ? (
              <p className={styles.rowDescriptionPara}>{project.description}</p>
            ) : (
              <>
                {project.description.lead && (
                  <p className={styles.rowDescriptionLead}>{project.description.lead}</p>
                )}
                {project.description.body?.map((para, i) => (
                  <p key={i} className={styles.rowDescriptionPara}>{para}</p>
                ))}
                {project.description.kicker && (
                  <p className={styles.rowDescriptionKicker}>{project.description.kicker}</p>
                )}
              </>
            )}
          </div>
          <button
            type="button"
            className={styles.rowDescriptionToggle}
            onClick={() => setExpanded((v) => !v)}
            aria-expanded={expanded}
          >
            {expanded ? (readLessLabel || "Show less") : (readMoreLabel || "Read more")}
          </button>
        </div>
      ) : null}
    </motion.article>
  );
}

function PortfolioList({ projects, readMoreLabel, readLessLabel }) {
  const scrollerRef = useRef(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const center = el.scrollLeft + el.clientWidth / 2;
        const cards = el.querySelectorAll(`.${styles.row}`);
        let best = 0;
        let bestDist = Infinity;
        cards.forEach((c, i) => {
          const cx = c.offsetLeft + c.offsetWidth / 2;
          const d = Math.abs(cx - center);
          if (d < bestDist) {
            bestDist = d;
            best = i;
          }
        });
        setActive(best);
      });
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      el.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const goTo = (i) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelectorAll(`.${styles.row}`)[i];
    if (card) {
      el.scrollTo({ left: card.offsetLeft - (el.clientWidth - card.offsetWidth) / 2, behavior: "smooth" });
    }
  };

  return (
    <>
      <div className={styles.list} ref={scrollerRef}>
        {projects.map((project, i) => (
          <ProjectRow
            key={i}
            project={project}
            readMoreLabel={readMoreLabel}
            readLessLabel={readLessLabel}
          />
        ))}
      </div>
      {projects.length > 1 && (
        <div className={styles.dots} role="tablist" aria-label="Projects">
          {projects.map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === active}
              aria-label={`Go to project ${i + 1}`}
              className={`${styles.dot} ${i === active ? styles.dotActive : ""}`}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
      )}
    </>
  );
}

export function PortfolioSection({ content }) {
  const projects = content.portfolioProjects || [];
  if (projects.length === 0) return null;

  return (
    <section className={styles.section}>
      <header className={styles.sectionHead}>
        {content.portfolioEyebrow && (
          <p className={styles.eyebrow}>{content.portfolioEyebrow}</p>
        )}
        {(content.portfolioTitle || content.portfolioTitleAccent) && (
          <h2 className={styles.heading}>
            {content.portfolioTitle}
            {content.portfolioTitleAccent && (
              <>
                {" "}
                <span className={styles.headingAccent}>
                  {content.portfolioTitleAccent}
                </span>
              </>
            )}
          </h2>
        )}
      </header>

      <PortfolioList
        projects={projects}
        readMoreLabel={content.portfolioReadMore}
        readLessLabel={content.portfolioReadLess}
      />

      {content.portfolioOutro ? (
        <motion.div
          className={styles.outro}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className={styles.outroLine}>{content.portfolioOutro}</p>
          {content.portfolioOutroCta ? (
            <BookingCta className={styles.outroCta}>
              {content.portfolioOutroCta}
              <ArrowUpRight size={16} strokeWidth={1.6} />
            </BookingCta>
          ) : null}
        </motion.div>
      ) : null}
    </section>
  );
}
