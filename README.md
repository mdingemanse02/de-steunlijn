# De Steunlijn — website

Professionele, responsive website voor **De Steunlijn**, een organisatie die
financiële instellingen koppelt aan ervaren, geregistreerde externe
vertrouwenspersonen. Statische site in HTML, CSS en JavaScript — geen backend of
build-stap nodig.

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
├── README.md
├── assets/
│   ├── logo.jpg        # Originele logo (bronbestand)
│   ├── favicon.png     # Favicon (32×32, gegenereerd uit logo.jpg)
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
  vertrouwen/quote, CTA-banner en footer.
- **Contactpagina** (`contact.html`): intro, contactformulier, directe
  contactgegevens en kantoortijden.

### Placeholders om in te vullen

De volgende gegevens zijn bewust als placeholder opgenomen en moeten nog worden
vervangen door de echte gegevens:

| Locatie | Placeholder |
| --- | --- |
| E-mailadres (footer + contactpagina) | `info@desteunlijn.nl` |
| Telefoonnummer | `+31 (0)20 123 45 67` |
| Adres | `Voorbeeldstraat 1, 1234 AB Amsterdam` |
| Kantoortijden | `ma–vr 09:00–17:00` |
| Quote (vertrouwen-sectie) | `[Naam], [Functie], [Organisatie]` |
| Privacyverklaring / Algemene voorwaarden | `href="#"` (nog geen pagina's) |
| Open Graph-domein (`og:url`, `og:image`) | `https://www.desteunlijn.nl` (placeholder) |

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

- **Hero-accentlijn** — een dunne, touw-achtig gestileerde lijn onder de eyebrow.
- **Sectie-dividers** — een lijn met een knoop-icoon in het midden.
- **Bullets** — knoop-icoon in plaats van standaard stipjes (`.knot-list`).
- **Stapnummers** — genummerde cirkels met een rode "touwring".

## Technische kenmerken

- **Responsive** — mobiel, tablet en desktop (desktop-first met `max-width`-breakpoints).
- **Toegankelijkheid** — semantische HTML, `alt`-teksten, skip-link, focus-stijlen,
  `prefers-reduced-motion`, WCAG AA-contrast.
- **SEO** — unieke `title` en `meta description` per pagina, logische
  `h1`/`h2`-structuur, relevante zoektermen ("extern vertrouwenspersoon financiële
  sector").
- **Snel** — geen externe afhankelijkheden, systeemfonts, minimale assets.

## Favicon opnieuw genereren

De favicons zijn gegenereerd uit `assets/logo.jpg`. Om ze opnieuw te genereren
(bijvoorbeeld na een nieuw logo), gebruik je een afbeeldingsbewerker of een
PowerShell-script met `System.Drawing` om het logo te schalen naar 32×32
(`favicon.png`) en 180×180 (`apple-touch-icon.png`).
