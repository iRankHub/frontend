import { compileMDX } from 'next-mdx-remote/rsc';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import * as fs from 'fs';
import * as path from 'path';
import { cache } from 'react';
import { components } from '@/components/docs/MdxComponents';

export type FrontMatter = {
    title: string;
    description: string;
    category: string;
};

const prettyCodeOptions = {
    theme: 'github-dark',
    onVisitLine(node: any) {
        if (node.children.length === 0) {
            node.children = [{ type: 'text', value: ' ' }];
        }
    },
    onVisitHighlightedLine(node: any) {
        node.properties.className.push('highlighted');
    },
    onVisitHighlightedWord(node: any) {
        node.properties.className = ['word'];
    },
};

// Helper function to get the src content path
const getSrcContentPath = () => {
    return path.join(process.cwd(), 'src', 'content');
};

export const getMdxSource = cache(async (category: string) => {
    const filePath = path.join(getSrcContentPath(), 'docs', category, 'index.mdx');

    // Check if directory exists
    const dirPath = path.join(getSrcContentPath(), 'docs', category);
    if (!fs.existsSync(dirPath)) {
        throw new Error(`Category directory ${category} does not exist`);
    }

    // Check if file exists
    if (!fs.existsSync(filePath)) {
        throw new Error(`MDX file for category ${category} does not exist`);
    }

    const source = fs.readFileSync(filePath, 'utf-8');

    const { content, frontmatter } = await compileMDX<FrontMatter>({
        source,
        components,
        options: {
            parseFrontmatter: true,
            mdxOptions: {
                rehypePlugins: [
                    rehypeSlug,
                    [rehypePrettyCode, prettyCodeOptions],
                    [
                        rehypeAutolinkHeadings,
                        {
                            properties: {
                                className: ['subheading-anchor'],
                                ariaLabel: 'Link to section',
                            },
                        },
                    ],
                ],
            },
        },
    });

    return { content, frontmatter };
});

export async function getAllCategories() {
    const docsDirectory = path.join(getSrcContentPath(), 'docs');

    // Create docs directory if it doesn't exist
    if (!fs.existsSync(docsDirectory)) {
        fs.mkdirSync(docsDirectory, { recursive: true });
        return [];
    }

    const categories = fs.readdirSync(docsDirectory).filter(
        (dir) => fs.statSync(path.join(docsDirectory, dir)).isDirectory()
    );

    return categories;
}
