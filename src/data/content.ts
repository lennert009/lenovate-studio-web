import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";
import project6 from "@/assets/project-6.jpg";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";

export interface Project {
  slug: string;
  title: string;
  client: string;
  category: string;
  year: string;
  cover: string;
  excerpt: string;
  challenge: string;
  solution: string;
  result: string;
  tech: string[];
  url?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    slug: "elektriciteitswerken-foubert",
    title: "Elektriciteitswerken Foubert",
    client: "Foubert",
    category: "Webdesign + SEO",
    year: "2024",
    cover: project5,
    excerpt: "Lokale dienstensite met sterke SEO voor elektrowerken in de regio.",
    challenge: "Onvindbaar in Google voor lokale zoektermen.",
    solution: "Service-pagina's per gemeente, technische SEO, snelle paginatijden onder 1 seconde.",
    result: "Top-3 rankings op 14 commerciële kernwoorden.",
    tech: ["Local SEO", "Schema.org", "PageSpeed"],
    url: "https://example.com",
    featured: true,
  },
  {
    slug: "gedopt-gardening",
    title: "Gedopt Gardening",
    client: "Gedopt Gardening",
    category: "Webdesign + SEO",
    year: "2025",
    cover: project1,
    excerpt: "Een frisse, organische website voor een tuinaanleg- en onderhoudsbedrijf.",
    challenge: "Geen online aanwezigheid en klanten via enkel mond-tot-mondreclame.",
    solution: "Aards design met fotografie-vriendelijke layouts, seizoensgebonden content en lokale SEO voor tuinwerken.",
    result: "45% van nieuwe aanvragen komt nu via de website, seizoenspiek perfect opgevangen.",
    tech: ["React", "TailwindCSS", "Lokale SEO", "CMS"],
    url: "https://example.com",
    featured: true,
  },
  {
    slug: "ftf-electrix",
    title: "FTF Electrix",
    client: "FTF Electrix",
    category: "Webdesign + SEO",
    year: "2025",
    cover: project2,
    excerpt: "Professionele website voor een elektrotechnisch installatiebedrijf.",
    challenge: "De oude site was verouderd en trok nauwelijks commerciële aanvragen.",
    solution: "Moderne corporate identiteit, duidelijke dienstenpagina's en SEO voor industriële en residentiële elektrotechniek.",
    result: "3x zoveel offerteaanvragen binnen 2 maanden na lancering.",
    tech: ["React", "SEO copy", "Schema.org", "Form automation"],
    url: "https://example.com",
    featured: true,
  },
];

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  cover: string;
  category: string;
  date: string;
  readTime: string;
  content: { type: "p" | "h2" | "li"; text: string }[];
}

export const posts: BlogPost[] = [
  {
    slug: "website-3x-sneller-in-30-minuten",
    title: "Je website 3x sneller maken in 30 minuten",
    excerpt: "Een snelle site verkoopt beter en scoort hoger in Google. 5 ingrepen die meteen impact hebben.",
    cover: blog1,
    category: "Performance",
    date: "2025-04-22",
    readTime: "6 min",
    content: [
      { type: "p", text: "Snelheid is geen luxe meer — het is een rankingfactor en een conversiefactor. Hieronder de vijf ingrepen die we standaard toepassen." },
      { type: "h2", text: "1. Comprimeer en converteer je beelden" },
      { type: "p", text: "Beelden zijn meestal 70% van het paginagewicht. Converteer naar WebP of AVIF en serveer responsive sizes." },
      { type: "h2", text: "2. Lazy loading op niet-zichtbare media" },
      { type: "p", text: "Alles onder de fold mag wachten. Voeg loading=\"lazy\" toe aan al je img-tags." },
      { type: "h2", text: "3. Caching op je server of CDN" },
      { type: "p", text: "Statische assets horen ver-cached te worden, idealiter via een CDN dicht bij je bezoekers." },
      { type: "h2", text: "4. Verwijder ongebruikte scripts en plugins" },
      { type: "p", text: "Elke plugin = extra code. Audit kwartaal en gooi weg wat je niet gebruikt." },
      { type: "h2", text: "5. Meet — en blijf meten" },
      { type: "p", text: "Met PageSpeed Insights en Lighthouse zie je wat er nog loont om aan te pakken." },
    ],
  },
  {
    slug: "heb-je-een-chatbot-nodig",
    title: "Heb je een chatbot nodig op je website?",
    excerpt: "Niet elke site heeft er een nodig. Wanneer wel, wanneer niet, en wat het kost.",
    cover: blog2,
    category: "Strategie",
    date: "2025-03-14",
    readTime: "4 min",
    content: [
      { type: "p", text: "Chatbots zijn hot — maar ze zijn niet voor iedereen. Hieronder ons eerlijk advies." },
      { type: "h2", text: "Wanneer is een chatbot zinvol?" },
      { type: "p", text: "Als je veel terugkerende vragen krijgt en buiten kantooruren leads verliest, dan is de business case snel rond." },
      { type: "h2", text: "Wanneer niet?" },
      { type: "p", text: "Voor een puur portfolio of corporate site voegt een bot weinig toe. Investeer dan liever in betere copy." },
    ],
  },
  {
    slug: "3-veelgemaakte-fouten-in-webdesign",
    title: "3 veelgemaakte fouten in webdesign",
    excerpt: "We zien deze fouten elke week voorbijkomen. Vermijd ze, en je site werkt al beter.",
    cover: blog3,
    category: "Design",
    date: "2025-02-02",
    readTime: "5 min",
    content: [
      { type: "p", text: "Een mooi design is niet hetzelfde als een werkend design. Drie klassiekers die we elke week tegenkomen." },
      { type: "h2", text: "1. Geen duidelijke call-to-action" },
      { type: "p", text: "Wat moet de bezoeker doen? Eén actie per scherm, prominent in beeld." },
      { type: "h2", text: "2. Te lange laadtijden" },
      { type: "p", text: "Boven de 3 seconden haakt 40% af. Geen discussie." },
      { type: "h2", text: "3. Niet mobielvriendelijk" },
      { type: "p", text: "Meer dan 60% van het verkeer is mobiel. Mobile-first ontwerpen, altijd." },
    ],
  },
];

export const reviews = [
  {
    name: "Sarah Vermeulen",
    company: "Bouwgroep Vermeulen",
    rating: 5,
    quote: "Lenovate Studio leverde sneller dan beloofd en de site doet wat hij moet doen — leads binnenhalen. Communicatie was top.",
  },
  {
    name: "Marco Bellini",
    company: "Ristorante Bellini",
    rating: 5,
    quote: "Onze online reservaties zijn verdrievoudigd. De site oogt smaakvol en past perfect bij onze sfeer.",
  },
  {
    name: "Tom De Smet",
    company: "FitCoach Pro",
    rating: 5,
    quote: "Eindelijk een echte verkoopmachine i.p.v. een digitaal visitekaartje. Aanrader voor iedereen die online wil schalen.",
  },
  {
    name: "Karen De Winter",
    company: "Tandartspraktijk De Winter",
    rating: 5,
    quote: "Patiënten boeken nu zelf online — onze receptie kan eindelijk ademen. Strak werk en heldere prijzen.",
  },
];

export const faqs = [
  {
    group: "Algemeen",
    items: [
      { q: "Wat doet Lenovate Studio precies?", a: "We ontwerpen en bouwen websites op maat, met SEO ingebouwd vanaf dag één. Ons doel: een site die niet alleen mooi is, maar ook klanten brengt." },
      { q: "Werken jullie alleen in België?", a: "We werken voornamelijk met Belgische en Nederlandse klanten, maar projecten in heel Europa zijn welkom." },
      { q: "Hoe lang duurt een gemiddeld project?", a: "Een standaard website telt 4 tot 6 weken van kick-off tot live. Complexere projecten lopen 8 tot 12 weken." },
    ],
  },
  {
    group: "Prijzen",
    items: [
      { q: "Wat kost een website bij Lenovate?", a: "Onze projecten starten vanaf €1.950 voor een one-pager en gaan tot €8.500+ voor uitgebreide bedrijfssites met SEO traject." },
      { q: "Krijg ik een vaste prijs of een uurtarief?", a: "Standaard werken we met een vaste projectprijs zodat je nooit verrast wordt. Onderhoud kan op basis van een maandpakket." },
      { q: "Zijn er bijkomende kosten?", a: "Domeinnaam en hosting reken ik door aan kostprijs (vanaf €12/maand). Verder geen verborgen kosten." },
    ],
  },
  {
    group: "Proces",
    items: [
      { q: "Hoe verloopt een traject?", a: "We werken in vier fases: intake & strategie → design → development → launch & optimalisatie. Bij elke fase zit een vast feedbackmoment." },
      { q: "Hoeveel input verwacht je van mij?", a: "Een goeie 4 tot 6 uur verspreid over het traject. We doen het zware werk." },
    ],
  },
  {
    group: "SEO",
    items: [
      { q: "Doen jullie ook SEO los van een website?", a: "Ja. We bieden SEO audits, technische SEO en contentstrategie aan, ook voor sites die we niet zelf bouwden." },
      { q: "Hoe snel zie ik resultaat van SEO?", a: "Eerste verbeteringen merk je vaak binnen 6–8 weken. Echte traffic-groei volgt typisch in maand 3 tot 6." },
    ],
  },
  {
    group: "Onderhoud",
    items: [
      { q: "Bieden jullie onderhoudsabonnementen?", a: "Ja. Vanaf €49/maand zorgen we voor updates, back-ups, security en kleine inhoudswijzigingen." },
      { q: "Wat als er iets stuk gaat?", a: "Met een onderhoudsabonnement ben je gedekt en reageren we binnen één werkdag. Zonder abonnement op uurbasis." },
    ],
  },
];
