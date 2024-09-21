"use client";

import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

const ThemeToggler = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => {
  const { setTheme, theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // This effect runs on the client side only
  React.useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  // Prevent hydration mismatch
  if (!mounted) return null;

  return (
    <SwitchPrimitives.Root
      checked={resolvedTheme === "dark"}
      onCheckedChange={toggleTheme}
      className={cn(
        "peer inline-flex h-7 w-14 shrink-0 cursor-pointer items-center rounded-full border-1 border-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-muted-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-muted",
        className
      )}
      {...props}
      ref={ref}
    >
      <SwitchPrimitives.Thumb
        className={cn(
          "pointer-events-none flex items-center justify-center border border-muted h-6 w-6 rounded-full bg-background shadow ring-0 transition-transform duration-200 ease-in-out data-[state=checked]:translate-x-7 data-[state=unchecked]:translate-x-0"
        )}
      >
        {resolvedTheme === "dark" ? (
          <Moon className="h-4 w-4 text-muted-foreground scale-x-[-1] -rotate-12" />
        ) : (
          <Sun className="h-4 w-4 text-muted-foreground" />
        )}
      </SwitchPrimitives.Thumb>
    </SwitchPrimitives.Root>
  );
});

ThemeToggler.displayName = "ThemeToggler";

export { ThemeToggler };