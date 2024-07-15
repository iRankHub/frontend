import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Slash } from "lucide-react";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Banner from "./_components/banner";

function Page() {
  return (
    <div className="p-8">
      <Breadcrumb className="mb-5">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink
              href="/student"
              className="text-primary font-semibold text-sm"
            >
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <Slash className="text-primary" />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbLink className="text-primary font-semibold text-sm hover:text-primary">
              Go To Leagues
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="w-full grid grid-cols-3 gap-5">
        <div className="w-full flex items-center justify-between overflow-hidden gap-5 bg-[#5F3813] h-28 rounded-xl px-3">
          <p className="text-sm text-white">
            Know Everything related to the tournament{" "}
          </p>
          <div className="relative w-[80px] h-[80px] rounded-full">
            <Image
              src={"/static/images/tournaments.png"}
              alt="chess board"
              fill
              className="rounded-full w-full h-full object-fill"
            />
          </div>
        </div>
        <div className="flex items-center justify-between gap-5 bg-primary h-28 rounded-xl px-3">
          <p className="text-sm text-white">Know rank related metrics</p>
          <Image
            src={"/static/images/ground.png"}
            alt="chess board"
            width={80}
            height={80}
            className="rounded-full"
          />
        </div>
        <div className="flex items-center justify-between gap-5 bg-[#5F3813] h-28 rounded-xl px-3">
          <p className="text-sm text-white">
            Check how you beat your opponents
          </p>
          <Image
            src={"/static/images/chess-board.png"}
            alt="chess board"
            width={80}
            height={80}
            className="rounded-full"
          />
        </div>
      </div>
      <h3 className="font-semibold text-foreground my-5 text-xl">
        Leagues in your area
      </h3>
      <div className="w-full mt-5">
        <div className="w-full">
          <header className="flex items-center justify-between gap-10">
            <h3 className="text-primary font-semibold">
              National Debate Competition
            </h3>
            <Link
              href={"/student/leagues/1"}
              className="text-foreground text-sm hover:underline font-semibold"
            >
              See All
            </Link>
          </header>
          <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-3">
            <div className="w-full h-36 gap-4 relative rounded-md overflow-hidden cursor-pointer">
              <Image
                src={
                  "https://res.cloudinary.com/dmgv5azym/image/upload/v1701766189/samples/ecommerce/car-interior-design.jpg"
                }
                alt="placeholder image"
                fill
                className="object-cover"
              />
            </div>
            <div className="w-full h-36 gap-4 relative rounded-md overflow-hidden cursor-pointer">
              <Image
                src={
                  "https://res.cloudinary.com/dmgv5azym/image/upload/v1701977973/wbxciwsjj0ch50vgsk0m.jpg"
                }
                alt="placeholder image"
                fill
                className="object-cover"
              />
            </div>
            <div className="w-full h-36 gap-4 relative rounded-md overflow-hidden cursor-pointer">
              <Image
                src={
                  "https://res.cloudinary.com/dmgv5azym/image/upload/v1701977973/wbxciwsjj0ch50vgsk0m.jpg"
                }
                alt="placeholder image"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
        <div className="w-full mt-7">
          <header className="flex items-center justify-between gap-10">
            <h3 className="text-primary font-semibold">
              National Debate Competition
            </h3>
            <Link
              href={"/student/leagues/2"}
              className="text-foreground text-sm hover:underline font-semibold"
            >
              See All
            </Link>
          </header>
          <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-3">
            <div className="w-full h-36 gap-4 relative rounded-md overflow-hidden cursor-pointer">
              <Image
                src={
                  "https://res.cloudinary.com/dmgv5azym/image/upload/v1701766189/samples/ecommerce/car-interior-design.jpg"
                }
                alt="placeholder image"
                fill
                className="object-cover"
              />
            </div>
            <div className="w-full h-36 gap-4 relative rounded-md overflow-hidden cursor-pointer">
              <Image
                src={
                  "https://res.cloudinary.com/dmgv5azym/image/upload/v1701977973/wbxciwsjj0ch50vgsk0m.jpg"
                }
                alt="placeholder image"
                fill
                className="object-cover"
              />
            </div>
            <div className="w-full h-36 gap-4 relative rounded-md overflow-hidden cursor-pointer">
              <Image
                src={
                  "https://res.cloudinary.com/dmgv5azym/image/upload/v1701977973/wbxciwsjj0ch50vgsk0m.jpg"
                }
                alt="placeholder image"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
        <div className="w-full mt-7">
          <header className="flex items-center justify-between gap-10">
            <h3 className="text-primary font-semibold">
              National Debate Competition
            </h3>
            <Link
              href={"/student/leagues/3"}
              className="text-foreground text-sm hover:underline font-semibold"
            >
              See All
            </Link>
          </header>
          <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-3">
            <div className="w-full h-36 gap-4 relative rounded-md overflow-hidden cursor-pointer">
              <Image
                src={
                  "https://res.cloudinary.com/dmgv5azym/image/upload/v1701766189/samples/ecommerce/car-interior-design.jpg"
                }
                alt="placeholder image"
                fill
                className="object-cover"
              />
            </div>
            <div className="w-full h-36 gap-4 relative rounded-md overflow-hidden cursor-pointer">
              <Image
                src={
                  "https://res.cloudinary.com/dmgv5azym/image/upload/v1701977973/wbxciwsjj0ch50vgsk0m.jpg"
                }
                alt="placeholder image"
                fill
                className="object-cover"
              />
            </div>
            <div className="w-full h-36 gap-4 relative rounded-md overflow-hidden cursor-pointer">
              <Image
                src={
                  "https://res.cloudinary.com/dmgv5azym/image/upload/v1701977973/wbxciwsjj0ch50vgsk0m.jpg"
                }
                alt="placeholder image"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
