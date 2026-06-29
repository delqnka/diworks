"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import styles from "./cookie-banner.module.css";

const STORAGE_KEY = "an_cookie_consent_v1";

const COPY = {
  en: {
    text: "We use cookies for analytics to improve your experience. See our",
    link: "privacy policy",
    privacyHref: "/privacy",
    reject: "Reject",
    accept: "Accept",
    aria: "Cookie consent"
  },
  bg: {
    text: "Използваме бисквитки за аналитика, за да подобрим Вашето изживяване. Вижте нашата",
    link: "Политика за поверителност",
    privacyHref: "/bg/privacy",
    reject: "Отказ",
    accept: "Приемам",
    aria: "Съгласие за бисквитки"
  }
};

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
  const pathname = usePathname() || "";
  const copy = pathname.startsWith("/bg") ? COPY.bg : COPY.en;
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
    <div className={styles.banner} role="dialog" aria-live="polite" aria-label={copy.aria}>
      <p className={styles.text}>
        {copy.text}{" "}
        <a href={copy.privacyHref} className={styles.link}>
          {copy.link}
        </a>
        .
      </p>
      <div className={styles.actions}>
        <button type="button" className={styles.reject} onClick={() => decide(false)}>
          {copy.reject}
        </button>
        <button type="button" className={styles.accept} onClick={() => decide(true)}>
          {copy.accept}
        </button>
      </div>
    </div>
  );
}
