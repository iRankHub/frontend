import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Slash } from "lucide-react";
import React from "react";
import Banner from "../../app/(site)/student/leagues/_components/banner";
import Filters from "../../app/(site)/student/leagues/_components/Filters";
import Link from "next/link";
import Image from "next/image";

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
      <Banner />
      <h3 className="font-semibold text-foreground my-5 text-xl">Leagues in your area</h3>
      <div className="w-full mt-5">
        <div className="w-full">
          <header className="flex items-center justify-between gap-10">
            <h3 className="text-primary font-semibold">
              National Debate Competition
            </h3>
            <Link href={"/student/leagues/1"} className="text-foreground text-sm hover:underline font-semibold">
              See All
            </Link>
          </header>
          <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-3">
            <div className="w-full h-36 gap-4 relative rounded-md overflow-hidden cursor-pointer">
              <Image
                src={"https://res.cloudinary.com/dmgv5azym/image/upload/v1701766189/samples/ecommerce/car-interior-design.jpg"}
                alt="placeholder image"
                fill
                className="object-cover"
              />
            </div>
            <div className="w-full h-36 gap-4 relative rounded-md overflow-hidden cursor-pointer">
              <Image
                src={"https://res.cloudinary.com/dmgv5azym/image/upload/v1701977973/wbxciwsjj0ch50vgsk0m.jpg"}
                alt="placeholder image"
                fill
                className="object-cover"
              />
            </div>
            <div className="w-full h-36 gap-4 relative rounded-md overflow-hidden cursor-pointer">
              <Image
                src={"https://res.cloudinary.com/dmgv5azym/image/upload/v1701977973/wbxciwsjj0ch50vgsk0m.jpg"}
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
            <Link href={"/student/leagues/2"} className="text-foreground text-sm hover:underline font-semibold">
              See All
            </Link>
          </header>
          <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-3">
            <div className="w-full h-36 gap-4 relative rounded-md overflow-hidden cursor-pointer">
              <Image
                src={"https://res.cloudinary.com/dmgv5azym/image/upload/v1701766189/samples/ecommerce/car-interior-design.jpg"}
                alt="placeholder image"
                fill
                className="object-cover"
              />
            </div>
            <div className="w-full h-36 gap-4 relative rounded-md overflow-hidden cursor-pointer">
              <Image
                src={"https://res.cloudinary.com/dmgv5azym/image/upload/v1701977973/wbxciwsjj0ch50vgsk0m.jpg"}
                alt="placeholder image"
                fill
                className="object-cover"
              />
            </div>
            <div className="w-full h-36 gap-4 relative rounded-md overflow-hidden cursor-pointer">
              <Image
                src={"https://res.cloudinary.com/dmgv5azym/image/upload/v1701977973/wbxciwsjj0ch50vgsk0m.jpg"}
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
            <Link href={"/student/leagues/3"} className="text-foreground text-sm hover:underline font-semibold">
              See All
            </Link>
          </header>
          <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-3">
            <div className="w-full h-36 gap-4 relative rounded-md overflow-hidden cursor-pointer">
              <Image
                src={"https://res.cloudinary.com/dmgv5azym/image/upload/v1701766189/samples/ecommerce/car-interior-design.jpg"}
                alt="placeholder image"
                fill
                className="object-cover"
              />
            </div>
            <div className="w-full h-36 gap-4 relative rounded-md overflow-hidden cursor-pointer">
              <Image
                src={"https://res.cloudinary.com/dmgv5azym/image/upload/v1701977973/wbxciwsjj0ch50vgsk0m.jpg"}
                alt="placeholder image"
                fill
                className="object-cover"
              />
            </div>
            <div className="w-full h-36 gap-4 relative rounded-md overflow-hidden cursor-pointer">
              <Image
                src={"https://res.cloudinary.com/dmgv5azym/image/upload/v1701977973/wbxciwsjj0ch50vgsk0m.jpg"}
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
