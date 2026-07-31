import { corsHeaders } from "npm:@supabase/supabase-js@2/cors";

const GATEWAY_URL = "https://connector-gateway.lovable.dev/wordpress";

interface WpPost {
  id: number;
  slug: string;
  date: string;
  link: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
  _embedded?: {
    "wp:featuredmedia"?: Array<{ source_url?: string; alt_text?: string }>;
    "wp:term"?: Array<Array<{ taxonomy: string; name: string }>>;
  };
}

const stripHtml = (html: string) =>
  html
    .replace(/<[^>]*>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&#8217;/g, "'")
    .replace(/&#8216;/g, "'")
    .replace(/&#8220;|&#8221;/g, '"')
    .replace(/&hellip;/g, "…")
    .trim();

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  const json = (body: unknown, status = 200) =>
    new Response(JSON.stringify(body), {
      status,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });

  try {
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    const WORDPRESS_API_KEY = Deno.env.get("WORDPRESS_API_KEY");
    if (!LOVABLE_API_KEY || !WORDPRESS_API_KEY) {
      return json({ error: "WordPress-verbinding is niet geconfigureerd." }, 500);
    }

    const url = new URL(req.url);
    const rawPerPage = Number(url.searchParams.get("per_page") ?? "12");
    const perPage = Number.isFinite(rawPerPage)
      ? Math.min(Math.max(Math.trunc(rawPerPage), 1), 24)
      : 12;

    const rawSlug = url.searchParams.get("slug") ?? "";
    const slug = /^[a-z0-9-]{1,120}$/i.test(rawSlug) ? rawSlug : "";

    const query = new URLSearchParams({
      status: "publish",
      _embed: "1",
      per_page: String(slug ? 1 : perPage),
      orderby: "date",
      order: "desc",
    });
    if (slug) query.set("slug", slug);

    const res = await fetch(`${GATEWAY_URL}/posts?${query.toString()}`, {
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "X-Connection-Api-Key": WORDPRESS_API_KEY,
      },
    });

    if (!res.ok) {
      const text = await res.text();
      console.error("WordPress gateway error", res.status, text.slice(0, 500));
      return json({ error: `WordPress gaf status ${res.status}` }, 502);
    }

    const raw = (await res.json()) as WpPost[];
    const posts = (Array.isArray(raw) ? raw : []).map((p) => {
      const media = p._embedded?.["wp:featuredmedia"]?.[0];
      const category = p._embedded?.["wp:term"]
        ?.flat()
        .find((t) => t?.taxonomy === "category")?.name;
      const plain = stripHtml(p.content?.rendered ?? "");
      const words = plain.split(/\s+/).filter(Boolean).length;

      return {
        id: p.id,
        slug: p.slug,
        title: stripHtml(p.title?.rendered ?? ""),
        excerpt: stripHtml(p.excerpt?.rendered ?? "").slice(0, 220),
        content: p.content?.rendered ?? "",
        cover: media?.source_url ?? null,
        coverAlt: media?.alt_text || stripHtml(p.title?.rendered ?? ""),
        category: category ?? "Blog",
        date: p.date,
        readTime: `${Math.max(1, Math.round(words / 200))} min`,
        link: p.link,
      };
    });

    return json({ posts });
  } catch (err) {
    console.error("wp-posts error", err);
    return json({ error: "Kon berichten niet ophalen." }, 500);
  }
});
