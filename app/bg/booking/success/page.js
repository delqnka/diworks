import { BookingStatusPage } from "@/components/booking-status-page";

export const metadata = {
  title: "Успешно записване",
  robots: {
    index: false,
    follow: false
  }
};

export default function BookingSuccessPageBg() {
  return <BookingStatusPage locale="bg" variant="success" />;
}
