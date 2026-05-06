import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/button";

const links = [
  { to: "/diensten", label: "Diensten" },
  { to: "/projecten", label: "Projecten" },
  { to: "/blog", label: "Blog" },
  { to: "/over-ons", label: "Over ons" },
  { to: "/faq", label: "FAQ" },
];

export const Header = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const onDark = location.pathname === "/";

  return (
    <header
      className={`absolute top-0 left-0 right-0 z-50 ${
        onDark ? "" : "border-b border-border bg-background"
      }`}
    >
      <div className="container-tight flex items-center justify-between py-5">
        <Logo light={onDark} />

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  onDark
                    ? `text-ink-foreground/80 hover:text-ink-foreground ${isActive ? "bg-white/10 text-ink-foreground" : ""}`
                    : `text-foreground/70 hover:text-foreground ${isActive ? "bg-secondary text-foreground" : ""}`
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:flex">
          <Button asChild className="rounded-full bg-gradient-accent shadow-elegant">
            <Link to="/contact">
              Start je project <ArrowUpRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <button
          className={`lg:hidden ${onDark ? "text-ink-foreground" : "text-foreground"}`}
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="container-tight flex flex-col py-4 gap-1">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="py-3 px-2 text-foreground/80 font-medium"
              >
                {l.label}
              </NavLink>
            ))}
            <Button asChild className="mt-3 rounded-full bg-gradient-accent">
              <Link to="/contact" onClick={() => setOpen(false)}>
                Start je project
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
