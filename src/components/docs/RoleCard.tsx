'use client'

import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { NavItem } from "@/lib/docs/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface RoleCardProps {
  item: NavItem & {
    icon?: LucideIcon;  // Update the type here
  };
  className?: string;
}

export function RoleCard({ item, className }: RoleCardProps) {
  const Icon = item.icon;

  return (
    <Link href={item.href} className={cn("block", className)}>
      <Card className="hover:bg-accent transition-colors">
        <CardHeader>
          <div className="flex items-center gap-2">
            {Icon && <Icon className="w-5 h-5" />}
            <CardTitle className="text-lg">{item.title}</CardTitle>
          </div>
          {item.description && (
            <CardDescription className="mt-2">
              {item.description}
            </CardDescription>
          )}
        </CardHeader>
      </Card>
    </Link>
  );
}
