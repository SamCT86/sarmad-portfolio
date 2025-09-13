import { useState, useEffect } from "react";
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

      // Update active section based on scroll position
      const sections = ["home", "about", "projects", "contact"];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-soft border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div className="font-semibold text-lg text-foreground">
            Sarmad Tawfeek
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-smooth hover:text-primary ${
                  activeSection === item.id
                    ? "text-primary nav-active"
                    : "text-muted-foreground"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <Button
            variant="hero"
            size="sm"
            onClick={() => scrollToSection("contact")}
            className="hidden md:block"
          >
            Kontakt
          </Button>

          {/* Mobile menu - simplified for this version */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => scrollToSection("contact")}
            >
              Kontakt
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;