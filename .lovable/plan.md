## Lenovate Studio — Website Plan (Headless WordPress.com)

Een moderne, professionele website voor Lenovate Studio (webdesign + SEO bureau) in het Nederlands. De **frontend** is een React/Vite app gebouwd in Lovable. Het **CMS** is WordPress.com — jij beheert blog posts en projecten vanuit het vertrouwde WordPress dashboard, en de site haalt die content live op via de WordPress REST API.

### Waarom headless?

Lovable kan geen PHP/WordPress thema's bouwen — we maken React apps. Maar door WordPress als "headless CMS" te gebruiken krijg je:
- Een snelle, moderne site met perfecte mobile UX en SEO basics.
- Het volledige WordPress beheer dat jij kent (rich editor, media library, categorieën, tags).
- Vrijheid om later van design te veranderen zonder content te verliezen.

### Visuele stijl

- **Kleuren**: zwart (#0A0A0A) voor hero/footer, wit/lichtgrijs voor content, helder blauw als accent (zoals je Instagram posts), wit op donker.
- **Typografie**: vette brede sans-serif voor headings (Space Grotesk of Inter), nette body font.
- **Logo**: "L" merklogo in zwarte cirkel + "Lenovate Studio" wordmark in header.
- **Sfeer**: strak, modern, veel witruimte, subtiele hover-animaties, kaarten met zachte schaduwen.

### Sitemap

```text
/                  Home
/diensten          Diensten
/projecten         Portfolio overzicht (uit WordPress)
/projecten/:slug   Project detail (uit WordPress)
/blog              Blog overzicht (uit WordPress)
/blog/:slug        Blog artikel (uit WordPress)
/over-ons          Over Lenovate
/faq               Veelgestelde vragen
/contact           Contactpagina
```

### Pagina's & secties

**Home**
- Hero (donker): "Webdesign met impact 🚀", subtitel, CTA's (Start je project / Bekijk projecten).
- Diensten preview (licht): 4 kaarten — Webdesign, SEO, Mobielvriendelijk, Merkversterking.
- Uitgelichte projecten (licht): 3 portfolio cases live uit WordPress (gemarkeerd met tag "uitgelicht").
- Werkwijze (donker): 4 stappen — Intake, Strategie, Design & Build, Launch & Optimalisatie.
- Reviews (licht): testimonial carrousel met sterren.
- Blog preview (licht): 3 laatste artikels uit WordPress.
- CTA sectie (donker): "Klaar voor een sterkere website?".

**Diensten** — detail per dienst (Webdesign op maat, SEO, Webshops, Onderhoud, Branding) met features en CTA.

**Projecten** — grid uit WordPress met filter op categorie. Detail toont hero image, klant, jaar, technieken, uitdaging/oplossing/resultaat, screenshots, link naar live site.

**Blog** — grid uit WordPress met cover, categorie, datum. Detail toont volledig artikel met rich content uit WordPress.

**Over ons** — verhaal, missie, 3 waarden, statistieken.

**FAQ** — accordeon: Algemeen, Prijzen, Proces, SEO, Onderhoud (statisch in code, gemakkelijk aan te passen).

**Contact** — formulier (naam, e-mail, bedrijf, type project, budget, bericht), contactgegevens, social links.

### WordPress integratie

- Content komt uit jouw WordPress.com site via de WP REST API (via Lovable's connector gateway, dus geen API keys in de frontend).
- **Blog posts**: standaard WordPress posts (titel, content, featured image, categorieën, tags, datum).
- **Projecten**: standaard WordPress posts in de categorie "Projecten" — met de volgende extra info in de body of als custom velden:
  - Klant, jaar, gebruikte technieken, live URL.
  - "Uitgelicht" wordt aangeduid via tag `uitgelicht`.
- **Reviews**: posts in de categorie "Reviews" met naam + bedrijf in de titel en quote in de content (1–5 sterren als tag `5-sterren`, etc.). Of statisch in code als je dat liever wil.
- Caching via React Query: snelle laadtijden, content ververst op de achtergrond.

### Contactformulier

- Validatie met zod.
- Inzending wordt via een Edge Function als e-mail verstuurd naar **info@lenovate-studio.be**.
- Afzender krijgt een bevestigingsmail "Bedankt, we nemen snel contact op".
- Setup: bij implementatie wordt gevraagd je domein `lenovate-studio.be` te koppelen voor e-mail (NS records bij je domeinprovider toevoegen).

### Technisch

- React + Vite + Tailwind + shadcn/ui.
- Lovable Cloud voor: e-mail verzending, optioneel een log van contactaanvragen.
- WordPress.com connector voor het ophalen van content (read-only).
- React Query voor data fetching + caching.
- SEO basics: per-pagina `<title>`, meta description, Open Graph tags, semantische HTML, sitemap-vriendelijke routes.

### Wat je krijgt

Een complete marketing site die zijn blog en projecten live uit jouw WordPress haalt. Jij plaatst nieuwe posts in WordPress → ze verschijnen automatisch op de site. Geen aparte admin om te leren. Statische pagina's (Diensten, Over, FAQ, Contact, Werkwijze) staan in code en kan je via Lovable chat aanpassen.

### Vervolgstappen na goedkeuring

1. Public site opbouwen met seed/voorbeeld content (alle pagina's, design klaar).
2. Lovable Cloud aanzetten + WordPress.com connector koppelen (jij logt in met je WP.com account; als je nog geen WordPress.com site hebt, maak je er eerst gratis één aan op wordpress.com).
3. Content fetching koppelen aan blog en projecten pagina's.
4. E-mail domein setup voor `lenovate-studio.be` (jij voegt NS records toe bij je domeinprovider).
5. Contactformulier koppelen aan e-mail.

### Belangrijke noot

Als je een **self-hosted** WordPress hebt (geen wordpress.com), werkt dit ook — maar dan moeten we de aanpak iets aanpassen (eigen REST API endpoint i.p.v. de WordPress.com connector). Laat het me weten als dat het geval is, dan pas ik aan.
