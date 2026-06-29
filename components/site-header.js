import Link from "next/link";
import Image from "next/image";
import { BookingCta } from "@/components/booking-cta";
import styles from "./site-header.module.css";

export function SiteHeader({ locale = "bg" }) {
  const home = locale === "bg" ? "/bg" : "/";
  const ctaLabel = locale === "bg" ? "Нека поговорим" : "Let's talk";

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link className={styles.brand} href={home} aria-label="Alter Nine">
          <Image
            src="/9-logo.svg"
            alt="Alter Nine"
            width={140}
            height={78}
            priority
            unoptimized
          />
        </Link>
        <BookingCta className={styles.cta}>{ctaLabel}</BookingCta>
      </div>
    </header>
  );
}
