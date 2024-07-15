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
import Banner from "../_components/banner";
import { Icons } from "@/components/icons";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Button } from "@/components/ui/button";

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
      <div className="my-8 flex items-center gap-5">
        <div className="flex items-center gap-3 bg-white cursor-pointer border border-border  rounded-lg p-2">
          <Icons.filter className="text-foreground" size={18} />
          <span className="font-semibold text-sm">All filters</span>
        </div>
        <div className="flex items-center gap-3 bg-white cursor-pointer border border-border  rounded-lg p-2">
          <span className="font-semibold text-sm">Year</span>
          <Icons.chevronDown className="text-foreground" size={18} />
        </div>
        <div className="flex items-center gap-3 bg-white cursor-pointer border border-border  rounded-lg p-2">
          <span className="font-semibold text-sm">Location</span>
          <Icons.chevronDown className="text-foreground" size={18} />
        </div>
      </div>
      <h3 className="font-semibold text-foreground my-5 text-xl">
        310 tournaments
      </h3>
      <div className="w-full mt-5">
        <div className="w-full">
          <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-3">
            <HoverCard>
              <HoverCardTrigger href="/student/leagues/1/tournament/1">
                <div className="w-full cursor-pointer mb-5">
                  <div className="w-full h-36 gap-4 relative rounded-md overflow-hidden">
                    <Image
                      src={
                        "https://res.cloudinary.com/dmgv5azym/image/upload/v1701766189/samples/ecommerce/car-interior-design.jpg"
                      }
                      alt="placeholder image"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex items-center gap-3 mt-3">
                    <Image
                      src={"/static/images/ground.png"}
                      alt="ground"
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div className="leading-3">
                      <h3 className="text-sm text-foreground font-semibold">
                        KDL Advance july / Glory Academy
                      </h3>
                      <small className="text-xs text-foreground/70 font-semibold">
                        Coordinated by shema kevin
                      </small>
                    </div>
                  </div>
                </div>
              </HoverCardTrigger>
              <HoverCardContent className="w-[600px]">
                <div className="flex items-center justify-between gap-5">
                  <div className="flex items-center gap-3">
                    <Icons.chevronLeft
                      size={18}
                      className="cursor-pointer hover:bg-primary hover:text-white rounded-full"
                    />
                    <Icons.chevronRight
                      size={18}
                      className="cursor-pointer hover:bg-primary hover:text-white rounded-full"
                    />
                  </div>
                  <div className="flex items-center gap-3">
                    <Image
                      src="/static/images/ground.png"
                      alt="profile"
                      width={30}
                      height={30}
                      className="rounded-full"
                    />
                    <div className="flex flex-col leading-3">
                      <span className="text-xs text-foreground">
                        Keirah Manzi
                      </span>
                      <span className="text-xs text-foreground/70">
                        coordinator
                      </span>
                    </div>
                  </div>
                </div>
                <div className="w-full mt-5">
                  <h3 className="font-semibold text-lg">
                    KDL Advance July /Glory Academy{" "}
                  </h3>
                  <p className="text-xs text-foreground mt-3">
                    <strong className="text-primary">Note: </strong>Lorem
                    Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry{"'"}s standard
                    dummy text ever since the 1500s, when an unknown printer
                    took a galley of type and scrambled it to make a type
                    specimen book.
                  </p>
                </div>
                <div className="flex items-center gap-5 justify-between mt-5">
                  <div className="w-64 h-24 gap-4 relative rounded-md overflow-hidden">
                    <Image
                      src={
                        "https://res.cloudinary.com/dmgv5azym/image/upload/v1701766189/samples/ecommerce/car-interior-design.jpg"
                      }
                      alt="placeholder image"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <Button>Explore More</Button>
                </div>
              </HoverCardContent>
            </HoverCard>
            <HoverCard>
              <HoverCardTrigger>
                <div className="w-full cursor-pointer mb-5">
                  <div className="w-full h-36 gap-4 relative rounded-md overflow-hidden">
                    <Image
                      src={
                        "https://res.cloudinary.com/dmgv5azym/image/upload/v1701766189/samples/ecommerce/car-interior-design.jpg"
                      }
                      alt="placeholder image"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex items-center gap-3 mt-3">
                    <Image
                      src={"/static/images/ground.png"}
                      alt="ground"
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div className="leading-3">
                      <h3 className="text-sm text-foreground font-semibold">
                        KDL Advance july / Glory Academy
                      </h3>
                      <small className="text-xs text-foreground/70 font-semibold">
                        Coordinated by shema kevin
                      </small>
                    </div>
                  </div>
                </div>
              </HoverCardTrigger>
              <HoverCardContent className="w-[600px]">
                <div className="flex items-center justify-between gap-5">
                  <div className="flex items-center gap-3">
                    <Icons.chevronLeft
                      size={18}
                      className="cursor-pointer hover:bg-primary hover:text-white rounded-full"
                    />
                    <Icons.chevronRight
                      size={18}
                      className="cursor-pointer hover:bg-primary hover:text-white rounded-full"
                    />
                  </div>
                  <div className="flex items-center gap-3">
                    <Image
                      src="/static/images/ground.png"
                      alt="profile"
                      width={30}
                      height={30}
                      className="rounded-full"
                    />
                    <div className="flex flex-col leading-3">
                      <span className="text-xs text-foreground">
                        Keirah Manzi
                      </span>
                      <span className="text-xs text-foreground/70">
                        coordinator
                      </span>
                    </div>
                  </div>
                </div>
                <div className="w-ful mt-5">
                  <h3 className="font-semibold text-lg">
                    KDL Advance July /Glory Academy{" "}
                  </h3>
                  <p className="text-xs text-foreground mt-3">
                    <strong className="text-primary">Note: </strong>Lorem
                    Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry{"'"}s standard
                    dummy text ever since the 1500s, when an unknown printer
                    took a galley of type and scrambled it to make a type
                    specimen book.
                  </p>
                </div>
                <div className="flex items-center gap-5 justify-between mt-5">
                  <div className="w-64 h-24 gap-4 relative rounded-md overflow-hidden">
                    <Image
                      src={
                        "https://res.cloudinary.com/dmgv5azym/image/upload/v1701766189/samples/ecommerce/car-interior-design.jpg"
                      }
                      alt="placeholder image"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <Button>Explore More</Button>
                </div>
              </HoverCardContent>
            </HoverCard>
            <HoverCard>
              <HoverCardTrigger>
                <div className="w-full cursor-pointer mb-5">
                  <div className="w-full h-36 gap-4 relative rounded-md overflow-hidden">
                    <Image
                      src={
                        "https://res.cloudinary.com/dmgv5azym/image/upload/v1701766189/samples/ecommerce/car-interior-design.jpg"
                      }
                      alt="placeholder image"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex items-center gap-3 mt-3">
                    <Image
                      src={"/static/images/ground.png"}
                      alt="ground"
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div className="leading-3">
                      <h3 className="text-sm text-foreground font-semibold">
                        KDL Advance july / Glory Academy
                      </h3>
                      <small className="text-xs text-foreground/70 font-semibold">
                        Coordinated by shema kevin
                      </small>
                    </div>
                  </div>
                </div>
              </HoverCardTrigger>
              <HoverCardContent className="w-[600px]">
                <div className="flex items-center justify-between gap-5">
                  <div className="flex items-center gap-3">
                    <Icons.chevronLeft
                      size={18}
                      className="cursor-pointer hover:bg-primary hover:text-white rounded-full"
                    />
                    <Icons.chevronRight
                      size={18}
                      className="cursor-pointer hover:bg-primary hover:text-white rounded-full"
                    />
                  </div>
                  <div className="flex items-center gap-3">
                    <Image
                      src="/static/images/ground.png"
                      alt="profile"
                      width={30}
                      height={30}
                      className="rounded-full"
                    />
                    <div className="flex flex-col leading-3">
                      <span className="text-xs text-foreground">
                        Keirah Manzi
                      </span>
                      <span className="text-xs text-foreground/70">
                        coordinator
                      </span>
                    </div>
                  </div>
                </div>
                <div className="w-ful mt-5">
                  <h3 className="font-semibold text-lg">
                    KDL Advance July /Glory Academy{" "}
                  </h3>
                  <p className="text-xs text-foreground mt-3">
                    <strong className="text-primary">Note: </strong>Lorem
                    Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry{"'"}s standard
                    dummy text ever since the 1500s, when an unknown printer
                    took a galley of type and scrambled it to make a type
                    specimen book.
                  </p>
                </div>
                <div className="flex items-center gap-5 justify-between mt-5">
                  <div className="w-64 h-24 gap-4 relative rounded-md overflow-hidden">
                    <Image
                      src={
                        "https://res.cloudinary.com/dmgv5azym/image/upload/v1701766189/samples/ecommerce/car-interior-design.jpg"
                      }
                      alt="placeholder image"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <Button>Explore More</Button>
                </div>
              </HoverCardContent>
            </HoverCard>
            <HoverCard>
              <HoverCardTrigger>
                <div className="w-full cursor-pointer mb-5">
                  <div className="w-full h-36 gap-4 relative rounded-md overflow-hidden">
                    <Image
                      src={
                        "https://res.cloudinary.com/dmgv5azym/image/upload/v1701766189/samples/ecommerce/car-interior-design.jpg"
                      }
                      alt="placeholder image"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex items-center gap-3 mt-3">
                    <Image
                      src={"/static/images/ground.png"}
                      alt="ground"
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div className="leading-3">
                      <h3 className="text-sm text-foreground font-semibold">
                        KDL Advance july / Glory Academy
                      </h3>
                      <small className="text-xs text-foreground/70 font-semibold">
                        Coordinated by shema kevin
                      </small>
                    </div>
                  </div>
                </div>
              </HoverCardTrigger>
              <HoverCardContent className="w-[600px]">
                <div className="flex items-center justify-between gap-5">
                  <div className="flex items-center gap-3">
                    <Icons.chevronLeft
                      size={18}
                      className="cursor-pointer hover:bg-primary hover:text-white rounded-full"
                    />
                    <Icons.chevronRight
                      size={18}
                      className="cursor-pointer hover:bg-primary hover:text-white rounded-full"
                    />
                  </div>
                  <div className="flex items-center gap-3">
                    <Image
                      src="/static/images/ground.png"
                      alt="profile"
                      width={30}
                      height={30}
                      className="rounded-full"
                    />
                    <div className="flex flex-col leading-3">
                      <span className="text-xs text-foreground">
                        Keirah Manzi
                      </span>
                      <span className="text-xs text-foreground/70">
                        coordinator
                      </span>
                    </div>
                  </div>
                </div>
                <div className="w-ful mt-5">
                  <h3 className="font-semibold text-lg">
                    KDL Advance July /Glory Academy{" "}
                  </h3>
                  <p className="text-xs text-foreground mt-3">
                    <strong className="text-primary">Note: </strong>Lorem
                    Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry{"'"}s standard
                    dummy text ever since the 1500s, when an unknown printer
                    took a galley of type and scrambled it to make a type
                    specimen book.
                  </p>
                </div>
                <div className="flex items-center gap-5 justify-between mt-5">
                  <div className="w-64 h-24 gap-4 relative rounded-md overflow-hidden">
                    <Image
                      src={
                        "https://res.cloudinary.com/dmgv5azym/image/upload/v1701766189/samples/ecommerce/car-interior-design.jpg"
                      }
                      alt="placeholder image"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <Button>Explore More</Button>
                </div>
              </HoverCardContent>
            </HoverCard>
            <HoverCard>
              <HoverCardTrigger>
                <div className="w-full cursor-pointer mb-5">
                  <div className="w-full h-36 gap-4 relative rounded-md overflow-hidden">
                    <Image
                      src={
                        "https://res.cloudinary.com/dmgv5azym/image/upload/v1701766189/samples/ecommerce/car-interior-design.jpg"
                      }
                      alt="placeholder image"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex items-center gap-3 mt-3">
                    <Image
                      src={"/static/images/ground.png"}
                      alt="ground"
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div className="leading-3">
                      <h3 className="text-sm text-foreground font-semibold">
                        KDL Advance july / Glory Academy
                      </h3>
                      <small className="text-xs text-foreground/70 font-semibold">
                        Coordinated by shema kevin
                      </small>
                    </div>
                  </div>
                </div>
              </HoverCardTrigger>
              <HoverCardContent className="w-[600px]">
                <div className="flex items-center justify-between gap-5">
                  <div className="flex items-center gap-3">
                    <Icons.chevronLeft
                      size={18}
                      className="cursor-pointer hover:bg-primary hover:text-white rounded-full"
                    />
                    <Icons.chevronRight
                      size={18}
                      className="cursor-pointer hover:bg-primary hover:text-white rounded-full"
                    />
                  </div>
                  <div className="flex items-center gap-3">
                    <Image
                      src="/static/images/ground.png"
                      alt="profile"
                      width={30}
                      height={30}
                      className="rounded-full"
                    />
                    <div className="flex flex-col leading-3">
                      <span className="text-xs text-foreground">
                        Keirah Manzi
                      </span>
                      <span className="text-xs text-foreground/70">
                        coordinator
                      </span>
                    </div>
                  </div>
                </div>
                <div className="w-ful mt-5">
                  <h3 className="font-semibold text-lg">
                    KDL Advance July /Glory Academy{" "}
                  </h3>
                  <p className="text-xs text-foreground mt-3">
                    <strong className="text-primary">Note: </strong>Lorem
                    Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry{"'"}s standard
                    dummy text ever since the 1500s, when an unknown printer
                    took a galley of type and scrambled it to make a type
                    specimen book.
                  </p>
                </div>
                <div className="flex items-center gap-5 justify-between mt-5">
                  <div className="w-64 h-24 gap-4 relative rounded-md overflow-hidden">
                    <Image
                      src={
                        "https://res.cloudinary.com/dmgv5azym/image/upload/v1701766189/samples/ecommerce/car-interior-design.jpg"
                      }
                      alt="placeholder image"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <Button>Explore More</Button>
                </div>
              </HoverCardContent>
            </HoverCard>
            <HoverCard>
              <HoverCardTrigger>
                <div className="w-full cursor-pointer mb-5">
                  <div className="w-full h-36 gap-4 relative rounded-md overflow-hidden">
                    <Image
                      src={
                        "https://res.cloudinary.com/dmgv5azym/image/upload/v1701766189/samples/ecommerce/car-interior-design.jpg"
                      }
                      alt="placeholder image"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex items-center gap-3 mt-3">
                    <Image
                      src={"/static/images/ground.png"}
                      alt="ground"
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div className="leading-3">
                      <h3 className="text-sm text-foreground font-semibold">
                        KDL Advance july / Glory Academy
                      </h3>
                      <small className="text-xs text-foreground/70 font-semibold">
                        Coordinated by shema kevin
                      </small>
                    </div>
                  </div>
                </div>
              </HoverCardTrigger>
              <HoverCardContent className="w-[600px]">
                <div className="flex items-center justify-between gap-5">
                  <div className="flex items-center gap-3">
                    <Icons.chevronLeft
                      size={18}
                      className="cursor-pointer hover:bg-primary hover:text-white rounded-full"
                    />
                    <Icons.chevronRight
                      size={18}
                      className="cursor-pointer hover:bg-primary hover:text-white rounded-full"
                    />
                  </div>
                  <div className="flex items-center gap-3">
                    <Image
                      src="/static/images/ground.png"
                      alt="profile"
                      width={30}
                      height={30}
                      className="rounded-full"
                    />
                    <div className="flex flex-col leading-3">
                      <span className="text-xs text-foreground">
                        Keirah Manzi
                      </span>
                      <span className="text-xs text-foreground/70">
                        coordinator
                      </span>
                    </div>
                  </div>
                </div>
                <div className="w-ful mt-5">
                  <h3 className="font-semibold text-lg">
                    KDL Advance July /Glory Academy{" "}
                  </h3>
                  <p className="text-xs text-foreground mt-3">
                    <strong className="text-primary">Note: </strong>Lorem
                    Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry{"'"}s standard
                    dummy text ever since the 1500s, when an unknown printer
                    took a galley of type and scrambled it to make a type
                    specimen book.
                  </p>
                </div>
                <div className="flex items-center gap-5 justify-between mt-5">
                  <div className="w-64 h-24 gap-4 relative rounded-md overflow-hidden">
                    <Image
                      src={
                        "https://res.cloudinary.com/dmgv5azym/image/upload/v1701766189/samples/ecommerce/car-interior-design.jpg"
                      }
                      alt="placeholder image"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <Button>Explore More</Button>
                </div>
              </HoverCardContent>
            </HoverCard>
            <HoverCard>
              <HoverCardTrigger>
                <div className="w-full cursor-pointer mb-5">
                  <div className="w-full h-36 gap-4 relative rounded-md overflow-hidden">
                    <Image
                      src={
                        "https://res.cloudinary.com/dmgv5azym/image/upload/v1701766189/samples/ecommerce/car-interior-design.jpg"
                      }
                      alt="placeholder image"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex items-center gap-3 mt-3">
                    <Image
                      src={"/static/images/ground.png"}
                      alt="ground"
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div className="leading-3">
                      <h3 className="text-sm text-foreground font-semibold">
                        KDL Advance july / Glory Academy
                      </h3>
                      <small className="text-xs text-foreground/70 font-semibold">
                        Coordinated by shema kevin
                      </small>
                    </div>
                  </div>
                </div>
              </HoverCardTrigger>
              <HoverCardContent className="w-[600px]">
                <div className="flex items-center justify-between gap-5">
                  <div className="flex items-center gap-3">
                    <Icons.chevronLeft
                      size={18}
                      className="cursor-pointer hover:bg-primary hover:text-white rounded-full"
                    />
                    <Icons.chevronRight
                      size={18}
                      className="cursor-pointer hover:bg-primary hover:text-white rounded-full"
                    />
                  </div>
                  <div className="flex items-center gap-3">
                    <Image
                      src="/static/images/ground.png"
                      alt="profile"
                      width={30}
                      height={30}
                      className="rounded-full"
                    />
                    <div className="flex flex-col leading-3">
                      <span className="text-xs text-foreground">
                        Keirah Manzi
                      </span>
                      <span className="text-xs text-foreground/70">
                        coordinator
                      </span>
                    </div>
                  </div>
                </div>
                <div className="w-ful mt-5">
                  <h3 className="font-semibold text-lg">
                    KDL Advance July /Glory Academy{" "}
                  </h3>
                  <p className="text-xs text-foreground mt-3">
                    <strong className="text-primary">Note: </strong>Lorem
                    Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry{"'"}s standard
                    dummy text ever since the 1500s, when an unknown printer
                    took a galley of type and scrambled it to make a type
                    specimen book.
                  </p>
                </div>
                <div className="flex items-center gap-5 justify-between mt-5">
                  <div className="w-64 h-24 gap-4 relative rounded-md overflow-hidden">
                    <Image
                      src={
                        "https://res.cloudinary.com/dmgv5azym/image/upload/v1701766189/samples/ecommerce/car-interior-design.jpg"
                      }
                      alt="placeholder image"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <Button>Explore More</Button>
                </div>
              </HoverCardContent>
            </HoverCard>
            <HoverCard>
              <HoverCardTrigger>
                <div className="w-full cursor-pointer mb-5">
                  <div className="w-full h-36 gap-4 relative rounded-md overflow-hidden">
                    <Image
                      src={
                        "https://res.cloudinary.com/dmgv5azym/image/upload/v1701766189/samples/ecommerce/car-interior-design.jpg"
                      }
                      alt="placeholder image"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex items-center gap-3 mt-3">
                    <Image
                      src={"/static/images/ground.png"}
                      alt="ground"
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div className="leading-3">
                      <h3 className="text-sm text-foreground font-semibold">
                        KDL Advance july / Glory Academy
                      </h3>
                      <small className="text-xs text-foreground/70 font-semibold">
                        Coordinated by shema kevin
                      </small>
                    </div>
                  </div>
                </div>
              </HoverCardTrigger>
              <HoverCardContent className="w-[600px]">
                <div className="flex items-center justify-between gap-5">
                  <div className="flex items-center gap-3">
                    <Icons.chevronLeft
                      size={18}
                      className="cursor-pointer hover:bg-primary hover:text-white rounded-full"
                    />
                    <Icons.chevronRight
                      size={18}
                      className="cursor-pointer hover:bg-primary hover:text-white rounded-full"
                    />
                  </div>
                  <div className="flex items-center gap-3">
                    <Image
                      src="/static/images/ground.png"
                      alt="profile"
                      width={30}
                      height={30}
                      className="rounded-full"
                    />
                    <div className="flex flex-col leading-3">
                      <span className="text-xs text-foreground">
                        Keirah Manzi
                      </span>
                      <span className="text-xs text-foreground/70">
                        coordinator
                      </span>
                    </div>
                  </div>
                </div>
                <div className="w-ful mt-5">
                  <h3 className="font-semibold text-lg">
                    KDL Advance July /Glory Academy{" "}
                  </h3>
                  <p className="text-xs text-foreground mt-3">
                    <strong className="text-primary">Note: </strong>Lorem
                    Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry{"'"}s standard
                    dummy text ever since the 1500s, when an unknown printer
                    took a galley of type and scrambled it to make a type
                    specimen book.
                  </p>
                </div>
                <div className="flex items-center gap-5 justify-between mt-5">
                  <div className="w-64 h-24 gap-4 relative rounded-md overflow-hidden">
                    <Image
                      src={
                        "https://res.cloudinary.com/dmgv5azym/image/upload/v1701766189/samples/ecommerce/car-interior-design.jpg"
                      }
                      alt="placeholder image"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <Button>Explore More</Button>
                </div>
              </HoverCardContent>
            </HoverCard>
            <HoverCard>
              <HoverCardTrigger>
                <div className="w-full cursor-pointer mb-5">
                  <div className="w-full h-36 gap-4 relative rounded-md overflow-hidden">
                    <Image
                      src={
                        "https://res.cloudinary.com/dmgv5azym/image/upload/v1701766189/samples/ecommerce/car-interior-design.jpg"
                      }
                      alt="placeholder image"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex items-center gap-3 mt-3">
                    <Image
                      src={"/static/images/ground.png"}
                      alt="ground"
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div className="leading-3">
                      <h3 className="text-sm text-foreground font-semibold">
                        KDL Advance july / Glory Academy
                      </h3>
                      <small className="text-xs text-foreground/70 font-semibold">
                        Coordinated by shema kevin
                      </small>
                    </div>
                  </div>
                </div>
              </HoverCardTrigger>
              <HoverCardContent className="w-[600px]">
                <div className="flex items-center justify-between gap-5">
                  <div className="flex items-center gap-3">
                    <Icons.chevronLeft
                      size={18}
                      className="cursor-pointer hover:bg-primary hover:text-white rounded-full"
                    />
                    <Icons.chevronRight
                      size={18}
                      className="cursor-pointer hover:bg-primary hover:text-white rounded-full"
                    />
                  </div>
                  <div className="flex items-center gap-3">
                    <Image
                      src="/static/images/ground.png"
                      alt="profile"
                      width={30}
                      height={30}
                      className="rounded-full"
                    />
                    <div className="flex flex-col leading-3">
                      <span className="text-xs text-foreground">
                        Keirah Manzi
                      </span>
                      <span className="text-xs text-foreground/70">
                        coordinator
                      </span>
                    </div>
                  </div>
                </div>
                <div className="w-ful mt-5">
                  <h3 className="font-semibold text-lg">
                    KDL Advance July /Glory Academy{" "}
                  </h3>
                  <p className="text-xs text-foreground mt-3">
                    <strong className="text-primary">Note: </strong>Lorem
                    Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry{"'"}s standard
                    dummy text ever since the 1500s, when an unknown printer
                    took a galley of type and scrambled it to make a type
                    specimen book.
                  </p>
                </div>
                <div className="flex items-center gap-5 justify-between mt-5">
                  <div className="w-64 h-24 gap-4 relative rounded-md overflow-hidden">
                    <Image
                      src={
                        "https://res.cloudinary.com/dmgv5azym/image/upload/v1701766189/samples/ecommerce/car-interior-design.jpg"
                      }
                      alt="placeholder image"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <Button>Explore More</Button>
                </div>
              </HoverCardContent>
            </HoverCard>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
