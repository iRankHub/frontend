import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Progress } from "@/components/ui/progress";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import { batchCreateUsers } from "@/core/authentication/auth";
import {
  ParsedDataAdmin,
  ParsedDataSchool,
  ParsedDataStudent,
  ParsedDataVolunteer,
  parseExcelFile,
} from "@/file-parser/parse-excel-file";
import { useUserStore } from "@/stores/auth/auth.store";
import { Trash2 } from "lucide-react";
import Link from "next/link";
import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import ImportResultsDialog from "./ImportResultsDialog";

interface ParsedData {
  admin: ParsedDataAdmin[];
  student: ParsedDataStudent[];
  school: ParsedDataSchool[];
  volunteer: ParsedDataVolunteer[];
}

interface ImportResponse {
  success: boolean;
  importedcount: number;
  failedemailsList: string[];
  message: string;
}

interface ImportResults {
  importedCount: number;
  failedEmailsList: string[];
}

type CardVariant = "uploading" | "success" | "failed" | "view";

interface UploadLoaderCardProps {
  variant: CardVariant;
  progress: number;
  size: string;
  link?: string;
}

const FileUpload: React.FC = () => {
  const [, setParsedData] = useState<ParsedData | null>(null);
  const [, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const [fileSize, setFileSize] = useState<string | null>(null);
  const [importResults, setImportResults] = useState<ImportResults | null>(null);
  const [cardVariant, setCardVariant] = useState<CardVariant>("uploading");

  const { toast } = useToast();
  const { user } = useUserStore((state) => state);

  const onDrop = useCallback(
    async (acceptedFiles: File[]) => {
      setIsLoading(true);
      setProgress(0);
      setFileSize(`${(acceptedFiles[0].size / 1024).toFixed(2)} kb`);
      setImportResults(null);

      try {
        const parsedData = await parseExcelFile(acceptedFiles[0]);
        setParsedData(parsedData);

        const uploadInterval = setInterval(() => {
          setProgress((prev) => (prev >= 95 ? 95 : prev + 5));
        }, 1000);

        if (!user) {
          clearInterval(uploadInterval);
          return;
        }

        const res: ImportResponse = await batchCreateUsers({ ...parsedData, token: user.token });
        clearInterval(uploadInterval);

        if (res.success) {
          setCardVariant("success");
          setProgress(100);
          setImportResults({
            importedCount: res.importedcount,
            failedEmailsList: res.failedemailsList || []
          });
        } else {
          setCardVariant("failed");
          setImportResults({
            importedCount: res.importedcount || 0,
            failedEmailsList: res.failedemailsList || []
          });

          toast({
            variant: "destructive",
            title: "Partial Import",
            description: res.message || "Some users could not be imported. Check the details below.",
            action: (
              <ToastAction altText="Close" className="bg-primary text-white">
                Close
              </ToastAction>
            ),
          });
        }
      } catch (error) {
        console.error("Error creating users", error);
        setCardVariant("failed");

        if (error instanceof Error) {
          toast({
            variant: "destructive",
            title: "Error",
            description: error.message,
            action: (
              <ToastAction altText="Close" className="bg-primary text-white">
                Close
              </ToastAction>
            ),
          });
          setError(error.message);
        } else {
          setError("Invalid file format");
          toast({
            variant: "destructive",
            title: "Error",
            description: "Invalid file format",
            action: (
              <ToastAction altText="Close" className="bg-primary text-white">
                Close
              </ToastAction>
            ),
          });
        }
      } finally {
        setIsLoading(false);
      }
    },
    [toast, user]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    maxFiles: 1,
    maxSize: 2 * 1024 * 1024, // 2MB max file size
  });

  const handleRedirectToTemplateSheet = () => {
    const NEXT_PUBLIC_IMPORT_USER_TEMPLATE_PATH = process.env.NEXT_PUBLIC_IMPORT_USER_TEMPLATE_PATH!;
    window.open(
      NEXT_PUBLIC_IMPORT_USER_TEMPLATE_PATH,
      "_blank"
    );
  };

  return (
    <DialogContent className="w-full max-w-sm">
      <DialogHeader>
        <DialogTitle className="text-sm font-semibold">Upload</DialogTitle>
      </DialogHeader>
      <p className="text-muted-foreground text-sm text-center m-0 p-0">
        Download{" "}
        <Button
          variant="link"
          className="text-info mr-1 p-0"
          onClick={handleRedirectToTemplateSheet}
        >
          <strong className="text-sm font-medium text-info">template</strong>
        </Button>
        before importing users
      </p>

      <div
        {...getRootProps()}
        className={`relative w-full border border-dashed rounded-md h-40 cursor-pointer flex items-center justify-center ${isDragActive ? "border-primary" : "border-border"
          }`}
      >
        <input {...getInputProps()} />
        <div className="flex flex-col items-center gap-3">
          <Button
            className="rounded-full w-10 h-10 bg-muted cursor-pointer group"
            size="icon"
          >
            <Icons.upload className="w-[1.5rem] h-[1.5rem] text-primary group-hover:text-white m-1" />
            <span className="sr-only">Upload</span>
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

      {(isLoading || cardVariant !== "uploading") && (
        <UploadLoaderCard
          progress={progress}
          size={fileSize!}
          variant={cardVariant}
          link={cardVariant === "success" ? "/admin/users" : undefined}
        />
      )}

      {importResults && (
        <ImportResultsDialog
          importedCount={importResults.importedCount}
          failedEmailsList={importResults.failedEmailsList}
          onClose={() => setImportResults(null)}
        />
      )}
    </DialogContent>
  );
};

const UploadLoaderCard: React.FC<UploadLoaderCardProps> = ({
  progress,
  size,
  variant,
  link,
}) => {
  const cardContent = {
    uploading: (
      <>
        <div className="flex items-center gap-3">
          <Progress value={progress} className="h-1.5 flex-1 w-full" />
          <small className="text-[#353535] text-sm">{progress}%</small>
        </div>
      </>
    ),
    success: (
      <div className="w-full">
        <div className="flex items-center gap-3">
          <Progress
            value={progress}
            className="h-1.5 w-full"
            indicatorClassName="bg-success-light"
          />
          <small className="text-[#353535] text-sm">{progress}%</small>
        </div>
        {progress === 100 && (
          <span className="text-sm text-success font-bold m-0 p-0 leading-5">
            Upload successful. Reload the page to view changes
          </span>
        )}
      </div>
    ),
    failed: (
      <span className="text-sm text-[#C92519] font-bold m-0 p-0 leading-5">
        Upload failed, please try again
      </span>
    ),
    view: link && (
      <Link
        href={link}
        className="text-primary font-bold text-sm hover:underline"
      >
        Click to view
      </Link>
    ),
  };

  return (
    <Card className="p-3">
      <div className="flex items-start justify-between gap-5">
        <div className="flex-1 flex items-start gap-3">
          <Icons.fileUp
            className={`w-5 h-5 ${variant === "failed" ? "text-destructive" : "text-[#0F172A]"
              }`}
          />
          <div className="w-full flex flex-col p-0 m-0">
            <span
              className={`text-sm font-medium m-0 p-0 leading-5 ${variant === "failed" ? "text-destructive" : ""
                }`}
            >
              Users.xlsx
            </span>
            <small className="text-muted-foreground uppercase w-full">
              {size}
            </small>
            {cardContent[variant]}
          </div>
        </div>
        {variant === "success" ? (
          <Button
            className="rounded-full w-4 h-4 bg-success-light cursor-pointer"
            size="icon"
          >
            <Icons.check className="w-[1rem] h-[1rem] text-white m-0.5" />
            <span className="sr-only">Success</span>
          </Button>
        ) : (
          <Trash2
            className={`w-5 h-5 ${variant === "failed" ? "text-destructive" : "text-foreground"
              }`}
          />
        )}
      </div>
    </Card>
  );
};

export default FileUpload;
