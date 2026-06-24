"use client";

import { BookingButton } from "@clicka/booking";

export function BookingCta({ children, className, service }) {
  const consultationService = process.env.NEXT_PUBLIC_BOOKING_SERVICE_ID;

  return (
    <BookingButton className={className} service={service ?? consultationService}>
      {children}
    </BookingButton>
  );
}
