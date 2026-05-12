import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Globe, Search, ShoppingCart, Wrench, Palette } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Webdesign op maat",
    desc: "Volledig op maat ontworpen websites die jouw merk versterken en bezoekers omzetten in klanten.",
    features: ["UX/UI design", "Responsive op elk scherm", "Eigen identiteit, geen template", "Snelle laadtijden"],
  },
  {
    icon: Search,
    title: "SEO optimalisatie",
    desc: "Word gevonden door wie écht naar jouw diensten zoekt. Lokale en nationale SEO.",
    features: ["Technische SEO audit", "Zoekwoordenonderzoek", "On-page optimalisatie", "Maandelijkse rapportage"],
  },
  {
    icon: ShoppingCart,
    title: "Webshops",
    desc: "Conversiegerichte webshops die soepel werken en mooi schalen mee met je bedrijf.",
    features: ["Shopify of headless setup", "Geoptimaliseerde checkout", "Voorraad & betaalintegraties", "Marketingautomatisering"],
  },
  {
    icon: Wrench,
    title: "Onderhoud & support",
    desc: "Een rustige nacht: wij houden je site veilig, snel en up-to-date.",
    features: ["Beveiliging & back-ups", "Updates & monitoring", "Inhoudswijzigingen", "Reactie binnen één werkdag"],
  },
  {
    icon: Palette,
    title: "Branding & identiteit",
    desc: "Een sterk merk verkoopt zichzelf. Logo, kleurenpalet en huisstijl die blijven plakken.",
    features: ["Logo design", "Brand guidelines", "Visuele identiteit", "Templates voor social"],
  },
];

const Diensten = () => (
  <Layout>
    <SEO
      title="Diensten — Lenovate Studio"
      description="Webdesign, SEO, webshops, onderhoud en branding. Alles wat je nodig hebt om online te groeien."
      canonicalPath="/diensten"
    />

    <section className="ink-section pt-36 pb-20" style={{ background: "var(--gradient-hero)" }}>
      <div className="container-tight">
        <Breadcrumbs dark />
        <span className="eyebrow">Diensten</span>
        <h1 className="mt-5 font-display text-5xl md:text-6xl font-bold max-w-3xl leading-[1.05]">
          Een volledig pakket om <span className="gradient-text">online te winnen</span>.
        </h1>
        <p className="mt-6 text-ink-muted text-lg max-w-2xl">
          Van strategie tot launch tot doorlopende groei. Bij Lenovate Studio krijg je
          één partner die het hele plaatje begrijpt.
        </p>
      </div>
    </section>

    <section className="section-pad">
      <div className="container-tight grid gap-6">
        {services.map((s, i) => (
          <div
            key={s.title}
            className={`grid lg:grid-cols-2 gap-10 items-center rounded-3xl border border-border bg-card p-8 md:p-12 ${
              i % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""
            }`}
          >
            <div>
              <div className="h-14 w-14 rounded-2xl bg-gradient-accent flex items-center justify-center text-white mb-5">
                <s.icon className="h-7 w-7" />
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold">{s.title}</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">{s.desc}</p>
              <Button asChild className="mt-7 rounded-full bg-gradient-accent">
                <Link to="/contact">
                  Vraag een offerte <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <ul className="space-y-3">
              {s.features.map((f) => (
                <li key={f} className="flex items-start gap-3 rounded-xl bg-surface-soft p-4">
                  <Check className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <span className="font-medium">{f}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>

    <section className="ink-section">
      <div className="container-tight py-20 text-center">
        <h2 className="font-display text-4xl md:text-5xl font-bold">
          Niet zeker welke <span className="gradient-text">dienst</span> je nodig hebt?
        </h2>
        <p className="mt-4 text-ink-muted max-w-xl mx-auto">
          Geen probleem — we denken graag mee. Een kort gesprek brengt vaak meer helderheid dan tien e-mails.
        </p>
        <Button asChild size="lg" className="mt-8 rounded-full bg-gradient-accent">
          <Link to="/contact">Plan een kennismaking</Link>
        </Button>
      </div>
    </section>
  </Layout>
);

export default Diensten;
