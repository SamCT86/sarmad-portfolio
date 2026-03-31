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
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Portfolio / Digital systems / Automation
          </p>

          <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl leading-tight">
            Sam Lundb. Taw
          </h1>

          <p className="mt-6 max-w-2xl text-xl text-foreground/90 sm:text-2xl leading-relaxed">
            Bygger digitala system, automationer och AI-drivna workflows på fritiden.
          </p>

          <p className="mt-6 max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
            Jag har bakgrund inom analys, teknisk försäljning och operativ problemlösning.
            Idag utforskar jag hur AI, automation och e-handel kan användas för att skapa
            enklare och mer skalbara digitala arbetsflöden.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="group"
            >
              Se det jag bygger
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
