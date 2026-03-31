import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Send, Linkedin, Github } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast({
        title: "Komplettera fälten",
        description: "Fyll i namn, e-post, ämne och meddelande.",
      });
      return;
    }

    setIsSubmitting(true);

    const body =
      `Namn: ${formData.name}\n` +
      `E-post: ${formData.email}\n\n` +
      `Meddelande:\n${formData.message}`;

    const mailtoLink = `mailto:sarmadtawfeek@gmail.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(body)}`;

    toast({
      title: "Öppnar e-postklient…",
      description: "Din standardapp eller webmail får välja hur mejlet skickas.",
    });

    window.location.href = mailtoLink;
    setIsSubmitting(false);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Kontakt
          </p>
          <h2 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight text-foreground">
            Hör gärna av dig
          </h2>
          <p className="mt-6 text-base sm:text-lg leading-relaxed text-muted-foreground">
            Jag är öppen för kontakt kring jobb, relevanta samarbeten, digitala projekt,
            automation eller andra professionella möjligheter.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-6xl gap-8 lg:grid-cols-2">
          <Card className="p-8 shadow-sm border-border/60">
            <h3 className="text-xl font-semibold text-foreground">Skicka ett meddelande</h3>
            <p className="mt-2 text-sm sm:text-base text-muted-foreground">
              Fyll i formuläret så öppnas ett färdigt mejl till mig i din e-postklient.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div>
                <Label htmlFor="name">Namn</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  placeholder="Ditt namn"
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="email">E-post</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  placeholder="din@email.com"
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="subject">Ämne</Label>
                <Input
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => handleInputChange("subject", e.target.value)}
                  placeholder="Vad gäller det?"
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="message">Meddelande</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  placeholder="Berätta kort om ditt ärende…"
                  className="mt-2 min-h-32"
                />
              </div>

              <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                {isSubmitting ? "Öppnar…" : "Skicka meddelande"}
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </Card>

          <div className="space-y-6">
            <Card className="p-8 shadow-sm border-border/60">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-semibold text-foreground">E-post</h3>
              </div>
              <p className="mt-3 text-muted-foreground">
                För direkt kontakt, jobbrelaterade frågor eller enklare dialog.
              </p>
              <Button variant="outline" className="mt-6 w-full" asChild>
                <a href="mailto:sarmadtawfeek@gmail.com">sarmadtawfeek@gmail.com</a>
              </Button>
            </Card>

            <Card className="p-8 shadow-sm border-border/60">
              <div className="flex items-center gap-3">
                <Linkedin className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-semibold text-foreground">LinkedIn</h3>
              </div>
              <p className="mt-3 text-muted-foreground">
                Min professionella profil, arbetsbakgrund och kontaktväg för rekryterare och arbetsgivare.
              </p>
              <Button variant="outline" className="mt-6 w-full" asChild>
                <a
                  href="https://www.linkedin.com/in/sam-lundb-taw-496197207/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Besök LinkedIn
                </a>
              </Button>
            </Card>

            <Card className="p-8 shadow-sm border-border/60">
              <div className="flex items-center gap-3">
                <Github className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-semibold text-foreground">GitHub</h3>
              </div>
              <p className="mt-3 text-muted-foreground">
                Kod, projektstruktur och pågående byggen.
              </p>
              <Button variant="outline" className="mt-6 w-full" asChild>
                <a
                  href="https://github.com/SamCT86"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Besök GitHub
                </a>
              </Button>
            </Card>

            <div className="px-2 pt-2">
              <p className="text-sm text-muted-foreground">
                Svarstid: vanligtvis inom 24 timmar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
