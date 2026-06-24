import { BookingStatusPage } from "@/components/booking-status-page";

export const metadata = {
  title: "Booking Success",
  robots: {
    index: false,
    follow: false
  }
};

export default function BookingSuccessPage() {
  return <BookingStatusPage locale="en" variant="success" />;
}
