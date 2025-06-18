
import { appsData } from "@/lib/app-data";
import { AppCard } from "./AppCard";

export function AppShowcase() {
  return (
    <section className="container py-12 md:py-16 lg:py-20">
      <div className="text-center mb-12 animate-fade-in">
        <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight text-primary">
          My Applications
        </h1>
        <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
          Exploring the synergy of design, technology, and user experience. Here are some of the projects I've built.
        </p>
      </div>
      {appsData.length > 0 ? (
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8">
          {appsData.map((app, index) => (
            <AppCard key={app.id} app={app} animationDelay={`${index * 150}ms`} />
          ))}
        </div>
      ) : (
        <p className="text-center text-muted-foreground animate-fade-in">No applications to display yet.</p>
      )}
    </section>
  );
}
