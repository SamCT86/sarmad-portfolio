import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Boxes, Workflow, Store, Wrench, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Kindred Archive",
      description:
        "Ett systemspår för att skapa, paketera och strukturera digital wall art med hjälp av automation, bildflöden och e-handelslogik.",
      icon: Store,
      tags: ["Etsy", "Automation", "Digital products"],
      link: "https://www.etsy.com/shop/kindredarchive",
      linkLabel: "Besök Etsy-butik",
    },
    {
      title: "Revenant Engine",
      description:
        "Ett pipeline-koncept för att uppdatera äldre listing-material i batch med fokus på tydlighet, paketering och visuell trust.",
      icon: Workflow,
      tags: ["Batch workflows", "Packaging", "Listing clarity"],
    },
    {
      title: "AI-assisted workflows",
      description:
        "Löpande experiment där jag testar hur AI kan användas för att strukturera, förstärka och förenkla digitala arbetsflöden.",
      icon: Boxes,
      tags: ["AI", "Workflow design", "Systems thinking"],
    },
    {
      title: "Automation experiments",
      description:
        "Praktiska byggen och tester inom processautomation, digital produktion och enklare system för återanvändbar output.",
      icon: Wrench,
      tags: ["Automation", "Process", "Experiments"],
    },
  ];

  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Projekt
          </p>
          <h2 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight text-foreground">
            Utvalda system och projekt
          </h2>
          <p className="mt-6 text-base sm:text-lg leading-relaxed text-muted-foreground">
            Här är några av de digitala system och experiment jag bygger eller utforskar.
            Projekten fungerar både som lärande, praktisk tillämpning och ett sätt att utveckla min förståelse
            för automation, produktlogik och digitala workflows.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-6xl gap-6 md:grid-cols-2">
          {projects.map((project) => {
            const Icon = project.icon;

            return (
              <Card key={project.title} className="p-6 border-border/60 shadow-sm">
                <div className="flex items-start justify-between gap-4">
                  <div className="rounded-xl border border-border bg-muted/40 p-3">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                </div>

                <h3 className="mt-6 text-xl font-semibold text-foreground">
                  {project.title}
                </h3>

                <p className="mt-3 text-sm sm:text-base leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {project.link && project.linkLabel && (
                  <div className="mt-6">
                    <Button variant="outline" asChild>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {project.linkLabel}
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                )}
              </Card>
            );
          })}
        </div>

        <div className="mx-auto mt-12 max-w-3xl text-center">
          <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">
            Målet med projekten är inte bara att bygga teknik, utan att förstå hur struktur,
            användbarhet och automation kan samverka i verkliga digitala arbetsflöden.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
