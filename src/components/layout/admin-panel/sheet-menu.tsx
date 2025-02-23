"use client";

import { useState } from "react";
import Link from "next/link";
import { MenuIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetHeader,
  SheetTrigger,
  SheetContentSidebar,
} from "@/components/ui/sheet";
import { Menu } from "./Menu";
import Image from "next/image";

export function SheetMenu() {
  const [open, setOpen] = useState(false);

  const handleMobileNavigate = () => {
    setOpen(false);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className="lg:hidden" asChild>
        <Button className="h-8" variant="outline" size="icon">
          <MenuIcon size={20} />
        </Button>
      </SheetTrigger>
      <SheetContentSidebar
        className="lg:hidden w-72 px-3 h-full flex flex-col bg-primary border-r-transparent"
        side="left"
        hideOnBreakpoint="lg"
      >
        <SheetHeader>
          <Button
            className="flex justify-center items-center pb-2 pt-1"
            variant="link"
            asChild
          >
            <Link
              href="/admin/dashboard"
              className="flex items-center gap-2"
              onClick={handleMobileNavigate}
            >
              <Image
                src="/static/images/logo-big.png"
                alt="logo"
                width={40}
                height={40}
                className="rounded-md mr-1"
              />
              <h1 className="font-bold text-lg text-background dark:text-foreground">iRankHub</h1>
            </Link>
          </Button>
        </SheetHeader>
        <Menu isOpen onMobileNavigate={handleMobileNavigate} />
      </SheetContentSidebar>
    </Sheet>
  );
}
