# 1. Souhrn Projektu a Strategie

Cílem tohoto projektu je kompletní redesign webových stránek digitální agentury **Business Ranker**. Projekt migruje ze stávajícího WordPress řešení na moderní, vysoce výkonnou **Jamstack architekturu** s využitím Next.js a Vercelu. Nový web bude sloužit jako vlajková loď agentury, demonstrující její technickou a designovou expertizu.

**Klíčové strategické cíle:**
- **Vytvořit "WOW efekt":** Design musí být moderní, technologický a vizuálně poutavý s profesionálními animacemi a interaktivními prvky, aby okamžitě zaujal potenciální klienty.
- **Zvýšit generování poptávek:** Implementace pokročilých, uživatelsky přívětivých formulářů a cenového kalkulátoru má za cíl zjednodušit a zefektivnit proces poptávky.
- **Demonstrovat expertizu:** Využití moderních technologií (Next.js, Headless CMS) a vícejazyčná podpora posílí image agentury jako špičkového hráče na trhu.
- **Zlepšit správu obsahu:** Přechod na Headless CMS (Sanity.io) pro blog umožní klientovi snadnou a rychlou aktualizaci obsahu bez nutnosti technického zásahu.

---

# 2. Architektura Informací a Struktura Stránek (UX Design)

Web bude mít vícejazyčnou strukturu (CZ, EN, UK). Základní mapa stránek je následující:

- `/` - **Homepage:** Úvod, klíčové služby, představení firmy, reference, CTA.
- `/o-nas` - **O nás:** Detailní představení firmy, hodnot, týmu a technologického stacku.
- `/sluzby` - **Přehled služeb:** Souhrnná stránka všech nabízených služeb.
  - `/sluzby/digitalni-strategie` - Detailní stránka služby.
  - `/sluzby/design` - Detailní stránka služby.
  - `/sluzby/tvorba-webu` - Detailní stránka služby.
  - `/sluzby/seo-copywriting` - Detailní stránka služby.
  - `/sluzby/online-marketing` - Detailní stránka služby.
  - `/sluzby/emailing` - Detailní stránka služby.
- `/cenik` - **Ceník:** Přehled cenových balíčků a interaktivní cenový kalkulátor.
- `/blog` - **Blog:** Přehled všech článků s možností filtrování podle kategorií.
  - `/blog/[slug]` - Detail konkrétního článku.
- `/kontakt` - **Kontakt:** Kontaktní informace, formulář a mapa.
- `/zasady-ochrany-osobnich-udaju-gdpr` - **GDPR:** Statická stránka s právními informacemi.

---

# 3. Obsahová Strategie a Copywriting

**Tón komunikace:** Moderní, profesionální, ale zároveň přístupný a srozumitelný pro cílovou skupinu (podnikatelé, malé a střední firmy). Texty by měly vzbuzovat důvěru v technickou zdatnost agentury.

**Obsah:**
- Veškeré texty budou vycházet z dodaných JSON souborů, avšak projdou **SEO a stylistickou optimalizací**, aby odpovídaly novému "WOW" efektu a cílům značky.
- **Headless CMS (Sanity.io):** Bude použit pro správu blogu. Je nutné vytvořit následující schémata:
  - **`post` (Příspěvek):**
    - `title` (text, povinný)
    - `slug` (slug, povinný, generovaný z titulku)
    - `author` (reference na `author`, povinný)
    - `mainImage` (obrázek)
    - `categories` (pole referencí na `category`)
    - `publishedAt` (datum a čas, povinný)
    - `body` (blokový obsah / rich text)
    - `metaDescription` (text)
  - **`author` (Autor):**
    - `name` (text, povinný)
    - `image` (obrázek)
  - **`category` (Kategorie):**
    - `title` (text, povinný)
    - `description` (text)

---

# 4. Vizuální a Designová Strategie

- **Hlavní koncept:** "Technologický Dark Mode". Design bude postaven na tmavém pozadí s výraznými barevnými akcenty a gradienty definovanými ve `visualIdentity.json`.
- **Animace a interaktivita:** Klíčový prvek pro dosažení "WOW efektu". Využití `Framer Motion` pro plynulé přechody stránek, animace při scrollu (on-scroll reveal) a mikro-interakce na tlačítkách a kartách. Animované dashboardy nebo grafy mohou být použity k vizuálnímu ozvláštnění sekcí.
- **Typografie:** Font "Outfit" bude použit napříč celým webem pro zajištění moderního a konzistentního vzhledu. Důraz bude kladen na čitelnost a vizuální hierarchii.
- **Mega Menu:** Navigace v hlavičce bude obsahovat mega menu pro položku "Služby", které bude vizuálně bohaté – s ikonkami, názvy služeb a krátkými popisky.

---

# 5. Funkční Požadavky

**Technická poznámka:** Všechny níže uvedené serverové funkce budou implementovány jako **Next.js API Routes** a nasazeny na Vercel jako Serverless Functions.

- **1. Standardní Kontaktní Formulář:**
  - Pole: Jméno, Email, Telefon, Zpráva.
  - Funkce: Po odeslání odešle email s obsahem formuláře na `info@businessranker.cz` a potvrzovací email odesílateli.
  - Doporučená služba pro odesílání emailů: **Resend**.

- **2. Cenový Kalkulátor s Poptávkovým Formulářem:**
  - **Fáze 1: Kalkulace (Client-side)**
    - Uživatel si volí služby (tvorba webu, marketing) a jejich parametry.
    - Logika výpočtu je detailně popsána v `calculator.md` a bude implementována v Reactu (`useState`, `useEffect`).
    - Cena se dynamicky přepočítává a zobrazuje.
  - **Fáze 2: Poptávka (Server-side)**
    - Po kliknutí na "Nezávazná poptávka" se zobrazí kontaktní formulář (Jméno, Email, Telefon).
    - Data z kalkulátoru se připojí k datům z formuláře.
    - Po odeslání se volá API route, která odešle email s kompletní poptávkou (kontaktní údaje + rozpis kalkulace) na `info@businessranker.cz` a potvrzovací email klientovi.

- **3. Integrace s Google Meet:**
  - Kontaktní formuláře budou obsahovat checkbox `[ ] Sjednat online schůzku`.
  - Po zaškrtnutí se zobrazí pole pro výběr data a času (s omezením na pracovní dobu 9:00-18:00).
  - Po odeslání formuláře se volá API route, která:
    - Se autentizuje vůči Google Calendar API pomocí OAuth 2.0 (vyžaduje `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET`, `GOOGLE_REFRESH_TOKEN`).
    - Vytvoří událost v kalendáři firmy.
    - Přidá email klienta jako účastníka.
    - Automaticky vygeneruje odkaz na Google Meet.
    - Google Calendar API následně samo odešle pozvánky oběma stranám.

- **4. Vícejazyčnost:**
  - Web bude dostupný v češtině (výchozí), angličtině a ukrajinštině.
  - Implementace bude provedena pomocí **Next.js's built-in Internationalization (i18n) Routing**.

- **5. Blog s filtrováním:**
  - Na stránce `/blog` budou zobrazeny všechny příspěvky (načtené ze Sanity.io).
  - Bude zde přítomna sada tlačítek nebo dropdown pro filtrování příspěvků na základě kategorií. Filtrování proběhne na straně klienta (client-side) pro okamžitou odezvu.

---

# 6. Technologické a SEO Poznámky

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **UI Komponenty:** Shadcn/ui (s důrazem na customizaci)
- **Animace:** Framer Motion
- **Hosting:** Vercel
- **CMS:** Sanity.io
- **Odesílání emailů:** Resend
- **SEO:**
  - Všechny stránky musí mít unikátní a relevantní `<title>` a `<meta name="description">`.
  - Pro blogové příspěvky budou metadata generována dynamicky z obsahu v CMS.
  - Bude implementován soubor `sitemap.xml` a `robots.txt`.
  - Důraz bude kladen na sémantické HTML a správnou strukturu nadpisů (H1, H2, H3...).

---

# 7. Specifické Technologické Požadavky (Override)

Pro tento projekt nejsou žádné specifické požadavky, které by přepisovaly výchozí technologický stack definovaný v `custom-instructions.md`. Stack (Next.js, Shadcn/ui, Tailwind, Framer Motion) je pro tento projekt ideální.

---

# 8. Strategie Správy Stavu (State Management)

- **8.1. Definice Typů Stavu:**
  - **Lokální UI stav:** Pro jednoduché stavy komponent, jako je stav otevření/zavření modálního okna, aktivní záložka nebo stav jednotlivých polí ve formuláři.
    - **Doporučené řešení:** `React.useState`
  - **Sdílený stav:** Pro logiku v rámci komplexnějších, ale izolovaných komponent, jako je cenový kalkulátor. Stav voleb a vypočtené ceny bude spravován v rámci hlavní komponenty kalkulátoru a předáván dolů pomocí props.
    - **Doporučené řešení:** Props drilling (v rámci jedné komponenty je to akceptovatelné) a `React.useState` / `React.useReducer` ve wrapper komponentě.
  - **Globální aplikační stav:** Pro stav, který musí být dostupný napříč celou aplikací. V tomto projektu se jedná primárně o:
    - Aktuálně zvolený jazyk (locale).
    - Stav otevření/zavření mobilního menu.
    - **Doporučené řešení:** **Zustand**. Je to lehká, moderní a jednoduchá knihovna, která se skvěle hodí pro rozsah tohoto projektu a vyhýbá se zbytečné složitosti Reduxu.