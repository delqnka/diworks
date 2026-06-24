"use client";

import { BookingButton } from "@/vendor/clicka-booking/dist/index.js";

export function BookingCta({ children, className, service, fallbackHref = "mailto:hello@diworks.co" }) {
  const consultationService = process.env.NEXT_PUBLIC_BOOKING_SERVICE_ID;
  const salonSlug = process.env.NEXT_PUBLIC_SALON_SLUG;

  if (!salonSlug) {
    return (
      <a className={className} href={fallbackHref}>
        {children}
      </a>
    );
  }

  return <BookingButton className={className} service={service ?? consultationService}>{children}</BookingButton>;
}
