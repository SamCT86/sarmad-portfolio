import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Send, Linkedin, Github, Store } from "lucide-react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/REPLACE_WITH_YOUR_FORM_ID";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast({
        title: "Komplettera fälten",
        description: "Fyll i namn, e-post, ämne och meddelande.",
      });
      return;
    }

    if (FORMSPREE_ENDPOINT.includes("REPLACE_WITH_YOUR_FORM_ID")) {
      toast({
        title: "Formspree saknas",
        description: "Byt ut FORMSPREE_ENDPOINT i Contact.tsx mot din riktiga Formspree-länk.",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      toast({
        title: "Meddelandet är skickat",
        description: "Tack — ditt meddelande har skickats till sarmadtawfeek@gmail.com.",
      });

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      toast({
        title: "Något gick fel",
        description: "Formuläret kunde inte skickas just nu. Prova igen eller mejla direkt.",
      });
    } finally {
      setIsSubmitting(false);
    }
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
              Fyll i formuläret så skickas ditt meddelande direkt till min e-post.
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
                {isSubmitting ? "Skickar..." : "Skicka meddelande"}
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

            <Card className="p-8 shadow-sm border-border/60">
              <div className="flex items-center gap-3">
                <Store className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-semibold text-foreground">Etsy</h3>
              </div>
              <p className="mt-3 text-muted-foreground">
                Ett publikt projektspår där jag bygger och testar digital produktlogik i praktiken.
              </p>
              <Button variant="outline" className="mt-6 w-full" asChild>
                <a
                  href="https://www.etsy.com/shop/kindredarchive"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Besök Etsy-butik
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
