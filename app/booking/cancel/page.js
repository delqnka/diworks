import { BookingStatusPage } from "@/components/booking-status-page";

export const metadata = {
  title: "Booking Cancelled",
  robots: {
    index: false,
    follow: false
  }
};

export default function BookingCancelPage() {
  return <BookingStatusPage locale="en" variant="cancel" />;
}
