import Link from "next/link";
import { MenuIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetHeader,
  SheetContent,
  SheetTrigger,
  SheetContentSidebar,
} from "@/components/ui/sheet";
import { Menu } from "./Menu";
import Image from "next/image";

export function SheetMenu() {
  return (
    <Sheet>
      <SheetTrigger className="lg:hidden" asChild>
        <Button className="h-8" variant="outline" size="icon">
          <MenuIcon size={20} />
        </Button>
      </SheetTrigger>
      <SheetContentSidebar className="sm:w-72 px-3 h-full flex flex-col bg-primary border-r-transparent" side="left">
        <SheetHeader>
          <Button
            className="flex justify-center items-center pb-2 pt-1"
            variant="link"
            asChild
          >
            <Link href="/schools/dashboard" className="flex items-center gap-2">
              <Image
                src="/static/images/logo-big.png"
                alt="logo"
                width={50}
                height={50}
                className="rounded-md mr-1"
              />
              <h1 className="font-bold text-lg text-background dark:text-foreground">iRankHub</h1>
            </Link>
          </Button>
        </SheetHeader>
        <Menu isOpen />
      </SheetContentSidebar>
    </Sheet>
  );
}
