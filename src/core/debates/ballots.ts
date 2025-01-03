import { BallotUpdateFormProps, GetBallotProps, GetBallotsByJudgeIdProps, GetBallotsProps } from "@/types/pairings/ballots";
import { debateClient } from "../grpc-clients";
import { Ballot, GetBallotByJudgeIDRequest, GetBallotByJudgeIDResponse, GetBallotRequest, GetBallotResponse, GetBallotsRequest, Judge, Speaker, Team, UpdateBallotRequest } from "@/lib/grpc/proto/debate_management/debate_pb";

export const getBallots = async ({
    token,
    tournament_id,
    is_elimination,
    round
}: GetBallotsProps): Promise<Ballot.AsObject[]> => {
    return new Promise((resolve, reject) => {
        const request = new GetBallotsRequest();
        request.setToken(token);
        request.setTournamentId(tournament_id);
        request.setIsElimination(is_elimination);
        request.setRoundNumber(round);

        debateClient.getBallots(request, {}, (err, response) => {
            if (err) {
                reject(err);
            } else {
                resolve(response.toObject().ballotsList);
            }
        });
    });
}

export const getBallotsByJudgeId = async ({
    token,
    judge_id,
    tournament_id,
}: GetBallotsByJudgeIdProps): Promise<GetBallotByJudgeIDResponse.AsObject> => {
    return new Promise((resolve, reject) => {
        const request = new GetBallotByJudgeIDRequest();
        request.setToken(token);
        request.setJudgeId(judge_id);
        request.setTournamentId(tournament_id);

        debateClient.getBallotByJudgeID(request, {}, (err, response) => {
            if (err) {
                reject(err);
            } else {
                resolve(response.toObject());
            }
        });
    });
}

export const getBallot = async ({
    token,
    ballot_id
}: GetBallotProps & { ballot_id: number }): Promise<GetBallotResponse.AsObject> => {
    return new Promise((resolve, reject) => {
        const request = new GetBallotRequest();
        request.setToken(token);
        request.setBallotId(ballot_id);

        debateClient.getBallot(request, {}, (err, response) => {
            if (err) {
                reject(err);
            } else {
                resolve(response.toObject());
            }
        });
    });
}

export const updateBallot = async ({
    ballot,
    token,
}: BallotUpdateFormProps): Promise<Ballot.AsObject | undefined> => {
    return new Promise((resolve, reject) => {
        const request = new UpdateBallotRequest();
        request.setToken(token);

        const updatedBallot = new Ballot();
        updatedBallot.setBallotId(ballot.ballotId);
        updatedBallot.setVerdict(ballot.verdict);

        const judges = ballot.judges.map(judge => {
            const newJudge = new Judge();
            newJudge.setJudgeId(judge.judgeId);
            newJudge.setName(judge.name);
            newJudge.setIdebateId(judge.idebateId);
            newJudge.setEliminationDebates(judge.eliminationDebates);
            newJudge.setPreliminaryDebates(judge.preliminaryDebates);
            return newJudge;
        });
        updatedBallot.setJudgesList(judges);

        const team1 = new Team();
        team1.setTeamId(ballot.team1.teamId);
        team1.setTotalPoints(ballot.team1.totalPoints);
        team1.setFeedback(ballot.team1.feedback);
        team1.setSpeakerNamesList(ballot.team1.speakers_names);
        ballot.team1.speakersList.forEach(speaker => {
            const speaker1 = new Speaker();
            speaker1.setScoreId(speaker.scoreId);
            speaker1.setSpeakerId(speaker.speakerId);
            speaker1.setRank(speaker.rank);
            speaker1.setPoints(speaker.points);
            speaker1.setFeedback(speaker.feedback);
            team1.addSpeakers(speaker1);
        });
        updatedBallot.setTeam1(team1);

        const team2 = new Team();
        team2.setTeamId(ballot.team2.teamId);
        team2.setTotalPoints(ballot.team2.totalPoints);
        team2.setFeedback(ballot.team2.feedback);
        team2.setSpeakerNamesList(ballot.team2.speakers_names);
        ballot.team2.speakersList.forEach(speaker => {
            const speaker2 = new Speaker();
            speaker2.setScoreId(speaker.scoreId);
            speaker2.setSpeakerId(speaker.speakerId);
            speaker2.setRank(speaker.rank);
            speaker2.setPoints(speaker.points);
            speaker2.setFeedback(speaker.feedback);
            team2.addSpeakers(speaker2);
        });
        updatedBallot.setTeam2(team2);

        request.setBallot(updatedBallot);

        console.log(request.toObject());

        debateClient.updateBallot(request, {}, (err, response) => {
            if (err) {
                reject(err);
            } else {
                resolve(response.toObject().ballot);
            }
        });
    });
}