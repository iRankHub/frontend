import { CreateTournamentRequest, CreateTournamentResponse, Motion, TournamentMotions } from "@/lib/grpc/proto/tournament_management/tournament_pb";
import { CreateTournamentType } from "@/types/tournaments/tournament";
import { tournamentClient } from "../grpc-clients";

export const createTournament = async ({
    coordinator_id,
    end_date,
    format_id,
    judges_per_debate_elimination,
    judges_per_debate_preliminary,
    league_id,
    location,
    name,
    number_of_elimination_rounds,
    number_of_preliminary_rounds,
    start_date,
    tournament_fee,
    token,
    image_url,
    motions,
}: CreateTournamentType): Promise<CreateTournamentResponse.AsObject> => {
    return new Promise((resolve, reject) => {
        const request = new CreateTournamentRequest();
        request.setCoordinatorId(coordinator_id);
        request.setEndDate(end_date);
        request.setFormatId(format_id);
        request.setJudgesPerDebateElimination(judges_per_debate_elimination);
        request.setJudgesPerDebatePreliminary(judges_per_debate_preliminary);
        request.setLeagueId(league_id);
        request.setLocation(location);
        request.setName(name);
        request.setNumberOfEliminationRounds(number_of_elimination_rounds);
        request.setNumberOfPreliminaryRounds(number_of_preliminary_rounds);
        request.setStartDate(start_date);
        request.setTournamentFee(tournament_fee);
        request.setToken(token);

        // Handle tournament motions
        const tournamentMotion = new TournamentMotions();

        // Handle elimination motions
        const motionList_elimination: Motion[] = motions.elimination_motions.map((motion) => {
            const newMotion = new Motion();
            newMotion.setText(motion.text);
            newMotion.setInfoSlide(motion.info_slide);
            newMotion.setRoundNumber(motion.round_number);
            return newMotion;
        });
        tournamentMotion.setEliminationMotionsList(motionList_elimination);

        // Handle preliminary motions
        const motionList_preliminary: Motion[] = motions.preliminary_motions.map((motion) => {
            const newMotion = new Motion();
            newMotion.setText(motion.text);
            newMotion.setInfoSlide(motion.info_slide);
            newMotion.setRoundNumber(motion.round_number);
            return newMotion;
        });
        tournamentMotion.setPreliminaryMotionsList(motionList_preliminary);

        // Set motions in the request
        request.setMotions(tournamentMotion);

        // Handle optional image URL
        if (image_url) {
            request.setImageUrl(image_url);
        }

        // Make the request
        tournamentClient.createTournament(request, {}, (err, response) => {
            if (err) {
                reject(err);
            } else {
                resolve(response.toObject());
            }
        });
    });
};
