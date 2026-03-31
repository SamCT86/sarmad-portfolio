const Footer = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-6 py-10">
        <div className="text-center">
          <h3 className="text-lg font-semibold text-foreground">Sam Tawfeek</h3>
          <p className="mt-2 text-sm sm:text-base text-muted-foreground">
            Personlig portfolio med fokus på digitala system, automation och AI-assisterade workflows.
          </p>
          <p className="mt-4 text-sm text-muted-foreground">
            © {new Date().getFullYear()} Sam Tawfeek
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
