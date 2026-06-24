"use client";

import { BookingProvider } from "@clicka1/booking";

export function AppShell({ children, locale }) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  const successPath = locale === "bg-BG" ? "/bg/booking/success" : "/booking/success";
  const cancelPath = locale === "bg-BG" ? "/bg/booking/cancel" : "/booking/cancel";

  return (
    <BookingProvider
      salonSlug={process.env.NEXT_PUBLIC_SALON_SLUG}
      engineUrl={process.env.NEXT_PUBLIC_ENGINE_URL}
      locale={locale}
      successUrl={siteUrl ? `${siteUrl}${successPath}` : undefined}
      cancelUrl={siteUrl ? `${siteUrl}${cancelPath}` : undefined}
    >
      {children}
    </BookingProvider>
  );
}
