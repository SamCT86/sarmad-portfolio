import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  const navigationItems = [
    { id: "home", label: "Hem" },
    { id: "about", label: "Om mig" },
    { id: "projects", label: "Projekt" },
    { id: "contact", label: "Kontakt" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ["home", "about", "projects", "contact"];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (!element) return false;

        const rect = element.getBoundingClientRect();
        return rect.top <= 120 && rect.bottom >= 120;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex h-20 items-center justify-between">
          <button
            onClick={() => scrollToSection("home")}
            className="text-lg font-semibold tracking-tight text-foreground"
          >
            Sam Tawfeek
          </button>

          <nav className="hidden md:flex items-center gap-8">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-colors ${
                  activeSection === item.id
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <Button
            variant="outline"
            onClick={() => scrollToSection("contact")}
            className="hidden md:inline-flex"
          >
            Kontakt
          </Button>

          <Button
            variant="outline"
            onClick={() => scrollToSection("contact")}
            className="md:hidden"
            size="sm"
          >
            Kontakt
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
