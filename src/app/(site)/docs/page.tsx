'use client'
import { docsConfig } from "@/lib/docs/navigation";
import { RoleCard } from "@/components/docs/RoleCard";

export default function DocsPage() {
  return (
    <div className="container max-w-5xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:gap-6">
        <div className="flex max-w-[980px] flex-col items-start gap-2">
          <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl">
            Documentation
          </h1>
          <p className="max-w-[750px] text-lg text-muted-foreground">
            Explore our guides and examples to integrate different roles and features.
          </p>
        </div>
        <div className="grid w-full gap-4 md:grid-cols-2">
          {docsConfig.map((item) => (
            <RoleCard key={item.href} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
