"use client";

import { useBooking } from "@/vendor/clicka-booking/dist/index.js";

export function BookingCta({ children, className, service, fallbackHref = "mailto:hello@diworks.co" }) {
  const consultationService = process.env.NEXT_PUBLIC_BOOKING_SERVICE_ID;
  const salonSlug = process.env.NEXT_PUBLIC_SALON_SLUG;
  const { open, error } = useBooking();

  if (!salonSlug || error) {
    return (
      <a className={className} href={fallbackHref}>
        {children}
      </a>
    );
  }

  return (
    <button className={className} type="button" onClick={() => open(service ?? consultationService)}>
      {children}
    </button>
  );
}
