"use client";

import { useState, useRef, useLayoutEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

function Pill({ title, text, isFeature }) {
  const wrapRef = useRef(null);
  const popRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [shift, setShift] = useState(0);
  const [placement, setPlacement] = useState("bottom");

  useLayoutEffect(() => {
    if (!open || !popRef.current || !wrapRef.current) return;
    const rect = popRef.current.getBoundingClientRect();
    const margin = 12;
    let s = 0;
    if (rect.right > window.innerWidth - margin) {
      s = window.innerWidth - margin - rect.right;
    } else if (rect.left < margin) {
      s = margin - rect.left;
    }
    setShift(s);

    const pillRect = wrapRef.current.getBoundingClientRect();
    const spaceBelow = window.innerHeight - pillRect.bottom;
    const needed = rect.height + 16;
    if (spaceBelow < needed && pillRect.top > needed) {
      setPlacement("top");
    } else {
      setPlacement("bottom");
    }
  }, [open]);

  return (
    <li
      ref={wrapRef}
      className="build-pill-wrap"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => {
        setOpen(false);
        setShift(0);
      }}
    >
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
        className={`build-pill${isFeature ? " build-pill-feature" : ""}`}
        aria-expanded={open}
      >
        {title}
      </button>
      <AnimatePresence>
        {open && (
          <div className={`build-pill-popover-pos build-pill-popover-${placement}`} style={{ "--shift": `${shift}px` }}>
            <motion.div
              ref={popRef}
              className="build-pill-popover"
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            >
              {text}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </li>
  );
}

export function BuildPills({ items, featureIndex = 2 }) {
  return (
    <ul className="build-pills">
      {items.map(([number, title, text], i) => (
        <Pill key={number} title={title} text={text} isFeature={i === featureIndex} />
      ))}
    </ul>
  );
}
