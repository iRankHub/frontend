'use Client'

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { NavItem } from "@/lib/docs/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
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
    <Link href={item.href} className={cn("block", className)}>
      <Card className="relative overflow-hidden transition-all hover:shadow-lg hover:border-primary/50 group">
        <div className="absolute top-0 right-0 h-[150px] w-[200px] bg-primary/5 blur-3xl rounded-bl-full transform group-hover:translate-x-10 transition-transform" />

        <CardHeader className="relative">
          <div className="flex items-center space-x-4">
            {Icon && (
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                <Icon className="h-6 w-6" />
              </div>
            )}
            <div>
              <CardTitle className="text-xl tracking-tight">
                {item.title}
              </CardTitle>
              {item.description && (
                <CardDescription className="mt-1 line-clamp-2">
                  {item.description}
                </CardDescription>
              )}
            </div>
          </div>
        </CardHeader>

        <CardContent className="relative">
          {firstThreeItems && firstThreeItems.length > 0 && (
            <>
              <div className="text-sm text-muted-foreground mb-2">Quick links:</div>
              <div className="space-y-2">
                {firstThreeItems.map((subItem, index) => (
                  <div
                    key={subItem.href}
                    className="flex items-center text-sm text-muted-foreground/80 hover:text-primary transition-colors"
                  >
                    <div className="h-1 w-1 rounded-full bg-primary/50 mr-2" />
                    {subItem.title}
                  </div>
                ))}
              </div>
            </>
          )}

          <div className="mt-4 flex items-center text-sm text-primary font-medium group-hover:underline">
            View Documentation
            <ChevronRight className="ml-1 h-4 w-4" />
          </div>
        </CardContent>

        <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-primary/10 via-primary/50 to-primary/10 transform scale-x-0 group-hover:scale-x-100 transition-transform" />
      </Card>
    </Link>
  );
}
