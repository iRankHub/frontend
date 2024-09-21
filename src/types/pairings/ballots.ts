import { Judge, Speaker } from "@/lib/grpc/proto/debate_management/debate_pb";

export interface GetBallotsProps {
    token: string;
    tournament_id: number;
    is_elimination: boolean;
    round: number;
}

export interface GetBallotProps {
    token: string;
    ballot_id: number;
}

export interface BallotUpdateFormProps {
    token: string;
    ballot: {
      ballotId: number;
      judges: Judge.AsObject[];
      team1: {
        teamId: number;
        totalPoints: number;
        feedback: string;
        speakers_names: string[];
        speakersList: Speaker.AsObject[];
      };
      team2: {
        teamId: number;
        totalPoints: number;
        feedback: string;
        speakers_names: string[];
        speakersList: Speaker.AsObject[];
      };
      verdict: string;
    };
  }