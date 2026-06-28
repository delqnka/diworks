"use client";

import { useState } from "react";

const VISIBLE = 5;

export function FaqList({ faqs, showMoreLabel, showLessLabel }) {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? faqs : faqs.slice(0, VISIBLE);
  const hidden = faqs.length - VISIBLE;

  return (
    <>
      {visible.map(([question, answer]) => (
        <details className="faq-item" key={question}>
          <summary>{question}</summary>
          <p>{answer}</p>
        </details>
      ))}
      {hidden > 0 && (
        <button
          type="button"
          className="faq-toggle"
          onClick={() => setExpanded((v) => !v)}
        >
          {expanded ? showLessLabel : `${showMoreLabel} (${hidden})`}
        </button>
      )}
    </>
  );
}
