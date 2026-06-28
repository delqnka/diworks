"use client";

import { Fragment, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useShouldReduceMotion } from "@/components/motion-helpers";

function StaggeredFade({ text, className, startIndex = 0, italic = false, animate = true }) {
  const words = text.split(" ");
  let charIndex = startIndex;
  return (
    <span className={className} style={italic ? { fontStyle: "italic" } : undefined}>
      {words.map((word, wi) => (
        <Fragment key={`w-${wi}`}>
          <span style={{ display: "inline-block", whiteSpace: "nowrap" }}>
            {Array.from(word).map((ch) => {
              const i = charIndex++;
              return (
                <motion.span
                  key={`c-${i}`}
                  style={{ display: "inline-block" }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={animate ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ duration: 0.5, delay: i * 0.04, ease: "easeOut" }}
                >
                  {ch}
                </motion.span>
              );
            })}
          </span>
          {wi < words.length - 1 ? " " : null}
        </Fragment>
      ))}
    </span>
  );
}

export function FeaturesHeading({ title, accent }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const reduceMotion = useShouldReduceMotion();

  return (
    <h2 ref={ref} className="features-heading">
      {reduceMotion ? title : <StaggeredFade text={title} animate={inView} />}
      {accent && (
        <>
          {" "}
          {reduceMotion ? (
            <span className="features-heading-accent">{accent}</span>
          ) : (
            <StaggeredFade text={accent} startIndex={title.length} italic animate={inView} />
          )}
        </>
      )}
    </h2>
  );
}
