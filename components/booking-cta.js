"use client";

import { useEffect } from "react";
import { useBooking } from "@clicka1/booking";

export function BookingCta({ children, className, service, fallbackHref = "mailto:hello@alternine.co" }) {
  const consultationService = process.env.NEXT_PUBLIC_BOOKING_SERVICE_ID;
  const salonSlug = process.env.NEXT_PUBLIC_SALON_SLUG;
  const { open, error } = useBooking();

  useEffect(() => {
    if (!error) return;
    console.error("[Alter Nine booking] Provider reported an error:", error);
  }, [error]);

  if (!salonSlug) {
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
