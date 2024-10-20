import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Progress } from "@/components/ui/progress";
import { Trash2 } from "lucide-react";
import useLinodeUpload from "@/hooks/use-linode-upload";

type Props = {
  setTournamentImage: (url: string) => void;
};

function FileUpload({ setTournamentImage }: Props) {
  const [file, setFile] = useState<File | null>(null);
  const [uploadStatus, setUploadStatus] = useState<"idle" | "uploading" | "success" | "failed">("idle");
  const { uploadFile, uploadProgress, uploadError } = useLinodeUpload();

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      setFile(acceptedFiles[0]);
      setUploadStatus("idle");
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { 'image/*': [] },
    maxSize: 2 * 1024 * 1024, // 2MB
    multiple: false
  });

  const handleUpload = async () => {
    if (!file) return;

    setUploadStatus("uploading");
    try {
      const url = await uploadFile(file, `tournaments/${file.name}`);
      setTournamentImage(url);
      setUploadStatus("success");
    } catch (error) {
      setUploadStatus("failed");
    }
  };

  const handleDelete = () => {
    setFile(null);
    setUploadStatus("idle");
  };

  return (
    <DialogContent className="w-full max-w-sm">
      <DialogHeader>
        <DialogTitle className="text-sm font-medium">Upload</DialogTitle>
      </DialogHeader>
      {!file && (
        <div {...getRootProps()} className="mt-2 relative w-full border border-dashed border-border rounded-md border-spacing-y-px border-spacing-2 h-40 cursor-pointer">
          <input {...getInputProps()} />
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
      )}
      {file && (
        <>
          <Card className="p-3">
            <div className="flex items-start justify-between gap-5">
              <div className="flex items-start gap-3">
                <Icons.fileUp className="w-5 h-5 text-[#0F172A]" />
                <div className="flex flex-col p-0 m-0">
                  <span className="text-sm font-medium m-0 p-0 leading-5">
                    {file.name}
                  </span>
                  <small className="text-muted-foreground uppercase">
                    {(file.size / 1024).toFixed(0)} KB
                  </small>
                </div>
              </div>
              <Button
                onClick={handleDelete}
                variant="ghost"
                size="icon"
                className="h-5 w-5"
              >
                <Trash2 className="w-5 h-5 text-foreground" />
              </Button>
            </div>
            {uploadStatus === "uploading" && (
              <div className="flex items-center gap-3 mt-2">
                <Progress value={uploadProgress} className="h-1.5" />
                <small className="text-[#353535] text-sm">{uploadProgress}%</small>
              </div>
            )}
          </Card>
          {uploadStatus === "idle" && (
            <Button onClick={handleUpload} className="w-full mt-2">
              Upload
            </Button>
          )}
          {uploadStatus === "success" && (
            <div className="mt-2 text-center text-sm text-green-600">
              Upload successful!
            </div>
          )}
          {uploadStatus === "failed" && (
            <div className="mt-2 text-center text-sm text-red-600">
              Upload failed. Please try again.
            </div>
          )}
        </>
      )}
    </DialogContent>
  );
}

export default FileUpload;
