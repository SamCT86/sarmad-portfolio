import { Card } from "@/components/ui/card";
import { CheckCircle, TrendingUp, Users, Zap } from "lucide-react";

const About = () => {
  const journeySteps = [
    {
      icon: Users,
      text: "10+ år i detaljhandeln → förståelse för kundbeteende och affärsdrift",
    },
    {
      icon: CheckCircle,
      text: "7 år som bygg- och fuktskadeinspektör → analys, dokumentation, åtgärdsplaner",
    },
    {
      icon: TrendingUp,
      text: "Idag: fokus på tech, AI och SaaS → bygger smarta, skalbara lösningar",
    },
  ];

  return (
    <section id="about" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Bild */}
        <div className="flex justify-center md:justify-end animate-fade-in">
          <img
            src="/selfie.jpg" // se till att bilden finns i public/selfie.jpg
            alt="Sarmad Tawfeek"
            className="w-72 h-72 object-cover rounded-full shadow-lg border-4 border-primary/20"
          />
        </div>

        {/* Text & Cards */}
        <div>
          <div className="mb-12 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Min resa
            </h2>
            <div className="w-24 h-1 bg-primary mb-8 rounded-full mx-auto md:mx-0" />
          </div>

          <div className="grid gap-8 mb-16">
            {journeySteps.map((step, index) => (
              <Card
                key={index}
                className="p-6 shadow-soft hover:shadow-medium transition-smooth animate-slide-in border-l-4 border-l-primary/30"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-lg text-foreground leading-relaxed font-medium">
                    {step.text}
                  </p>
                </div>
              </Card>
            ))}
          </div>

          <Card className="p-8 shadow-glow bg-gradient-subtle border-primary/20 animate-scale-in">
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start mb-4">
                <Zap className="w-8 h-8 text-primary mr-3" />
                <h3 className="text-2xl font-bold text-foreground">Min vision</h3>
              </div>
              <p className="text-xl text-gradient font-semibold tracking-wide">
                Enkelhet + Automation + Global skala
              </p>
              <p className="text-muted-foreground mt-4 text-lg">
                Att skapa lösningar som inte bara löser problem idag, utan formar framtidens sätt att arbeta
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;