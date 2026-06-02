import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Zap, Smartphone, Search, Target, Star, CheckCircle2 } from "lucide-react";
import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { projects, posts, reviews } from "@/data/content";
import heroVisual from "@/assets/hero-visual.jpg";
import portraitFounder from "@/assets/portrait-founder.jpg";

const Home = () => {
  const featured = projects.filter((p) => p.featured).slice(0, 3);
  const latestPosts = posts.slice(0, 3);

  return (
    <Layout>
      <SEO
        title="Lenovate Studio — Webdesign & SEO met impact"
        description="Lenovate Studio bouwt snelle, mobielvriendelijke websites met SEO ingebakken. Webdesign dat je merk versterkt en klanten brengt."
        canonicalPath="/"
      />

      {/* HERO */}
      <section className="ink-section relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
        <div className="container-tight pt-36 md:pt-44 pb-24 md:pb-32 relative">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 animate-fade-up">
              <span className="eyebrow">Webdesign · SEO · Branding</span>
              <h1 className="mt-6 font-display text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.05]">
                Webdesign met
                <br />
                <span className="gradient-text">impact.</span>
              </h1>
              <p className="mt-7 max-w-xl text-lg text-ink-muted leading-relaxed">
                We bouwen websites die er niet alleen scherp uitzien, maar ook écht
                klanten brengen. SEO-proof, supersnel en mobielvriendelijk —
                vanaf dag één.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Button asChild size="lg" className="rounded-full bg-gradient-accent shadow-elegant h-12 px-7">
                  <Link to="/contact">
                    Start je project <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full h-12 px-7 bg-transparent border-white/20 text-ink-foreground hover:bg-white/10 hover:text-ink-foreground">
                  <Link to="/projecten">Bekijk projecten</Link>
                </Button>
              </div>

              <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 text-sm text-ink-muted">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                  <span className="ml-2">5/5 op klantreviews</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" /> Vaste prijzen
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" /> Live in 4–6 weken
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 animate-fade-up" style={{ animationDelay: "120ms" }}>
              <div className="relative">
                <div className="absolute -inset-6 bg-gradient-accent opacity-30 blur-3xl rounded-full" />
                <img
                  src={heroVisual}
                  alt="Voorbeeld van een website ontworpen door Lenovate Studio"
                  width={1280}
                  height={1024}
                  className="relative rounded-2xl shadow-elegant border border-white/10"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DIENSTEN */}
      <section className="section-pad bg-surface-soft">
        <div className="container-tight">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div className="max-w-2xl">
              <span className="eyebrow">Diensten</span>
              <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold">
                Alles wat je nodig hebt om online te <span className="gradient-text">groeien</span>.
              </h2>
            </div>
            <Link to="/diensten" className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all">
              Alle diensten <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: Zap, title: "Webdesign op maat", text: "Custom design dat past bij jouw merk en doelgroep — geen template look." },
              { icon: Search, title: "SEO optimalisatie", text: "Hogere rankings en meer organisch verkeer dankzij doordachte SEO." },
              { icon: Smartphone, title: "Mobielvriendelijk", text: "Perfecte ervaring op elk scherm. Mobile-first ontwerpen, altijd." },
              { icon: Target, title: "Merkversterking", text: "Een consistente identiteit die vertrouwen wekt en converteert." },
            ].map((s) => (
              <div
                key={s.title}
                className="group rounded-2xl bg-card p-7 shadow-card hover:shadow-elegant transition-all hover:-translate-y-1"
              >
                <div className="h-12 w-12 rounded-xl bg-gradient-accent flex items-center justify-center text-white mb-5">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-xl font-bold mb-2">{s.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UITGELICHTE PROJECTEN */}
      <section className="section-pad">
        <div className="container-tight">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div className="max-w-2xl">
              <span className="eyebrow">Werk</span>
              <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold">
                Recente projecten in de <span className="gradient-text">spotlight</span>.
              </h2>
            </div>
            <Link to="/projecten" className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all">
              Alle projecten <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {featured.map((p) => (
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
                <div className="p-6">
                  <p className="text-xs uppercase tracking-widest text-primary font-semibold">{p.category}</p>
                  <h3 className="mt-2 font-display text-xl font-bold">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{p.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WERKWIJZE */}
      <section className="ink-section section-pad">
        <div className="container-tight">
          <div className="max-w-2xl mb-14">
            <span className="eyebrow">Werkwijze</span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold">
              Van eerste gesprek tot <span className="gradient-text">live website</span>.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { n: "01", t: "Intake", d: "Een open gesprek over je doelen, doelgroep en concurrentie." },
              { n: "02", t: "Strategie", d: "We schetsen sitemap, sleutelpagina's en SEO-strategie." },
              { n: "03", t: "Design & Build", d: "We ontwerpen en bouwen — met tussentijdse previews." },
              { n: "04", t: "Launch & groei", d: "Live, gemeten en blijvend bijgestuurd voor maximale impact." },
            ].map((step) => (
              <div key={step.n} className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 hover:bg-white/[0.05] transition-colors">
                <span className="font-display text-3xl font-bold gradient-text">{step.n}</span>
                <h3 className="mt-4 font-display text-xl font-bold">{step.t}</h3>
                <p className="mt-2 text-ink-muted text-sm leading-relaxed">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="section-pad bg-surface-soft">
        <div className="container-tight">
          <div className="max-w-2xl mb-14">
            <span className="eyebrow">Reviews</span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold">
              Klanten die het beter <span className="gradient-text">vertellen</span>.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {reviews.slice(0, 4).map((r) => (
              <div key={r.name} className="rounded-2xl bg-card p-7 shadow-card">
                <div className="flex gap-1 mb-4">
                  {[...Array(r.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="font-display text-lg leading-snug">"{r.quote}"</p>
                <div className="mt-5 pt-5 border-t border-border">
                  <p className="font-semibold">{r.name}</p>
                  <p className="text-sm text-muted-foreground">{r.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG PREVIEW */}
      <section className="section-pad">
        <div className="container-tight">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div className="max-w-2xl">
              <span className="eyebrow">Blog</span>
              <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold">
                Laatste artikels & <span className="gradient-text">tips</span>.
              </h2>
            </div>
            <Link to="/blog" className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all">
              Alle artikels <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {latestPosts.map((p) => (
              <Link
                key={p.slug}
                to={`/blog/${p.slug}`}
                className="group block rounded-2xl overflow-hidden border border-border bg-card hover:shadow-elegant transition-all hover:-translate-y-1"
              >
                <div className="aspect-[16/10] overflow-hidden bg-muted">
                  <img
                    src={p.cover}
                    alt={p.title}
                    width={1024}
                    height={640}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="text-primary font-semibold uppercase tracking-widest">{p.category}</span>
                    <span>·</span>
                    <span>{p.readTime}</span>
                  </div>
                  <h3 className="mt-2 font-display text-xl font-bold">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{p.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* OVER ONS */}
      <section className="section-pad bg-surface-soft">
        <div className="container-tight grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="absolute -inset-6 bg-gradient-accent opacity-20 blur-3xl rounded-full" />
            <img
              src={portraitFounder}
              alt="Oprichter van Lenovate Studio"
              width={1024}
              height={1280}
              loading="lazy"
              className="relative rounded-2xl shadow-elegant border border-border w-full object-cover aspect-[4/5]"
            />
          </div>
          <div className="order-1 lg:order-2">
            <span className="eyebrow">Over ons</span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold">
              Eén aanspreekpunt, <span className="gradient-text">volle focus</span>.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Bij Lenovate Studio krijg je geen anonieme accountmanager, maar een
              vaste partner die jouw project van A tot Z begeleidt. Strategie,
              design en development — alles onder één dak.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Korte lijnen, eerlijk advies en een resultaat waar we samen trots
              op zijn. Dat is de belofte.
            </p>
            <Link to="/over-ons" className="mt-8 inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all">
              Leer ons kennen <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="ink-section">
        <div className="container-tight py-20 md:py-28 text-center">
          <h2 className="font-display text-4xl md:text-6xl font-bold max-w-3xl mx-auto leading-tight">
            Klaar voor een <span className="gradient-text">sterkere website</span>?
          </h2>
          <p className="mt-5 text-ink-muted max-w-xl mx-auto text-lg">
            Vraag een vrijblijvende kennismaking aan. Binnen 24 uur hoor je van ons.
          </p>
          <Button asChild size="lg" className="mt-9 rounded-full bg-gradient-accent shadow-elegant h-12 px-7">
            <Link to="/contact">
              Plan een gesprek <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
