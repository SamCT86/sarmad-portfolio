import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      });
    }
  };
  return <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 hero-gradient opacity-10"></div>
      
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20">
          <Sparkles className="w-8 h-8 text-primary animate-pulse" />
        </div>
        <div className="absolute top-40 right-32">
          <Sparkles className="w-6 h-6 text-secondary animate-pulse delay-1000" />
        </div>
        <div className="absolute bottom-32 left-32">
          <Sparkles className="w-10 h-10 text-primary animate-pulse delay-2000" />
        </div>
        <div className="absolute bottom-20 right-20">
          <Sparkles className="w-7 h-7 text-secondary animate-pulse delay-500" />
        </div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
            <span className="block mb-2">Sarmad Tawfeek</span>
            <span className="text-gradient text-3xl md:text-4xl font-semibold">
              Entreprenör inom AI & SaaS
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Förvandlar idéer till skalbara produkter genom innovation inom automation och artificiell intelligens
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-scale-in">
            <Button variant="hero" size="lg" onClick={() => scrollToSection("about")} className="group">
              Om mig
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
            
            <Button variant="outline" size="lg" onClick={() => scrollToSection("contact")} className="border-primary/20 hover:border-primary hover:bg-primary/5">
              Kontakt
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          
        </div>
      </div>
    </section>;
};
export default Hero;