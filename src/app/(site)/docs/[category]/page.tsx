import { Suspense } from 'react';
import { getMdxSource, getAllCategories } from '@/lib/docs/mdx';
import { DocError } from '@/components/docs/ErrorBoundary';
import { CategoryContent } from '@/components/docs/CategoryContent';
import { notFound } from 'next/navigation';

interface CategoryPageProps {
  params: {
    category: string;
  };
}

export async function generateStaticParams() {
  const categories = await getAllCategories();
  return categories.map((category) => ({
    category,
  }));
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  try {
    const { content, frontmatter } = await getMdxSource(params.category);

    return (
      <Suspense fallback={<div>Loading...</div>}>
        <CategoryContent content={content} frontmatter={frontmatter} />
      </Suspense>
    );
  } catch (error) {
    return <DocError />
  }
}
