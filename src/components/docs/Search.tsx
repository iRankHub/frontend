'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import { DialogProps } from '@radix-ui/react-dialog';
import { Button } from '@/components/ui/button';
import { Command } from 'cmdk';
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import { useHotkeys } from 'react-hotkeys-hook';
import { Search as SearchIcon } from 'lucide-react';
import { docsConfig } from '@/lib/docs/navigation';

export function DocSearch({ ...props }: DialogProps) {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState('');

  // Watch for Cmd+K or Ctrl+K
  useHotkeys(['meta+k', 'ctrl+k'], (e) => {
    e.preventDefault();
    setOpen((open) => !open);
  });

  // Flatten navigation items for search
  const searchItems = React.useMemo(() => {
    const items: { title: string; href: string; content?: string }[] = [];
    const flatten = (config: typeof docsConfig) => {
      config.forEach((item) => {
        items.push({
          title: item.title,
          href: item.href,
          content: item.description
        });
        if (item.items) {
          item.items.forEach((subItem) => {
            items.push({
              title: `${item.title} > ${subItem.title}`,
              href: subItem.href,
              content: subItem.description
            });
          });
        }
      });
    };
    flatten(docsConfig);
    return items;
  }, []);

  // Filter items based on search query
  const filteredItems = React.useMemo(() => {
    if (!searchQuery) return searchItems;
    const lowerQuery = searchQuery.toLowerCase();
    return searchItems.filter(
      item =>
        item.title.toLowerCase().includes(lowerQuery) ||
        item.content?.toLowerCase().includes(lowerQuery)
    );
  }, [searchItems, searchQuery]);

  return (
    <>
      <Button
        variant="outline"
        className="relative h-9 w-full justify-start rounded-[0.5rem] text-sm text-muted-foreground sm:pr-12 md:w-40 lg:w-64"
        onClick={() => setOpen(true)}
        {...props}
      >
        <SearchIcon className="mr-2 h-4 w-4" />
        <span className="hidden md:inline-flex">Search docs...</span>
        <kbd className="pointer-events-none absolute right-1.5 top-2 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput
          placeholder="Search documentation..."
          value={searchQuery}
          onValueChange={setSearchQuery}
        />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Documentation">
            {filteredItems.map((item) => (
              <CommandItem
                key={item.href}
                onSelect={() => {
                  router.push(item.href);
                  setOpen(false);
                }}
              >
                <span>{item.title}</span>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
