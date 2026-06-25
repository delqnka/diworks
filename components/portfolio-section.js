"use client";

import Image from "next/image";
import styles from "./portfolio-section.module.css";

function ProjectCard({ project, index, total }) {
  const targetScale = 1 - (total - 1 - index) * 0.008;

  return (
    <div className={styles.cardWrap} style={{ top: `${6 + index * 0.5}rem` }}>
      <div className={styles.cardWrapInner}>
        <article
          className={styles.card}
          style={{ transform: `scale(${targetScale})` }}
        >
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
                  <Image
                    src={project.images[0]}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 50vw, 240px"
                    loading="lazy"
                  />
                ) : (
                  <div className={styles.placeholder}>image</div>
                )}
              </div>
              <div className={`${styles.cardImage} ${styles.imgMedium}`}>
                {project.images?.[1] ? (
                  <Image
                    src={project.images[1]}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 50vw, 240px"
                    loading="lazy"
                  />
                ) : (
                  <div className={styles.placeholder}>image</div>
                )}
              </div>
            </div>
            <div className={styles.cardCol}>
              <div className={`${styles.cardImage} ${styles.imgTall}`}>
                {project.images?.[2] ? (
                  <Image
                    src={project.images[2]}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 90vw, 360px"
                    loading="lazy"
                  />
                ) : (
                  <div className={styles.placeholder}>image</div>
                )}
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}

export function PortfolioSection({ content }) {
  const projects = content.portfolioProjects || [];
  if (projects.length === 0) return null;

  return (
    <section className={styles.section}>
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
          />
        ))}
      </div>
    </section>
  );
}
