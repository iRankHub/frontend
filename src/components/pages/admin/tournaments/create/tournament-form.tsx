"use client";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { emailLoginSchema } from "@/lib/validations/auth.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Trash2 } from "lucide-react";
import React from "react";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { z } from "zod";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DialogHeader } from "@/components/ui/dialog";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import Link from "next/link";

type Props = {};

type Inputs = z.infer<typeof emailLoginSchema>;
function TournamentForm({}: Props) {
  // react-hook-form
  const form = useForm<Inputs>({
    resolver: zodResolver(emailLoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(data: Inputs) {}

  return (
    <div className="p-5">
      <div className="w-full bg-brown rounded-md h-60 p-5 flex items-end">
        <div className="flex-1">
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-1 text-sm text-white font-medium">
              <Icons.calendar className="w-3.5 h-3.5 text-white" />
              Pick a Date
            </div>
            <div className="flex items-center gap-1 text-sm text-white font-medium">
              <Icons.mapPin className="w-3.5 h-3.5 text-white" />
              Location
            </div>
          </div>
          <Input
            placeholder="Your Tournament Name"
            className="text-white placeholder:text-white text-xl font-bold w-72 mt-1 bg-transparent outline-none border-none focus-visible:outline-none focus-visible:border-none focus-visible:ring-0 focus-visible:ring-offset-0 ring-0 p-0"
          />
        </div>
        <div className="flex items-center gap-3">
          <Dialog>
            <DialogTrigger>
              <Button
                className="rounded-full w-8 h-8 bg-primary cursor-pointer"
                size="icon"
              >
                <Icons.imagePlus className="w-[1rem] h-[1rem] text-white m-1" />
                <span className="sr-only">Image</span>
              </Button>
            </DialogTrigger>
            <DialogContent className="w-full max-w-sm">
              <DialogHeader>
                <DialogTitle className="text-sm font-medium">
                  Upload
                </DialogTitle>
              </DialogHeader>
              <div className="mt-2 relative w-full border border-dashed border-border rounded-md border-spacing-y-px border-spacing-2 h-40 cursor-pointer">
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
                        <b className="text-primary">Click to Upload</b> or drag
                        and drop
                      </p>
                      <small className="text-muted-foreground text-xs">
                        (Max. File size: 2MB)
                      </small>
                    </div>
                  </div>
                </div>
              </div>
              <UploadLoaderCard
                variant="uploading"
                progress={40}
                size="200kb"
              />
              <UploadLoaderCard variant="success" progress={100} size="200kb" />
              <UploadLoaderCard variant="failed" progress={0} size="200kb" />
              <UploadLoaderCard
                variant="view"
                progress={0}
                size="200kb"
                link="/#"
              />
            </DialogContent>
          </Dialog>
          <Button
            className="rounded-full w-8 h-8 bg-primary cursor-pointer"
            size="icon"
          >
            <Icons.pencilLine className="w-[1rem] h-[1rem] text-white m-1" />
            <span className="sr-only">Edit</span>
          </Button>
          <Button
            className="rounded-full w-8 h-8 bg-primary cursor-pointer"
            size="icon"
          >
            <Trash2 className="w-[1rem] h-[1rem] text-white m-1" />
            <span className="sr-only">Delete</span>
          </Button>
        </div>
      </div>
      <div className="mt-10 w-full">
        <Form {...form}>
          <form
            className="max-w-md w-full grid gap-4"
            onSubmit={(...args) => void form.handleSubmit(onSubmit)(...args)}
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-darkBlue">
                    School Email<b className="text-primary font-light"> *</b>
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="ava.wright@gmail.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
      </div>
    </div>
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
                  Tournament.jpg
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
                  Tournament.jpg
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
                  Tournament.jpg
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
                  Tournament.jpg
                </span>
                <small className="text-muted-foreground uppercase">
                  200 kb
                </small>
                <Link href={link} className="text-primary font-bold text-sm hover:underline">
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

export default TournamentForm;
