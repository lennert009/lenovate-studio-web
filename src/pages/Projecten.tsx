import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { projects } from "@/data/content";
import { ArrowUpRight } from "lucide-react";

const Projecten = () => {
  const categories = useMemo(
    () => ["Alle", ...Array.from(new Set(projects.map((p) => p.category)))],
    []
  );
  const [active, setActive] = useState("Alle");

  const filtered = active === "Alle" ? projects : projects.filter((p) => p.category === active);

  return (
    <Layout>
      <SEO
        title="Projecten — Lenovate Studio"
        description="Een selectie van websites en SEO-projecten die we recent realiseerden."
        canonicalPath="/projecten"
      />

      <section className="ink-section pt-36 pb-20" style={{ background: "var(--gradient-hero)" }}>
        <div className="container-tight">
          <span className="eyebrow">Portfolio</span>
          <h1 className="mt-5 font-display text-5xl md:text-6xl font-bold max-w-3xl leading-[1.05]">
            Werk waar we <span className="gradient-text">trots op zijn</span>.
          </h1>
          <p className="mt-6 text-ink-muted text-lg max-w-2xl">
            Een blik op recente projecten — van restaurants tot personal brands.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-tight">
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                  active === cat
                    ? "bg-gradient-accent text-white"
                    : "bg-secondary text-foreground hover:bg-secondary/70"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {filtered.map((p) => (
              <Link
                key={p.slug}
                to={`/projecten/${p.slug}`}
                className="group block rounded-2xl overflow-hidden border border-border bg-card hover:shadow-elegant transition-all hover:-translate-y-1"
              >
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  <img
                    src={p.cover}
                    alt={p.title}
                    width={1024}
                    height={768}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-primary font-semibold">
                      {p.category} · {p.year}
                    </p>
                    <h3 className="mt-2 font-display text-2xl font-bold">{p.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{p.excerpt}</p>
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:rotate-12 transition-all shrink-0" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projecten;
