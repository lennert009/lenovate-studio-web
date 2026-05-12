import { Link, useLocation } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

const labelMap: Record<string, string> = {
  diensten: "Diensten",
  projecten: "Projecten",
  blog: "Blog",
  "over-ons": "Over ons",
  faq: "FAQ",
  contact: "Contact",
};

interface BreadcrumbsProps {
  dark?: boolean;
  customSegments?: { label: string; to?: string }[];
}

export const Breadcrumbs = ({ dark, customSegments }: BreadcrumbsProps) => {
  const location = useLocation();
  const segments = customSegments ?? location.pathname
    .split("/")
    .filter(Boolean)
    .map((seg, idx, arr) => {
      const to = "/" + arr.slice(0, idx + 1).join("/");
      return { label: labelMap[seg] ?? seg, to: idx === arr.length - 1 ? undefined : to };
    });

  const textClass = dark ? "text-ink-muted" : "text-muted-foreground";
  const hoverClass = dark ? "hover:text-ink-foreground" : "hover:text-foreground";
  const activeClass = dark ? "text-ink-foreground" : "text-foreground";
  const chevronClass = dark ? "text-ink-muted/50" : "text-muted-foreground/50";

  return (
    <nav aria-label="breadcrumb" className="py-4">
      <ol className="flex flex-wrap items-center gap-2 text-sm">
        <li>
          <Link
            to="/"
            className={`inline-flex items-center gap-1.5 ${textClass} ${hoverClass} transition-colors`}
          >
            <Home className="h-3.5 w-3.5" />
            <span>Home</span>
          </Link>
        </li>
        {segments.map((seg, i) => (
          <li key={i} className="flex items-center gap-2">
            <ChevronRight className={`h-3.5 w-3.5 ${chevronClass}`} />
            {seg.to ? (
              <Link to={seg.to} className={`${textClass} ${hoverClass} transition-colors`}>
                {seg.label}
              </Link>
            ) : (
              <span className={`${activeClass} font-medium`}>{seg.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};
