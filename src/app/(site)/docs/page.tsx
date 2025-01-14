'use client'

import { docsConfig } from "@/lib/docs/navigation";
import { RoleCard } from "@/components/docs/RoleCard";
import { BookOpen } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function DocsPage() {
  return (
    <div className="container max-w-6xl py-6 lg:py-10 space-y-8">
      {/* Hero Section */}
      <Card className="p-6 md:p-10 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent" />
        <div className="relative">
          <div className="inline-flex items-center rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
            <BookOpen className="mr-2 h-4 w-4" />
            Documentation
          </div>
          <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl mb-4">
            Welcome to iRankHub Docs
          </h1>
          <p className="max-w-[700px] text-muted-foreground text-lg">
            Get started with iRankHub by exploring our comprehensive guides. Whether you&apos;re a student, volunteer, school, or administrator, we&apos;ve got you covered.
          </p>
        </div>
      </Card>

      {/* Role Cards Grid */}
      <div className="grid gap-6 sm:grid-cols-2">
        {docsConfig.map((item) => (
          <RoleCard key={item.href} item={item} />
        ))}
      </div>

      {/* Support Section */}
      <Card className="p-6 text-center">
        <h2 className="text-xl font-semibold mb-3">
          Need Additional Help?
        </h2>
        <p className="text-muted-foreground">
          Our support team is available Monday through Friday, 9 AM to 5 PM (CAT).
          Contact us at{' '}
          <a
            href="mailto:idebaterwanda@gmail.com"
            className="text-primary hover:underline"
          >
            idebaterwanda@gmail.com
          </a>
        </p>
      </Card>
    </div>
  );
}
