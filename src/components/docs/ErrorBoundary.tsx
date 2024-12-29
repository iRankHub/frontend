'use client'

import React from "react";
import { Alert, AlertDescription, AlertTitle } from "../../components/ui/alert";
import { Button } from "../../components/ui/button";
import { AlertTriangle } from "lucide-react";
import Link from "next/link";

export function DocError() {
  return (
    <div className="container max-w-3xl py-6 lg:py-10">
      <Alert variant="destructive">
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>Documentation Error</AlertTitle>
        <AlertDescription className="mt-4">
          <div className="flex flex-col gap-4">
            <p>
              The requested documentation page could not be found. This might be because:
            </p>
            <ul className="list-disc pl-4 space-y-2">
              <li>The page hasn&apos;t been created yet</li>
              <li>The link you followed might be incorrect</li>
              <li>The content might have been moved</li>
            </ul>
            <div className="mt-4">
              <Button variant="outline" asChild>
                <Link href="/docs">Return to Documentation</Link>
              </Button>
            </div>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}
