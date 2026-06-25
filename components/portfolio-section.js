"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./portfolio-section.module.css";

function ProjectCard({ project, index, total, progress }) {
  const targetScale = 1 - (total - 1 - index) * 0.008;
  const scale = useTransform(progress, [index / total, 1], [1, targetScale]);

  return (
    <div className={styles.cardWrap} style={{ top: `${6 + index * 0.5}rem` }}>
      <div className={styles.cardWrapInner}>
        <motion.article className={styles.card} style={{ scale }}>
          <header className={styles.cardTop}>
            <div className={styles.cardMeta}>
              <span className={styles.cardNumber}>
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className={styles.cardLabels}>
                <span className={styles.cardCategory}>{project.category}</span>
                <span className={styles.cardName}>{project.name}</span>
                {project.description && (
                  <p className={styles.cardDescription}>{project.description}</p>
                )}
              </div>
            </div>
            {project.href ? (
              <a
                className={styles.cardCta}
                href={project.href}
                target="_blank"
                rel="noreferrer"
              >
                {!project.isDemo && (
                  <span className={styles.cardCtaDot} aria-hidden="true" />
                )}
                {project.ctaLabel || "Live Project"}
              </a>
            ) : (
              <span className={styles.cardCta} aria-hidden="true">
                {project.ctaLabel || "Coming Soon"}
              </span>
            )}
          </header>

          <div className={styles.cardMedia}>
            <div className={styles.cardCol}>
              <div className={`${styles.cardImage} ${styles.imgSmall}`}>
                {project.images?.[0] ? (
                  <img src={project.images[0]} alt="" loading="lazy" />
                ) : (
                  <div className={styles.placeholder}>image</div>
                )}
              </div>
              <div className={`${styles.cardImage} ${styles.imgMedium}`}>
                {project.images?.[1] ? (
                  <img src={project.images[1]} alt="" loading="lazy" />
                ) : (
                  <div className={styles.placeholder}>image</div>
                )}
              </div>
            </div>
            <div className={styles.cardCol}>
              <div className={`${styles.cardImage} ${styles.imgTall}`}>
                {project.images?.[2] ? (
                  <img src={project.images[2]} alt="" loading="lazy" />
                ) : (
                  <div className={styles.placeholder}>image</div>
                )}
              </div>
            </div>
          </div>
        </motion.article>
      </div>
    </div>
  );
}

export function PortfolioSection({ content }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const projects = content.portfolioProjects || [];
  if (projects.length === 0) return null;

  return (
    <section className={styles.section} ref={ref}>
      {content.portfolioEyebrow && (
        <p className={styles.eyebrow}>{content.portfolioEyebrow}</p>
      )}
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
      <div className={styles.stack}>
        {projects.map((project, i) => (
          <ProjectCard
            key={i}
            project={project}
            index={i}
            total={projects.length}
            progress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  );
}
