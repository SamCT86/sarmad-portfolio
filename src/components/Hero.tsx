import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (!element) return;

    const offsetTop = element.offsetTop - 80;
    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-background pt-24"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,0,0,0.04),transparent_40%)]" />
      <div className="container relative mx-auto px-6">
        <div className="max-w-4xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Professional profile / Digital systems / Automation
          </p>

          <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl leading-tight">
            Sam Tawfeek
          </h1>

          <p className="mt-6 max-w-3xl text-xl text-foreground/90 sm:text-2xl leading-relaxed">
            Tekniskt nyfiken problemlösare med bakgrund inom analys, teknisk försäljning och digitala system.
          </p>

          <p className="mt-6 max-w-3xl text-base sm:text-lg text-muted-foreground leading-relaxed">
            Jag arbetar strukturerat, praktiskt och kundnära. Vid sidan av mitt arbete bygger jag egna
            projekt inom automation, AI-assisterade workflows och digitala system — med fokus på tydlighet,
            användbarhet och bättre arbetsflöden.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="group"
            >
              Se projekt
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("contact")}
            >
              Kontakta mig
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
