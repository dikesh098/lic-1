# Nila Gautam — LIC Insurance Advisor Website

Public marketing site: Next.js 14 (App Router) + TypeScript + Tailwind CSS.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Deploy

Push this to a GitHub repo and import it in Vercel — no environment
variables are required yet, since this phase has no backend.

## What's built (phase 1 — public website)

- Home, About, Services, Customer Support, Contact, FAQ, Privacy, Terms
- Request a Call, Policy Review, Renewal Assistance (lead forms)
- Customer Login (placeholder — see below)
- WhatsApp / call CTAs wired to +91 87883 77635
- Enquiry form with client-side validation
- Mobile sticky Call/WhatsApp bar, responsive nav with drawer
- SEO: metadata, Open Graph, sitemap.xml, robots.txt

## Update the real domain

Replace `https://nilagautam.example.com` in `app/layout.tsx`,
`app/sitemap.ts`, and `app/robots.ts` once the real domain is chosen.

## Not built yet — phase 2

The enquiry form currently confirms on-screen and hands the customer to
WhatsApp; it does **not** save leads to a database yet. Phase 2 adds:

- Supabase project (Postgres + Auth + Storage), full schema, and RLS
  policies for customers/policies/documents/leads
- Customer portal: real login, dashboard, policies, documents, support
  requests (replaces the `/customer-login` placeholder)
- Admin dashboard: CRM for customers, policies, renewals, leads, CSV
  import of the existing 200+ policies, document uploads
- Wiring the enquiry form's `TODO` in `components/EnquiryForm.tsx` to an
  actual `leads` table insert via a server action

Say the word and I'll build that next.
