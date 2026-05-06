import logoMark from "@/assets/logo-mark.png";
import { Link } from "react-router-dom";

export const Logo = ({ light = false }: { light?: boolean }) => (
  <Link to="/" className="flex items-center gap-2.5 group" aria-label="Lenovate Studio home">
    <img
      src={logoMark}
      alt="Lenovate Studio logo"
      width={36}
      height={36}
      className="h-9 w-9 rounded-full transition-transform group-hover:scale-105"
    />
    <span
      className={`font-display text-lg font-bold tracking-tight ${
        light ? "text-ink-foreground" : "text-foreground"
      }`}
    >
      Lenovate <span className="font-medium opacity-70">Studio</span>
    </span>
  </Link>
);
