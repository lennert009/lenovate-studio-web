import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export interface WpPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  cover: string | null;
  coverAlt: string;
  category: string;
  date: string;
  readTime: string;
  link: string;
}

async function fetchWpPosts(params: { perPage?: number; slug?: string } = {}) {
  const search = new URLSearchParams();
  if (params.perPage) search.set("per_page", String(params.perPage));
  if (params.slug) search.set("slug", params.slug);

  const { data, error } = await supabase.functions.invoke<{ posts: WpPost[] }>(
    `wp-posts?${search.toString()}`,
    { method: "GET" }
  );

  if (error) throw error;
  return data?.posts ?? [];
}

export const useWpPosts = (perPage = 12) =>
  useQuery({
    queryKey: ["wp-posts", perPage],
    queryFn: () => fetchWpPosts({ perPage }),
    staleTime: 5 * 60 * 1000,
  });

export const useWpPost = (slug?: string) =>
  useQuery({
    queryKey: ["wp-post", slug],
    queryFn: () => fetchWpPosts({ slug }),
    enabled: !!slug,
    staleTime: 5 * 60 * 1000,
    select: (posts) => posts[0] ?? null,
  });
