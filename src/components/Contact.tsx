import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Mail, Send, Linkedin } from "lucide-react";

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

    const safeSubject = formData.subject || "Kontakt via sarmadtawfeek.com";
    const body =
      `Namn: ${formData.name}\n` +
      `E-post: ${formData.email}\n\n` +
      `Meddelande:\n${formData.message}`;

    const mailtoLink = `mailto:samct86@gmail.com?subject=${encodeURIComponent(
      safeSubject
    )}&body=${encodeURIComponent(body)}`;

    toast({
      title: "Öppnar din e-postklient…",
      description: "Meddelandet är förifyllt – tryck Skicka i e-postfönstret.",
    });

    window.location.href = mailtoLink;
    setIsSubmitting(false);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Kontakt</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8 rounded-full" />
            <p className="text-xl text-muted-foreground mb-4">
              Jag är öppen för möjligheter och samarbeten inom AI och SaaS
            </p>
            <p className="text-lg text-gradient font-semibold">
              Låt oss connecta och utforska möjligheter tillsammans
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Formulär */}
            <Card className="p-8 shadow-medium animate-slide-in">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-foreground font-medium">
                      Namn *
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      className="mt-2 bg-card border border-border focus:ring-2 focus:ring-primary/30"
                      placeholder="Ditt namn"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-foreground font-medium">
                      E-post *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="mt-2 bg-card border border-border focus:ring-2 focus:ring-primary/30"
                      placeholder="din@email.com"
                    />
                  </div>
                </div>

                {/* Ämne */}
                <div>
                  <Label htmlFor="subject" className="text-foreground font-medium">
                    Ämne *
                  </Label>

                  <div className="mt-2">
                    <Select
                      value={formData.subject}
                      onValueChange={(v) => handleInputChange("subject", v)}
                    >
                      <SelectTrigger
                        id="subject"
                        className="bg-card border border-border focus:ring-2 focus:ring-primary/30"
                      >
                        <SelectValue placeholder="Välj ämne" />
                      </SelectTrigger>

                      <SelectContent
                        position="popper"
                        sideOffset={6}
                        className="bg-card text-foreground border border-border shadow-lg rounded-xl p-1 z-50"
                      >
                        <SelectItem
                          value="Investering"
                          className="rounded-md px-3 py-2 focus:bg-primary/10 data-[state=checked]:bg-primary/15 data-[state=checked]:font-semibold"
                        >
                          Investering
                        </SelectItem>
                        <SelectItem
                          value="Partnerskap"
                          className="rounded-md px-3 py-2 focus:bg-primary/10 data-[state=checked]:bg-primary/15 data-[state=checked]:font-semibold"
                        >
                          Partnerskap
                        </SelectItem>
                        <SelectItem
                          value="Samarbete"
                          className="rounded-md px-3 py-2 focus:bg-primary/10 data-[state=checked]:bg-primary/15 data-[state=checked]:font-semibold"
                        >
                          Samarbete
                        </SelectItem>
                        <SelectItem
                          value="Övrigt"
                          className="rounded-md px-3 py-2 focus:bg-primary/10 data-[state=checked]:bg-primary/15 data-[state=checked]:font-semibold"
                        >
                          Övrigt
                        </SelectItem>
                      </SelectContent>
                    </Select>

                    {/* “required”-hack för Radix Select */}
                    <input
                      tabIndex={-1}
                      autoComplete="off"
                      className="hidden"
                      value={formData.subject}
                      required
                      onChange={() => {}}
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="message" className="text-foreground font-medium">
                    Meddelande *
                  </Label>
                  <Textarea
                    id="message"
                    required
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    className="mt-2 min-h-32 bg-card border border-border focus:ring-2 focus:ring-primary/30"
                    placeholder="Berätta mer om ditt meddelande…"
                  />
                </div>

                <Button type="submit" variant="hero" size="lg" disabled={isSubmitting} className="w-full">
                  {isSubmitting ? "Skickar…" : (
                    <>
                      Skicka meddelande
                      <Send className="ml-2 w-4 h-4" />
                    </>
                  )}
                </Button>
              </form>
            </Card>

            {/* Snabbkontakter */}
            <div className="space-y-8 animate-slide-in" style={{ animationDelay: "200ms" }}>
              <Card className="p-8 shadow-soft border-primary/20">
                <div className="flex items-center mb-4">
                  <Mail className="w-6 h-6 text-primary mr-3" />
                  <h3 className="text-xl font-semibold text-foreground">Direktkontakt</h3>
                </div>
                <p className="text-muted-foreground mb-6">
                  För snabba frågor eller direkta samtal
                </p>
                <Button
                  variant="outline"
                  className="w-full border-primary/20 hover:border-primary hover:bg-primary/5"
                  asChild
                >
                  <a href="mailto:samct86@gmail.com">Skicka e-post</a>
                </Button>
              </Card>

              <Card className="p-8 shadow-soft border-secondary/20">
                <div className="flex items-center mb-4">
                  <Linkedin className="w-6 h-6 text-secondary mr-3" />
                  <h3 className="text-xl font-semibold text-foreground">LinkedIn</h3>
                </div>
                <p className="text-muted-foreground mb-6">
                  Anslut för professionell networking
                </p>
                <Button
                  variant="outline"
                  className="w-full border-secondary/20 hover:border-secondary hover:bg-secondary/5"
                  asChild
                >
                  <a
                    href="https://www.linkedin.com/in/sam-lundb-taw-496197207/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Besök LinkedIn
                  </a>
                </Button>
              </Card>

              <div className="text-center p-6">
                <p className="text-muted-foreground">Svarstid: Vanligtvis inom 24 timmar</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;