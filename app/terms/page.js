import styles from "./terms.module.css";

export const metadata = {
  title: "Terms & Conditions",
  description:
    "Terms and conditions governing the use of alternine.co, the marketing website of Booka LTD (trading as Alter Nine).",
  alternates: {
    canonical: "https://alternine.co/terms",
    languages: {
      en: "https://alternine.co/terms",
      bg: "https://alternine.co/bg/terms"
    }
  },
  robots: { index: true, follow: true }
};

export default function TermsPage() {
  return (
    <main className={styles.page}>
      <div className={styles.inner}>
        <h1>Terms &amp; Conditions</h1>
        <p className={styles.meta}>Last updated: 28 June 2026 · Version 1.0</p>

        <section>
          <h2>1. Who we are</h2>
          <p>
            These Terms &amp; Conditions ("Terms") govern your access to and use of{" "}
            <a href="https://www.alternine.co">www.alternine.co</a> (the "Website"), operated by{" "}
            <strong>Booka LTD</strong> (in Bulgarian: <strong>„Буука" ЕООД</strong>), a company
            registered in Bulgaria under Company ID (ЕИК) <strong>208363525</strong>, with
            registered office at ul. General Kiselov 10, 9000 Varna, Bulgaria, trading as{" "}
            <strong>Alter Nine</strong> ("we", "us", "our").
          </p>
          <p>
            Contact: <a href="mailto:hello@mail.alternine.co">hello@mail.alternine.co</a>.
            Supervisory authority for data protection: Commission for Personal Data Protection
            (КЗЛД), <a href="https://www.cpdp.bg">www.cpdp.bg</a>.
          </p>
        </section>

        <section>
          <h2>2. What this Website is — and what it is not</h2>
          <p>
            Alter Nine is a <strong>bespoke website design and development service</strong>. We
            build custom websites with integrated online booking systems for service businesses
            under a separate written contract signed with each client. <strong>This Website is a
            marketing and information platform only</strong> — you cannot create an account,
            subscribe to a self-serve plan, or buy a website through it. All commercial
            engagements are agreed individually by signed contract.
          </p>
        </section>

        <section>
          <h2>3. Acceptance of these Terms</h2>
          <p>
            By accessing or using the Website, you agree to be bound by these Terms and by our{" "}
            <a href="/privacy">Privacy Policy</a>. If you do not agree, please do not use the
            Website.
          </p>
        </section>

        <section>
          <h2>4. Use of the Website</h2>
          <p>You agree to use the Website only for lawful purposes. In particular, you must not:</p>
          <ul>
            <li>copy, reproduce, scrape, or republish any content of the Website beyond personal,
              non-commercial reference, without our prior written consent;</li>
            <li>attempt to gain unauthorised access to the Website, its servers, accounts or
              underlying infrastructure;</li>
            <li>introduce viruses, worms, trojans, or other malicious code;</li>
            <li>use the Website in any way that could damage, disable, overburden, or impair it,
              or interfere with any other party's use of it;</li>
            <li>impersonate any person or misrepresent your affiliation with any person or
              organisation;</li>
            <li>use any automated means (bots, scrapers) to monitor, copy, or harvest material
              from the Website without our written consent.</li>
          </ul>
        </section>

        <section>
          <h2>5. Intellectual property</h2>
          <p>
            All content on the Website — including text, graphics, logos, icons, images,
            typography, code, design and the Alter Nine and Booka names and marks — is owned by or
            licensed to us and is protected by Bulgarian, EU and international copyright,
            trademark and other intellectual property laws.
          </p>
          <p>
            Nothing in these Terms grants you any right or licence to use any trademark, design,
            logo or copyright we own or license, except as expressly permitted in writing.
          </p>
        </section>

        <section>
          <h2>6. Contact, enquiries and quotes</h2>
          <p>
            Any contact you send via the Website (email, form submission, social channel) is for
            information and pre-contractual discussion only. <strong>Quotes, proposals, drafts and
            mock-ups are not binding offers</strong> and do not create a contract. A binding
            contractual relationship arises only when both parties sign a written Website
            Development Agreement (or other written contract) prepared by us.
          </p>
          <p>
            We respond to enquiries within reasonable business hours. We may decline to accept any
            engagement at our discretion.
          </p>
        </section>

        <section>
          <h2>7. Links to third-party sites</h2>
          <p>
            The Website may link to third-party sites or services (e.g. portfolio examples of past
            client work, social networks, payment processors). Such links are provided for
            convenience only. We do not control and are not responsible for the content, privacy
            practices or operation of any third-party site.
          </p>
        </section>

        <section>
          <h2>8. Disclaimer</h2>
          <p>
            The Website and its content are provided <strong>"as is" and "as available"</strong>{" "}
            for general informational purposes. We make reasonable efforts to keep information
            accurate and up-to-date but we make no warranty, express or implied, that the Website
            will be uninterrupted, error-free, secure, or that any information presented will be
            accurate, complete, or current.
          </p>
          <p>
            Where you are a consumer in the European Union, nothing in these Terms limits or
            excludes mandatory consumer rights you have under applicable law.
          </p>
        </section>

        <section>
          <h2>9. Limitation of liability</h2>
          <p>
            To the maximum extent permitted by law, we shall not be liable for any indirect,
            incidental, special, consequential or punitive damages, including loss of profits,
            loss of data, business interruption, or loss of goodwill, arising out of or in
            connection with your use of, or inability to use, the Website.
          </p>
          <p>
            Our aggregate liability arising out of or in connection with your use of the Website
            shall not exceed <strong>100 EUR</strong>.
          </p>
          <p>
            The limitations in this section do not apply to: (i) liability for death or personal
            injury caused by our negligence, (ii) liability for wilful misconduct or gross
            negligence, or (iii) any other liability which cannot be excluded or limited under
            applicable law (including mandatory EU consumer rights). For commercial engagements
            governed by a signed Website Development Agreement, the liability terms of that
            agreement prevail.
          </p>
        </section>

        <section>
          <h2>10. Indemnification</h2>
          <p>
            You agree to indemnify and hold harmless Booka LTD, its officers, employees and
            sub-contractors from and against any claims, damages, liabilities and expenses arising
            out of your misuse of the Website or your breach of these Terms.
          </p>
        </section>

        <section>
          <h2>11. Privacy and cookies</h2>
          <p>
            Our processing of personal data collected through the Website is described in our{" "}
            <a href="/privacy">Privacy Policy</a>. Non-essential cookies (including analytics) are
            loaded only after you grant consent through our cookie banner; we implement Google
            Consent Mode v2 to ensure tracking is denied by default until you accept.
          </p>
        </section>

        <section>
          <h2>12. Changes to these Terms</h2>
          <p>
            We may update these Terms from time to time. The "Last updated" date above reflects
            the most recent revision. Material changes will be announced on the Website. Your
            continued use of the Website after the changes take effect constitutes acceptance of
            the revised Terms.
          </p>
        </section>

        <section>
          <h2>13. Governing law and disputes</h2>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of
            Bulgaria, excluding its conflict-of-laws rules. Any dispute arising out of or in
            connection with these Terms shall be resolved by the competent Bulgarian court at the
            registered seat of Booka LTD.
          </p>
          <p>
            If you are a consumer in the European Union, you may also access the European
            Commission's Online Dispute Resolution platform at{" "}
            <a href="https://ec.europa.eu/consumers/odr">ec.europa.eu/consumers/odr</a>. You may
            also lodge a complaint regarding personal data with the Bulgarian Commission for
            Personal Data Protection at <a href="https://www.cpdp.bg">www.cpdp.bg</a>.
          </p>
        </section>

        <section>
          <h2>14. Severability</h2>
          <p>
            If any provision of these Terms is held to be invalid or unenforceable, the remaining
            provisions shall continue in full force and effect.
          </p>
        </section>

        <section>
          <h2>15. Contact</h2>
          <div className={styles.callout}>
            <p>
              <strong>Booka LTD / „Буука" ЕООД</strong>
              <br />
              ЕИК 208363525
              <br />
              ul. General Kiselov 10, 9000 Varna, Bulgaria
              <br />
              Email: <a href="mailto:hello@mail.alternine.co">hello@mail.alternine.co</a>
              <br />
              Website: <a href="https://www.alternine.co">www.alternine.co</a>
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
