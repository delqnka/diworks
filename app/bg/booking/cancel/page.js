import { BookingStatusPage } from "@/components/booking-status-page";

export const metadata = {
  title: "Отказано записване",
  robots: {
    index: false,
    follow: false
  }
};

export default function BookingCancelPageBg() {
  return <BookingStatusPage locale="bg" variant="cancel" />;
}
