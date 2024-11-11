import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { getBallot } from "@/core/debates/ballots";
import {
  Ballot,
  Judge,
  Speaker,
} from "@/lib/grpc/proto/debate_management/debate_pb";
import { cn } from "@/lib/utils";
import { useUserStore } from "@/stores/auth/auth.store";
import { Inter } from "next/font/google";
import { useParams } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";

type Props = {
  ballotId: number;
  setSheetOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function BallotViewForm({ ballotId, setSheetOpen }: Props) {
  const { name: tournament_id } = useParams();
  const { user } = useUserStore((state) => state);
  const [activeStep, setActiveStep] = React.useState(1);
  const [ballot, setBallot] = useState<Ballot.AsObject | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const steps = [1, 2, 3];

  const [team1Speakers, setTeam1Speakers] = useState([
    {} as Speaker.AsObject,
    {} as Speaker.AsObject,
    {} as Speaker.AsObject,
  ]);
  const [team2Speakers, setTeam2Speakers] = useState([
    {} as Speaker.AsObject,
    {} as Speaker.AsObject,
    {} as Speaker.AsObject,
  ]);
  const [winner, setWinner] = useState<string>("");

  const fetchBallot = useCallback(async () => {
    if (!user) return;

    setIsLoading(true);
    try {
      const options = {
        token: user.token,
        ballot_id: ballotId,
        tournamentId: Number(tournament_id),
      };

      const res = await getBallot(options);

      if (res.ballot) {
        setBallot(res.ballot);

        const team1 = res.ballot.team1?.speakersList || [];
        setTeam1Speakers(team1);

        const team2 = res.ballot.team2?.speakersList || [];
        setTeam2Speakers(team2);

        setWinner(res.ballot.verdict || "");
      }
    } catch (err) {
      console.error("Error fetching ballot:", err);
    } finally {
      setIsLoading(false);
    }
  }, [ballotId, tournament_id, user]);

  useEffect(() => {
    fetchBallot();
  }, [fetchBallot]);

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
          {number !== 3 ? (
            <>{number === 1 ? ballot?.team1?.name : ballot?.team2?.name}</>
          ) : (
            <>Feedback</>
          )}
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

  const renderSpeakerInputs = (speakers: Speaker.AsObject[]) => (
    <div className="space-y-4">
      {!isLoading &&
        speakers.map((speaker, index) => (
          <Collapsible key={index} className="w-full">
            <CollapsibleTrigger className="w-full bg-transparent border-b flex items-center justify-between px-3 py-2">
              <div className="flex items-center gap-2">
                <span className="bg-transparent outline-none text-foreground font-semibold text-start">
                  {speaker.name}
                </span>
              </div>
              <Icons.chevronUpDown className="w-3 h-3 text-border" />
            </CollapsibleTrigger>
            <CollapsibleContent className="py-3 w-full px-10">
              <div className="flex items-center justify-between gap-3 mb-2">
                <div className="flex flex-col items-center gap-3">
                  <span className="text-sm text-muted-foreground font-medium">
                    Points
                  </span>
                  <div className="flex flex-col items-center gap-1">
                    <Input
                      className="text-sm text-foreground font-semibold placeholder:font-medium max-w-32 text-center"
                      type="number"
                      value={speaker.points}
                      disabled
                    />
                  </div>
                </div>
                <div className="flex flex-col items-center gap-3">
                  <span className="text-sm text-muted-foreground font-medium">
                    Rank
                  </span>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3].map((rank) => (
                      <div
                        key={rank}
                        className={cn(
                          "flex items-center justify-center w-8 h-8 rounded-md",
                          speaker.rank === rank
                            ? "bg-primary text-white"
                            : "border text-foreground"
                        )}
                      >
                        <span>{rank}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor={`feedback-${speaker.name}`} className="text-sm text-muted-foreground">
                  Speaker Feedback
                </Label>
                <Textarea
                  id={`feedback-${speaker.name}`}
                  value={speaker.feedback || "No feedback provided"}
                  className="resize-none"
                  placeholder="No feedback provided"
                  disabled
                />
              </div>
            </CollapsibleContent>
          </Collapsible>
        ))}
    </div>
  );

  const renderVerdictSection = () => {
    return (
      <div className="w-full flex-1">
        <div className="w-full leading-6 mb-6">
          <h3 className="text-lg font-bold text-foreground">Verdict</h3>
          <span className="text-sm text-muted-foreground mb-2">Winner</span>

          <Select value={winner} disabled>
            <SelectTrigger className="w-full">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value={ballot?.team1?.name || "team1"}>
                Affirmative ({ballot?.team1?.name})
              </SelectItem>
              <SelectItem value={ballot?.team2?.name || "team2"}>
                Negative ({ballot?.team2?.name})
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="verdict-rationale" className="text-sm text-muted-foreground">
            Verdict
          </Label>
          <Textarea
            id="verdict-rationale"
            value={ballot?.verdict || "No verdict rationale provided"}
            className="resize-none"
            placeholder="No verdict rationale provided"
            disabled
          />
        </div>
      </div>
    );
  };

  if (isLoading) {
    return <div>Loading ballot data...</div>;
  }

  return (
    <div className="overflow-auto">
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
      {activeStep === 1 && (
        <>
          <div className="w-full flex-1">
            {team1Speakers.length > 0 ? (
              renderSpeakerInputs(team1Speakers)
            ) : (
              <h3>This team is public speaking</h3>
            )}
          </div>
          <div className="flex items-center gap-5 mt-4">
            <Button
              variant="outline"
              disabled={activeStep === 1}
              onClick={() => setActiveStep((prev) => prev - 1)}
            >
              Back
            </Button>
            <Button onClick={() => setActiveStep((prev) => prev + 1)}>
              Continue
            </Button>
          </div>
        </>
      )}

      {activeStep === 2 && (
        <>
          <div className="w-full flex-1">
            {team2Speakers.length > 0 ? (
              renderSpeakerInputs(team2Speakers)
            ) : (
              <h3>This team is public speaking</h3>
            )}
          </div>
          <div className="flex items-center gap-5 mt-4">
            <Button
              variant="outline"
              onClick={() => setActiveStep((prev) => prev - 1)}
            >
              Back
            </Button>
            <Button onClick={() => setActiveStep((prev) => prev + 1)}>
              Continue
            </Button>
          </div>
        </>
      )}

      {activeStep === 3 && (
        <div className="w-full flex-1">
          {renderVerdictSection()}
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              className="mt-5"
              onClick={() => setActiveStep((prev) => prev - 1)}
            >
              Back
            </Button>
            <Button
              variant="outline" 
              className="mt-5"
              onClick={() => setSheetOpen(false)}
            >
              Close
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default BallotViewForm;
