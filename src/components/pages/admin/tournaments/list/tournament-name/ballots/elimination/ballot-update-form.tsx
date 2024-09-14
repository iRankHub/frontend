import { Icons } from "@/components/icons";
import { Badge } from "@/components/ui/badge";
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
import { getBallot, updateBallot } from "@/core/debates/ballots";
import {
  Ballot,
  Speaker,
  Team,
} from "@/lib/grpc/proto/debate_management/debate_pb";
import { cn } from "@/lib/utils";
import { ballotSchema } from "@/lib/validations/admin/tournaments/update-ballot.schema";
import { useBallotsStore } from "@/stores/admin/debate/ballots";
import { useUserStore } from "@/stores/auth/auth.store";
import { BallotUpdateFormProps } from "@/types/pairings/ballots";
import { zodResolver } from "@hookform/resolvers/zod";
import { Inter } from "next/font/google";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";

type Props = {
  ballotId: number;
  setSheetOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const inter = Inter({
  weight: "600",
  subsets: ["latin"],
});

function BallotUpdateForm({ ballotId, setSheetOpen }: Props) {
  const { name: tournament_id } = useParams();
  const { user } = useUserStore((state) => state);
  const { markBallotAsRecorded } = useBallotsStore((state) => state);
  const [activeStep, setActiveStep] = React.useState(1);
  const [ballot, setBallot] = useState<Ballot.AsObject | undefined>(undefined);
  const [isUpdatingBallot, setIsUpdatingBallot] = useState(false);
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
  const [verdict, setVerdict] = useState("");
  const [winner, setWinner] = useState<string>("");

  useEffect(() => {
    if (!user) return;
    const options = {
      token: user.token,
      ballot_id: ballotId,
      tournamentId: Number(tournament_id),
    };
    getBallot(options)
      .then((res) => {
        setTeam1Speakers(res.ballot?.team1?.speakersList as Speaker.AsObject[]);
        setTeam2Speakers(res.ballot?.team2?.speakersList as Speaker.AsObject[]);
        setBallot(res.ballot);
      })
      .catch((err) => {
        console.error(err.message);
      });
  }, [ballotId, tournament_id, user]);

  const handleSpeakerChange = (
    teamIndex: number,
    speakerIndex: number,
    field: keyof Speaker.AsObject,
    value: string | number
  ) => {
    const updateSpeakers = (prevSpeakers: Speaker.AsObject[]) => {
      const newSpeakers = [...prevSpeakers];
      newSpeakers[speakerIndex] = {
        ...newSpeakers[speakerIndex],
        [field]: field === "points" ? parseFloat(value as string) : value,
      };
      return newSpeakers;
    };

    if (teamIndex === 1) {
      setTeam1Speakers(updateSpeakers);
    } else {
      setTeam2Speakers(updateSpeakers);
    }
  };

  const handleSubmitBallot = async () => {
    if (!user) return;
    const options: BallotUpdateFormProps = {
      token: user.token,
      ballot: {
        ballotId: ballotId,
        team1: {
          teamId: ballot?.team1?.teamId as number,
          totalPoints: team1Speakers.reduce(
            (acc, speaker) => acc + (speaker.points || 0),
            0
          ),
          feedback: team1Speakers.reduce(
            (acc, speaker) => acc + (speaker.feedback || ""),
            ""
          ),
          speakersList: team1Speakers,
        },
        team2: {
          teamId: ballot?.team2?.teamId as number,
          totalPoints: team2Speakers.reduce(
            (acc, speaker) => acc + (speaker.points || 0),
            0
          ),
          feedback: team2Speakers.reduce(
            (acc, speaker) => acc + (speaker.feedback || ""),
            ""
          ),
          speakersList: team2Speakers,
        },
        verdict: winner,
      },
    };

    setIsUpdatingBallot(true);
    await updateBallot(options)
      .then((res) => {
        markBallotAsRecorded(ballotId);
      })
      .catch((err) => {
        console.error(err.message);
      })
      .finally(() => {
        setIsUpdatingBallot(false);
        setSheetOpen(false);
      });
  };

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
            {team1Speakers.map((speaker, index) => (
              <Collapsible key={index} className="w-full">
                <CollapsibleTrigger className="w-full bg-transparent border-b flex items-center justify-between px-3 py-2">
                  <span className="bg-transparent outline-none text-foreground font-semibold text-start">
                    {speaker.name}
                  </span>
                  <Icons.chevronUpDown className="w-3 h-3 text-border" />
                </CollapsibleTrigger>
                <CollapsibleContent className="py-3 w-full px-10">
                  <div className="flex items-center justify-between gap-3 mb-2">
                    <div className="flex flex-col items-center gap-3">
                      <span
                        className={cn(
                          "text-sm text-muted-foreground font-medium",
                          inter
                        )}
                      >
                        Points
                      </span>
                      <Input
                        placeholder="points"
                        className="text-sm text-foreground font-semibold placeholder:font-medium max-w-32 text-center"
                        type="number"
                        min="10"
                        max="100"
                        value={speaker.points || ""}
                        onChange={(e) =>
                          handleSpeakerChange(
                            1,
                            index,
                            "points",
                            e.target.value
                          )
                        }
                      />
                    </div>
                    <div className="flex flex-col items-center gap-3">
                      <span
                        className={cn(
                          "text-sm text-muted-foreground font-medium",
                          inter.className
                        )}
                      >
                        Rank
                      </span>
                      <div className="flex items-center gap-1">
                        {team1Speakers.map((_, rank) => (
                          <div
                            key={rank}
                            className={cn(
                              "flex items-center justify-center w-8 h-8 rounded-md cursor-pointer",
                              speaker.rank === rank + 1
                                ? "bg-primary"
                                : "border"
                            )}
                            onClick={() =>
                              handleSpeakerChange(1, index, "rank", rank + 1)
                            }
                          >
                            <span
                              className={
                                speaker.rank === rank + 1
                                  ? "text-white"
                                  : "text-foreground"
                              }
                            >
                              {rank + 1}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <Textarea
                    placeholder="Add comment"
                    className="resize-none"
                    value={speaker.feedback || ""}
                    onChange={(e) =>
                      handleSpeakerChange(1, index, "feedback", e.target.value)
                    }
                  />
                </CollapsibleContent>
              </Collapsible>
            ))}
          </div>
          <div className="flex items-center gap-5">
            <Button
              variant="outline"
              className="mt-5"
              type="button"
              onClick={() => {
                activeStep > 1 && setActiveStep((prev) => prev - 1);
              }}
            >
              Back
              <span className="sr-only">Back</span>
            </Button>
            <Button
              className="mt-5"
              type="button"
              onClick={() => {
                setActiveStep((prev) => prev + 1);
              }}
            >
              Continue
              <span className="sr-only">Continue</span>
            </Button>
          </div>
        </>
      )}

      {activeStep === 2 && (
        <>
          <div className="w-full flex-1">
            {team2Speakers.map((speaker, index) => (
              <Collapsible key={index} className="w-full">
                <CollapsibleTrigger className="w-full bg-transparent border-b flex items-center justify-between px-3 py-2">
                  <span className="bg-transparent outline-none text-foreground font-semibold text-start">
                    {speaker.name}
                  </span>
                  <Icons.chevronUpDown className="w-3 h-3 text-border" />
                </CollapsibleTrigger>
                <CollapsibleContent className="py-3 w-full px-10">
                  <div className="flex items-center justify-between gap-3 mb-2">
                    <div className="flex flex-col items-center gap-3">
                      <span
                        className={cn(
                          "text-sm text-muted-foreground font-medium",
                          inter
                        )}
                      >
                        Points
                      </span>
                      <Input
                        placeholder="points"
                        className="text-sm text-foreground font-semibold placeholder:font-medium max-w-32 text-center"
                        type="number"
                        min="10"
                        max="100"
                        value={speaker.points || ""}
                        onChange={(e) =>
                          handleSpeakerChange(
                            2,
                            index,
                            "points",
                            e.target.value
                          )
                        }
                      />
                    </div>
                    <div className="flex flex-col items-center gap-3">
                      <span
                        className={cn(
                          "text-sm text-muted-foreground font-medium",
                          inter.className
                        )}
                      >
                        Rank
                      </span>
                      <div className="flex items-center gap-1">
                        {team2Speakers.map((_, rank) => (
                          <div
                            key={rank}
                            className={cn(
                              "flex items-center justify-center w-8 h-8 rounded-md cursor-pointer",
                              speaker.rank === rank + 1
                                ? "bg-primary"
                                : "border"
                            )}
                            onClick={() =>
                              handleSpeakerChange(1, index, "rank", rank + 1)
                            }
                          >
                            <span
                              className={
                                speaker.rank === rank + 1
                                  ? "text-white"
                                  : "text-foreground"
                              }
                            >
                              {rank + 1}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <Textarea
                    placeholder="Add comment"
                    className="resize-none"
                    value={speaker.feedback || ""}
                    onChange={(e) =>
                      handleSpeakerChange(2, index, "feedback", e.target.value)
                    }
                  />
                </CollapsibleContent>
              </Collapsible>
            ))}
          </div>
          <div className="flex items-center gap-5">
            <Button
              variant="outline"
              className="mt-5"
              type="button"
              onClick={() => {
                activeStep > 1 && setActiveStep((prev) => prev - 1);
              }}
            >
              Back
              <span className="sr-only">Back</span>
            </Button>
            <Button
              className="mt-5"
              type="button"
              onClick={() => {
                setActiveStep((prev) => prev + 1);
              }}
            >
              Continue
              <span className="sr-only">Continue</span>
            </Button>
          </div>
        </>
      )}

      {activeStep === 3 && (
        <div className="w-full flex-1">
          <div className="w-full leading-6 mb-3">
            <h3 className="text-lg font-bold text-foreground">Verdict</h3>
            <span>winner</span>

            <Select value={winner} onValueChange={setWinner}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="choose team" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="team1">
                  Affirmative {ballot?.team1?.name}
                </SelectItem>
                <SelectItem value="team2">
                  Negative {ballot?.team2?.name}
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label
              htmlFor="verdict"
              className="text-foreground font-medium mb-3"
            >
              Why are they the winners?
            </Label>
            <Textarea
              placeholder="Add comment"
              value={verdict}
              onChange={(e) => setVerdict(e.target.value)}
              className="resize-none"
            />
          </div>

          <p className="mt-5 text-sm font-semibold text-foreground">
            Once you submit the ballot, you will not be able to edit or view it.
            Are you sure you want to submit?
          </p>
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              className="mt-5"
              type="button"
              onClick={() => {
                activeStep > 1 && setActiveStep((prev) => prev - 1);
              }}
            >
              Back
              <span className="sr-only">Back</span>
            </Button>
            <Button className="mt-5" type="button" onClick={handleSubmitBallot}>
              Submit
              {isUpdatingBallot && (
                <Icons.spinner
                  className="mx-2 h-4 w-4 animate-spin"
                  aria-hidden="true"
                />
              )}
              <span className="sr-only">Submit</span>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default BallotUpdateForm;
