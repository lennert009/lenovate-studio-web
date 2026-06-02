import { Link, useParams } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { LaptopMockup } from "@/components/LaptopMockup";
import { projects } from "@/data/content";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowUpRight, ExternalLink, Sparkles, Gauge, Search, Smartphone, Palette, ShieldCheck } from "lucide-react";

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <Layout>
        <div className="container-tight py-40 text-center">
          <h1 className="font-display text-4xl font-bold">Project niet gevonden</h1>
          <Button asChild className="mt-6 rounded-full">
            <Link to="/projecten">Terug naar projecten</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  const others = projects.filter((p) => p.slug !== project.slug).slice(0, 2);

  return (
    <Layout>
      <SEO
        title={`${project.title} — Lenovate Studio`}
        description={project.excerpt}
        canonicalPath={`/projecten/${project.slug}`}
      />

      <section className="ink-section pt-36 pb-32" style={{ background: "var(--gradient-hero)" }}>
        <div className="container-tight">
          <Breadcrumbs
            dark
            customSegments={[
              { label: "Projecten", to: "/projecten" },
              { label: project.title },
            ]}
          />
          <Link to="/projecten" className="inline-flex items-center gap-2 text-ink-muted hover:text-ink-foreground text-sm mb-8">
            <ArrowLeft className="h-4 w-4" /> Alle projecten
          </Link>
          <h1 className="mt-5 font-display text-5xl md:text-6xl font-bold leading-[1.05]">
            {project.title}
          </h1>
          <div className="mt-8 grid sm:grid-cols-3 gap-6 max-w-3xl">
            <div>
              <p className="text-xs uppercase tracking-widest text-ink-muted">Klant</p>
              <p className="mt-1 font-semibold">{project.client}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-ink-muted">Jaar</p>
              <p className="mt-1 font-semibold">{project.year}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-ink-muted">Categorie</p>
              <p className="mt-1 font-semibold">{project.category}</p>
            </div>
          </div>
          <div className="mt-8">
            <span className="eyebrow">{project.category}</span>
          </div>
        </div>
      </section>

      {/* Laptop showcase */}
      <section className="-mt-24 md:-mt-28">
        <div className="container-tight">
          <LaptopMockup src={project.cover} alt={`${project.title} — website preview`} />
        </div>
      </section>

      <section className="section-pad">
        <div className="container-tight grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-10">
            <div>
              <h2 className="font-display text-2xl font-bold mb-3">De uitdaging</h2>
              <p className="text-muted-foreground leading-relaxed">{project.challenge}</p>
            </div>
            <div>
              <h2 className="font-display text-2xl font-bold mb-3">Onze aanpak</h2>
              <p className="text-muted-foreground leading-relaxed">{project.solution}</p>
            </div>
            <div>
              <h2 className="font-display text-2xl font-bold mb-3">Het resultaat</h2>
              <p className="text-muted-foreground leading-relaxed">{project.result}</p>
            </div>
          </div>

          <aside>
            <div className="rounded-2xl bg-surface-soft p-7 sticky top-24">
              <h3 className="font-display text-lg font-bold mb-4">Tech & aanpak</h3>
              <ul className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <li key={t} className="rounded-full bg-card border border-border px-3 py-1 text-xs font-medium">
                    {t}
                  </li>
                ))}
              </ul>
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-primary font-medium"
                >
                  Bezoek live site <ExternalLink className="h-4 w-4" />
                </a>
              )}
            </div>
          </aside>
        </div>
      </section>

      {/* Highlights & illustraties */}
      <section className="section-pad bg-surface-soft">
        <div className="container-tight">
          <div className="max-w-2xl mb-14">
            <span className="eyebrow">Onder de motorkap</span>
            <h2 className="mt-4 font-display text-3xl md:text-4xl font-bold">
              Wat deze website voor {project.client} doet
            </h2>
            <p className="mt-4 text-muted-foreground">
              Een combinatie van strak design, snelle techniek en doordachte SEO — gebouwd om bezoekers
              om te zetten in klanten.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Gauge, title: "Bliksemsnel", text: "Laadtijden onder 1 seconde, 95+ PageSpeed score op mobiel en desktop." },
              { icon: Search, title: "SEO ingebouwd", text: "Schema.org, technische SEO en content per dienst — vindbaar in Google." },
              { icon: Smartphone, title: "Mobile-first", text: "Ontworpen vanaf het kleinste scherm. Vlekkeloos op elk device." },
              { icon: Palette, title: "Eigen huisstijl", text: "Visuele identiteit doorgetrokken in elk detail — kleur, type en ritme." },
              { icon: ShieldCheck, title: "Onderhoudsvrij", text: "Automatische back-ups, security updates en monitoring inbegrepen." },
              { icon: Sparkles, title: "Conversie-gericht", text: "Heldere call-to-actions en formulieren die effectief leads opleveren." },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title} className="rounded-2xl bg-card border border-border p-7 hover:shadow-elegant transition-shadow">
                <div className="h-11 w-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-lg font-bold mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
              </div>
            ))}
          </div>

          {/* Illustratie strook */}
          <div className="mt-16 grid md:grid-cols-5 gap-4">
            <div className="md:col-span-3 rounded-2xl overflow-hidden aspect-[4/3] md:aspect-auto md:min-h-[320px]">
              <img src={project.cover} alt={`${project.title} — sfeerbeeld 1`} loading="lazy" className="h-full w-full object-cover" />
            </div>
            <div className="md:col-span-2 grid grid-rows-2 gap-4">
              <div className="rounded-2xl overflow-hidden">
                <img src={project.cover} alt={`${project.title} — sfeerbeeld 2`} loading="lazy" className="h-full w-full object-cover object-bottom" />
              </div>
              <div className="rounded-2xl bg-ink text-ink-foreground p-7 flex flex-col justify-between">
                <p className="eyebrow text-ink-muted">In één zin</p>
                <p className="font-display text-xl md:text-2xl font-bold leading-snug">
                  "{project.excerpt}"
                </p>
                <p className="text-sm text-ink-muted">— {project.client}</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="section-pad">
        <div className="container-tight">
          <h2 className="font-display text-3xl font-bold mb-10">Volgende projecten</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {others.map((p) => (
              <Link
                key={p.slug}
                to={`/projecten/${p.slug}`}
                className="group block rounded-2xl overflow-hidden border border-border bg-card hover:shadow-elegant transition-all hover:-translate-y-1"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={p.cover} alt={p.title} loading="lazy" className="h-full w-full object-cover transition-transform group-hover:scale-105" />
                </div>
                <div className="p-6 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-primary font-semibold">{p.category}</p>
                    <h3 className="mt-2 font-display text-xl font-bold">{p.title}</h3>
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProjectDetail;
