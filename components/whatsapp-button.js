"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import styles from "./whatsapp-button.module.css";

const PHONE = "359886659405";

const COPY = {
  en: {
    aria: "Chat on WhatsApp",
    message: "Hi Delyana, I'm interested in a custom website for my business."
  },
  bg: {
    aria: "Чат в WhatsApp",
    message: "Здравейте Деляна, интересувам се от сайт по поръчка за моя бизнес."
  }
};

export default function WhatsAppButton() {
  const pathname = usePathname() || "";
  const copy = pathname.startsWith("/bg") ? COPY.bg : COPY.en;
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const threshold = () => window.innerHeight * 0.7;
    const onScroll = () => setVisible(window.scrollY > threshold());
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const href = `https://wa.me/${PHONE}?text=${encodeURIComponent(copy.message)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={copy.aria}
      className={`${styles.button} ${visible ? styles.visible : ""}`}
    >
      <svg
        viewBox="0 0 32 32"
        width="28"
        height="28"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M16.001 3C8.832 3 3 8.832 3 16c0 2.293.601 4.527 1.74 6.5L3 29l6.668-1.728A12.93 12.93 0 0 0 16 29c7.169 0 13-5.832 13-13S23.17 3 16.001 3Zm0 23.6c-1.97 0-3.9-.53-5.59-1.532l-.401-.24-3.958 1.026 1.057-3.86-.262-.41A10.55 10.55 0 0 1 5.4 16C5.4 10.15 10.151 5.4 16.001 5.4S26.6 10.15 26.6 16s-4.75 10.6-10.6 10.6Zm5.81-7.94c-.317-.16-1.882-.93-2.173-1.036-.292-.107-.504-.16-.716.16-.213.32-.823 1.036-1.009 1.248-.186.213-.371.24-.689.08-.318-.16-1.343-.494-2.56-1.578-.946-.844-1.585-1.887-1.771-2.207-.186-.32-.02-.493.139-.652.143-.142.318-.371.477-.557.16-.186.213-.32.32-.532.107-.213.053-.4-.027-.56-.08-.16-.716-1.722-.98-2.36-.259-.62-.522-.536-.716-.546-.186-.01-.4-.012-.612-.012-.213 0-.557.08-.85.4-.292.32-1.113 1.088-1.113 2.652s1.14 3.076 1.298 3.288c.16.213 2.243 3.422 5.434 4.797.76.328 1.353.524 1.815.671.762.242 1.456.208 2.005.126.612-.091 1.882-.768 2.146-1.51.265-.74.265-1.376.186-1.51-.08-.133-.292-.213-.61-.373Z" />
      </svg>
    </a>
  );
}
