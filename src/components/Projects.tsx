import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, RotateCcw, TrendingUp, Zap } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "PulsePilot AI",
      description: "AI-driven churn-intelligens som minskar kundbortfall och räddar intäkter",
      icon: Brain,
      tags: ["AI/ML", "Churn Prevention", "SaaS"],
      gradient: "from-blue-500 to-purple-600"
    },
    {
      title: "ReturLogik",
      description: "Digitaliserar och automatiserar returflöden för butiker – lägre kostnad, bättre upplevelse",
      icon: RotateCcw,
      tags: ["E-handel", "Automation", "Process"],
      gradient: "from-purple-500 to-pink-600"
    },
    {
      title: "Trend-to-Asset",
      description: "Identifierar trender och skapar digitala produkter automatiskt – från signal till distribution",
      icon: TrendingUp,
      tags: ["AI Generation", "Trend Analysis", "Automation"],
      gradient: "from-green-500 to-blue-600"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Nuvarande projekt
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Innovativa lösningar som förvandlar branschutmaningar till affärsmöjligheter
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden shadow-soft hover:shadow-large transition-smooth cursor-pointer animate-scale-in border-0"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-5 group-hover:opacity-10 transition-smooth`}></div>
                
                <div className="relative p-8">
                  <div className="flex items-center mb-6">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center mr-4 shadow-medium`}>
                      <project.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-smooth">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="secondary"
                        className="bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary transition-smooth"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Hover indicator */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-smooth">
                    <Zap className="w-5 h-5 text-primary" />
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12 animate-fade-in">
            <p className="text-muted-foreground text-lg">
              Varje projekt representerar en unik kombination av teknisk innovation och djup branschförståelse
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;