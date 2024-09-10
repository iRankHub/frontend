import { Icons } from "@/components/icons";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";
import React from "react";

type Props = {
  ballotId: number;
};

const inter = Inter({
  weight: "600",
  subsets: ["latin"],
});

function BallotUpdateForm({ ballotId }: Props) {
  const [activeStep, setActiveStep] = React.useState(1);
  const steps = [1, 2, 3];

  const Step = ({
    number,
    isActive,
  }: {
    number: number;
    isActive: boolean;
  }) => {
    return (
      <div className="flex flex-col items-center gap-1">
        <span className="text-xs capitalize">
          {number !== 3 ? <>Team {number.toString()}</> : <>Feedback</>}
        </span>
        <div className="flex items-center justify-center w-6 h-6 rounded-full border border-gray-300 text-xs">
          {isActive || number < activeStep ? (
            <div className="w-4 h-4 bg-success-green rounded-full flex items-center justify-center">
              {number !== activeStep && (
                <Icons.check className="w-4 h-4 text-white" />
              )}
            </div>
          ) : (
            <p>{number.toString()}</p>
          )}
        </div>
      </div>
    );
  };

  const Dots = () => {
    return (
      <div className="flex space-x-1">
        <span className="block w-1 h-1 bg-gray-200 rounded-full"></span>
        <span className="block w-1 h-1 bg-gray-200 rounded-full"></span>
        <span className="block w-1 h-1 bg-gray-200 rounded-full"></span>
      </div>
    );
  };

  return (
    <>
      <div className="w-full mb-5">
        <div className="flex items-center justify-between space-x-4">
          {steps.map((step, index) => (
            <React.Fragment key={step}>
              <Step number={step} isActive={step === activeStep} />
              {index < steps.length - 1 && <Dots />}
            </React.Fragment>
          ))}
        </div>
      </div>
      <div className="w-full flex-1">
        <div className="w-full leading-6 mb-3">
          <div className="flex items-center gap-3">
            <h3 className="text-lg font-bold text-foreground">
              Green Hills Team 1
            </h3>
            <Badge className="bg-primary hover:bg-primary text-sm text-white">
              Negative
            </Badge>
          </div>
          <p className={cn("text-sm text-muted-foreground font-medium", inter)}>
            Speakers
          </p>
        </div>
        <Speaker />
        <Speaker />
        <Speaker />
      </div>
      <Button>
        Continue
        <span className="sr-only">Continue</span>
      </Button>
    </>
  );
}

export default BallotUpdateForm;

const Speaker = () => {
  return (
    <Collapsible className="w-full">
      <CollapsibleTrigger className="w-full bg-transparent border-b flex items-center justify-between px-3 py-2">
        <span className="bg-transparent outline-none text-foreground font-semibold text-start">
          Bider Alec
        </span>
        <Icons.chevronUpDown className="w-3 h-3 text-border" />
      </CollapsibleTrigger>
      <CollapsibleContent className="py-3 w-full px-10">
        <div className="flex items-center justify-between gap-3 mb-2">
          <div className="flex flex-col items-center gap-3">
            <span
              className={cn("text-sm text-muted-foreground font-medium", inter)}
            >
              Points
            </span>
            <Input
              placeholder="points"
              className="text-sm text-foreground font-semibold placeholder:font-medium max-w-32 text-center"
            />
          </div>
          <div className="flex flex-col items-center gap-3">
            <span
              className={cn("text-sm text-muted-foreground font-medium", inter)}
            >
              Rank
            </span>
            <div className="flex items-center gap-1">
              <div className="flex items-center justify-center w-8 h-8 bg-primary rounded-md">
                <span className="text-white text-sm">1</span>
              </div>
              <div className="flex items-center justify-center w-8 h-8 border rounded-md">
                <span className="text-foreground text-sm">2</span>
              </div>
              <div className="flex items-center justify-center w-8 h-8 border rounded-md">
                <span className="text-foreground text-sm">3</span>
              </div>
            </div>
          </div>
        </div>
        <Textarea placeholder="Add comment" className="resize-none" />
      </CollapsibleContent>
    </Collapsible>
  );
};
