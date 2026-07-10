# Contact form setup — PremiumCare ApS

## Components

| Piece | Path |
|-------|------|
| Form UI | `components/ContactForm.tsx` |
| Contact page | `app/kontakt/page.tsx` |
| API route | `app/api/contact/route.ts` |
| Mail helper | `lib/contact-mail.ts` |

## Recipient

Every successful submission is emailed to:

**bibi@premiumcare.dk**

Override with `CONTACT_TO_EMAIL` if needed. Default is `COMPANY.email`.

## Environment variables

Copy from `.env.example` into `.env.local` (local) and Vercel Project Settings → Environment Variables (Production / Preview).

### Required (one provider)

**Resend (recommended)**

```
CONTACT_TO_EMAIL=bibi@premiumcare.dk
CONTACT_FROM_EMAIL=no-reply@premiumcare.dk
RESEND_API_KEY=re_xxxxxxxx
```

Verify `no-reply@premiumcare.dk` (or your chosen from-address) in the Resend dashboard.

**SMTP**

```
CONTACT_TO_EMAIL=bibi@premiumcare.dk
CONTACT_FROM_EMAIL=no-reply@premiumcare.dk
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=...
SMTP_PASS=...
SMTP_FROM=no-reply@premiumcare.dk
```

SMTP sending uses the optional `nodemailer` package.

## Behaviour

- Requires **phone or message** (name is optional)
- Hidden honeypot field `companyWebsite` — bots that fill it get a fake success and no email
- Missing email config returns HTTP 503 and shows an error — success is never faked
- Subject: `Ny henvendelse fra PremiumCare.dk`
- Body labels (Danish): Navn, Telefon, Besked, Sendt fra, Tidspunkt

## Local test

1. Set `RESEND_API_KEY` (or SMTP) in `.env.local`
2. `npm run dev`
3. Open `http://localhost:3001/kontakt#kontaktformular`
4. Submit with phone or message
5. Confirm inbox at `bibi@premiumcare.dk`
6. Submit empty form → validation error
7. Remove API key → error state (not success)

## Production / Vercel

1. Add the env vars above in Vercel for Production (and Preview if desired)
2. Redeploy after saving env vars
3. Submit a real enquiry on https://www.premiumcare.dk/kontakt
4. Confirm delivery to `bibi@premiumcare.dk`

## Privacy

The form links to `/privatliv` and states that details are only used to reply.
