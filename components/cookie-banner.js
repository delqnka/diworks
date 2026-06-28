"use client";

import { useEffect, useState } from "react";
import styles from "./cookie-banner.module.css";

const STORAGE_KEY = "an_cookie_consent_v1";

function applyConsent(granted) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  const value = granted ? "granted" : "denied";
  window.gtag("consent", "update", {
    ad_storage: value,
    ad_user_data: value,
    ad_personalization: value,
    analytics_storage: value
  });
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (!stored) {
        setVisible(true);
        return;
      }
      applyConsent(stored === "granted");
    } catch {
      setVisible(true);
    }
  }, []);

  function decide(granted) {
    try {
      localStorage.setItem(STORAGE_KEY, granted ? "granted" : "denied");
    } catch {}
    applyConsent(granted);
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className={styles.banner} role="dialog" aria-live="polite" aria-label="Cookie consent">
      <p className={styles.text}>
        We use cookies for analytics to improve your experience. See our{" "}
        <a href="/privacy" className={styles.link}>privacy policy</a>.
      </p>
      <div className={styles.actions}>
        <button type="button" className={styles.reject} onClick={() => decide(false)}>
          Reject
        </button>
        <button type="button" className={styles.accept} onClick={() => decide(true)}>
          Accept
        </button>
      </div>
    </div>
  );
}
