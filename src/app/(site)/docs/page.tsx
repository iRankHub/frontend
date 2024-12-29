'use client'

import { docsConfig } from "@/lib/docs/navigation";
import { RoleCard } from "@/components/docs/RoleCard";
import { BookOpen } from "lucide-react";

export default function DocsPage() {
  return (
    <div className="container max-w-6xl py-10">
      {/* Hero Section */}
      <div className="relative mb-12">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary/0 rounded-lg" />
        <div className="relative px-6 py-12 sm:px-8 sm:py-16 rounded-lg border">
          <div className="flex items-center space-x-2 text-primary mb-4">
            <BookOpen className="h-6 w-6" />
            <h2 className="text-lg font-semibold">Documentation</h2>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-foreground/90 mb-4 sm:text-5xl">
            Welcome to iRankHub Docs
          </h1>
          <p className="max-w-2xl text-lg text-muted-foreground mb-8">
            Get started with iRankHub by exploring our comprehensive guides. Whether you&apos;re a student, volunteer, school, or administrator, we&apos;ve got you covered.
          </p>
          <div className="inline-flex h-1 bg-primary/50 rounded-full animate-pulse w-12" />
        </div>
      </div>

      {/* Role Cards Grid */}
      <div className="grid gap-6 md:grid-cols-2">
        {docsConfig.map((item) => (
          <RoleCard key={item.href} item={item} />
        ))}
      </div>

      {/* Support Section */}
      <div className="mt-16 text-center px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4 text-foreground/90">
            Need Additional Help?
          </h2>
          <p className="text-muted-foreground">
            Our support team is available Monday through Friday, 9 AM to 5 PM (CAT).
            Feel free to reach out at{' '}
            <a
              href="mailto:idebaterwanda@gmail.com"
              className="text-primary hover:underline"
            >
              idebaterwanda@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
