import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { Heart, Lightbulb, Rocket } from "lucide-react";
import portraitFounder from "@/assets/portrait-founder.jpg";

const OverOns = () => (
  <Layout>
    <SEO
      title="Over ons — Lenovate Studio"
      description="Lenovate Studio is een Belgisch webdesign- en SEO-bureau dat merken digitaal laat groeien."
      canonicalPath="/over-ons"
    />

    <section className="ink-section pt-36 pb-20" style={{ background: "var(--gradient-hero)" }}>
      <div className="container-tight">
        <Breadcrumbs dark />
        <span className="eyebrow">Over ons</span>
        <h1 className="mt-5 font-display text-5xl md:text-6xl font-bold max-w-3xl leading-[1.05]">
          We bouwen websites die <span className="gradient-text">werken</span>.
        </h1>
        <p className="mt-6 text-ink-muted text-lg max-w-2xl">
          Lenovate Studio is een Belgisch webdesign- en SEO-bureau. Onze missie:
          ondernemers helpen om écht zichtbaar te zijn online — met websites die
          mooi zijn, snel laden en klanten brengen.
        </p>
      </div>
    </section>

    <section className="section-pad">
      <div className="container-tight grid md:grid-cols-3 gap-6 text-center">
        {[
          { n: "50+", l: "Projecten gelanceerd" },
          { n: "5/5", l: "Gemiddelde review score" },
          { n: "4 jaar", l: "Ervaring in webdesign & SEO" },
        ].map((s) => (
          <div key={s.l} className="rounded-2xl bg-surface-soft p-10">
            <p className="font-display text-5xl font-bold gradient-text">{s.n}</p>
            <p className="mt-3 text-muted-foreground">{s.l}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="section-pad bg-surface-soft">
      <div className="container-tight">
        <div className="max-w-2xl mb-14">
          <span className="eyebrow">Waarden</span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold">
            Waar wij <span className="gradient-text">in geloven</span>.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: Heart, t: "Eerlijk advies", d: "Geen onnodige extra's. We adviseren wat jij écht nodig hebt — ook als dat minder is." },
            { icon: Lightbulb, t: "Strategie eerst", d: "Een mooi design zonder strategie is een dure brochure. We beginnen met de waarom." },
            { icon: Rocket, t: "Snel & meetbaar", d: "We leveren snel en bewijzen impact met cijfers. Geen mistige beloftes." },
          ].map((v) => (
            <div key={v.t} className="rounded-2xl bg-card p-7 shadow-card">
              <div className="h-12 w-12 rounded-xl bg-gradient-accent flex items-center justify-center text-white mb-5">
                <v.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xl font-bold">{v.t}</h3>
              <p className="mt-2 text-muted-foreground text-sm leading-relaxed">{v.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="ink-section">
      <div className="container-tight py-20 text-center">
        <h2 className="font-display text-4xl md:text-5xl font-bold max-w-3xl mx-auto leading-tight">
          Zin om <span className="gradient-text">samen te werken</span>?
        </h2>
        <Button asChild size="lg" className="mt-8 rounded-full bg-gradient-accent">
          <Link to="/contact">Neem contact op</Link>
        </Button>
      </div>
    </section>
  </Layout>
);

export default OverOns;
