import { Link, useParams } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { ArrowLeft } from "lucide-react";
import { useWpPost, useWpPosts } from "@/hooks/useWpPosts";

const BlogDetail = () => {
  const { slug } = useParams();
  const { data: post, isLoading, isError } = useWpPost(slug);
  const { data: allPosts } = useWpPosts(6);

  if (isLoading) {
    return (
      <Layout>
        <div className="container-tight max-w-3xl py-40 space-y-5">
          <Skeleton className="h-4 w-32" />
          <Skeleton className="h-12 w-4/5" />
          <Skeleton className="h-64 w-full rounded-2xl" />
        </div>
      </Layout>
    );
  }

  if (isError || !post) {
    return (
      <Layout>
        <div className="container-tight py-40 text-center">
          <h1 className="font-display text-4xl font-bold">Artikel niet gevonden</h1>
          <Button asChild className="mt-6 rounded-full">
            <Link to="/blog">Terug naar blog</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  const others = (allPosts ?? []).filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <Layout>
      <SEO
        title={`${post.title} — Lenovate Studio`}
        description={post.excerpt}
        canonicalPath={`/blog/${post.slug}`}
      />

      <section className="ink-section pt-36 pb-16" style={{ background: "var(--gradient-hero)" }}>
        <div className="container-tight max-w-3xl">
          <Breadcrumbs
            dark
            customSegments={[{ label: "Blog", to: "/blog" }, { label: post.title }]}
          />
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-ink-muted hover:text-ink-foreground text-sm mb-8"
          >
            <ArrowLeft className="h-4 w-4" /> Alle artikels
          </Link>
          <span className="eyebrow">{post.category}</span>
          <h1 className="mt-5 font-display text-4xl md:text-5xl font-bold leading-[1.1]">
            {post.title}
          </h1>
          <div className="mt-6 flex items-center gap-3 text-sm text-ink-muted">
            <span>
              {new Date(post.date).toLocaleDateString("nl-BE", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>
        </div>
      </section>

      {post.cover && (
        <section className="-mt-10">
          <div className="container-tight max-w-4xl">
            <img
              src={post.cover}
              alt={post.coverAlt}
              className="w-full rounded-2xl border border-border shadow-elegant"
            />
          </div>
        </section>
      )}

      <article className="section-pad">
        <div className="container-tight max-w-2xl">
          <div
            className="prose prose-lg max-w-none prose-headings:font-display prose-headings:font-bold prose-a:text-primary prose-img:rounded-2xl text-foreground/80"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </article>

      {others.length > 0 && (
        <section className="section-pad bg-surface-soft">
          <div className="container-tight">
            <h2 className="font-display text-3xl font-bold mb-10">Lees ook</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {others.map((p) => (
                <Link
                  key={p.id}
                  to={`/blog/${p.slug}`}
                  className="group block rounded-2xl overflow-hidden border border-border bg-card hover:shadow-elegant transition-all hover:-translate-y-1"
                >
                  <div className="aspect-[16/10] overflow-hidden bg-muted">
                    {p.cover ? (
                      <img
                        src={p.cover}
                        alt={p.coverAlt}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform group-hover:scale-105"
                      />
                    ) : (
                      <div className="h-full w-full" style={{ background: "var(--gradient-hero)" }} aria-hidden />
                    )}
                  </div>
                  <div className="p-6">
                    <p className="text-xs uppercase tracking-widest text-primary font-semibold">
                      {p.category}
                    </p>
                    <h3 className="mt-2 font-display text-xl font-bold">{p.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
};

export default BlogDetail;
