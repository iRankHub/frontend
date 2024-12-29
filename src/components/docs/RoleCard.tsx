'use client'

import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { NavItem } from "@/lib/docs/navigation";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface RoleCardProps {
  item: NavItem & {
    icon?: LucideIcon;
  };
  className?: string;
}

export function RoleCard({ item, className }: RoleCardProps) {
  const Icon = item.icon;
  const firstThreeItems = item.items?.slice(0, 3);

  return (
    <Card className="flex flex-col h-full group hover:border-primary/50 transition-colors">
      <CardHeader>
        <div className="flex gap-4 items-start">
          {Icon && (
            <div className="bg-card rounded-md p-2 border">
              <Icon className="h-5 w-5 text-primary" />
            </div>
          )}
          <div>
            <Link href={item.href}>
              <CardTitle className="text-xl hover:text-primary transition-colors">
                {item.title}
              </CardTitle>
            </Link>
            <CardDescription className="mt-1">
              {item.description}
            </CardDescription>
          </div>
        </div>
      </CardHeader>

      <CardContent className="flex-grow">
        {firstThreeItems && firstThreeItems.length > 0 && (
          <div>
            <div className="text-sm font-medium text-muted-foreground mb-3">
              Quick links:
            </div>
            <ul className="space-y-2.5">
              {firstThreeItems.map((subItem) => (
                <li key={subItem.href}>
                  <Link
                    href={subItem.href}
                    className="flex items-center text-sm text-muted-foreground/80 hover:text-primary transition-colors"
                  >
                    <span className="mr-2 h-1 w-1 rounded-full bg-primary/50" />
                    {subItem.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>

      <CardFooter>
        <Link
          href={item.href}
          className="flex items-center text-sm font-medium text-primary group-hover:underline"
        >
          View Documentation
          <ChevronRight className="ml-1 h-4 w-4" />
        </Link>
      </CardFooter>
    </Card>
  );
}
