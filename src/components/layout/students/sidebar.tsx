"use client";
import { Icons } from "@/components/icons";
import Link from "next/link";
import React, { useState } from "react";
import { TfiCup } from "react-icons/tfi";
import { TbCertificate } from "react-icons/tb";
import Image from "next/image";
import { SelectSeparator } from "@/components/ui/select";
import { cn } from "@/lib/utils";

function SidebarStudent() {
  const [sidebarActive, setSidebarActive] = useState(true);
  return (
    <div
      className={cn(
        "fixed w-full bg-primary top-0 left-0 bottom-0 z-60",
        sidebarActive ? "max-w-xs" : "max-w-[106px]"
      )}
    >
      <div
        className={cn(
          "h-full flex flex-col pt-10 pb-5 w-full",
          sidebarActive ? "px-10" : "px-3 items-center"
        )}
      >
        <div
          className="absolute -right-3 top-2 cursor-pointer z-60"
          onClick={() => setSidebarActive(!sidebarActive)}
        >
          <div className="w-8 h-8 bg-background border-2 border-border rounded-md grid place-content-center">
            {sidebarActive ? (
              <Icons.chevronLeft size={24} className="text-zinc-500" />
            ) : (
              <Icons.chevronRight size={24} className="text-zinc-500" />
            )}
          </div>
        </div>
        <Link href={"/student"}>
          <div className="flex items-center gap-4 mb-10 relative">
            {/* reserved for logo */}
            <Image
              src="/static/images/logo-big.png"
              alt="logo"
              width={40}
              height={40}
              className="rounded-lg"
            />
            {sidebarActive && (
              <h3 className="text-xl font-bold text-white">iRankHub</h3>
            )}
          </div>
        </Link>
        <ul className="flex-1 w-full p-0">
          <Link href={"/student"}>
            <li
              className={cn(
                "text-[#FAF9F9] text-sm hover:text-zinc-700 flex items-center gap-3 h-10 hover:bg-white group px-3 rounded-full mb-5",
                !sidebarActive && "justify-center"
              )}
            >
              <Icons.home className="text-xl text-[#FAF9F9] group-hover:text-zinc-700" />
              {sidebarActive && "IRankboard"}
            </li>
          </Link>
          <Link href={"#"}>
            <li
              className={cn(
                "text-[#FAF9F9] text-sm hover:text-zinc-700 flex items-center gap-3 h-10 hover:bg-white group px-3 rounded-full mb-5",
                !sidebarActive && "justify-center rounded-md"
              )}
            >
              <TbCertificate className="text-xl text-white group-hover:text-zinc-700" />
              {sidebarActive && "Certificates & letters"}
            </li>
          </Link>
          <Link href={"/student/leagues"}>
            <li
              className={cn(
                "text-[#FAF9F9] text-sm hover:text-zinc-700 flex items-center gap-3 h-10 hover:bg-white group px-3 rounded-full mb-5",
                !sidebarActive && "justify-center rounded-md"
              )}
            >
              <TfiCup className="text-xl text-white group-hover:text-zinc-700" />
              {sidebarActive && "Go to Leagues"}
            </li>
          </Link>
          <Link href={"#"}>
            <li
              className={cn(
                "text-[#FAF9F9] text-sm hover:text-zinc-700 flex items-center gap-3 h-10 hover:bg-white group px-3 rounded-full mb-5",
                !sidebarActive && "justify-center rounded-md"
              )}
            >
              <Icons.newspaper className="text-xl text-white group-hover:text-zinc-700" />
              {sidebarActive && "News & updates"}
            </li>
          </Link>
        </ul>
        <div
          className={cn(
            "text-[#FAF9F9] text-sm hover:text-zinc-700 flex items-center gap-3 h-10 hover:bg-white group px-3 rounded-full mb-5",
            !sidebarActive && "justify-center rounded-md"
          )}
        >
          <Icons.logout className="text-xl text-white group-hover:text-zinc-700" />
          {sidebarActive && "logout"}
        </div>
      </div>
    </div>
  );
}

export default SidebarStudent;
