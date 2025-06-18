
export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer 
      className="mt-auto border-t border-border/20 py-8 text-center text-sm text-muted-foreground 
                 bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <div className="container">
        <p>
          &copy; {currentYear} PortfolioPulse. All rights reserved.
        </p>
        <p className="mt-1">
          Crafted with Next.js, Tailwind CSS, and Genkit AI.
        </p>
      </div>
    </footer>
  );
}
