import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Progress } from "@/components/ui/progress";
import { batchCreateUsers } from "@/core/authentication/auth";
import {
  ParsedDataAdmin,
  ParsedDataSchool,
  ParsedDataStudent,
  ParsedDataVolunteer,
  parseExcelFile,
} from "@/file-parser/parse-excel-file";
import { useUsersStore } from "@/stores/admin/users/users.store";
import { Trash2 } from "lucide-react";
import Link from "next/link";
import React, { useCallback, useState } from "react";
import { DropzoneOptions, useDropzone } from "react-dropzone";

type Props = {};

interface ParsedData {
  admin: ParsedDataAdmin[];
  student: ParsedDataStudent[];
  school: ParsedDataSchool[];
  volunteer: ParsedDataVolunteer[];
}

function FileUpload({}: Props) {
  const [parsedData, setParsedData] = useState<ParsedData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const [fileSize, setFileSize] = useState<string | null>(null);
  const [cardVariant, setCardVariant] = useState<
    "uploading" | "success" | "failed" | "view"
  >("uploading");
  const { setUsers } = useUsersStore((state) => state);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    // Handle file upload here
    (async () => {
      setIsLoading(true);
      setProgress(0);
      setFileSize(`${(acceptedFiles[0].size / 1024).toFixed(2)} kb`);
      try {
        const parsedData = await parseExcelFile(acceptedFiles[0]);
        setParsedData(parsedData);

        const uploadInterval = setInterval(() => {
          setProgress((prev) => {
            if (prev >= 100) {
              clearInterval(uploadInterval);
              return 100;
            }
            return prev + 5;
          });
        }, 1000);

        // Batch create users
        await batchCreateUsers(parsedData)
          .then((res) => {
            console.log(parsedData);
            console.log(res.failedemailsList);
            // Clear the interval
            clearInterval(uploadInterval);

            if (res.success) {
              // Set the card variant to success
              setCardVariant("success");
            } else {
              // Set the card variant to failed
              setCardVariant("failed");
            }
          })
          .catch((error) => {
            console.error("Error creating users", error);
            setCardVariant("failed");
          });
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        }
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    maxFiles: 1,
    maxSize: 2 * 1024 * 1024, // 2MB max file size
  });

  const handleRedirectToTemplateSheet = () => {
    const url =
      "https://docs.google.com/spreadsheets/d/1Dy2bnTc1PkQBsdf-rugz0JpmGufTsQW8F7M0rezZXa0/edit?gid=1130316211#gid=1130316211";
    window.open(url, "_blank");
  };

  return (
    <DialogContent className="w-full max-w-sm">
      <DialogHeader>
        <DialogTitle className="text-sm font-semibold">Upload</DialogTitle>
      </DialogHeader>
      <p className="text-muted-foreground text-sm text-center m-0 p-0">
        Download{" "}
        <Button
          variant={"link"}
          className="text-info mr-1 p-0"
          onClick={handleRedirectToTemplateSheet}
        >
          <strong className="text-sm font-medium text-info">template</strong>{" "}
        </Button>
        before importing users
      </p>

      <div
        {...getRootProps()}
        className={`relative w-full border border-dashed rounded-md h-40 cursor-pointer flex items-center justify-center ${
          isDragActive ? "border-primary" : "border-border"
        }`}
      >
        <input {...getInputProps()} />
        <div className="flex flex-col items-center gap-3">
          <Button
            className="rounded-full w-10 h-10 bg-muted cursor-pointer group"
            size="icon"
          >
            <Icons.upload className="w-[1.5rem] h-[1.5rem] text-primary group-hover:text-white m-1" />
            <span className="sr-only">Image</span>
          </Button>

          <div className="w-full text-center">
            {isDragActive ? (
              <p className="text-sm text-primary font-medium">
                Drop the files here...
              </p>
            ) : (
              <p className="text-sm text-foreground font-medium">
                <b className="text-primary">Click to Upload</b> or drag and drop
              </p>
            )}
            <small className="text-muted-foreground text-xs">
              (Max. File size: 2MB)
            </small>
          </div>
        </div>
      </div>

      {isLoading && (
        <UploadLoaderCard
          progress={progress}
          size={fileSize!}
          variant={cardVariant}
        />
      )}

      {cardVariant === "failed" && (
        <UploadLoaderCard
          progress={progress}
          size={fileSize!}
          variant={cardVariant}
        />
      )}

      {cardVariant === "success" && (
        <UploadLoaderCard
          progress={progress}
          size={fileSize!}
          variant={cardVariant}
          link="/admin/users"
        />
      )}
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
                {/* <small className="text-destructive font-bold text-sm">
                  Try again
                </small> */}
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
