
"use client";

import Link from "next/link";
import { Code2 } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ThemeToggleButton } from "./ThemeToggleButton";

export function Header() {
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        <Link href="/" className="flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors">
          <Code2 className="h-7 w-7" />
          <span className="font-headline text-xl font-bold">PortfolioPulse</span>
        </Link>
        <div className="flex items-center space-x-2 md:space-x-4">
          <nav className="flex items-center space-x-1 md:space-x-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-all duration-150 ease-in-out px-3 py-1.5 rounded-[0.375rem]",
                  pathname === item.href
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground/70 hover:bg-muted hover:text-foreground"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <ThemeToggleButton />
        </div>
      </div>
    </header>
  );
}
