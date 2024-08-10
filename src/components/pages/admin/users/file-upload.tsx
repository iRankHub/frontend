import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Progress } from "@/components/ui/progress";
import { Trash2 } from "lucide-react";
import Link from "next/link";
import React from "react";

type Props = {};

function FileUpload({}: Props) {
  return (
    <DialogContent className="w-full max-w-sm">
      <DialogHeader>
        <DialogTitle className="text-sm font-semibold">Upload</DialogTitle>
      </DialogHeader>
      <p className="text-muted-foreground text-sm text-center m-0 p-0">
        Download{" "}
        <strong className="text-sm font-medium text-info">template</strong>{" "}
        before importing users
      </p>
      <div className="relative w-full border border-dashed border-border rounded-md border-spacing-y-px border-spacing-2 h-40 cursor-pointer">
        <div className="absolute w-full h-full flex items-center justify-center">
          <div className="flex flex-col items-center gap-3">
            <Button
              className="rounded-full w-10 h-10 bg-muted cursor-pointer"
              size="icon"
            >
              <Icons.upload className="w-[1.5rem] h-[1.5rem] text-primary m-1" />
              <span className="sr-only">Image</span>
            </Button>

            <div className="w-full text-center">
              <p className="text-sm text-foreground font-medium">
                <b className="text-primary">Click to Upload</b> or drag and drop
              </p>
              <small className="text-muted-foreground text-xs">
                (Max. File size: 2MB)
              </small>
            </div>
          </div>
        </div>
      </div>
      <UploadLoaderCard variant="uploading" progress={40} size="200kb" />
      <UploadLoaderCard variant="success" progress={100} size="200kb" />
      <UploadLoaderCard variant="failed" progress={0} size="200kb" />
      <UploadLoaderCard variant="view" progress={0} size="200kb" link="/#" />
    </DialogContent>
  );
}

interface UploadLoaderCardProps {
  variant: "uploading" | "success" | "failed" | "view";
  progress: number;
  size: string; // file size
  link?: string; // for the view variant
  title?: string; // for the view variant
}

const UploadLoaderCard = ({
  progress,
  size,
  variant,
  link,
  title,
}: UploadLoaderCardProps) => {
  switch (variant) {
    case "uploading":
      return (
        <Card className="p-3">
          <div className="flex items-start justify-between gap-5">
            <div className="flex items-start gap-3">
              <Icons.fileUp className="w-5 h-5 text-[#0F172A]" />
              <div className="flex flex-col p-0 m-0">
                <span className="text-sm font-medium m-0 p-0 leading-5">
                  Users.xlsx
                </span>
                <small className="text-muted-foreground uppercase">
                  200 kb
                </small>
              </div>
            </div>
            <Trash2 className="w-5 h-5 text-foreground" />
          </div>
          <div className="flex items-center gap-3">
            <Progress value={progress} className="h-1.5" />
            <small className="text-[#353535] text-sm">{progress}%</small>
          </div>
        </Card>
      );
    case "success":
      return (
        <Card className="p-3">
          <div className="flex items-start justify-between gap-5">
            <div className="flex items-start gap-3">
              <Icons.fileUp className="w-5 h-5 text-[#0F172A]" />
              <div className="flex flex-col p-0 m-0">
                <span className="text-sm font-medium m-0 p-0 leading-5">
                  Users.xlsx
                </span>
                <small className="text-muted-foreground uppercase">
                  200 kb
                </small>
              </div>
            </div>
            <Button
              className="rounded-full w-4 h-4 bg-success-light cursor-pointer"
              size="icon"
            >
              <Icons.check className="w-[1rem] h-[1rem] text-white m-0.5" />
              <span className="sr-only">Success</span>
            </Button>
          </div>
          <div className="flex items-center gap-3">
            <Progress
              value={progress}
              className="h-1.5"
              indicatorClassName="bg-success-light"
            />
            <small className="text-[#353535] text-sm">{progress}%</small>
          </div>
        </Card>
      );
    case "failed":
      return (
        <Card className="p-3">
          <div className="flex items-start justify-between gap-5">
            <div className="flex items-start gap-3">
              <Icons.fileUp className="w-5 h-5 text-destructive" />
              <div className="flex flex-col p-0 m-0">
                <span className="text-sm text-[#C92519] font-bold m-0 p-0 leading-5">
                  Upload failed, please try again
                </span>
                <span className="text-sm font-medium text-destructive m-0 p-0 leading-5">
                  Users.xlsx
                </span>
                <small className="text-destructive font-bold text-sm">
                  Try again
                </small>
              </div>
            </div>
            <Trash2 className="w-5 h-5 text-destructive" />
          </div>
        </Card>
      );
    case "view":
      if (!link) return;
      return (
        <Card className="p-3">
          <div className="flex items-start justify-between gap-5">
            <div className="flex items-start gap-3">
              <Icons.fileUp className="w-5 h-5 text-[#0F172A]" />
              <div className="flex flex-col p-0 m-0">
                <span className="text-sm font-medium m-0 p-0 leading-5">
                  Users.xlsx
                </span>
                <small className="text-muted-foreground uppercase">
                  200 kb
                </small>
                <Link
                  href={link}
                  className="text-primary font-bold text-sm hover:underline"
                >
                  Click to view
                </Link>
              </div>
            </div>
            <Trash2 className="w-5 h-5 text-foreground" />
          </div>
        </Card>
      );
  }
};

export default FileUpload;
