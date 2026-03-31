import { Card } from "@/components/ui/card";
import {
  Briefcase,
  Search,
  Cpu,
  Workflow,
  CheckCircle2,
  LineChart,
} from "lucide-react";

const About = () => {
  const backgroundPoints = [
    {
      icon: Briefcase,
      title: "Praktisk arbetsbakgrund",
      text: "Erfarenhet från detaljhandel, skadeutredning och teknisk försäljning har gett mig en stark förståelse för kundbehov, ansvar, struktur och verklig affärsdrift.",
    },
    {
      icon: Search,
      title: "Analys och dokumentation",
      text: "Jag trivs i roller där man behöver observera, analysera, dokumentera och ta fram tydliga nästa steg.",
    },
    {
      icon: Cpu,
      title: "Teknisk nyfikenhet",
      text: "Vid sidan av arbetet bygger jag egna digitala projekt och utforskar AI, automation, e-handel och workflow-design.",
    },
    {
      icon: Workflow,
      title: "Hur jag tänker",
      text: "Jag gillar att förenkla processer, skapa struktur och hitta smartare sätt att paketera arbete med hjälp av teknik.",
    },
  ];

  const valuePoints = [
    {
      icon: CheckCircle2,
      title: "Strukturerat arbetssätt",
      text: "Jag gillar tydlighet, ordning och att göra komplexa saker mer begripliga och användbara.",
    },
    {
      icon: LineChart,
      title: "Kund- och processförståelse",
      text: "Min bakgrund har lärt mig att se både kundens behov och hur processer faktiskt fungerar i praktiken.",
    },
    {
      icon: Cpu,
      title: "Digital systems thinking",
      text: "Jag är särskilt intresserad av hur digitala arbetsflöden kan förbättras, automatiseras och göras mer skalbara.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Om mig
          </p>
          <h2 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight text-foreground">
            En jordad väg in i digitalt byggande
          </h2>
          <p className="mt-6 text-base sm:text-lg leading-relaxed text-muted-foreground">
           Jag kommer från praktiska roller där ansvar, kundkontakt och struktur har varit en naturlig del av arbetet. Det har gett mig ett jordnära arbetssätt och en tydlig känsla för hur processer kan förbättras. Vid sidan av jobbet lägger jag mycket tid på att utforska digitala system, automation och smartare arbetsflöden.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-5xl gap-6 md:grid-cols-2">
          {backgroundPoints.map((point) => {
            const Icon = point.icon;

            return (
              <Card key={point.title} className="p-6 border-border/60 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="rounded-xl border border-border bg-background p-3">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {point.title}
                    </h3>
                    <p className="mt-2 text-sm sm:text-base leading-relaxed text-muted-foreground">
                      {point.text}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="mx-auto mt-16 max-w-5xl">
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Vad jag bidrar med
            </p>
            <h3 className="mt-4 text-2xl sm:text-3xl font-semibold tracking-tight text-foreground">
              Kompetenser jag tar med mig in i arbete och projekt
            </h3>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {valuePoints.map((point) => {
              const Icon = point.icon;

              return (
                <Card key={point.title} className="p-6 border-border/60 shadow-sm">
                  <div className="rounded-xl border border-border bg-background p-3 w-fit">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h4 className="mt-4 text-lg font-semibold text-foreground">
                    {point.title}
                  </h4>
                  <p className="mt-2 text-sm sm:text-base leading-relaxed text-muted-foreground">
                    {point.text}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-border bg-background p-8 text-center shadow-sm">
          <h3 className="text-xl font-semibold text-foreground">Nuvarande fokus</h3>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Just nu bygger jag framför allt egna digitala system och experiment inom automation,
            AI-assisterade workflows, e-handel och paketering av digitala produkter.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
