Ano, z HTML kódu a zejména z atributů v něm obsažených je logika kalkulátoru **velmi dobře patrná**. Je postavena na JavaScriptu, který reaguje na změny ve formulářových polích a využívá speciální `data-*` atributy pro výpočty a podmíněné zobrazování.

Zde je soubor popisující logiku kalkulátoru, určený pro vašeho AI developera.

---

### Popis logiky a fungování cenového kalkulátoru

Tento dokument popisuje funkční logiku interaktivního cenového kalkulátoru na stránce `Ceník`. Logika je implementována pomocí JavaScriptu (pravděpodobně z pluginu Bricksforge Pro Forms) a je řízena `data-*` atributy v HTML.

#### Základní principy

1.  **Podmíněné zobrazování (Conditional Logic):** Jednotlivé sekce a pole formuláře se zobrazují nebo skrývají na základě voleb uživatele. Toto je řízeno atributem `data-brf-conditions`.
2.  **Výpočty v reálném čase (Live Calculation):** Cena se dynamicky přepočítává na základě vybraných položek. Každá volba má přiřazenou hodnotu (`data-calculation-value`) a výpočty jsou definovány ve vzorcích (`formula`) v polích pro výpočty.
3.  **Vstupní pole (Inputs):** Jsou to uživatelské volby (checkboxy, číselná pole). Identifikují se pomocí `data-custom-id`.
4.  **Výpočetní pole (Calculation Fields):** Skrytá pole, která obsahují vzorce pro výpočet dílčích nebo celkových cen. Jejich výsledky se pak zobrazují uživateli.

---

### Detailní logika krok za krokem

#### Krok 1: Výběr hlavních služeb

Uživatel na začátku vidí dvě hlavní volby:

- Checkbox "tvorba webu" (`data-custom-id="web_checkbox"`)
- Checkbox "marketing" (`data-custom-id="marketing_checkbox"`)

**Logika:**

- Pokud uživatel zaškrtne **"tvorba webu"**, zobrazí se sekce "Tvorba webu - nastavení služby".
  - Podmínka: `[{ "condition": "form_field", "value": "web_checkbox", "operator": ">", "value2": "1" }]`
- Pokud uživatel zaškrtne **"marketing"**, zobrazí se sekce "Online marketing - nastavení služby".
  - Podmínka: `[{ "condition": "form_field", "value": "marketing_checkbox", "operator": ">", "value2": "1" }]`

#### Krok 2: Výpočet ceny za Tvorbu Webu

Pokud je sekce pro tvorbu webu viditelná, cena se počítá z několika dílčích částí:

1.  **Cena za stránky (`calculation_pages`):**

    - **Vstup:** Počet stránek (`pocet_stranek`).
    - **Vzorec:** `({pocet_stranek} > 0) * ({pocet_stranek} == 1 ? 10000 : ({web_checkbox} + ({pocet_stranek} - 1) * 3500))`
    - **Popis logiky:**
      - Pokud je počet stránek `1`, cena je paušálně **10 000 Kč**.
      - Pokud je počet stránek větší než `1`, základní cena je **10 000 Kč** (z hodnoty checkboxu `web_checkbox`) a za každou další stránku (nad rámec první) se přičítá **3 500 Kč**.

2.  **Cena za vícejazyčnost (`page_translation`):**

    - **Vstupy:** Počet stránek (`pocet_stranek`), počet jazyků (`pocet_jazyku`) a zaškrtnutí checkboxu "chci web ve více jazycích" (`preklad_webu`).
    - **Vzorec:** `{pocet_stranek} * (({pocet_jazyku} > 1 ? {pocet_jazyku} - 1 : 0) * 1000)`
    - **Popis logiky:**
      - Tato sekce se zobrazí, jen pokud je zaškrtnuto "chci web ve více jazycích".
      - Cena se vypočítá jako: `(celkový počet stránek) x (počet dodatečných jazyků) x 1 000 Kč`.
      - Příklad: Pro 5 stránek a 3 jazyky (1 základní + 2 dodatečné) je výpočet: `5 * ( (3-1) * 1000 ) = 10 000 Kč`.

3.  **Cena za dodatečnou funkcionalitu (`calculation_functionality`):**
    - **Vstup:** Výběr z checkboxů (`dodatecna_funkcionlita`).
    - **Vzorec:** `{dodatecna_funkcionlita}`
    - **Popis logiky:**
      - Jedná se o prostý součet hodnot `data-calculation-value` všech zaškrtnutých checkboxů v této sekci (např. "pokročilé animace" = 2000, "online chat" = 1000 atd.).

#### Krok 3: Výpočet ceny za Online Marketing

Pokud je sekce pro marketing viditelná:

1.  **Cena za marketingové služby (`calculation_marketing`):**
    - **Vstup:** Výběr z checkboxů (`marketingove_sluzby`).
    - **Vzorec:** `{marketingove_sluzby}`
    - **Popis logiky:**
      - Jedná se o součet hodnot `data-calculation-value` všech zaškrtnutých marketingových služeb (např. "Google My Business" = 1000, "správa sociálních sítí" = 5000 atd.).

#### Krok 4: Výpočet celkové ceny a zobrazení poptávkového formuláře

1.  **Celková kalkulace (`total_calculation`):**

    - **Vstup:** Součet všech dílčích výpočtů.
    - **Vzorec:** `{calculation_pages}+{page_translation}+{calculation_functionality}+{calculation_marketing}`
    - **Popis logiky:**
      - Sečte všechny dílčí ceny do jedné celkové sumy. Tato suma se zobrazuje uživateli v reálném čase.

2.  **Zobrazení kontaktního formuláře:**
    - Kontaktní formulář ("Kontaktní údaje") a tlačítko pro odeslání se zobrazí až po splnění následujících podmínek:
      - Uživatel klikne na tlačítko/checkbox "nezávazná poptávka" (`order_checkbox`).
      - A zároveň celková vypočtená cena (`total_calculation`) je větší než 0.
    - **Podmínka:** `[{ "condition": "form_field", "value": "order_checkbox", "operator": ">", "value2": "0" }, { "condition": "form_field", "value": "total_calculation", "operator": ">", "value2": "0" }]`

Tento strukturovaný přístup umožňuje vytvořit komplexní, ale přehledný kalkulátor, jehož logika je plně definována v HTML struktuře.
