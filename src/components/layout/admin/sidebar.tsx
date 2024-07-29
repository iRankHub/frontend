"use client";
import { Icons } from "@/components/icons";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useAppState } from "@/context/global-context";

function SidebarStudent() {
  const [tournamentActive, setTournamentActive] = useState(false);
  const [logisticsActive, setLogisticsActive] = useState(false);
  const { setSidebarOpen, sidebarOpen } = useAppState();
  return (
    <div
      className={cn(
        "fixed w-full bg-primary top-0 left-0 bottom-0 z-60",
        sidebarOpen ? "max-w-xs" : "max-w-[106px]"
      )}
    >
      <div
        className={cn(
          "h-full flex flex-col pt-10 pb-5 w-full",
          sidebarOpen ? "px-10" : "px-3 items-center"
        )}
      >
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
            {sidebarOpen && (
              <h3 className="text-xl font-extrabold text-white">iRankHub</h3>
            )}
          </div>
        </Link>
        <ul className="flex-1 w-full p-0 m-0">
          <Link href={"/student"}>
            <li
              className={cn(
                "text-[#FAF9F9] font-bold text-lg hover:text-white flex items-center gap-3 h-10 hover:bg-[#F5AE73] group px-3 rounded-md mb-2",
                !sidebarOpen && "justify-center"
              )}
            >
              <Icons.layoutDashboard className="text-xl text-[#FAF9F9] group-hover:text-white" />
              {sidebarOpen && "Inbox"}
            </li>
          </Link>
          <div
            className={cn(
              "text-[#FAF9F9] font-bold text-lg hover:text-white min-h-10 group mb-2",
              !sidebarOpen && "justify-center"
            )}
            onClick={() => setTournamentActive(!tournamentActive)}
          >
            <div className="flex items-center justify-center gap-3 hover:bg-[#F5AE73] rounded-md px-3 py-2">
              <Icons.sheet className="text-xl text-[#FAF9F9] group-hover:text-white" />
              {sidebarOpen && (
                <div className="w-full cursor-pointer flex items-center justify-between gap-3">
                  {sidebarOpen && "Tournament"}
                  <Icons.chevronUp
                    className={cn(
                      "text-xl text-[#FAF9F9] group-hover:text-white",
                      tournamentActive && "rotate-180"
                    )}
                  />
                </div>
              )}
            </div>
            {sidebarOpen && tournamentActive && (
              <div className="w-full h-full flex flex-col pl-11 mt-2">
                <span className="text-[#FAF9F9] font-extralight hover:bg-[#F5AE73] text-lg h-10 hover:text-white cursor-pointer rounded-md px-3 py-2">
                  Formats
                </span>
                <span className="text-[#FAF9F9] font-extralight hover:bg-[#F5AE73] text-lg h-10 hover:text-white cursor-pointer rounded-md px-3 py-2">
                  Leagues
                </span>
                <span className="text-[#FAF9F9] font-extralight hover:bg-[#F5AE73] text-lg h-10 hover:text-white cursor-pointer rounded-md px-3 py-2">
                  Create Tournament
                </span>
                <span className="text-[#FAF9F9] font-extralight hover:bg-[#F5AE73] text-lg h-10 hover:text-white cursor-pointer rounded-md px-3 py-2">
                  List Tournaments
                </span>
              </div>
            )}
          </div>
          <Link href={"/student"}>
            <li
              className={cn(
                "text-[#FAF9F9] font-bold text-lg hover:text-white flex items-center gap-3 h-10 hover:bg-[#F5AE73] group px-3 rounded-md mb-2",
                !sidebarOpen && "justify-center"
              )}
            >
              <Icons.users className="text-xl text-[#FAF9F9] group-hover:text-white" />
              {sidebarOpen && "users"}
            </li>
          </Link>
          <div
            className={cn(
              "text-[#FAF9F9] font-bold text-lg hover:text-white min-h-10 group mb-2",
              !sidebarOpen && "justify-center"
            )}
            onClick={() => setLogisticsActive(!logisticsActive)}
          >
            <div className="flex items-center justify-center gap-3 hover:bg-[#F5AE73] rounded-md px-3 py-2">
              <Icons.sheet className="text-xl text-[#FAF9F9] group-hover:text-white" />
              {sidebarOpen && (
                <div className="w-full cursor-pointer flex items-center justify-between gap-3">
                  {sidebarOpen && "Logistics"}
                  <Icons.chevronUp
                    className={cn(
                      "text-xl text-[#FAF9F9] group-hover:text-white",
                      logisticsActive && "rotate-180"
                    )}
                  />
                </div>
              )}
            </div>
            {sidebarOpen && logisticsActive && (
              <div className="w-full h-full flex flex-col pl-11 mt-2">
                <span className="text-[#FAF9F9] font-extralight hover:bg-[#F5AE73] text-lg h-10 hover:text-white cursor-pointer rounded-md px-3 py-2">
                  Billings
                </span>
                <span className="text-[#FAF9F9] font-extralight hover:bg-[#F5AE73] text-lg h-10 hover:text-white cursor-pointer rounded-md px-3 py-2">
                  Mission Orders
                </span>
              </div>
            )}
          </div>
          <Link href={"/student"}>
            <li
              className={cn(
                "text-[#FAF9F9] font-bold text-lg hover:text-white flex items-center gap-3 h-10 hover:bg-[#F5AE73] group px-3 rounded-md",
                !sidebarOpen && "justify-center"
              )}
            >
              <Icons.users className="text-xl text-[#FAF9F9] group-hover:text-white" />
              {sidebarOpen && "users"}
            </li>
          </Link>
        </ul>
        <div
          className={cn(
            "cursor-pointer text-[#FAF9F9] font-bold text-sm hover:text-white flex items-center gap-3 h-10 hover:bg-[#F5AE73] group px-3 rounded-md mb-5",
            !sidebarOpen && "justify-center rounded-md",
            !sidebarOpen && "justify-center rounded-md",
            !sidebarOpen && "justify-center rounded-md"
          )}
        >
          <Icons.logout className="text-xl text-white group-hover:text-white" />
          {sidebarOpen && "logout"}
        </div>
      </div>
    </div>
  );
}

export default SidebarStudent;
