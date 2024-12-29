'use client';

import React from 'react';
import { TableOfContents } from '@/components/docs/TableOfContents';
import { useScrollToHash } from '@/hooks/useScrollToHas';

interface CategoryContentProps {
  content: React.ReactNode;
  frontmatter: {
    title: string;
    description?: string;
  };
}

export function CategoryContent({ content, frontmatter }: CategoryContentProps) {
  useScrollToHash();

  return (
    <div className="container px-4 md:px-8">
      <div className="mx-auto max-w-5xl">
        {/* On mobile: single column layout */}
        {/* On desktop: grid with content and TOC */}
        <div className="lg:grid lg:grid-cols-[1fr_250px] lg:gap-8">
          <div className="min-w-0">
            <div className="space-y-2">
              <h1 className="scroll-m-20 text-3xl font-bold tracking-tight md:text-4xl">
                {frontmatter.title}
              </h1>
              {frontmatter.description && (
                <p className="text-lg text-muted-foreground">
                  {frontmatter.description}
                </p>
              )}
            </div>
            <div className="prose prose-slate dark:prose-invert mt-8 w-full max-w-none break-words pb-16">
              {content}
            </div>
          </div>

          {/* Table of Contents - Hidden on mobile */}
          <div className="hidden lg:block">
            <div className="sticky top-20">
              <TableOfContents />
            </div>
          </div>

          {/* Mobile TOC - Only visible on smaller screens */}
          <div className="fixed bottom-4 right-4 lg:hidden">
            <details className="bg-background border rounded-lg shadow-lg">
              <summary className="px-4 py-2 cursor-pointer font-medium">
                On This Page
              </summary>
              <div className="px-4 py-2 border-t">
                <TableOfContents />
              </div>
            </details>
          </div>
        </div>
      </div>
    </div>
  );
}
