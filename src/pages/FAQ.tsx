import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { faqs } from "@/data/content";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => (
  <Layout>
    <SEO
      title="FAQ — Lenovate Studio"
      description="Veelgestelde vragen over webdesign, SEO, prijzen en ons proces."
      canonicalPath="/faq"
    />

    <section className="ink-section pt-36 pb-20" style={{ background: "var(--gradient-hero)" }}>
      <div className="container-tight">
        <span className="eyebrow">FAQ</span>
        <h1 className="mt-5 font-display text-5xl md:text-6xl font-bold max-w-3xl leading-[1.05]">
          Veelgestelde <span className="gradient-text">vragen</span>.
        </h1>
        <p className="mt-6 text-ink-muted text-lg max-w-2xl">
          Vind je vraag er niet tussen? Stuur een mail naar info@lenovate-studio.be.
        </p>
      </div>
    </section>

    <section className="section-pad">
      <div className="container-tight max-w-3xl space-y-12">
        {faqs.map((g) => (
          <div key={g.group}>
            <h2 className="font-display text-2xl font-bold mb-4">{g.group}</h2>
            <Accordion type="single" collapsible className="space-y-2">
              {g.items.map((item, i) => (
                <AccordionItem
                  key={i}
                  value={`${g.group}-${i}`}
                  className="rounded-xl border border-border bg-card px-5 data-[state=open]:shadow-card"
                >
                  <AccordionTrigger className="text-left font-semibold">{item.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">{item.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        ))}
      </div>
    </section>
  </Layout>
);

export default FAQ;
