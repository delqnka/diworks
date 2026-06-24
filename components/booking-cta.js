"use client";

import { BookingButton } from "@/vendor/clicka-booking/dist/index.js";

export function BookingCta({ children, className, service }) {
  const consultationService = process.env.NEXT_PUBLIC_BOOKING_SERVICE_ID;

  return (
    <BookingButton className={className} service={service ?? consultationService}>
      {children}
    </BookingButton>
  );
}
