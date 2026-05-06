import { useState } from "react";
import { z } from "zod";
import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import { Mail, Instagram, MapPin, ArrowRight, CheckCircle2 } from "lucide-react";

const schema = z.object({
  name: z.string().trim().min(2, "Naam is verplicht").max(100),
  email: z.string().trim().email("Geldig e-mailadres vereist").max(255),
  company: z.string().trim().max(120).optional(),
  projectType: z.string().min(1, "Kies een type project"),
  budget: z.string().min(1, "Kies een budget"),
  message: z.string().trim().min(10, "Bericht moet minstens 10 tekens bevatten").max(2000),
});

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    budget: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((issue) => {
        if (issue.path[0]) fieldErrors[issue.path[0] as string] = issue.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    // Email backend will be wired up in next step
    setSubmitted(true);
    toast({
      title: "Bedankt voor je bericht!",
      description: "We nemen binnen één werkdag contact met je op.",
    });
  };

  return (
    <Layout>
      <SEO
        title="Contact — Lenovate Studio"
        description="Klaar voor een sterkere website? Contacteer Lenovate Studio voor een vrijblijvend gesprek."
        canonicalPath="/contact"
      />

      <section className="ink-section pt-36 pb-20" style={{ background: "var(--gradient-hero)" }}>
        <div className="container-tight">
          <span className="eyebrow">Contact</span>
          <h1 className="mt-5 font-display text-5xl md:text-6xl font-bold max-w-3xl leading-[1.05]">
            Laten we <span className="gradient-text">praten</span>.
          </h1>
          <p className="mt-6 text-ink-muted text-lg max-w-2xl">
            Vertel ons over je project en we plannen een vrijblijvend kennismakingsgesprek.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-tight grid lg:grid-cols-3 gap-10">
          <aside className="space-y-6">
            <div className="rounded-2xl bg-surface-soft p-7">
              <h2 className="font-display text-xl font-bold mb-5">Direct contact</h2>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-primary mt-0.5" />
                  <a href="mailto:info@lenovate-studio.be" className="hover:text-primary">
                    info@lenovate-studio.be
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Instagram className="h-5 w-5 text-primary mt-0.5" />
                  <a
                    href="https://instagram.com/lenovate.studio"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-primary"
                  >
                    @lenovate.studio
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5" />
                  <span>België — werken op afstand met klanten in heel Europa</span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl bg-ink text-ink-foreground p-7">
              <h3 className="font-display text-lg font-bold">Wat verwacht je?</h3>
              <ul className="mt-4 space-y-3 text-sm text-ink-muted">
                {["Antwoord binnen 1 werkdag", "Gratis kennismakingsgesprek", "Eerlijke offerte zonder verplichtingen"].map((t) => (
                  <li key={t} className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" /> {t}
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          <div className="lg:col-span-2">
            {submitted ? (
              <div className="rounded-2xl border border-border bg-card p-12 text-center">
                <div className="h-16 w-16 rounded-full bg-gradient-accent mx-auto flex items-center justify-center text-white mb-5">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h2 className="font-display text-2xl font-bold">Bedankt!</h2>
                <p className="mt-3 text-muted-foreground">
                  Je bericht is verstuurd. We nemen binnen één werkdag contact met je op.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl border border-border bg-card p-7 md:p-10 space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <Label htmlFor="name">Naam *</Label>
                    <Input
                      id="name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="mt-2"
                    />
                    {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <Label htmlFor="email">E-mail *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="mt-2"
                    />
                    {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div>
                  <Label htmlFor="company">Bedrijf</Label>
                  <Input
                    id="company"
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    className="mt-2"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <Label>Type project *</Label>
                    <Select value={form.projectType} onValueChange={(v) => setForm({ ...form, projectType: v })}>
                      <SelectTrigger className="mt-2"><SelectValue placeholder="Kies een type" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Nieuwe website">Nieuwe website</SelectItem>
                        <SelectItem value="Restyling bestaande site">Restyling bestaande site</SelectItem>
                        <SelectItem value="Webshop">Webshop</SelectItem>
                        <SelectItem value="SEO traject">SEO traject</SelectItem>
                        <SelectItem value="Onderhoud">Onderhoud</SelectItem>
                        <SelectItem value="Andere">Iets anders</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.projectType && <p className="text-xs text-destructive mt-1">{errors.projectType}</p>}
                  </div>
                  <div>
                    <Label>Budget *</Label>
                    <Select value={form.budget} onValueChange={(v) => setForm({ ...form, budget: v })}>
                      <SelectTrigger className="mt-2"><SelectValue placeholder="Indicatief budget" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="< €2.500">Minder dan €2.500</SelectItem>
                        <SelectItem value="€2.500 – €5.000">€2.500 – €5.000</SelectItem>
                        <SelectItem value="€5.000 – €10.000">€5.000 – €10.000</SelectItem>
                        <SelectItem value="€10.000+">€10.000+</SelectItem>
                        <SelectItem value="Nog niet zeker">Nog niet zeker</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.budget && <p className="text-xs text-destructive mt-1">{errors.budget}</p>}
                  </div>
                </div>

                <div>
                  <Label htmlFor="message">Vertel over je project *</Label>
                  <Textarea
                    id="message"
                    rows={6}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="mt-2"
                  />
                  {errors.message && <p className="text-xs text-destructive mt-1">{errors.message}</p>}
                </div>

                <Button type="submit" size="lg" className="rounded-full bg-gradient-accent w-full sm:w-auto">
                  Verstuur bericht <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
