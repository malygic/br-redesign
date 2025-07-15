# Plán Testování a QA

Tento dokument definuje základní plán pro zajištění funkční a vizuální kvality webu Business Ranker.

## 1. Klíčové Funkční Testy (User Stories)

- [ ] **Odeslání Kontaktního Formuláře:**
  - Uživatel vyplní formulář na stránce Kontakt a odešle ho.
  - **Očekávaný výsledek:** Uživatel vidí potvrzovací zprávu. Na email `info@businessranker.cz` přijde email s daty z formuláře. Uživatel obdrží potvrzovací email.

- [ ] **Kompletní Průchod Cenovým Kalkulátorem a Poptávkou:**
  - Uživatel na stránce Ceník navolí kombinaci služeb (např. web o 5 stránkách, 2 jazyky, platební brána).
  - **Očekávaný výsledek:** Cena se v reálném čase správně přepočítává.
  - Uživatel klikne na "Nezávazná poptávka", vyplní své údaje a odešle.
  - **Očekávaný výsledek:** Firma i uživatel obdrží emaily s kompletním rozpisem poptávky.

- [ ] **Rezervace Schůzky přes Google Meet:**
  - Uživatel v kontaktním formuláři zaškrtne "online schůzka", vybere platné datum a čas a odešle.
  - **Očekávaný výsledek:** V Google Kalendáři firmy se vytvoří událost. Uživatel i firma obdrží emailovou pozvánku s odkazem na Meet.

- [ ] **Funkčnost Blogu:**
  - Uživatel na stránce Blog klikne na kategorii.
  - **Očekávaný výsledek:** Zobrazí se pouze příspěvky z dané kategorie.
  - Uživatel klikne na příspěvek.
  - **Očekávaný výsledek:** Zobrazí se detail článku se správným obsahem.

- [ ] **Funkčnost Vícejazyčnosti:**
  - Uživatel v hlavičce přepne jazyk na Angličtinu.
  - **Očekávaný výsledek:** Celý web se přepne do angličtiny, URL se změní na `/en/...`. Všechny texty jsou přeložené.

## 2. Vizuální Testy (Cross-Browser & Responsive)
- **Cílové prohlížeče:** [ ] Chrome (latest), [ ] Firefox (latest), [ ] Safari (latest)
- **Cílová zařízení:** [ ] Desktop (1920px), [ ] Laptop (1440px), [ ] Tablet (768px), [ ] Mobil (375px)
- **Speciální kontrola:** [ ] Mega menu v hlavičce se správně zobrazuje a funguje na všech zařízeních. [ ] Animace jsou plynulé a neruší.

## 3. Výkonnostní a Přístupnostní Cíle
- **Lighthouse Skóre:** Cílové skóre pro **Performance > 95**, **Accessibility > 98**, **Best Practices > 100**, **SEO > 100**.
- **Manuální kontrola:** [ ] Ověřit plnou ovladatelnost webu pomocí klávesnice (tab, enter, space). [ ] Ověřit dostatečný kontrast barev dle `visualIdentity.json`.