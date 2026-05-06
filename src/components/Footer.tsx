import { Link } from "react-router-dom";
import { Logo } from "./Logo";
import { Instagram, Mail, MapPin, ArrowUpRight } from "lucide-react";

export const Footer = () => (
  <footer className="ink-section">
    <div className="container-tight py-16 md:py-20">
      <div className="grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2 max-w-sm">
          <Logo light />
          <p className="mt-5 text-ink-muted leading-relaxed">
            Webdesign met impact. We bouwen websites die mooi zijn, snel laden en
            klanten brengen — SEO-proof en mobielvriendelijk.
          </p>
          <a
            href="mailto:info@lenovate-studio.be"
            className="mt-6 inline-flex items-center gap-2 text-ink-foreground hover:gap-3 transition-all"
          >
            <Mail className="h-4 w-4" /> info@lenovate-studio.be
          </a>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-ink-foreground/60 mb-4">
            Site
          </h4>
          <ul className="space-y-3 text-ink-muted">
            <li><Link to="/diensten" className="hover:text-ink-foreground">Diensten</Link></li>
            <li><Link to="/projecten" className="hover:text-ink-foreground">Projecten</Link></li>
            <li><Link to="/blog" className="hover:text-ink-foreground">Blog</Link></li>
            <li><Link to="/over-ons" className="hover:text-ink-foreground">Over ons</Link></li>
            <li><Link to="/faq" className="hover:text-ink-foreground">FAQ</Link></li>
            <li><Link to="/contact" className="hover:text-ink-foreground">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-ink-foreground/60 mb-4">
            Contact
          </h4>
          <ul className="space-y-3 text-ink-muted">
            <li className="flex items-start gap-2">
              <MapPin className="h-4 w-4 mt-1 shrink-0" /> België
            </li>
            <li>
              <a
                href="https://instagram.com/lenovate.studio"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 hover:text-ink-foreground"
              >
                <Instagram className="h-4 w-4" /> @lenovate.studio
                <ArrowUpRight className="h-3 w-3" />
              </a>
            </li>
            <li>
              <a
                href="https://lenovate-studio.be"
                target="_blank"
                rel="noreferrer"
                className="hover:text-ink-foreground"
              >
                lenovate-studio.be
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between text-sm text-ink-muted">
        <p>© {new Date().getFullYear()} Lenovate Studio. Alle rechten voorbehouden.</p>
        <p>BTW BE 0XXX.XXX.XXX</p>
      </div>
    </div>
  </footer>
);
