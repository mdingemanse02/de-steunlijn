# De Steunlijn — website

Professionele, responsive website voor **De Steunlijn**, een organisatie die
accountants- en administratiekantoren en financieel dienstverleners in het MKB
koppelt aan LVV-geregistreerde externe vertrouwenspersonen. Statische site in
HTML, CSS en JavaScript — geen backend of build-stap nodig.

## Lokaal draaien

De site is volledig statisch. Je kunt hem op twee manieren bekijken:

### Optie 1 — bestand direct openen

Open `index.html` in een browser (dubbelklik of `Ctrl+O`). Alle paden zijn
relatief, dus dit werkt zonder server.

### Optie 2 — lokale webserver (aanbevolen)

Een lokale server voorkomt eventuele beperkingen met relatieve paden en is dichter
bij een productie-omgeving. Vanuit de projectmap:

```bash
# Python 3
python -m http.server 8000

# Node.js (indien geïnstalleerd)
npx serve .
```

Ga daarna naar <http://localhost:8000>.

## Projectstructuur

```
.
├── index.html          # Landingspagina (/)
├── contact.html        # Contactpagina (/contact)
├── blog.html           # Blogoverzicht (/blog)
├── blog-template.html  # Template voor een blogartikel
├── README.md
├── assets/
│   ├── logo.png        # Logo (transparant, bronbestand)
│   ├── hero.jpg        # Hero-afbeelding (vertrouwenspersoon)
│   ├── collegas.jpg    # Afbeelding in de "waarom"-sectie
│   ├── favicon.png     # Favicon (32×32, gegenereerd uit logo.png)
│   └── apple-touch-icon.png  # Apple-touch-icon (180×180)
├── css/
│   └── styles.css      # Alle styling (design tokens, componenten, responsive)
└── js/
    └── main.js         # Navigatie, sticky header, formuliervalidatie
```

## Content aanpassen

De HTML is opgedeeld in duidelijk gemarkeerde secties (zie de
`<!-- ===== Sectie ===== -->`-commentaren in `index.html` en `contact.html`).
Teksten staan rechtstreeks in de HTML en zijn daardoor eenvoudig te wijzigen.

- **Landingspagina** (`index.html`): hero, "waarom", aanbod, "hoe het werkt",
  vertrouwen, CTA-banner en footer.
- **Contactpagina** (`contact.html`): intro, contactformulier, directe
  contactgegevens en kantoortijden.
- **Blog** (`blog.html`): overzicht van artikelen. **Blogtemplate**
  (`blog-template.html`): sjabloon voor een nieuw artikel.

### Placeholders om in te vullen

De volgende gegevens zijn bewust als placeholder opgenomen en moeten nog worden
vervangen door de echte gegevens:

| Locatie | Placeholder |
| --- | --- |
| E-mailadres (footer + contactpagina) | `info@desteunlijn.nl` |
| Telefoonnummer | `+31 (0)6 835 762 02` |
| Adres | `Voetjesstraat 86C, 3081 HT Rotterdam` |
| Kantoortijden | `ma–vr 09:00–17:00` |
| Privacyverklaring / Algemene voorwaarden | verwijderd tot de pagina's bestaan |
| Open Graph-domein (`og:url`, `og:image`) | `https://www.desteunlijn.nl` (placeholder) |
| Web3Forms access key (contactformulier) | `VUL_HIER_JE_ACCESS_KEY_IN` |

Het contactformulier verstuurt via [Web3Forms](https://web3forms.com). Na
registratie op web3forms.com ontvang je op `info@desteunlijn.nl` een access key;
vul die in op de plek van `VUL_HIER_JE_ACCESS_KEY_IN` in `contact.html`.

## Kleuren

| Rol | Kleur | Hex |
| --- | --- | --- |
| Primair (achtergrond) | Wit | `#FFFFFF` |
| Secundair (koppen, navigatie, footer, knoppen) | Donkerblauw | `#003360` |
| Tertiair (accenten, CTA, hover) | Rood | `#DF1E1E` |

De kleuren zijn gedefinieerd als CSS-variabelen bovenaan `css/styles.css`
(`:root`). Tekst-op-achtergrondcombinaties zijn getest op WCAG AA-contrast.

## Touw-motief

Het rode scheepstouw uit het logo komt subtiel terug in het ontwerp:

- **Sectie-dividers** — een lijn met een knoop-icoon in het midden.
- **Bullets** — knoop-icoon in plaats van standaard stipjes (`.knot-list`).
- **Stapnummers** — genummerde cirkels met een rode "touwring".

## Technische kenmerken

- **Responsive** — mobiel, tablet en desktop (desktop-first met `max-width`-breakpoints).
- **Toegankelijkheid** — semantische HTML, `alt`-teksten, skip-link, focus-stijlen,
  `prefers-reduced-motion`, WCAG AA-contrast.
- **SEO** — unieke `title` en `meta description` per pagina, logische
  `h1`/`h2`-structuur, relevante zoektermen ("extern vertrouwenspersoon
  accountantskantoren").
- **Snel** — geen externe afhankelijkheden, systeemfonts, minimale assets.

## Favicon opnieuw genereren

De favicons zijn gegenereerd uit `assets/logo.png`. Om ze opnieuw te genereren
(bijvoorbeeld na een nieuw logo), gebruik je een afbeeldingsbewerker of een
PowerShell-script met `System.Drawing` om het logo te schalen naar 32×32
(`favicon.png`) en 180×180 (`apple-touch-icon.png`).
