import { Card } from "@/components/ui/card";
import { Briefcase, Search, Cpu, Workflow } from "lucide-react";

const About = () => {
  const points = [
    {
      icon: Briefcase,
      title: "Praktisk arbetsbakgrund",
      text: "Erfarenhet från detaljhandel, skadeutredning och teknisk försäljning har gett mig förståelse för kundbehov, struktur och verklig affärsdrift.",
    },
    {
      icon: Search,
      title: "Analys och dokumentation",
      text: "Jag trivs i miljöer där man behöver observera, analysera, dokumentera och ta fram tydliga åtgärder.",
    },
    {
      icon: Cpu,
      title: "Teknisk nyfikenhet",
      text: "Vid sidan av arbetet bygger jag egna digitala system och experimenterar med AI, automation, e-handel och workflow-design.",
    },
    {
      icon: Workflow,
      title: "Hur jag tänker",
      text: "Jag gillar att bryta ner problem, förenkla processer och hitta sätt att paketera arbete smartare med hjälp av teknik.",
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
            En mer jordad väg in i digitalt byggande
          </h2>
          <p className="mt-6 text-base sm:text-lg leading-relaxed text-muted-foreground">
            Min bakgrund är inte en rak tech-linje. Jag kommer från praktiska roller där
            ansvar, tydlighet och verkliga problem stått i centrum. Det har format hur jag
            tänker idag: mindre hype, mer struktur, mer användbarhet.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-5xl gap-6 md:grid-cols-2">
          {points.map((point) => {
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

        <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-border bg-background p-8 text-center shadow-sm">
          <h3 className="text-xl font-semibold text-foreground">Nuvarande fokus</h3>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Just nu bygger jag framför allt egna digitala system och experiment inom
            AI-assisterade workflows, e-handelsautomation och paketering av digitala produkter.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
