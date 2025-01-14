'use client';

import { TableOfContents } from '@/components/docs/TableOfContents';
import { useScrollToHash } from '@/hooks/useScrollToHas';
import { Card } from '@/components/ui/card';

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
        <div className="lg:grid lg:grid-cols-[1fr_250px] lg:gap-8">
          <div className="min-w-0">
            <div className="prose prose-slate dark:prose-invert max-w-none prose-headings:text-primary">
              {content}
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="sticky top-20">
              <Card className="p-4">
                <TableOfContents />
              </Card>
            </div>
          </div>

          {/* Mobile TOC */}
          <div className="fixed bottom-4 right-4 lg:hidden">
            <Card className="w-auto">
              <details className="p-4">
                <summary className="cursor-pointer font-medium text-primary">
                  On This Page
                </summary>
                <div className="mt-4">
                  <TableOfContents />
                </div>
              </details>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
