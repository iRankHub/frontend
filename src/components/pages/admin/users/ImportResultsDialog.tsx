import React from 'react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Icons } from '@/components/icons';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { AlertTriangle, XCircle } from 'lucide-react';

interface ImportResultsDialogProps {
  importedCount: number;
  failedEmailsList: string[];
  onClose: () => void;
}

const ImportResultsDialog: React.FC<ImportResultsDialogProps> = ({
  importedCount,
  failedEmailsList,
  onClose
}) => {
  const hasFailures = failedEmailsList && failedEmailsList.length > 0;

  return (
    <div className="space-y-4 max-w-md w-full">
      <Alert className={hasFailures ? "border-yellow-500" : "border-green-500"}>
        <div className="flex items-center gap-2">
          {hasFailures ? (
            <AlertTriangle className="h-5 w-5 text-yellow-500" />
          ) : (
            <Icons.check className="h-5 w-5 text-green-500" />
          )}
          <AlertTitle className="text-base">
            {hasFailures ? "Partial Import Complete" : "Import Complete"}
          </AlertTitle>
        </div>
        <AlertDescription className="mt-2">
          Successfully imported {importedCount} user{importedCount !== 1 ? 's' : ''}.
          {hasFailures && ` ${failedEmailsList.length} account${failedEmailsList.length !== 1 ? 's' : ''} failed to import.`}
        </AlertDescription>
      </Alert>

      {hasFailures && (
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="failed-accounts">
            <AccordionTrigger className="text-sm">
              View Failed Accounts
            </AccordionTrigger>
            <AccordionContent>
              <ScrollArea className="h-48 rounded-md border p-4">
                <div className="space-y-2">
                  {failedEmailsList.map((email, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm">
                      <XCircle className="h-4 w-4 text-red-500 flex-shrink-0" />
                      <span className="text-gray-700">{email}</span>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      )}
    </div>
  );
};

export default ImportResultsDialog;
