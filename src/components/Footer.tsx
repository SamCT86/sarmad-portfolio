import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-bold mb-2">Sarmad Tawfeek</h3>
            <p className="text-background/80">
              Entreprenör inom AI, SaaS och automation
            </p>
          </div>
          
          <div className="border-t border-background/20 pt-6">
            <p className="text-background/60 flex items-center justify-center gap-2">
              Byggt med 
              <Heart className="w-4 h-4 text-red-400 fill-current" />
              för framtiden
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;