import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Slash } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function page() {
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
            <BreadcrumbLink
              href="/student/leagues/1"
              className="text-primary font-semibold text-sm"
            >
              Go To Leagues
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <Slash className="text-primary" />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbLink className="text-primary font-semibold text-sm hover:text-primary">
              KDL Advance July
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="w-full h-48 rounded-lg relative">
        <div className="w-full h-full relative overflow-hidden rounded-lg">
          <Image
            src={"/static/images/tournament-bg.png"}
            alt="board"
            fill
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="-translate-y-10">
        <div className="mx-32 flex items-center gap-10">
          <div className="relative w-36 h-36 rounded-full overflow-hidden">
            <Image
              src={"/static/images/chess-board.png"}
              alt="board"
              fill
              className="w-full h-full object-cover"
            />
          </div>
          <div className="leading-3">
            <h3 className="text-2xl font-bold text-foreground">Keirah Manzi</h3>
            <small className="text-sm text-foreground/70 font-semibold">
              Coordinated
            </small>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="pl-20 w-full flex flex-col gap-5">
            <div className="w-full border-2 border-border p-5 rounded-lg my-5">
              <h3 className="font-semibold text-lg">About this tournament</h3>
              <p className="text-sm text-foreground font-semibold mt-3">
                <strong className="text-primary">Note: </strong>Lorem Ipsum is
                simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry{"'"}s standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.
              </p>
            </div>
            <Link
              href={"/student/leagues/1/tournament/1/ranks"}
              className="flex items-start gap-1 border-2 rounded-lg border-border"
            >
              <div className="w-[650px] h-full relative rounded-lg overflow-hidden">
                <Image
                  src={"/static/images/Login-Art.png"}
                  alt="login"
                  fill
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="leading-3 flex flex-col justify-between gap-5 p-3">
                <div className="leading-6">
                  <h3 className="font-semibold text-sm leading-7">
                    Explore the speaker rank
                  </h3>
                  <p className="text-sm text-foreground">
                    <strong className="text-primary">Note: </strong>Lorem
                    Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry{"'"}s standard
                    dummy text ever since the 1500s, when an unknown printer
                    took a galley of type and scrambled it to make a type
                    specimen book.
                  </p>
                </div>
                <Button className="rounded-full">Explore More</Button>
              </div>
            </Link>
            <div className="flex items-start gap-1 border-2 rounded-lg border-border">
              <div className="w-[650px] h-full relative rounded-lg overflow-hidden">
                <Image
                  src={"/static/images/Login-Art.png"}
                  alt="login"
                  fill
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="leading-3 flex flex-col justify-between gap-5 p-3">
                <div className="leading-6">
                  <h3 className="font-semibold text-sm leading-7">
                    Explore the Team rank
                  </h3>
                  <p className="text-sm text-foreground">
                    <strong className="text-primary">Note: </strong>Lorem
                    Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry{"'"}s standard
                    dummy text ever since the 1500s, when an unknown printer
                    took a galley of type and scrambled it to make a type
                    specimen book.
                  </p>
                </div>
                <Button className="rounded-full">Explore More</Button>
              </div>
            </div>
            <div className="flex items-start gap-1 border-2 rounded-lg border-border">
              <div className="w-[650px] h-full relative rounded-lg overflow-hidden">
                <Image
                  src={"/static/images/Login-Art.png"}
                  alt="login"
                  fill
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="leading-3 flex flex-col justify-between gap-5 p-3">
                <div className="leading-6">
                  <h3 className="font-semibold text-sm leading-7">
                    Explore the Ballot rank
                  </h3>
                  <p className="text-sm text-foreground">
                    <strong className="text-primary">Note: </strong>Lorem
                    Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry{"'"}s standard
                    dummy text ever since the 1500s, when an unknown printer
                    took a galley of type and scrambled it to make a type
                    specimen book.
                  </p>
                </div>
                <Button className="rounded-full">Explore More</Button>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="flex flex-col gap-1 border-2 border-border rounded-lg max-w-xs p-4 mt-5 mb-16">
              <h1 className="text-muted-foreground font-bold text-lg">
                Participants
              </h1>
              <span className="text-sm">
                <strong>Judge: </strong>100
              </span>
              <span className="text-sm">
                <strong>Teams: </strong>100
              </span>
              <span className="text-sm">
                <strong>Students: </strong>300
              </span>
            </div>
            <div className="flex flex-col gap-1 border-2 border-border rounded-lg max-w-full p-4 mt-5">
              <h1 className="text-muted-foreground font-bold text-lg">
                Motions Debated
              </h1>
              <div className="w-full mb-3">
                <span className="font-bold leading-4 text-lg mr-2">
                  Round 1:{" "}
                </span>
                <span className="text-sm">
                  <strong className="text-primary">Note: </strong>Lorem Ipsum is
                  simply dummy text of the printing and typesetting industry.
                </span>
              </div>
              <div className="w-full mb-3">
                <span className="font-bold leading-4 text-lg mr-2">
                  Round 2:{" "}
                </span>
                <span className="text-sm">
                  <strong className="text-primary">Note: </strong>Lorem Ipsum is
                  simply dummy text of the printing and typesetting industry.
                </span>
              </div>
              <div className="w-full mb-3">
                <span className="font-bold leading-4 text-lg mr-2">
                  Impromptu:{" "}
                </span>
                <span className="text-sm">
                  <strong className="text-primary">Note: </strong>Lorem Ipsum is
                  simply dummy text of the printing and typesetting industry.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
