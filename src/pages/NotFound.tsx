import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";

const NotFound = () => (
  <Layout>
    <SEO title="Pagina niet gevonden — Lenovate Studio" description="Deze pagina bestaat niet." />
    <div className="container-tight py-40 text-center">
      <p className="font-display text-7xl font-bold gradient-text">404</p>
      <h1 className="mt-4 font-display text-3xl font-bold">Pagina niet gevonden</h1>
      <p className="mt-3 text-muted-foreground">Deze pagina bestaat niet of is verplaatst.</p>
      <Button asChild className="mt-8 rounded-full bg-gradient-accent">
        <Link to="/">Terug naar home</Link>
      </Button>
    </div>
  </Layout>
);

export default NotFound;
