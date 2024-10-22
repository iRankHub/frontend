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
import { useToast } from "@/components/ui/use-toast";
import { getBallot, updateBallot } from "@/core/debates/ballots";
import {
  Ballot,
  Judge,
  Speaker,
  Team,
} from "@/lib/grpc/proto/debate_management/debate_pb";
import { cn } from "@/lib/utils";
import { useBallotsStore } from "@/stores/admin/debate/ballots";
import { useUserStore } from "@/stores/auth/auth.store";
import { BallotUpdateFormProps } from "@/types/pairings/ballots";
import { Inter } from "next/font/google";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

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
  const toast = useToast();
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

  const [team1Rankings, setTeam1Rankings] = useState<number[]>([]);
  const [team2Rankings, setTeam2Rankings] = useState<number[]>([]);
  const [isTeam1RankingCalculated, setIsTeam1RankingCalculated] =
    useState(false);
  const [isTeam2RankingCalculated, setIsTeam2RankingCalculated] =
    useState(false);
  const [team1PointsChanged, setTeam1PointsChanged] = useState(false);
  const [team2PointsChanged, setTeam2PointsChanged] = useState(false);

  const calculateRankings = (teamIndex: number) => {
    const speakers = teamIndex === 1 ? team1Speakers : team2Speakers;
    let sortedSpeakers = speakers
      .map((speaker, index) => ({
        name: speaker.name,
        score: speaker.points || 0,
        originalOrder: index + 1,
      }))
      .sort((a, b) => {
        if (b.score !== a.score) {
          return b.score - a.score;
        }
        // If scores are tied, use the tiebreaker rules
        if (a.originalOrder === 2 && b.originalOrder === 3) {
          return -1; // a comes before b
        }
        if (a.originalOrder === 3 && b.originalOrder === 2) {
          return 1; // b comes before a
        }
        return a.originalOrder - b.originalOrder;
      });

    // Calculate rankings based on the sorted order
    const rankings = new Array(speakers.length).fill(0);
    sortedSpeakers.forEach((speaker, index) => {
      rankings[speaker.originalOrder - 1] = index + 1;
    });

    if (teamIndex === 1) {
      setTeam1Rankings(rankings);
      setIsTeam1RankingCalculated(true);
      setTeam1PointsChanged(false);
    } else {
      setTeam2Rankings(rankings);
      setIsTeam2RankingCalculated(true);
      setTeam2PointsChanged(false);
    }
  };

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
        [field]: field === "points" ? parseFloat(value as string) || 0 : value,
      };
      return newSpeakers;
    };

    if (teamIndex === 1) {
      setTeam1Speakers(updateSpeakers);
      if (field === "points") {
        setTeam1PointsChanged(true);
      }
    } else {
      setTeam2Speakers(updateSpeakers);
      if (field === "points") {
        setTeam2PointsChanged(true);
      }
    }
  };

  const handleCalculateRankings = () => {
    calculateRankings(activeStep);
  };

  const handleContinue = () => {
    if (activeStep < 3) {
      setActiveStep((prev) => prev + 1);
    }
  };

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

  const sortSpeakersByPoints = (speakers: Speaker.AsObject[]) => {
    return speakers
      .map((speaker, index) => ({ ...speaker, originalIndex: index }))
      .sort((a, b) => {
        if (b.points !== a.points) {
          return b.points - a.points;
        }
        // If scores are tied, use the original index as a tiebreaker
        return a.originalIndex - b.originalIndex;
      })
      .map(({ originalIndex, ...speaker }) => speaker); // Remove the temporary originalIndex
  };

  const handleSubmitBallot = async () => {
    if (!user) return;

    // Ensure rankings are calculated for both teams before submission
    if (!isTeam1RankingCalculated) {
      calculateRankings(1);
    }
    if (!isTeam2RankingCalculated) {
      calculateRankings(2);
    }

    const sortedTeam1Speakers = sortSpeakersByPoints(team1Speakers);
    const sortedTeam2Speakers = sortSpeakersByPoints(team2Speakers);

    const options: BallotUpdateFormProps = {
      token: user.token,
      ballot: {
        ballotId: ballotId,
        judges: ballot?.judgesList as Judge.AsObject[],
        team1: {
          teamId: ballot?.team1?.teamId as number,
          speakers_names: ballot?.team1?.speakerNamesList || [],
          totalPoints: sortedTeam1Speakers.reduce(
            (acc, speaker) => acc + (speaker.points || 0),
            0
          ),
          feedback: sortedTeam1Speakers.reduce(
            (acc, speaker) => acc + (speaker.feedback || ""),
            ""
          ),
          speakersList: sortedTeam1Speakers.map((speaker, index) => ({
            ...speaker,
            rank: team1Rankings[index],
          })),
        },
        team2: {
          teamId: ballot?.team2?.teamId as number,
          speakers_names: ballot?.team2?.speakerNamesList || [],
          totalPoints: sortedTeam2Speakers.reduce(
            (acc, speaker) => acc + (speaker.points || 0),
            0
          ),
          feedback: sortedTeam2Speakers.reduce(
            (acc, speaker) => acc + (speaker.feedback || ""),
            ""
          ),
          speakersList: sortedTeam2Speakers.map((speaker, index) => ({
            ...speaker,
            rank: team2Rankings[index],
          })),
        },
        verdict: winner,
      },
    };

    setIsUpdatingBallot(true);
    try {
      await updateBallot(options);
      markBallotAsRecorded(ballotId);
      setSheetOpen(false);
    } catch (err) {
      console.error(err);
      // Handle error (e.g., show error message to user)
      toast.toast({
        title: "Error",
        description:
          "An error occurred while updating the ballot. This can happen if you are not the head judge of this debate or an error on our end!",
        variant: "destructive",
      });
    } finally {
      setIsUpdatingBallot(false);
    }
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

  const areAllPointsFilled = (teamIndex: number) => {
    const speakers = teamIndex === 1 ? team1Speakers : team2Speakers;
    return speakers.every(
      (speaker) =>
        speaker.points !== undefined &&
        speaker.points !== null &&
        speaker.points !== 0
    );
  };

  const renderSpeakerInputs = (
    teamIndex: number,
    speakers: Speaker.AsObject[],
    rankings: number[]
  ) => (
    <>
      {speakers.map((speaker, index) => (
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
                <span className="text-sm text-muted-foreground font-medium">
                  Points
                </span>
                <Input
                  placeholder="points"
                  className="text-sm text-foreground font-semibold placeholder:font-medium max-w-32 text-center"
                  type="number"
                  min="10"
                  max="100"
                  value={speaker.points || ""}
                  onChange={(e) => {
                    if (
                      Number(e.target.value) < 0 ||
                      Number(e.target.value) > 30
                    ) {
                      return;
                    }
                    handleSpeakerChange(
                      teamIndex,
                      index,
                      "points",
                      e.target.value
                    );
                  }}
                />
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
                        (teamIndex === 1
                          ? isTeam1RankingCalculated
                          : isTeam2RankingCalculated) &&
                          rankings[index] === rank
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
            <Textarea
              placeholder="Add comment"
              className="resize-none"
              value={speaker.feedback || ""}
              onChange={(e) =>
                handleSpeakerChange(
                  teamIndex,
                  index,
                  "feedback",
                  e.target.value
                )
              }
            />
          </CollapsibleContent>
        </Collapsible>
      ))}
    </>
  );

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
              renderSpeakerInputs(1, team1Speakers, team1Rankings)
            ) : (
              <h3>This team is public speaking</h3>
            )}
          </div>
          <p>The minimum score for speakers should be 23!</p>
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
            {!isTeam1RankingCalculated || team1PointsChanged ? (
              <Button
                type="button"
                className="mt-5"
                onClick={handleCalculateRankings}
                disabled={!areAllPointsFilled(1)}
              >
                Calculate Ranking
                <span className="sr-only">Calculate Ranking</span>
              </Button>
            ) : (
              <Button type="button" className="mt-5" onClick={handleContinue}>
                Continue
                <span className="sr-only">Continue</span>
              </Button>
            )}
          </div>
        </>
      )}

      {activeStep === 2 && (
        <>
          <div className="w-full flex-1">
            {team2Speakers.length > 0 ? (
              renderSpeakerInputs(2, team2Speakers, team2Rankings)
            ) : (
              <h3>This team is public speaking</h3>
            )}
          </div>
          <p>The minimum score for speakers should be 23!</p>
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
            {!isTeam2RankingCalculated || team2PointsChanged ? (
              <Button
                type="button"
                className="mt-5"
                onClick={handleCalculateRankings}
                disabled={!areAllPointsFilled(2)}
              >
                Calculate Ranking
                <span className="sr-only">Calculate Ranking</span>
              </Button>
            ) : (
              <Button type="button" className="mt-5" onClick={handleContinue}>
                Continue
                <span className="sr-only">Continue</span>
              </Button>
            )}
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
                <SelectItem value={ballot?.team1?.name || "team1"}>
                  Affirmative ({ballot?.team1?.name})
                </SelectItem>
                <SelectItem value={ballot?.team2?.name || "team2"}>
                  Negative ({ballot?.team2?.name})
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
              onClick={() => setActiveStep((prev) => prev - 1)}
            >
              Back
              <span className="sr-only">Back</span>
            </Button>
            <Button
              className="mt-5"
              type="button"
              onClick={handleSubmitBallot}
              disabled={
                !isTeam1RankingCalculated ||
                !isTeam2RankingCalculated ||
                !winner ||
                isUpdatingBallot
              }
            >
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
