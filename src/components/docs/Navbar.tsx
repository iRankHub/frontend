'use client'

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { DocsSidebar } from "./Sidebar";
import { DocSearch } from "./Search";
import { ThemeToggle } from "./ThemeSwitcher";

interface NavbarProps {
  className?: string;
}

export function DocsNavbar({ className }: NavbarProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex items-center space-x-2 md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-80">
              <DocsSidebar className="py-4" />
            </SheetContent>
          </Sheet>
        </div>
        <div className="flex items-center justify-between flex-1">
          <div className="flex items-center space-x-2">
            <Link href="/docs" className="font-bold">
              Documentation
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <div className="hidden md:block">
              <DocSearch />
            </div>
            <nav className="flex items-center space-x-2">
              <ThemeToggle />
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
