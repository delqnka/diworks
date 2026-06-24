import Link from "next/link";

export function BookingStatusPage({ locale, variant }) {
  const isBg = locale === "bg";
  const isSuccess = variant === "success";
  const homeHref = isBg ? "/bg" : "/";

  const title = isBg
    ? isSuccess
      ? "Запитването е изпратено"
      : "Записването беше прекъснато"
    : isSuccess
      ? "Your booking request was sent"
      : "Your booking was cancelled";

  const body = isBg
    ? isSuccess
      ? "Благодаря. Получихме заявката ви през Clicka booking flow и ще се свържем с вас възможно най скоро."
      : "Няма проблем. Ако искате, можете да опитате отново или да ни пишете директно."
    : isSuccess
      ? "Thank you. Your request came through the Clicka booking flow and we will get back to you as soon as possible."
      : "No problem. You can try again anytime or contact us directly.";

  const primaryLabel = isBg
    ? isSuccess
      ? "Обратно към сайта"
      : "Пробвай отново"
    : isSuccess
      ? "Back to the site"
      : "Try again";

  const secondaryLabel = isBg ? "Пиши ни на hello@diworks.co" : "Email hello@diworks.co";

  return (
    <main className="booking-status-page">
      <section className="section">
        <div className="container">
          <div className="cta-panel booking-status-panel">
            <p className="eyebrow">DIWORKS</p>
            <h1>{title}</h1>
            <p>{body}</p>
            <div className="hero-actions booking-status-actions">
              <Link className="button button-primary" href={homeHref}>
                {primaryLabel}
              </Link>
              <a className="button button-ghost" href="mailto:hello@diworks.co">
                {secondaryLabel}
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
