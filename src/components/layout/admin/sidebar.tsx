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
  const [tournamentActive, setTournamentActive] = useState(false);
  const [logisticsActive, setLogisticsActive] = useState(false);
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
              width={50}
              height={50}
              className="rounded-md"
            />
            {sidebarActive && (
              <h3 className="text-xl font-extrabold text-white">iRankHub</h3>
            )}
          </div>
        </Link>
        <ul className="flex-1 w-full p-0 m-0">
          <Link href={"/student"}>
            <li
              className={cn(
                "text-[#FAF9F9] font-bold text-lg hover:text-white flex items-center gap-3 h-10 hover:bg-[#F5AE73] group px-3 rounded-md mb-2",
                !sidebarActive && "justify-center"
              )}
            >
              <Icons.layoutDashboard className="text-xl text-[#FAF9F9] group-hover:text-white" />
              {sidebarActive && "Inbox"}
            </li>
          </Link>
          <div
            className={cn(
              "text-[#FAF9F9] font-bold text-lg hover:text-white min-h-10 group mb-2",
              !sidebarActive && "justify-center"
            )}
            onClick={() => setTournamentActive(!tournamentActive)}
          >
            <div className="w-full flex items-center gap-3 hover:bg-[#F5AE73] rounded-md px-3 py-2">
              <Icons.sheet className="text-xl text-[#FAF9F9] group-hover:text-white" />
              <div className="w-full cursor-pointer flex items-center justify-between gap-3">
                {sidebarActive && "Tournament"}
                <Icons.chevronUp className={cn(
                  "text-xl text-[#FAF9F9] group-hover:text-white",
                  tournamentActive && "rotate-180"
                )} />
              </div>
            </div>
            {tournamentActive && (
              <div className="w-full h-full flex flex-col pl-11 mt-2">
                <span className="text-[#FAF9F9] font-bold hover:bg-[#F5AE73] text-lg h-10 hover:text-white cursor-pointer rounded-md px-3 py-2">Formats</span>
                <span className="text-[#FAF9F9] font-bold hover:bg-[#F5AE73] text-lg h-10 hover:text-white cursor-pointer rounded-md px-3 py-2">Leagues</span>
                <span className="text-[#FAF9F9] font-bold hover:bg-[#F5AE73] text-lg h-10 hover:text-white cursor-pointer rounded-md px-3 py-2">Create Tournament</span>
                <span className="text-[#FAF9F9] font-bold hover:bg-[#F5AE73] text-lg h-10 hover:text-white cursor-pointer rounded-md px-3 py-2">List Tournaments</span>
              </div>
            )}
          </div>
          <Link href={"/student"}>
            <li
              className={cn(
                "text-[#FAF9F9] font-bold text-lg hover:text-white flex items-center gap-3 h-10 hover:bg-[#F5AE73] group px-3 rounded-md mb-2",
                !sidebarActive && "justify-center"
              )}
            >
              <Icons.users className="text-xl text-[#FAF9F9] group-hover:text-white" />
              {sidebarActive && "users"}
            </li>
          </Link>
          <div
            className={cn(
              "text-[#FAF9F9] font-bold text-lg hover:text-white min-h-10 group mb-2",
              !sidebarActive && "justify-center"
            )}
            onClick={() => setLogisticsActive(!logisticsActive)}
          >
            <div className="w-full flex items-center gap-3 hover:bg-[#F5AE73] rounded-md px-3 py-2">
              <Icons.sheet className="text-xl text-[#FAF9F9] group-hover:text-white" />
              <div className="w-full cursor-pointer flex items-center justify-between gap-3">
                {sidebarActive && "Logistics"}
                <Icons.chevronUp className={cn(
                  "text-xl text-[#FAF9F9] group-hover:text-white",
                  logisticsActive && "rotate-180"
                )} />
              </div>
            </div>
            {logisticsActive && (
              <div className="w-full h-full flex flex-col pl-11 mt-2">
                <span className="text-[#FAF9F9] font-bold hover:bg-[#F5AE73] text-lg h-10 hover:text-white cursor-pointer rounded-md px-3 py-2">Billings</span>
                <span className="text-[#FAF9F9] font-bold hover:bg-[#F5AE73] text-lg h-10 hover:text-white cursor-pointer rounded-md px-3 py-2">Mission Orders</span>
              </div>
            )}
          </div>
          <Link href={"/student"}>
            <li
              className={cn(
                "text-[#FAF9F9] font-bold text-lg hover:text-white flex items-center gap-3 h-10 hover:bg-[#F5AE73] group px-3 rounded-md",
                !sidebarActive && "justify-center"
              )}
            >
              <Icons.users className="text-xl text-[#FAF9F9] group-hover:text-white" />
              {sidebarActive && "users"}
            </li>
          </Link>
        </ul>
        <div
          className={cn(
            "cursor-pointer text-[#FAF9F9] font-bold text-sm hover:text-white flex items-center gap-3 h-10 hover:bg-[#F5AE73] group px-3 rounded-md mb-5", !sidebarActive && "justify-center rounded-md", !sidebarActive && "justify-center rounded-md",
            !sidebarActive && "justify-center rounded-md"
          )}
        >
          <Icons.logout className="text-xl text-white group-hover:text-white" />
          {sidebarActive && "logout"}
        </div>
      </div>
    </div>
  );
}

export default SidebarStudent;
