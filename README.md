# BeAstroFit — Web MVP (Next.js + Tailwind)

Dark neon vibe. AI astrology + expert validation. This starter mirrors the UI you shared and ships two working flows:
- **Compatibility** (Western sun-sign v0, with % meter)
- **Onboarding** → mini daily guidance

## Quick start
1. Install Node 18+.
2. `npm install`
3. Copy `.env.example` → `.env.local`, fill keys (or leave blank to test without integrations).
4. `npm run dev` → open http://localhost:3000

## Integrations (later)
- **Supabase** for auth & db (save users/checks)
- **Stripe** for subscriptions (swap price IDs in `lib/pricing.ts`)
- **PostHog** for analytics

## Structure
- `app/` App Router pages (landing, onboarding, compatibility, dashboard, paywall)
- `components/ui` small UI kit (Blob, Button, Card, Meter)
- `lib/astrology.ts` sun sign + basic compatibility + quick advice
- `lib/pricing.ts` price placeholders

## Notes
- Colors: bg `#0B0B0F`, surface `#111318`, neon `#FFD23F`, lavender `#A78BFA`, pink `#FF4D8D`, text `#F5F5F7`.
- Typography: system default for now; add Google Fonts (Sora/Inter) easily in `app/layout.tsx` if you want.

## Next
- Hook Supabase; persist users + saved compatibility.
- Add Stripe checkout route handlers.
- Improve compatibility with Vedic layers (Nakshatra/Koota) later.
- Add shareable image cards and expert-review queue.
