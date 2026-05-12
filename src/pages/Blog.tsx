import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { posts } from "@/data/content";

const Blog = () => (
  <Layout>
    <SEO
      title="Blog — Lenovate Studio"
      description="Tips en inzichten over webdesign, SEO en online groei."
      canonicalPath="/blog"
    />

    <section className="ink-section pt-36 pb-20" style={{ background: "var(--gradient-hero)" }}>
      <div className="container-tight">
        <Breadcrumbs dark />
        <span className="eyebrow">Blog</span>
        <h1 className="mt-5 font-display text-5xl md:text-6xl font-bold max-w-3xl leading-[1.05]">
          Inzichten over <span className="gradient-text">webdesign</span> & SEO.
        </h1>
        <p className="mt-6 text-ink-muted text-lg max-w-2xl">
          Praktische artikels die je website meteen beter maken.
        </p>
      </div>
    </section>

    <section className="section-pad">
      <div className="container-tight grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((p) => (
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
                <span>{new Date(p.date).toLocaleDateString("nl-BE", { day: "numeric", month: "long", year: "numeric" })}</span>
                <span>·</span>
                <span>{p.readTime}</span>
              </div>
              <h2 className="mt-3 font-display text-xl font-bold">{p.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{p.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  </Layout>
);

export default Blog;
