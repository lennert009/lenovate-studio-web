import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { useWpPosts } from "@/hooks/useWpPosts";
import { Skeleton } from "@/components/ui/skeleton";
import { AlertCircle } from "lucide-react";

const Blog = () => {
  const { data: posts, isLoading, isError } = useWpPosts(12);

  return (
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
            Praktische artikels die je website meteen beter maken — live uit onze WordPress.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-tight">
          {isLoading && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="rounded-2xl overflow-hidden border border-border bg-card">
                  <Skeleton className="aspect-[16/10] w-full" />
                  <div className="p-6 space-y-3">
                    <Skeleton className="h-3 w-1/3" />
                    <Skeleton className="h-5 w-4/5" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-2/3" />
                  </div>
                </div>
              ))}
            </div>
          )}

          {isError && (
            <div className="flex items-start gap-3 rounded-2xl border border-border bg-card p-6">
              <AlertCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold">Berichten konden niet geladen worden</p>
                <p className="text-sm text-muted-foreground mt-1">
                  De verbinding met WordPress is even niet bereikbaar. Probeer het straks opnieuw.
                </p>
              </div>
            </div>
          )}

          {!isLoading && !isError && posts?.length === 0 && (
            <p className="text-muted-foreground">Er zijn nog geen gepubliceerde berichten.</p>
          )}

          {!isLoading && !isError && !!posts?.length && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((p) => (
                <Link
                  key={p.id}
                  to={`/blog/${p.slug}`}
                  className="group flex flex-col rounded-2xl overflow-hidden border border-border bg-card hover:shadow-elegant transition-all hover:-translate-y-1"
                >
                  <div className="aspect-[16/10] overflow-hidden bg-muted">
                    {p.cover ? (
                      <img
                        src={p.cover}
                        alt={p.coverAlt}
                        width={1024}
                        height={640}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div
                        className="h-full w-full"
                        style={{ background: "var(--gradient-hero)" }}
                        aria-hidden
                      />
                    )}
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                      <span className="text-primary font-semibold uppercase tracking-widest">
                        {p.category}
                      </span>
                      <span>·</span>
                      <span>
                        {new Date(p.date).toLocaleDateString("nl-BE", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </span>
                      <span>·</span>
                      <span>{p.readTime}</span>
                    </div>
                    <h2 className="mt-3 font-display text-xl font-bold">{p.title}</h2>
                    <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{p.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
