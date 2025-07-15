# Component Library

Toto je centrální knihovna znovupoužitelných komponent pro projekt Business Ranker. Slouží jako jediný zdroj pravdy pro všechny sdílené prvky.

---

## Název Komponenty: `Header`
- **Popis:** Hlavní hlavička webu obsahující logo, navigační odkazy a CTA tlačítko.
- **Varianty (Props):**
  - `navigationItems: { text: string; url: string; submenu?: ... }[]` - Pole navigačních položek.
  - `ctaButton: { text: string; url: string }` - Objekt pro CTA tlačítko.
- **Funkce:**
  - Obsahuje komponentu `LanguageSwitcher`.
  - Obsahuje `MegaMenu` pro položku "Služby".
  - Je "sticky" (přichycená k horní části obrazovky při scrollu) s upraveným vzhledem (např. s rozostřeným pozadím).
- **Použití:** Na každé stránce webu.
- **Vazby na data:** Očekává data o struktuře navigace, pravděpodobně ze statického konfiguračního souboru.
- **Stav:** `Navrženo`

---

## Název Komponenty: `Footer`
- **Popis:** Patička webu obsahující kontaktní informace, odkazy na služby, právní informace a sociální sítě.
- **Varianty (Props):**
  - `contactInfo: object`
  - `serviceLinks: { text: string; url: string }[]`
  - `socialLinks: { platform: string; url: string }[]`
- **Použití:** Na každé stránce webu.
- **Vazby na data:** Statická data.
- **Stav:** `Navrženo`

---

## Název Komponenty: `ServiceCard`
- **Popis:** Karta pro zobrazení jedné nabízené služby na přehledových stránkách.
- **Varianty (Props):**
  - `icon: React.ReactNode` - Ikona reprezentující službu.
  - `title: string` - Název služby.
  - `description: string` - Krátký popis služby.
  - `url: string` - Odkaz na detail služby.
- **Použití:** V mřížce v sekci 'Naše Služby' na hlavní stránce a na stránce `/sluzby`.
- **Vazby na data:** Očekává objekt služby ze statického pole dat.
- **Stav:** `Navrženo`

---

## Název Komponenty: `TestimonialCard`
- **Popis:** Karta pro zobrazení klientské recenze, včetně jména, firmy a citace.
- **Varianty (Props):**
  - `quote: string`
  - `name: string`
  - `company: string`
  - `image: string` (URL k fotce klienta)
- **Použití:** V sekci "Zkušenosti našich klientů", pravděpodobně v rámci slideru/carouselu.
- **Vazby na data:** Očekává objekt recenze.
- **Stav:** `Navrženo`

---

## Název Komponenty: `FAQAccordion`
- **Popis:** Interaktivní akordeon pro zobrazení často kladených otázek a odpovědí.
- **Varianty (Props):**
  - `items: { question: string; answer: string }[]` - Pole otázek a odpovědí.
- **Použití:** V sekci "FAQ" na různých stránkách.
- **Vazby na data:** Statická data pro každou stránku.
- **Stav:** `Navrženo`

---

## Název Komponenty: `PriceCalculator`
- **Popis:** Komplexní interaktivní formulář pro výpočet ceny služeb na míru. Zahrnuje výběr služeb, nastavení parametrů a zobrazení celkové ceny.
- **Varianty (Props):** -
- **Použití:** Na stránce `/cenik`.
- **Vazby na data:** Obsahuje vlastní komplexní logiku a stav. Po interakci uživatele a odeslání předává data do `ContactForm`.
- **Stav:** `Navrženo`

---

## Název Komponenty: `ContactForm`
- **Popis:** Formulář pro odeslání zprávy nebo poptávky.
- **Varianty (Props):**
  - `mode: 'contact' | 'quote'` - Varianta pro obecný kontakt nebo pro poptávku z kalkulátoru.
  - `quoteData?: object` - Nepovinná data z kalkulátoru.
  - `enableScheduling?: boolean` - Povolí zobrazení checkboxu pro sjednání schůzky.
- **Použití:** Na stránce `/kontakt` a v rámci `PriceCalculator`.
- **Vazby na data:** Odesílá data na Next.js API route.
- **Stav:** `Navrženo`

---

## Název Komponenty: `BlogPostCard`
- **Popis:** Karta pro zobrazení jednoho blogového příspěvku v přehledu.
- **Varianty (Props):**
  - `title: string`
  - `slug: string`
  - `mainImage: string`
  - `publishedAt: string`
  - `excerpt: string`
- **Použití:** V mřížce na stránce `/blog`.
- **Vazby na data:** Očekává data z CMS Sanity.io.
- **Stav:** `Navrženo`

---

## Název Komponenty: `LanguageSwitcher`
- **Popis:** Dropdown nebo sada tlačítek pro přepínání jazyka webu.
- **Varianty (Props):** -
- **Použití:** V komponentě `Header`.
- **Vazby na data:** Čte a mění aktuální `locale` z Next.js routeru.
- **Stav:** `Navrženo`