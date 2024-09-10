import { GetBallotProps, GetBallotsProps } from "@/types/pairings/ballots";
import { debateClient } from "../grpc-clients";
import { Ballot, GetBallotRequest, GetBallotResponse, GetBallotsRequest, UpdateBallotRequest } from "@/lib/grpc/proto/debate_management/debate_pb";

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

export const updateBallot = async (token: string, ballot: Ballot.AsObject): Promise<void> => {
    return new Promise((resolve, reject) => {
        const request = new UpdateBallotRequest();

        // expected format
        // {
        //     "ballot": {
        //         "ballot_id": -1097044147,
        //         "head_judge_submitted": false,
        //         "is_elimination": true,
        //         "judges": [
        //             {
        //                 "judge_id": -1176996705,
        //                 "name": "voluptate magna ut ut sit",
        //                 "idebate_id": "cupidatat magna ut enim",
        //                 "preliminary_debates": 932690385,
        //                 "elimination_debates": 790606470
        //             },
        //             {
        //                 "judge_id": -1084593250,
        //                 "name": "ex quis anim",
        //                 "idebate_id": "ullamco eiusmod dolore mollit",
        //                 "preliminary_debates": 783856384,
        //                 "elimination_debates": 45204420
        //             },
        //             {
        //                 "judge_id": 385307234,
        //                 "name": "sunt occaecat exercitation ea",
        //                 "idebate_id": "id eiusmod proident dolore tempor",
        //                 "preliminary_debates": -1504688133,
        //                 "elimination_debates": 287257459
        //             },
        //             {
        //                 "judge_id": -110552491,
        //                 "name": "dolor sunt cupidatat quis",
        //                 "idebate_id": "et adipisicing in",
        //                 "preliminary_debates": 757898700,
        //                 "elimination_debates": -778094404
        //             }
        //         ],
        //         "last_updated_at": "occaecat",
        //         "last_updated_by": 312524022,
        //         "recording_status": "Excepteur amet tempor in",
        //         "room_id": 308559070,
        //         "room_name": "nulla occaecat culpa cupidatat exercitation",
        //         "round_number": -383096657,
        //         "team1": {
        //             "feedback": "nisi ullamco in",
        //             "league_name": "reprehenderit sed ut amet adipisicing",
        //             "name": "sed eu non",
        //             "speaker_names": [
        //                 "exercitation",
        //                 "labore ea",
        //                 "veniam occaecat velit culpa",
        //                 "dolor quis enim ex dolore"
        //             ],
        //             "speakers": [
        //                 {
        //                     "speaker_id": -1861663112,
        //                     "name": "do culpa",
        //                     "score_id": -533517686,
        //                     "rank": 1030530841,
        //                     "points": -83068607.4337411,
        //                     "feedback": "elit dolor magna dolore",
        //                     "team_id": 378195330,
        //                     "team_name": "in"
        //                 },
        //                 {
        //                     "speaker_id": 2142701073,
        //                     "name": "officia",
        //                     "score_id": 1440363886,
        //                     "rank": -1750147323,
        //                     "points": 38153528.81624779,
        //                     "feedback": "commodo laboris",
        //                     "team_id": 1919429810,
        //                     "team_name": "cupidatat nisi aliquip commodo quis"
        //                 },
        //                 {
        //                     "speaker_id": -401314074,
        //                     "name": "velit dolor laborum dolore nulla",
        //                     "score_id": -239903668,
        //                     "rank": -85286250,
        //                     "points": -91476499.59737536,
        //                     "feedback": "ea ex et",
        //                     "team_id": 999019377,
        //                     "team_name": "sint sunt elit fugiat"
        //                 }
        //             ],
        //             "team_id": -928677012,
        //             "total_points": -23720908.508113995
        //         },
        //         "team2": {
        //             "feedback": "enim",
        //             "league_name": "exercitation nostrud amet Excepteur",
        //             "name": "exercitation minim ut",
        //             "speaker_names": [
        //                 "laborum id cupidatat adipisicing",
        //                 "sit",
        //                 "voluptate",
        //                 "cupidatat fugiat voluptate"
        //             ],
        //             "speakers": [
        //                 {
        //                     "speaker_id": -945074627,
        //                     "name": "esse",
        //                     "score_id": 903150207,
        //                     "rank": -1034150614,
        //                     "points": 59073493.69879848,
        //                     "feedback": "anim dolor",
        //                     "team_id": 2102584113,
        //                     "team_name": "ipsum Lorem officia ut in"
        //                 },
        //                 {
        //                     "speaker_id": 1885227381,
        //                     "name": "Lorem sit elit tempor commodo",
        //                     "score_id": -2067057256,
        //                     "rank": 804366198,
        //                     "points": 80942082.56835204,
        //                     "feedback": "irure",
        //                     "team_id": 489634167,
        //                     "team_name": "cupidatat irure"
        //                 },
        //                 {
        //                     "speaker_id": 967108893,
        //                     "name": "voluptate",
        //                     "score_id": 1200516525,
        //                     "rank": 973990732,
        //                     "points": -49571838.723076135,
        //                     "feedback": "proident ad in aute",
        //                     "team_id": 273800902,
        //                     "team_name": "sed amet ut sit incididunt"
        //                 },
        //                 {
        //                     "speaker_id": -2092812381,
        //                     "name": "velit exercitation eiusmod cupidatat",
        //                     "score_id": 685055041,
        //                     "rank": -991606283,
        //                     "points": -64626544.292368405,
        //                     "feedback": "dolore culpa nostrud elit",
        //                     "team_id": 414241665,
        //                     "team_name": "eu aute Ut sint id"
        //                 },
        //                 {
        //                     "speaker_id": 1346819665,
        //                     "name": "mollit eu pariatur ipsum dolore",
        //                     "score_id": -1839253634,
        //                     "rank": 147623131,
        //                     "points": 81697043.92173105,
        //                     "feedback": "sunt ut culpa incididunt dolore",
        //                     "team_id": -100382069,
        //                     "team_name": "proident consequat sunt eiusmod"
        //                 }
        //             ],
        //             "team_id": 311677479,
        //             "total_points": -67595854.38976398
        //         },
        //         "verdict": "sed eiusmod cupidatat"
        //     },
        //     "token": "dolore mollit et"
        // }

        // request.setToken(token);
        // request.setBallotId(ballot.ballot_id);
        // request.setBallot(new Ballot().fromObject(ballot));

        // debateClient.updateBallot(request, {}, (err) => {
        //     if (err) {
        //         reject(err);
        //     } else {
        //         resolve();
        //     }
        // });
    });
}