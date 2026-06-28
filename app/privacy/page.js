import styles from "./privacy.module.css";

export const metadata = {
  title: "Privacy Policy",
  description:
    "How Booka LTD (trading as Alter Nine) collects, uses, and protects personal data on alternine.co and within the Alter Nine booking platform.",
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true }
};

export default function PrivacyPage() {
  return (
    <main className={styles.page}>
      <div className={styles.inner}>
      <h1>Privacy Policy</h1>
      <p className={styles.meta}>Last updated: 28 June 2026 · Version 1.0</p>

      <section>
        <h2>1. Who we are</h2>
        <p>
          This Privacy Policy explains how <strong>Booka LTD</strong> (in Bulgarian:{" "}
          <strong>„Буука" ЕООД</strong>), a company registered in Bulgaria, trading as{" "}
          <strong>Alter Nine</strong>, collects, uses, stores and shares personal data when you visit{" "}
          <a href="https://www.alternine.co">www.alternine.co</a> (the "Website") or use the
          Alter Nine booking platform and related services (together, the "Services").
        </p>
        <ul>
          <li>
            <strong>Controller:</strong> Booka LTD / „Буука" ЕООД
          </li>
          <li>
            <strong>Registered office:</strong> ul. General Kiselov 10, 9000 Varna, Bulgaria
          </li>
          <li>
            <strong>Company ID (ЕИК):</strong> 208363525
          </li>
          <li>
            <strong>Contact:</strong>{" "}
            <a href="mailto:hello@mail.alternine.co">hello@mail.alternine.co</a>
          </li>
          <li>
            <strong>Supervisory authority:</strong> Commission for Personal Data Protection (CPDP /
            КЗЛД), 2 Prof. Tsvetan Lazarov Blvd., 1592 Sofia, Bulgaria —{" "}
            <a href="https://www.cpdp.bg">www.cpdp.bg</a>
          </li>
        </ul>
        <p>
          We act as a <strong>data controller</strong> for personal data we collect directly about
          visitors to the Website, our business clients (account holders) and prospects. We act as
          a <strong>data processor</strong> for personal data that our business clients upload to
          or generate within the Alter Nine booking platform about their own end customers — in
          that case the business client is the controller and a separate Data Processing Agreement
          (DPA) governs that relationship.
        </p>
      </section>

      <section>
        <h2>2. Scope of this Policy</h2>
        <p>This Policy applies to:</p>
        <ul>
          <li>Visitors to the Website and any of its subdomains and marketing pages;</li>
          <li>
            Prospects who request demos, contact us, or sign up for newsletters or trial accounts;
          </li>
          <li>
            Account holders ("Business Clients") — service businesses subscribing to the Alter
            Nine platform;
          </li>
          <li>
            End customers ("Bookers") who book appointments through a Business Client's
            Alter-Nine-powered website — but only in respect of data we process directly as
            controller (for example, browser-level analytics on alternine.co). Data Bookers
            provide while booking with a Business Client is processed by us on behalf of that
            Business Client under a DPA, and the Business Client's own privacy policy governs the
            primary use of that data.
          </li>
        </ul>
      </section>

      <section>
        <h2>3. What personal data we collect</h2>

        <h3>3.1 Information you provide</h3>
        <ul>
          <li>
            <strong>Account &amp; billing:</strong> name, business name, email, phone, billing
            address, VAT number, payment details (handled by our payment processor — we do not
            store full card numbers);
          </li>
          <li>
            <strong>Communications:</strong> messages you send us via email, contact forms, chat
            or social channels, including the content and any attachments;
          </li>
          <li>
            <strong>Demo / sales requests:</strong> name, email, company, role, country, and
            anything you choose to write in free-text fields.
          </li>
        </ul>

        <h3>3.2 Information collected automatically</h3>
        <ul>
          <li>
            <strong>Device &amp; connection:</strong> IP address (truncated where possible),
            browser type and version, operating system, device type, screen size, language,
            referring URL;
          </li>
          <li>
            <strong>Usage:</strong> pages viewed, time on page, navigation paths, clicks,
            interactions with embedded media, timestamps;
          </li>
          <li>
            <strong>Performance:</strong> page load metrics, Core Web Vitals (LCP, INP, CLS),
            error reports;
          </li>
          <li>
            <strong>Cookies &amp; similar technologies:</strong> see Section 7.
          </li>
        </ul>

        <h3>3.3 Information from third parties</h3>
        <ul>
          <li>Authentication providers if you sign in via a third-party identity provider;</li>
          <li>
            Payment processors (transaction status, last 4 digits of card, currency, country);
          </li>
          <li>
            Publicly available business information used to verify legitimacy of subscription
            accounts.
          </li>
        </ul>

        <h3>3.4 Sensitive data</h3>
        <p>
          We do not knowingly collect special categories of personal data (e.g. health, religion,
          political opinions). Where Business Clients in regulated sectors (e.g. clinics) process
          such data through the platform, they do so as controller under a DPA and are responsible
          for the corresponding legal basis.
        </p>
      </section>

      <section>
        <h2>4. Why we use your data &amp; legal bases</h2>
        <table>
          <thead>
            <tr>
              <th>Purpose</th>
              <th>Legal basis (GDPR Art. 6)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Providing the Website and Services; account creation and login</td>
              <td>Performance of a contract (Art. 6(1)(b))</td>
            </tr>
            <tr>
              <td>Processing payments, invoicing, debt collection</td>
              <td>Contract; legal obligation (Art. 6(1)(b), (c))</td>
            </tr>
            <tr>
              <td>Customer support and responding to enquiries</td>
              <td>Contract; legitimate interests (Art. 6(1)(b), (f))</td>
            </tr>
            <tr>
              <td>Security, fraud prevention, abuse detection, audit logs</td>
              <td>Legitimate interests; legal obligation (Art. 6(1)(f), (c))</td>
            </tr>
            <tr>
              <td>Service improvement and analytics</td>
              <td>Consent (analytics cookies) or legitimate interests for aggregated data</td>
            </tr>
            <tr>
              <td>Marketing emails to existing customers about similar services</td>
              <td>
                Legitimate interests with opt-out (Art. 6(1)(f); ePrivacy "soft opt-in")
              </td>
            </tr>
            <tr>
              <td>Marketing to prospects, newsletters</td>
              <td>Consent (Art. 6(1)(a))</td>
            </tr>
            <tr>
              <td>Tax, accounting and statutory record keeping</td>
              <td>Legal obligation (Art. 6(1)(c))</td>
            </tr>
            <tr>
              <td>Defending or asserting legal claims</td>
              <td>Legitimate interests (Art. 6(1)(f))</td>
            </tr>
          </tbody>
        </table>
        <p>
          Where we rely on legitimate interests, we balance our interests against your rights and
          freedoms. You may object to such processing at any time (see Section 9).
        </p>
      </section>

      <section>
        <h2>5. How long we keep your data</h2>
        <table>
          <thead>
            <tr>
              <th>Category</th>
              <th>Retention</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Account data</td>
              <td>For the life of the account + 12 months after closure</td>
            </tr>
            <tr>
              <td>Billing &amp; accounting records</td>
              <td>10 years (Bulgarian Accountancy Act, Art. 12)</td>
            </tr>
            <tr>
              <td>Support tickets and emails</td>
              <td>24 months from last contact</td>
            </tr>
            <tr>
              <td>Marketing consents and withdrawals</td>
              <td>5 years from withdrawal (to evidence compliance)</td>
            </tr>
            <tr>
              <td>Analytics data (Google Analytics)</td>
              <td>14 months (default GA4 retention)</td>
            </tr>
            <tr>
              <td>Server &amp; security logs</td>
              <td>90 days, longer if part of an active investigation</td>
            </tr>
            <tr>
              <td>Backups</td>
              <td>Rolling 30 days, then overwritten</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section>
        <h2>6. Who we share data with</h2>
        <p>
          We do not sell personal data. We share it only with the categories of recipients below,
          and only as needed for the purposes described in Section 4.
        </p>
        <ul>
          <li>
            <strong>Business Clients</strong> — when you book through a website powered by Alter
            Nine, the relevant Business Client receives your booking data as controller;
          </li>
          <li>
            <strong>Sub-processors</strong> — vetted vendors that process data on our instructions
            (see Section 7);
          </li>
          <li>
            <strong>Professional advisors</strong> — lawyers, auditors, accountants, insurers,
            bound by confidentiality;
          </li>
          <li>
            <strong>Authorities</strong> — when we are legally required to disclose data (court
            order, valid subpoena, tax authority requests);
          </li>
          <li>
            <strong>Successors</strong> — in connection with a merger, acquisition, financing or
            sale of assets, subject to confidentiality safeguards.
          </li>
        </ul>
      </section>

      <section>
        <h2>7. Cookies, analytics and sub-processors</h2>
        <p>
          The Website uses cookies and similar technologies. Non-essential cookies (including
          analytics) load only after you grant consent through our cookie banner. We implement{" "}
          <strong>Google Consent Mode v2</strong>, which means tracking is denied by default until
          you actively accept.
        </p>

        <h3>7.1 Cookies and tracking technologies we use</h3>
        <table>
          <thead>
            <tr>
              <th>Name / provider</th>
              <th>Purpose</th>
              <th>Type</th>
              <th>Retention</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>an_cookie_consent_v1 (first-party)</td>
              <td>Stores your cookie choice</td>
              <td>Strictly necessary</td>
              <td>12 months</td>
            </tr>
            <tr>
              <td>_ga, _ga_* (Google Analytics 4)</td>
              <td>Audience measurement, traffic source analysis</td>
              <td>Analytics — consent required</td>
              <td>Up to 13 months</td>
            </tr>
            <tr>
              <td>Vercel Speed Insights (first-party beacon)</td>
              <td>Core Web Vitals telemetry; no cross-site identifiers</td>
              <td>Performance — anonymous</td>
              <td>Per request</td>
            </tr>
            <tr>
              <td>Session / authentication cookies</td>
              <td>Keep you signed in to your account</td>
              <td>Strictly necessary</td>
              <td>Session or up to 30 days</td>
            </tr>
          </tbody>
        </table>

        <h3>7.2 Sub-processors</h3>
        <table>
          <thead>
            <tr>
              <th>Provider</th>
              <th>Service</th>
              <th>Location / safeguards</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Google Ireland Ltd. (Google Analytics 4)</td>
              <td>Web analytics</td>
              <td>EU / USA — Standard Contractual Clauses + EU-US Data Privacy Framework</td>
            </tr>
            <tr>
              <td>Vercel Inc.</td>
              <td>Hosting, edge delivery, Speed Insights</td>
              <td>USA / global edge — SCCs + DPA</td>
            </tr>
            <tr>
              <td>Resend (Resend, Inc.)</td>
              <td>Transactional email delivery (account, booking notifications)</td>
              <td>USA — SCCs + DPA</td>
            </tr>
            <tr>
              <td>Stripe Payments Europe Ltd.</td>
              <td>Payment processing, fraud screening</td>
              <td>EU (Ireland) — independent controller for payment data</td>
            </tr>
          </tbody>
        </table>
        <p>
          A current and complete list of sub-processors is available on request at{" "}
          <a href="mailto:hello@mail.alternine.co">hello@mail.alternine.co</a>. We notify Business
          Clients in advance of material sub-processor changes through the platform or by email.
        </p>

        <h3>7.3 Managing your cookie preferences</h3>
        <p>
          You can withdraw or change your consent at any time by clearing the{" "}
          <code>an_cookie_consent_v1</code> entry in your browser storage, which will redisplay
          the banner, or by adjusting your browser settings to block cookies. Withdrawal of
          consent does not affect the lawfulness of processing carried out before withdrawal.
        </p>
      </section>

      <section>
        <h2>8. International data transfers</h2>
        <p>
          Some of our sub-processors are located outside the European Economic Area (mainly in the
          United States). When personal data is transferred outside the EEA, we rely on one or
          more of the following safeguards under GDPR Chapter V:
        </p>
        <ul>
          <li>European Commission adequacy decisions (e.g. EU-US Data Privacy Framework);</li>
          <li>
            Standard Contractual Clauses (Commission Implementing Decision (EU) 2021/914) with
            supplementary measures where required;
          </li>
          <li>Encryption in transit (TLS) and at rest where supported by the provider.</li>
        </ul>
        <p>
          A copy of the relevant safeguards can be requested at{" "}
          <a href="mailto:hello@mail.alternine.co">hello@mail.alternine.co</a>.
        </p>
      </section>

      <section>
        <h2>9. Your rights under GDPR</h2>
        <p>Subject to applicable conditions and exemptions, you have the right to:</p>
        <ul>
          <li>
            <strong>Access</strong> — obtain confirmation of whether we process your data and a
            copy of it (Art. 15);
          </li>
          <li>
            <strong>Rectification</strong> — request correction of inaccurate or incomplete data
            (Art. 16);
          </li>
          <li>
            <strong>Erasure</strong> — request deletion in defined circumstances (Art. 17);
          </li>
          <li>
            <strong>Restriction</strong> — limit processing during disputes about accuracy or
            lawfulness (Art. 18);
          </li>
          <li>
            <strong>Portability</strong> — receive your data in a structured, commonly used,
            machine-readable format (Art. 20);
          </li>
          <li>
            <strong>Object</strong> — to processing based on legitimate interests, including
            profiling, and at any time to direct marketing (Art. 21);
          </li>
          <li>
            <strong>Withdraw consent</strong> — at any time, without affecting prior lawful
            processing (Art. 7(3));
          </li>
          <li>
            <strong>Not be subject to solely automated decisions</strong> producing legal or
            similarly significant effects (Art. 22). We do not currently carry out such automated
            decision-making.
          </li>
        </ul>

        <h3>How to exercise your rights</h3>
        <p>
          Email <a href="mailto:hello@mail.alternine.co">hello@mail.alternine.co</a> with the
          subject "GDPR request". We will respond within one month, extendable by a further two
          months for complex requests, in which case we will inform you of the extension within
          the first month. Requests are free of charge; manifestly unfounded or excessive requests
          may attract a reasonable fee or be refused.
        </p>
        <p>
          If you booked an appointment with one of our Business Clients, please address requests
          about that booking data directly to the Business Client, who is the controller. We will
          assist them as processor.
        </p>

        <h3>Right to complain</h3>
        <p>
          You may lodge a complaint with the Bulgarian Commission for Personal Data Protection
          (КЗЛД), 2 Prof. Tsvetan Lazarov Blvd., 1592 Sofia,{" "}
          <a href="https://www.cpdp.bg">www.cpdp.bg</a>, kzld@cpdp.bg, or with the data protection
          authority in your country of residence.
        </p>
      </section>

      <section>
        <h2>10. Security</h2>
        <p>
          We implement appropriate technical and organisational measures to protect personal data
          against accidental or unlawful destruction, loss, alteration, unauthorised disclosure or
          access, including:
        </p>
        <ul>
          <li>TLS encryption in transit and encrypted storage at rest;</li>
          <li>Hashed and salted passwords; strong-password requirements for administrative access;</li>
          <li>Principle of least privilege, role-based access control, periodic access reviews;</li>
          <li>Vulnerability scanning, dependency monitoring and timely patching;</li>
          <li>Audit logs, intrusion detection, rate limiting and brute-force protection;</li>
          <li>Vendor due diligence and contractual data protection terms (DPAs, SCCs);</li>
          <li>Documented incident response and breach notification procedures.</li>
        </ul>
        <p>
          In the event of a personal data breach likely to result in a high risk to your rights
          and freedoms, we will notify you without undue delay and the CPDP within 72 hours of
          becoming aware of the breach, in accordance with GDPR Articles 33–34.
        </p>
      </section>

      <section>
        <h2>11. Children</h2>
        <p>
          The Website and Services are not directed at children under 14. We do not knowingly
          collect personal data from children without parental consent. If you believe a child has
          provided us with personal data, please contact us and we will delete it.
        </p>
      </section>

      <section>
        <h2>12. Marketing communications</h2>
        <p>
          Where required, we will ask for your consent before sending marketing emails. Existing
          customers may receive emails about similar services we provide, in line with the
          ePrivacy "soft opt-in", with an opt-out in every message. You can unsubscribe at any
          time using the link in any email or by contacting us.
        </p>
      </section>

      <section>
        <h2>13. Automated decision-making and profiling</h2>
        <p>
          We do not carry out automated decision-making that produces legal effects concerning you
          or similarly significantly affects you. We may use aggregated, non-identifying analytics
          to improve the Website and platform.
        </p>
      </section>

      <section>
        <h2>14. Third-party links</h2>
        <p>
          The Website may contain links to third-party sites and services. We are not responsible
          for their privacy practices. Please review their privacy policies before submitting any
          personal data.
        </p>
      </section>

      <section>
        <h2>15. Changes to this Policy</h2>
        <p>
          We may update this Policy from time to time. The "Last updated" date at the top reflects
          the most recent revision. If changes are material, we will notify account holders by
          email or through a prominent notice on the Website at least 14 days before they take
          effect.
        </p>
      </section>

      <section>
        <h2>16. Contact us</h2>
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
        <p>
          For data protection matters, please use the subject line "Privacy" or "GDPR request" so
          we can route your message correctly.
        </p>
      </section>
      </div>
    </main>
  );
}
