# MAINTENANCE AND BOOKA ENGINE ACCESS AGREEMENT

This Agreement is made on **……….. 20……** in ……………………, between:

**1. BOOKA LTD.**, Company ID (ЕИК) **208363525**, with registered office at 10 General Kiselov Str., 9000 Varna, Bulgaria, represented by its Manager ………………………………, hereinafter referred to as the **"Provider"**,

and

**2. ………………………………………………………………………**, Company ID / VAT No.: ……………………, with registered office at: …………………………………………………………………, represented by ………………………………, in his/her capacity as ………………………………, hereinafter referred to as the **"Client"**,

(jointly referred to as the "Parties"),

have agreed as follows:

---

## I. SUBJECT OF THE AGREEMENT

**Clause 1.** (1) The Provider grants the Client, against a monthly fee, the following services (collectively the **"Services"**):

1. **Access to the Booka Engine** — the centralised backend system for managing online bookings, including:
   - issuance and maintenance of API keys for the Client's website;
   - receipt, storage and processing of bookings;
   - integration with the payment processor (Stripe);
   - sending transactional emails via Resend (confirmations, reminders);
   - administration of services, prices, staff and schedules through an admin panel;
   - calendar integrations (Google Calendar, etc., as applicable);

2. **Hosting and delivery of the website** — hosting the Client's website on the Provider's infrastructure (Vercel or equivalent), including SSL certificate, CDN and automatic backups;

3. **Technical support** — resolution of technical defects, software dependency updates, availability monitoring and security patches;

4. **Minor content edits** — text changes, image updates, business hours and services updates, up to **……… (……………) hours per month**.

(2) The Services are provided in respect of the website built under Website Development Agreement No. …………… of …………………… (the "Main Agreement").

(3) The following are **NOT** included in this Agreement:
- new features and new development (billed separately at an hourly rate or under a new contract);
- redesign and design rework;
- migration to another platform;
- out-of-hours work (see Clause 4 for SLA).

---

## II. TERM AND COMMENCEMENT

**Clause 2.** (1) This Agreement enters into force on **……………………** for an initial term of **12 (twelve) months**.

(2) Following the initial term, the Agreement automatically renews for successive 12-month terms, unless either Party gives written notice of non-renewal at least **30 (thirty) calendar days** before the end of the current term.

(3) Access to the Services shall be activated within 5 business days of signing and receipt of the first payment.

---

## III. FEES AND PAYMENT TERMS

**Clause 3.** (1) The monthly fee is **………… (………………………) EUR / BGN, excluding VAT** (**…………** including VAT, if applicable).

(2) Payment shall be made **monthly in advance**, by the **5th day** of each calendar month, by one of the following methods at the Client's option:

- **A. Bank transfer** to the Provider's account (IBAN: …………………………);
- **B. Stripe Invoicing** — automated card-payment invoice sent to the Client's email;
- **C. Annual prepayment** — single payment for 12 months with a **……… %** discount.

(3) The Provider shall issue an invoice within 5 business days of receipt of payment.

(4) The fee may be increased once per year, by no more than the official Bulgarian inflation index for the preceding year, upon written notice given at least 60 days in advance.

(5) In the event of payment delay:
- **up to 7 calendar days** — no consequences, a reminder is sent;
- **8 to 14 days** — a written warning is sent;
- **more than 14 days** — the Provider may **revoke the Client's API key**. The website will continue to load, but the booking system will stop accepting new requests;
- **more than 30 days** — the Provider may unilaterally terminate this Agreement and discontinue all Services, including hosting.

(6) Access shall be restored within 1 business day of receipt of overdue amounts.

---

## IV. SERVICE LEVEL AGREEMENT (SLA)

**Clause 4.** (1) The Provider undertakes commercially reasonable efforts to maintain:

- **Availability of the website and Booka Engine:** at least **99% per month** (approximately 7 hours of downtime per month; outages of third-party infrastructure — Vercel, Neon, Stripe, Resend — are excluded);
- **Response time for critical issues** (website down, bookings not accepted): up to **8 business hours** during business days (Monday–Friday, 9:00–18:00 EET);
- **Response time for minor issues** (visual defects, isolated errors): up to **48 business hours**;
- **Scheduled maintenance:** performed outside business hours, with at least 48 hours' notice.

(2) Work outside business hours, on weekends or public holidays, on an urgent basis, shall be billed separately at **………… EUR/BGN per hour**, with a minimum billable unit of 1 hour.

(3) If the guaranteed availability is not met, the next monthly fee shall be reduced proportionally:
- availability 95–99% → 10% discount on the next month;
- availability under 95% → 25% discount;
- availability under 90% → 50% discount.

---

## V. API KEYS AND ACCESS

**Clause 5.** (1) Access to the Booka Engine is provided through one or more API keys issued by the Provider.

(2) The Client undertakes:
- to keep the API key confidential and not to disclose it to third parties without prior written consent;
- to notify the Provider immediately upon suspected compromise of any key;
- not to resell, sublicense or otherwise provide access to the Booka Engine to third parties.

(3) The Provider may revoke or rotate any API key:
- in case of payment delay (Clause 3);
- on suspicion of compromise or abuse;
- on systematic breach of reasonable usage limits;
- on termination of this Agreement.

---

## VI. MINOR EDITS

**Clause 6.** (1) The Client requests minor edits by email at ………………………………… or through another channel agreed between the Parties.

(2) The Provider implements clearly formulated requests within **3 (three) business days** of receipt.

(3) Edits exceeding the limit in Clause 1(1)(4) shall be billed separately at **………… EUR/BGN per hour**, with the Client's prior approval.

---

## VII. DATA AND OWNERSHIP

**Clause 7.** (1) All data collected and stored through the Booka Engine on behalf of the Client (bookings, customer data, history, etc.) remains the **Client's property**.

(2) The Provider acts as a **data processor** within the meaning of GDPR; the relationship is governed by **Annex No. 1 — DPA** to the Main Agreement, which also applies to this Agreement.

(3) Upon termination, the Client may request an export of its data in a commonly used, structured, machine-readable format (CSV, JSON) within 30 calendar days of termination. The export is provided free of charge if requested within that period.

(4) The Booka Engine, its source code, design, architecture and algorithms remain the **exclusive property of the Provider**. The Client receives only a non-exclusive, non-transferable, revocable licence to access the Booka Engine through the API for the term of this Agreement.

---

## VIII. TERMINATION

**Clause 8.** (1) This Agreement may be terminated:

1. **by mutual written consent** — at any time;
2. **by the Client** — on 30 days' written notice, without cause (fees paid for the month of termination are non-refundable);
3. **by the Provider** — on 60 days' written notice, without cause;
4. **unilaterally by the non-defaulting Party** — for material breach not cured within 14 days of written notice;
5. **immediately by the Provider** — for payment delay exceeding 30 days (Clause 3(5));
6. **immediately by the Provider** — for breach of Clause 5(2) (compromised API keys, resale).

(2) Upon termination:
- the Client's API keys shall be revoked on the day following termination;
- the Client's website shall be preserved in its existing form for **14 (fourteen) calendar days** after termination, so the Client may migrate it to another provider;
- after expiry of the 14-day period, the Provider may remove the website from its infrastructure;
- the Client's data shall be deleted in accordance with Section 12.1 of the DPA.

(3) The Client may request a **site archive** (static files) within 14 days of termination, free of charge. Migration of the site to another provider and its configuration there are not the responsibility of the Provider.

---

## IX. LIABILITY

**Clause 9.** (1) The Provider shall not be liable for:
- outages of third-party providers (Vercel, Neon, Stripe, Resend, Google, etc.);
- loss of bookings caused by improper actions of the Client or its staff in the admin panel;
- content entered by the Client or its end customers;
- consequences of API key compromise caused by the Client;
- consequences of force majeure (see Clause 10).

(2) The Provider's aggregate liability under and in connection with this Agreement shall be limited to the amounts actually paid by the Client during the **3 (three) months** preceding the event giving rise to the liability.

(3) The limitation shall not apply in cases of wilful misconduct, gross negligence or breach of confidentiality, nor to GDPR obligations that cannot be limited under applicable law.

---

## X. FORCE MAJEURE

**Clause 10.** Neither Party shall be liable for non-performance caused by force majeure, including (but not limited to) natural disasters, cyberattacks of a scale exceeding reasonable defensive measures, large-scale failures of internet infrastructure, acts of governmental authorities, outages of key third-party providers (Vercel, AWS, Cloudflare, etc.).

---

## XI. CONFIDENTIALITY

**Clause 11.** The Parties undertake to keep confidential all confidential information (business data, technical details, customer lists, pricing terms) and to use such information only for the purposes of this Agreement. This obligation applies for the term of this Agreement and **3 (three) years** after its termination.

---

## XII. GENERAL PROVISIONS

**Clause 12.** (1) All notices under this Agreement shall be sent by email to the contact persons' addresses; deemed received on the day of sending unless returned as undeliverable.

(2) Amendments shall be made by signed written addendum.

(3) For matters not governed by this Agreement, Bulgarian law shall apply.

(4) Disputes shall be resolved through negotiation; failing agreement, by the competent Bulgarian court at the registered seat of the Provider.

---

## XIII. CONTACT

**For the Provider:**
- Contact person: ………………………………………
- Email: hello@mail.alternine.co
- Phone: ………………………………………

**For the Client:**
- Contact person: ………………………………………
- Email: ………………………………………
- Phone: ………………………………………

---

This Agreement is executed in **2 (two)** identical counterparts — one for each Party.

<br />

| **FOR THE PROVIDER:** | **FOR THE CLIENT:** |
| --- | --- |
| BOOKA LTD., Company ID 208363525 | ……………………………………… |
|  |  |
| ____________________ | ____________________ |
| ……………………………… | ……………………………… |
| Manager | Title: ………………… |
| Date: …………… | Date: …………… |
