# Checklist pro Nasazení

Tento checklist slouží pro zajištění bezproblémového nasazení projektu Business Ranker na produkční prostředí.

- **[ ] Hosting Provider:** Vercel (projekt je již propojen s GitHub repozitářem).
- **[ ] Konfigurace Domény:**
  - [ ] Hlavní doména `businessranker.cz` a `www.businessranker.cz` jsou správně nakonfigurovány (A a CNAME záznamy) a směřují na Vercel.
- **[ ] Proměnné Prostředí (Environment Variables):**
  - [ ] `NEXT_PUBLIC_SANITY_PROJECT_ID`: Project ID ze Sanity.io.
  - [ ] `SANITY_API_TOKEN`: API token s právy pro čtení ze Sanity.io.
  - [ ] `RESEND_API_KEY`: API klíč ze služby Resend pro odesílání emailů.
  - [ ] `GOOGLE_CLIENT_ID`: OAuth Client ID z Google Cloud Console.
  - [ ] `GOOGLE_CLIENT_SECRET`: OAuth Client Secret z Google Cloud Console.
  - [ ] `GOOGLE_REFRESH_TOKEN`: Refresh token pro přístup ke Google Calendar API.
  - [ ] `COMPANY_EMAIL`: Kontaktní email firmy (`info@businessranker.cz`).
- **[ ] Build a Optimalizace:**
  - [ ] Spustit příkaz `npm run build` lokálně a ověřit, že build proběhne bez chyb.
  - [ ] Vercel automaticky provede build a optimalizaci při pushi do hlavní větve.
- **[ ] Post-deployment Testy:**
  - [ ] Projít klíčové scénáře z `TESTING_PLAN.md` na produkční URL.
  - [ ] Odeslat testovací formulář z každého formuláře na webu.
  - [ ] Ověřit, že všechny odkazy fungují a nevedou na 404.
- **[ ] Nastavení Analytiky:**
  - [ ] Vložit skript pro analytické nástroje (např. Google Analytics 4, Plausible) do layoutu aplikace.
- **[ ] Finální Kontrola:**
  - [ ] Ověřit, že `sitemap.xml` a `robots.txt` jsou dostupné a správně nakonfigurované.
  - [ ] Zkontrolovat sociální náhledy (Open Graph) pomocí nástrojů jako Facebook Debugger.