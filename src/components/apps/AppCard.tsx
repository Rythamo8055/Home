
import Image from "next/image";
import Link from "next/link";
import type { PortfolioApp } from "@/lib/app-data";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

interface AppCardProps {
  app: PortfolioApp;
  animationDelay?: string;
}

export function AppCard({ app, animationDelay }: AppCardProps) {
  return (
    <Card 
      className={cn(
        "flex flex-col h-full", 
        "bg-glass-bg backdrop-blur-md backdrop-saturate-150",
        "border border-glass-border", 
        "shadow-glass-lg dark:shadow-xl-mocha light:shadow-xl-latte", // Use theme specific shadows
        "transition-shadow-transform-bg duration-300 ease-in-out",
        "hover:shadow-glass-xl hover:dark:shadow-xl-mocha hover:light:shadow-xl-latte hover:-translate-y-0.5 hover:bg-glass-bg-hover",
        "active:shadow-glass-md active:dark:shadow-md-mocha active:light:shadow-md-latte active:translate-y-px active:bg-glass-bg-active",
        "animate-fade-in"
      )}
      style={{ animationDelay }}
    >
      <CardHeader>
        <div className="relative w-full h-48 rounded-t-lg overflow-hidden mb-4 group">
          <Image
            src={app.imageUrl}
            alt={`${app.name} screenshot`}
            layout="fill"
            objectFit="cover"
            data-ai-hint={app.imageHint}
            className="transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <CardTitle className="font-headline text-xl md:text-2xl text-primary">{app.name}</CardTitle>
        <CardDescription className="text-foreground/80 font-medium">{app.tagline}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-foreground/90 text-sm mb-2">{app.description}</p>
        <p className="text-xs text-muted-foreground italic">{app.featuresSummary}</p>
      </CardContent>
      <CardFooter className="flex justify-between items-center mt-auto pt-4"> {/* Added pt-4 for spacing */}
        <Link href={app.url} target="_blank" rel="noopener noreferrer" passHref>
          <Button variant="outline" size="sm" aria-label={`Visit ${app.name} live site`}>
            <ExternalLink className="mr-2 h-4 w-4" />
            Visit App
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
