import * as jspb from 'google-protobuf'



export class Room extends jspb.Message {
  getRoomId(): number;
  setRoomId(value: number): Room;

  getRoomName(): string;
  setRoomName(value: string): Room;

  getRoundStatusList(): Array<RoundStatus>;
  setRoundStatusList(value: Array<RoundStatus>): Room;
  clearRoundStatusList(): Room;
  addRoundStatus(value?: RoundStatus, index?: number): RoundStatus;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Room.AsObject;
  static toObject(includeInstance: boolean, msg: Room): Room.AsObject;
  static serializeBinaryToWriter(message: Room, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Room;
  static deserializeBinaryFromReader(message: Room, reader: jspb.BinaryReader): Room;
}

export namespace Room {
  export type AsObject = {
    roomId: number,
    roomName: string,
    roundStatusList: Array<RoundStatus.AsObject>,
  }
}

export class RoundStatus extends jspb.Message {
  getRoundNumber(): number;
  setRoundNumber(value: number): RoundStatus;

  getIsElimination(): boolean;
  setIsElimination(value: boolean): RoundStatus;

  getIsOccupied(): boolean;
  setIsOccupied(value: boolean): RoundStatus;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RoundStatus.AsObject;
  static toObject(includeInstance: boolean, msg: RoundStatus): RoundStatus.AsObject;
  static serializeBinaryToWriter(message: RoundStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RoundStatus;
  static deserializeBinaryFromReader(message: RoundStatus, reader: jspb.BinaryReader): RoundStatus;
}

export namespace RoundStatus {
  export type AsObject = {
    roundNumber: number,
    isElimination: boolean,
    isOccupied: boolean,
  }
}

export class GetRoomsRequest extends jspb.Message {
  getTournamentId(): number;
  setTournamentId(value: number): GetRoomsRequest;

  getRoundNumber(): number;
  setRoundNumber(value: number): GetRoomsRequest;

  getIsElimination(): boolean;
  setIsElimination(value: boolean): GetRoomsRequest;

  getToken(): string;
  setToken(value: string): GetRoomsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRoomsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetRoomsRequest): GetRoomsRequest.AsObject;
  static serializeBinaryToWriter(message: GetRoomsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRoomsRequest;
  static deserializeBinaryFromReader(message: GetRoomsRequest, reader: jspb.BinaryReader): GetRoomsRequest;
}

export namespace GetRoomsRequest {
  export type AsObject = {
    tournamentId: number,
    roundNumber: number,
    isElimination: boolean,
    token: string,
  }
}

export class GetRoomsResponse extends jspb.Message {
  getRoomsList(): Array<Room>;
  setRoomsList(value: Array<Room>): GetRoomsResponse;
  clearRoomsList(): GetRoomsResponse;
  addRooms(value?: Room, index?: number): Room;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRoomsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetRoomsResponse): GetRoomsResponse.AsObject;
  static serializeBinaryToWriter(message: GetRoomsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRoomsResponse;
  static deserializeBinaryFromReader(message: GetRoomsResponse, reader: jspb.BinaryReader): GetRoomsResponse;
}

export namespace GetRoomsResponse {
  export type AsObject = {
    roomsList: Array<Room.AsObject>,
  }
}

export class GetRoomRequest extends jspb.Message {
  getRoomId(): number;
  setRoomId(value: number): GetRoomRequest;

  getToken(): string;
  setToken(value: string): GetRoomRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRoomRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetRoomRequest): GetRoomRequest.AsObject;
  static serializeBinaryToWriter(message: GetRoomRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRoomRequest;
  static deserializeBinaryFromReader(message: GetRoomRequest, reader: jspb.BinaryReader): GetRoomRequest;
}

export namespace GetRoomRequest {
  export type AsObject = {
    roomId: number,
    token: string,
  }
}

export class GetRoomResponse extends jspb.Message {
  getRoom(): Room | undefined;
  setRoom(value?: Room): GetRoomResponse;
  hasRoom(): boolean;
  clearRoom(): GetRoomResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRoomResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetRoomResponse): GetRoomResponse.AsObject;
  static serializeBinaryToWriter(message: GetRoomResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRoomResponse;
  static deserializeBinaryFromReader(message: GetRoomResponse, reader: jspb.BinaryReader): GetRoomResponse;
}

export namespace GetRoomResponse {
  export type AsObject = {
    room?: Room.AsObject,
  }
}

export class UpdateRoomRequest extends jspb.Message {
  getRoom(): Room | undefined;
  setRoom(value?: Room): UpdateRoomRequest;
  hasRoom(): boolean;
  clearRoom(): UpdateRoomRequest;

  getToken(): string;
  setToken(value: string): UpdateRoomRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateRoomRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateRoomRequest): UpdateRoomRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateRoomRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateRoomRequest;
  static deserializeBinaryFromReader(message: UpdateRoomRequest, reader: jspb.BinaryReader): UpdateRoomRequest;
}

export namespace UpdateRoomRequest {
  export type AsObject = {
    room?: Room.AsObject,
    token: string,
  }
}

export class UpdateRoomResponse extends jspb.Message {
  getRoom(): Room | undefined;
  setRoom(value?: Room): UpdateRoomResponse;
  hasRoom(): boolean;
  clearRoom(): UpdateRoomResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateRoomResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateRoomResponse): UpdateRoomResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateRoomResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateRoomResponse;
  static deserializeBinaryFromReader(message: UpdateRoomResponse, reader: jspb.BinaryReader): UpdateRoomResponse;
}

export namespace UpdateRoomResponse {
  export type AsObject = {
    room?: Room.AsObject,
  }
}

export class Judge extends jspb.Message {
  getJudgeId(): number;
  setJudgeId(value: number): Judge;

  getName(): string;
  setName(value: string): Judge;

  getEmail(): string;
  setEmail(value: string): Judge;

  getIsHeadJudge(): boolean;
  setIsHeadJudge(value: boolean): Judge;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Judge.AsObject;
  static toObject(includeInstance: boolean, msg: Judge): Judge.AsObject;
  static serializeBinaryToWriter(message: Judge, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Judge;
  static deserializeBinaryFromReader(message: Judge, reader: jspb.BinaryReader): Judge;
}

export namespace Judge {
  export type AsObject = {
    judgeId: number,
    name: string,
    email: string,
    isHeadJudge: boolean,
  }
}

export class GetJudgesRequest extends jspb.Message {
  getTournamentId(): number;
  setTournamentId(value: number): GetJudgesRequest;

  getRoundNumber(): number;
  setRoundNumber(value: number): GetJudgesRequest;

  getIsElimination(): boolean;
  setIsElimination(value: boolean): GetJudgesRequest;

  getToken(): string;
  setToken(value: string): GetJudgesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetJudgesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetJudgesRequest): GetJudgesRequest.AsObject;
  static serializeBinaryToWriter(message: GetJudgesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetJudgesRequest;
  static deserializeBinaryFromReader(message: GetJudgesRequest, reader: jspb.BinaryReader): GetJudgesRequest;
}

export namespace GetJudgesRequest {
  export type AsObject = {
    tournamentId: number,
    roundNumber: number,
    isElimination: boolean,
    token: string,
  }
}

export class GetJudgesResponse extends jspb.Message {
  getJudgesList(): Array<Judge>;
  setJudgesList(value: Array<Judge>): GetJudgesResponse;
  clearJudgesList(): GetJudgesResponse;
  addJudges(value?: Judge, index?: number): Judge;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetJudgesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetJudgesResponse): GetJudgesResponse.AsObject;
  static serializeBinaryToWriter(message: GetJudgesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetJudgesResponse;
  static deserializeBinaryFromReader(message: GetJudgesResponse, reader: jspb.BinaryReader): GetJudgesResponse;
}

export namespace GetJudgesResponse {
  export type AsObject = {
    judgesList: Array<Judge.AsObject>,
  }
}

export class GetJudgeRequest extends jspb.Message {
  getJudgeId(): number;
  setJudgeId(value: number): GetJudgeRequest;

  getToken(): string;
  setToken(value: string): GetJudgeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetJudgeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetJudgeRequest): GetJudgeRequest.AsObject;
  static serializeBinaryToWriter(message: GetJudgeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetJudgeRequest;
  static deserializeBinaryFromReader(message: GetJudgeRequest, reader: jspb.BinaryReader): GetJudgeRequest;
}

export namespace GetJudgeRequest {
  export type AsObject = {
    judgeId: number,
    token: string,
  }
}

export class GetJudgeResponse extends jspb.Message {
  getJudge(): Judge | undefined;
  setJudge(value?: Judge): GetJudgeResponse;
  hasJudge(): boolean;
  clearJudge(): GetJudgeResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetJudgeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetJudgeResponse): GetJudgeResponse.AsObject;
  static serializeBinaryToWriter(message: GetJudgeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetJudgeResponse;
  static deserializeBinaryFromReader(message: GetJudgeResponse, reader: jspb.BinaryReader): GetJudgeResponse;
}

export namespace GetJudgeResponse {
  export type AsObject = {
    judge?: Judge.AsObject,
  }
}

export class Pairing extends jspb.Message {
  getPairingId(): number;
  setPairingId(value: number): Pairing;

  getRoundNumber(): number;
  setRoundNumber(value: number): Pairing;

  getIsEliminationRound(): boolean;
  setIsEliminationRound(value: boolean): Pairing;

  getRoomId(): number;
  setRoomId(value: number): Pairing;

  getRoomName(): string;
  setRoomName(value: string): Pairing;

  getTeam1(): Team | undefined;
  setTeam1(value?: Team): Pairing;
  hasTeam1(): boolean;
  clearTeam1(): Pairing;

  getTeam2(): Team | undefined;
  setTeam2(value?: Team): Pairing;
  hasTeam2(): boolean;
  clearTeam2(): Pairing;

  getJudgesList(): Array<Judge>;
  setJudgesList(value: Array<Judge>): Pairing;
  clearJudgesList(): Pairing;
  addJudges(value?: Judge, index?: number): Judge;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Pairing.AsObject;
  static toObject(includeInstance: boolean, msg: Pairing): Pairing.AsObject;
  static serializeBinaryToWriter(message: Pairing, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Pairing;
  static deserializeBinaryFromReader(message: Pairing, reader: jspb.BinaryReader): Pairing;
}

export namespace Pairing {
  export type AsObject = {
    pairingId: number,
    roundNumber: number,
    isEliminationRound: boolean,
    roomId: number,
    roomName: string,
    team1?: Team.AsObject,
    team2?: Team.AsObject,
    judgesList: Array<Judge.AsObject>,
  }
}

export class Team extends jspb.Message {
  getTeamId(): number;
  setTeamId(value: number): Team;

  getName(): string;
  setName(value: string): Team;

  getSpeakersList(): Array<Speaker>;
  setSpeakersList(value: Array<Speaker>): Team;
  clearSpeakersList(): Team;
  addSpeakers(value?: Speaker, index?: number): Speaker;

  getTotalPoints(): number;
  setTotalPoints(value: number): Team;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Team.AsObject;
  static toObject(includeInstance: boolean, msg: Team): Team.AsObject;
  static serializeBinaryToWriter(message: Team, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Team;
  static deserializeBinaryFromReader(message: Team, reader: jspb.BinaryReader): Team;
}

export namespace Team {
  export type AsObject = {
    teamId: number,
    name: string,
    speakersList: Array<Speaker.AsObject>,
    totalPoints: number,
  }
}

export class Speaker extends jspb.Message {
  getSpeakerId(): number;
  setSpeakerId(value: number): Speaker;

  getName(): string;
  setName(value: string): Speaker;

  getScoreId(): number;
  setScoreId(value: number): Speaker;

  getRank(): number;
  setRank(value: number): Speaker;

  getPoints(): number;
  setPoints(value: number): Speaker;

  getFeedback(): string;
  setFeedback(value: string): Speaker;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Speaker.AsObject;
  static toObject(includeInstance: boolean, msg: Speaker): Speaker.AsObject;
  static serializeBinaryToWriter(message: Speaker, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Speaker;
  static deserializeBinaryFromReader(message: Speaker, reader: jspb.BinaryReader): Speaker;
}

export namespace Speaker {
  export type AsObject = {
    speakerId: number,
    name: string,
    scoreId: number,
    rank: number,
    points: number,
    feedback: string,
  }
}

export class GetPairingsRequest extends jspb.Message {
  getTournamentId(): number;
  setTournamentId(value: number): GetPairingsRequest;

  getRoundNumber(): number;
  setRoundNumber(value: number): GetPairingsRequest;

  getIsElimination(): boolean;
  setIsElimination(value: boolean): GetPairingsRequest;

  getToken(): string;
  setToken(value: string): GetPairingsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPairingsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetPairingsRequest): GetPairingsRequest.AsObject;
  static serializeBinaryToWriter(message: GetPairingsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPairingsRequest;
  static deserializeBinaryFromReader(message: GetPairingsRequest, reader: jspb.BinaryReader): GetPairingsRequest;
}

export namespace GetPairingsRequest {
  export type AsObject = {
    tournamentId: number,
    roundNumber: number,
    isElimination: boolean,
    token: string,
  }
}

export class GetPairingsResponse extends jspb.Message {
  getPairingsList(): Array<Pairing>;
  setPairingsList(value: Array<Pairing>): GetPairingsResponse;
  clearPairingsList(): GetPairingsResponse;
  addPairings(value?: Pairing, index?: number): Pairing;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPairingsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetPairingsResponse): GetPairingsResponse.AsObject;
  static serializeBinaryToWriter(message: GetPairingsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPairingsResponse;
  static deserializeBinaryFromReader(message: GetPairingsResponse, reader: jspb.BinaryReader): GetPairingsResponse;
}

export namespace GetPairingsResponse {
  export type AsObject = {
    pairingsList: Array<Pairing.AsObject>,
  }
}

export class GetPairingRequest extends jspb.Message {
  getPairingId(): number;
  setPairingId(value: number): GetPairingRequest;

  getToken(): string;
  setToken(value: string): GetPairingRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPairingRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetPairingRequest): GetPairingRequest.AsObject;
  static serializeBinaryToWriter(message: GetPairingRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPairingRequest;
  static deserializeBinaryFromReader(message: GetPairingRequest, reader: jspb.BinaryReader): GetPairingRequest;
}

export namespace GetPairingRequest {
  export type AsObject = {
    pairingId: number,
    token: string,
  }
}

export class GetPairingResponse extends jspb.Message {
  getPairing(): Pairing | undefined;
  setPairing(value?: Pairing): GetPairingResponse;
  hasPairing(): boolean;
  clearPairing(): GetPairingResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPairingResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetPairingResponse): GetPairingResponse.AsObject;
  static serializeBinaryToWriter(message: GetPairingResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPairingResponse;
  static deserializeBinaryFromReader(message: GetPairingResponse, reader: jspb.BinaryReader): GetPairingResponse;
}

export namespace GetPairingResponse {
  export type AsObject = {
    pairing?: Pairing.AsObject,
  }
}

export class UpdatePairingRequest extends jspb.Message {
  getPairing(): Pairing | undefined;
  setPairing(value?: Pairing): UpdatePairingRequest;
  hasPairing(): boolean;
  clearPairing(): UpdatePairingRequest;

  getToken(): string;
  setToken(value: string): UpdatePairingRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdatePairingRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdatePairingRequest): UpdatePairingRequest.AsObject;
  static serializeBinaryToWriter(message: UpdatePairingRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdatePairingRequest;
  static deserializeBinaryFromReader(message: UpdatePairingRequest, reader: jspb.BinaryReader): UpdatePairingRequest;
}

export namespace UpdatePairingRequest {
  export type AsObject = {
    pairing?: Pairing.AsObject,
    token: string,
  }
}

export class UpdatePairingResponse extends jspb.Message {
  getPairing(): Pairing | undefined;
  setPairing(value?: Pairing): UpdatePairingResponse;
  hasPairing(): boolean;
  clearPairing(): UpdatePairingResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdatePairingResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdatePairingResponse): UpdatePairingResponse.AsObject;
  static serializeBinaryToWriter(message: UpdatePairingResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdatePairingResponse;
  static deserializeBinaryFromReader(message: UpdatePairingResponse, reader: jspb.BinaryReader): UpdatePairingResponse;
}

export namespace UpdatePairingResponse {
  export type AsObject = {
    pairing?: Pairing.AsObject,
  }
}

export class Ballot extends jspb.Message {
  getBallotId(): number;
  setBallotId(value: number): Ballot;

  getRoundNumber(): number;
  setRoundNumber(value: number): Ballot;

  getIsElimination(): boolean;
  setIsElimination(value: boolean): Ballot;

  getRoomId(): number;
  setRoomId(value: number): Ballot;

  getRoomName(): string;
  setRoomName(value: string): Ballot;

  getJudgesList(): Array<Judge>;
  setJudgesList(value: Array<Judge>): Ballot;
  clearJudgesList(): Ballot;
  addJudges(value?: Judge, index?: number): Judge;

  getTeam1(): Team | undefined;
  setTeam1(value?: Team): Ballot;
  hasTeam1(): boolean;
  clearTeam1(): Ballot;

  getTeam2(): Team | undefined;
  setTeam2(value?: Team): Ballot;
  hasTeam2(): boolean;
  clearTeam2(): Ballot;

  getRecordingStatus(): string;
  setRecordingStatus(value: string): Ballot;

  getVerdict(): string;
  setVerdict(value: string): Ballot;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Ballot.AsObject;
  static toObject(includeInstance: boolean, msg: Ballot): Ballot.AsObject;
  static serializeBinaryToWriter(message: Ballot, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Ballot;
  static deserializeBinaryFromReader(message: Ballot, reader: jspb.BinaryReader): Ballot;
}

export namespace Ballot {
  export type AsObject = {
    ballotId: number,
    roundNumber: number,
    isElimination: boolean,
    roomId: number,
    roomName: string,
    judgesList: Array<Judge.AsObject>,
    team1?: Team.AsObject,
    team2?: Team.AsObject,
    recordingStatus: string,
    verdict: string,
  }
}

export class GetBallotsRequest extends jspb.Message {
  getTournamentId(): number;
  setTournamentId(value: number): GetBallotsRequest;

  getRoundNumber(): number;
  setRoundNumber(value: number): GetBallotsRequest;

  getIsElimination(): boolean;
  setIsElimination(value: boolean): GetBallotsRequest;

  getToken(): string;
  setToken(value: string): GetBallotsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBallotsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetBallotsRequest): GetBallotsRequest.AsObject;
  static serializeBinaryToWriter(message: GetBallotsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBallotsRequest;
  static deserializeBinaryFromReader(message: GetBallotsRequest, reader: jspb.BinaryReader): GetBallotsRequest;
}

export namespace GetBallotsRequest {
  export type AsObject = {
    tournamentId: number,
    roundNumber: number,
    isElimination: boolean,
    token: string,
  }
}

export class GetBallotsResponse extends jspb.Message {
  getBallotsList(): Array<Ballot>;
  setBallotsList(value: Array<Ballot>): GetBallotsResponse;
  clearBallotsList(): GetBallotsResponse;
  addBallots(value?: Ballot, index?: number): Ballot;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBallotsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetBallotsResponse): GetBallotsResponse.AsObject;
  static serializeBinaryToWriter(message: GetBallotsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBallotsResponse;
  static deserializeBinaryFromReader(message: GetBallotsResponse, reader: jspb.BinaryReader): GetBallotsResponse;
}

export namespace GetBallotsResponse {
  export type AsObject = {
    ballotsList: Array<Ballot.AsObject>,
  }
}

export class GetBallotRequest extends jspb.Message {
  getBallotId(): number;
  setBallotId(value: number): GetBallotRequest;

  getToken(): string;
  setToken(value: string): GetBallotRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBallotRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetBallotRequest): GetBallotRequest.AsObject;
  static serializeBinaryToWriter(message: GetBallotRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBallotRequest;
  static deserializeBinaryFromReader(message: GetBallotRequest, reader: jspb.BinaryReader): GetBallotRequest;
}

export namespace GetBallotRequest {
  export type AsObject = {
    ballotId: number,
    token: string,
  }
}

export class GetBallotResponse extends jspb.Message {
  getBallot(): Ballot | undefined;
  setBallot(value?: Ballot): GetBallotResponse;
  hasBallot(): boolean;
  clearBallot(): GetBallotResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBallotResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetBallotResponse): GetBallotResponse.AsObject;
  static serializeBinaryToWriter(message: GetBallotResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBallotResponse;
  static deserializeBinaryFromReader(message: GetBallotResponse, reader: jspb.BinaryReader): GetBallotResponse;
}

export namespace GetBallotResponse {
  export type AsObject = {
    ballot?: Ballot.AsObject,
  }
}

export class UpdateBallotRequest extends jspb.Message {
  getBallot(): Ballot | undefined;
  setBallot(value?: Ballot): UpdateBallotRequest;
  hasBallot(): boolean;
  clearBallot(): UpdateBallotRequest;

  getToken(): string;
  setToken(value: string): UpdateBallotRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateBallotRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateBallotRequest): UpdateBallotRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateBallotRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateBallotRequest;
  static deserializeBinaryFromReader(message: UpdateBallotRequest, reader: jspb.BinaryReader): UpdateBallotRequest;
}

export namespace UpdateBallotRequest {
  export type AsObject = {
    ballot?: Ballot.AsObject,
    token: string,
  }
}

export class UpdateBallotResponse extends jspb.Message {
  getBallot(): Ballot | undefined;
  setBallot(value?: Ballot): UpdateBallotResponse;
  hasBallot(): boolean;
  clearBallot(): UpdateBallotResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateBallotResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateBallotResponse): UpdateBallotResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateBallotResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateBallotResponse;
  static deserializeBinaryFromReader(message: UpdateBallotResponse, reader: jspb.BinaryReader): UpdateBallotResponse;
}

export namespace UpdateBallotResponse {
  export type AsObject = {
    ballot?: Ballot.AsObject,
  }
}

export class GeneratePairingsRequest extends jspb.Message {
  getTournamentId(): number;
  setTournamentId(value: number): GeneratePairingsRequest;

  getRoundNumber(): number;
  setRoundNumber(value: number): GeneratePairingsRequest;

  getIsEliminationRound(): boolean;
  setIsEliminationRound(value: boolean): GeneratePairingsRequest;

  getToken(): string;
  setToken(value: string): GeneratePairingsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GeneratePairingsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GeneratePairingsRequest): GeneratePairingsRequest.AsObject;
  static serializeBinaryToWriter(message: GeneratePairingsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GeneratePairingsRequest;
  static deserializeBinaryFromReader(message: GeneratePairingsRequest, reader: jspb.BinaryReader): GeneratePairingsRequest;
}

export namespace GeneratePairingsRequest {
  export type AsObject = {
    tournamentId: number,
    roundNumber: number,
    isEliminationRound: boolean,
    token: string,
  }
}

export class GeneratePairingsResponse extends jspb.Message {
  getPairingsList(): Array<Pairing>;
  setPairingsList(value: Array<Pairing>): GeneratePairingsResponse;
  clearPairingsList(): GeneratePairingsResponse;
  addPairings(value?: Pairing, index?: number): Pairing;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GeneratePairingsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GeneratePairingsResponse): GeneratePairingsResponse.AsObject;
  static serializeBinaryToWriter(message: GeneratePairingsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GeneratePairingsResponse;
  static deserializeBinaryFromReader(message: GeneratePairingsResponse, reader: jspb.BinaryReader): GeneratePairingsResponse;
}

export namespace GeneratePairingsResponse {
  export type AsObject = {
    pairingsList: Array<Pairing.AsObject>,
  }
}

export class AssignJudgesRequest extends jspb.Message {
  getTournamentId(): number;
  setTournamentId(value: number): AssignJudgesRequest;

  getRoundNumber(): number;
  setRoundNumber(value: number): AssignJudgesRequest;

  getIsElimination(): boolean;
  setIsElimination(value: boolean): AssignJudgesRequest;

  getToken(): string;
  setToken(value: string): AssignJudgesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssignJudgesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AssignJudgesRequest): AssignJudgesRequest.AsObject;
  static serializeBinaryToWriter(message: AssignJudgesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssignJudgesRequest;
  static deserializeBinaryFromReader(message: AssignJudgesRequest, reader: jspb.BinaryReader): AssignJudgesRequest;
}

export namespace AssignJudgesRequest {
  export type AsObject = {
    tournamentId: number,
    roundNumber: number,
    isElimination: boolean,
    token: string,
  }
}

export class AssignJudgesResponse extends jspb.Message {
  getPairingsList(): Array<Pairing>;
  setPairingsList(value: Array<Pairing>): AssignJudgesResponse;
  clearPairingsList(): AssignJudgesResponse;
  addPairings(value?: Pairing, index?: number): Pairing;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssignJudgesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AssignJudgesResponse): AssignJudgesResponse.AsObject;
  static serializeBinaryToWriter(message: AssignJudgesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssignJudgesResponse;
  static deserializeBinaryFromReader(message: AssignJudgesResponse, reader: jspb.BinaryReader): AssignJudgesResponse;
}

export namespace AssignJudgesResponse {
  export type AsObject = {
    pairingsList: Array<Pairing.AsObject>,
  }
}

export class CreateTeamRequest extends jspb.Message {
  getName(): string;
  setName(value: string): CreateTeamRequest;

  getTournamentId(): number;
  setTournamentId(value: number): CreateTeamRequest;

  getSpeakersList(): Array<Speaker>;
  setSpeakersList(value: Array<Speaker>): CreateTeamRequest;
  clearSpeakersList(): CreateTeamRequest;
  addSpeakers(value?: Speaker, index?: number): Speaker;

  getToken(): string;
  setToken(value: string): CreateTeamRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateTeamRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateTeamRequest): CreateTeamRequest.AsObject;
  static serializeBinaryToWriter(message: CreateTeamRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateTeamRequest;
  static deserializeBinaryFromReader(message: CreateTeamRequest, reader: jspb.BinaryReader): CreateTeamRequest;
}

export namespace CreateTeamRequest {
  export type AsObject = {
    name: string,
    tournamentId: number,
    speakersList: Array<Speaker.AsObject>,
    token: string,
  }
}

export class GetTeamRequest extends jspb.Message {
  getTeamId(): number;
  setTeamId(value: number): GetTeamRequest;

  getToken(): string;
  setToken(value: string): GetTeamRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTeamRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetTeamRequest): GetTeamRequest.AsObject;
  static serializeBinaryToWriter(message: GetTeamRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTeamRequest;
  static deserializeBinaryFromReader(message: GetTeamRequest, reader: jspb.BinaryReader): GetTeamRequest;
}

export namespace GetTeamRequest {
  export type AsObject = {
    teamId: number,
    token: string,
  }
}

export class UpdateTeamRequest extends jspb.Message {
  getTeam(): Team | undefined;
  setTeam(value?: Team): UpdateTeamRequest;
  hasTeam(): boolean;
  clearTeam(): UpdateTeamRequest;

  getToken(): string;
  setToken(value: string): UpdateTeamRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateTeamRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateTeamRequest): UpdateTeamRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateTeamRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateTeamRequest;
  static deserializeBinaryFromReader(message: UpdateTeamRequest, reader: jspb.BinaryReader): UpdateTeamRequest;
}

export namespace UpdateTeamRequest {
  export type AsObject = {
    team?: Team.AsObject,
    token: string,
  }
}

export class GetTeamsByTournamentRequest extends jspb.Message {
  getTournamentId(): number;
  setTournamentId(value: number): GetTeamsByTournamentRequest;

  getToken(): string;
  setToken(value: string): GetTeamsByTournamentRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTeamsByTournamentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetTeamsByTournamentRequest): GetTeamsByTournamentRequest.AsObject;
  static serializeBinaryToWriter(message: GetTeamsByTournamentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTeamsByTournamentRequest;
  static deserializeBinaryFromReader(message: GetTeamsByTournamentRequest, reader: jspb.BinaryReader): GetTeamsByTournamentRequest;
}

export namespace GetTeamsByTournamentRequest {
  export type AsObject = {
    tournamentId: number,
    token: string,
  }
}

export class GetTeamsByTournamentResponse extends jspb.Message {
  getTeamsList(): Array<Team>;
  setTeamsList(value: Array<Team>): GetTeamsByTournamentResponse;
  clearTeamsList(): GetTeamsByTournamentResponse;
  addTeams(value?: Team, index?: number): Team;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTeamsByTournamentResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetTeamsByTournamentResponse): GetTeamsByTournamentResponse.AsObject;
  static serializeBinaryToWriter(message: GetTeamsByTournamentResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTeamsByTournamentResponse;
  static deserializeBinaryFromReader(message: GetTeamsByTournamentResponse, reader: jspb.BinaryReader): GetTeamsByTournamentResponse;
}

export namespace GetTeamsByTournamentResponse {
  export type AsObject = {
    teamsList: Array<Team.AsObject>,
  }
}

export class RegeneratePairingsRequest extends jspb.Message {
  getTournamentId(): number;
  setTournamentId(value: number): RegeneratePairingsRequest;

  getToken(): string;
  setToken(value: string): RegeneratePairingsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegeneratePairingsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RegeneratePairingsRequest): RegeneratePairingsRequest.AsObject;
  static serializeBinaryToWriter(message: RegeneratePairingsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegeneratePairingsRequest;
  static deserializeBinaryFromReader(message: RegeneratePairingsRequest, reader: jspb.BinaryReader): RegeneratePairingsRequest;
}

export namespace RegeneratePairingsRequest {
  export type AsObject = {
    tournamentId: number,
    token: string,
  }
}

