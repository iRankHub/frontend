import { Icons } from "@/components/icons";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Textarea } from "@/components/ui/textarea";
import { Speaker as SpeakerObject } from "@/lib/grpc/proto/debate_management/debate_pb";
import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";
import { FC } from "react";

const inter = Inter({
  weight: "600",
  subsets: ["latin"],
});
interface SpeakerProps {
  speaker: SpeakerObject.AsObject;
  onUpdate: (field: keyof SpeakerObject.AsObject, value: any) => void;
}

const TournamentSpeaker: React.FC<SpeakerProps> = ({ speaker, onUpdate }) => {
  return (
    <Collapsible className="w-full">
      <CollapsibleTrigger className="w-full bg-transparent border-b flex items-center justify-between px-3 py-2">
        <span className="bg-transparent outline-none text-foreground font-semibold text-start">
          Speaker {speaker.name}
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
              value={speaker.points}
              onChange={(e) => onUpdate("points", parseFloat(e.target.value))}
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
              {[1, 2, 3].map((rank) => (
                <div
                  key={rank}
                  className={cn(
                    "flex items-center justify-center w-8 h-8 rounded-md cursor-pointer",
                    speaker.rank === rank ? "bg-primary" : "border"
                  )}
                  onClick={() => onUpdate("rank", rank)}
                >
                  <span
                    className={
                      speaker.rank === rank ? "text-white" : "text-foreground"
                    }
                  >
                    {rank}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Textarea
          placeholder="Add comment"
          value={speaker.feedback}
          onChange={(e) => onUpdate("feedback", e.target.value)}
          className="resize-none"
        />
      </CollapsibleContent>
    </Collapsible>
  );
};

export default TournamentSpeaker;
