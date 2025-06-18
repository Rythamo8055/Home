import Image from "next/image";
import Link from "next/link";
import type { PortfolioApp } from "@/lib/app-data";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Info } from "lucide-react";

interface AppCardProps {
  app: PortfolioApp;
}

export function AppCard({ app }: AppCardProps) {
  return (
    <Card className="flex flex-col h-full bg-glass-bg backdrop-blur-md border-glass-border shadow-glass transition-all duration-300 hover:shadow-xl hover:border-primary/50">
      <CardHeader>
        <div className="relative w-full h-48 rounded-t-lg overflow-hidden mb-4">
          <Image
            src={app.imageUrl}
            alt={`${app.name} screenshot`}
            layout="fill"
            objectFit="cover"
            data-ai-hint={app.imageHint}
            className="transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <CardTitle className="font-headline text-2xl text-primary">{app.name}</CardTitle>
        <CardDescription className="text-foreground/80 font-medium">{app.tagline}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-foreground/90 text-sm mb-2">{app.description}</p>
        <p className="text-xs text-muted-foreground italic">{app.featuresSummary}</p>
      </CardContent>
      <CardFooter className="flex justify-between items-center mt-auto">
        <Link href={app.url} target="_blank" rel="noopener noreferrer" passHref>
          <Button variant="outline" size="sm" aria-label={`Visit ${app.name} live site`}>
            <ExternalLink className="mr-2 h-4 w-4" />
            Visit App
          </Button>
        </Link>
        {/* Future: Could link to a details page/modal */}
        {/* <Button variant="ghost" size="sm" aria-label={`More info about ${app.name}`}>
          <Info className="mr-2 h-4 w-4" />
          More Info
        </Button> */}
      </CardFooter>
    </Card>
  );
}
