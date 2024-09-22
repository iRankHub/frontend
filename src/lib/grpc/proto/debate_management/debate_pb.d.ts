import * as jspb from 'google-protobuf'



export class Room extends jspb.Message {
  getRoomId(): number;
  setRoomId(value: number): Room;

  getRoomName(): string;
  setRoomName(value: string): Room;

  getLocation(): string;
  setLocation(value: string): Room;

  getCapacity(): number;
  setCapacity(value: number): Room;

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
    location: string,
    capacity: number,
  }
}

export class RoundStatus extends jspb.Message {
  getRound(): number;
  setRound(value: number): RoundStatus;

  getStatus(): string;
  setStatus(value: string): RoundStatus;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RoundStatus.AsObject;
  static toObject(includeInstance: boolean, msg: RoundStatus): RoundStatus.AsObject;
  static serializeBinaryToWriter(message: RoundStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RoundStatus;
  static deserializeBinaryFromReader(message: RoundStatus, reader: jspb.BinaryReader): RoundStatus;
}

export namespace RoundStatus {
  export type AsObject = {
    round: number,
    status: string,
  }
}

export class RoomStatus extends jspb.Message {
  getRoomId(): number;
  setRoomId(value: number): RoomStatus;

  getRoomName(): string;
  setRoomName(value: string): RoomStatus;

  getPreliminary(): string;
  setPreliminary(value: string): RoomStatus;

  getElimination(): string;
  setElimination(value: string): RoomStatus;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RoomStatus.AsObject;
  static toObject(includeInstance: boolean, msg: RoomStatus): RoomStatus.AsObject;
  static serializeBinaryToWriter(message: RoomStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RoomStatus;
  static deserializeBinaryFromReader(message: RoomStatus, reader: jspb.BinaryReader): RoomStatus;
}

export namespace RoomStatus {
  export type AsObject = {
    roomId: number,
    roomName: string,
    preliminary: string,
    elimination: string,
  }
}

export class GetRoomsRequest extends jspb.Message {
  getTournamentId(): number;
  setTournamentId(value: number): GetRoomsRequest;

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
    token: string,
  }
}

export class GetRoomsResponse extends jspb.Message {
  getRoomsList(): Array<RoomStatus>;
  setRoomsList(value: Array<RoomStatus>): GetRoomsResponse;
  clearRoomsList(): GetRoomsResponse;
  addRooms(value?: RoomStatus, index?: number): RoomStatus;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRoomsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetRoomsResponse): GetRoomsResponse.AsObject;
  static serializeBinaryToWriter(message: GetRoomsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRoomsResponse;
  static deserializeBinaryFromReader(message: GetRoomsResponse, reader: jspb.BinaryReader): GetRoomsResponse;
}

export namespace GetRoomsResponse {
  export type AsObject = {
    roomsList: Array<RoomStatus.AsObject>,
  }
}

export class GetRoomRequest extends jspb.Message {
  getRoomId(): number;
  setRoomId(value: number): GetRoomRequest;

  getTournamentId(): number;
  setTournamentId(value: number): GetRoomRequest;

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
    tournamentId: number,
    token: string,
  }
}

export class GetRoomResponse extends jspb.Message {
  getRoomId(): number;
  setRoomId(value: number): GetRoomResponse;

  getName(): string;
  setName(value: string): GetRoomResponse;

  getPreliminaryList(): Array<RoundStatus>;
  setPreliminaryList(value: Array<RoundStatus>): GetRoomResponse;
  clearPreliminaryList(): GetRoomResponse;
  addPreliminary(value?: RoundStatus, index?: number): RoundStatus;

  getEliminationList(): Array<RoundStatus>;
  setEliminationList(value: Array<RoundStatus>): GetRoomResponse;
  clearEliminationList(): GetRoomResponse;
  addElimination(value?: RoundStatus, index?: number): RoundStatus;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRoomResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetRoomResponse): GetRoomResponse.AsObject;
  static serializeBinaryToWriter(message: GetRoomResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRoomResponse;
  static deserializeBinaryFromReader(message: GetRoomResponse, reader: jspb.BinaryReader): GetRoomResponse;
}

export namespace GetRoomResponse {
  export type AsObject = {
    roomId: number,
    name: string,
    preliminaryList: Array<RoundStatus.AsObject>,
    eliminationList: Array<RoundStatus.AsObject>,
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

  getIdebateId(): string;
  setIdebateId(value: string): Judge;

  getPreliminaryDebates(): number;
  setPreliminaryDebates(value: number): Judge;

  getEliminationDebates(): number;
  setEliminationDebates(value: number): Judge;

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
    idebateId: string,
    preliminaryDebates: number,
    eliminationDebates: number,
  }
}

export class GetJudgesRequest extends jspb.Message {
  getTournamentId(): number;
  setTournamentId(value: number): GetJudgesRequest;

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

export class RoomInfo extends jspb.Message {
  getRoomId(): number;
  setRoomId(value: number): RoomInfo;

  getRoomName(): string;
  setRoomName(value: string): RoomInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RoomInfo.AsObject;
  static toObject(includeInstance: boolean, msg: RoomInfo): RoomInfo.AsObject;
  static serializeBinaryToWriter(message: RoomInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RoomInfo;
  static deserializeBinaryFromReader(message: RoomInfo, reader: jspb.BinaryReader): RoomInfo;
}

export namespace RoomInfo {
  export type AsObject = {
    roomId: number,
    roomName: string,
  }
}

export class RoundInfo extends jspb.Message {
  getRoomsMap(): jspb.Map<number, RoomInfo>;
  clearRoomsMap(): RoundInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RoundInfo.AsObject;
  static toObject(includeInstance: boolean, msg: RoundInfo): RoundInfo.AsObject;
  static serializeBinaryToWriter(message: RoundInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RoundInfo;
  static deserializeBinaryFromReader(message: RoundInfo, reader: jspb.BinaryReader): RoundInfo;
}

export namespace RoundInfo {
  export type AsObject = {
    roomsMap: Array<[number, RoomInfo.AsObject]>,
  }
}

export class GetJudgeRequest extends jspb.Message {
  getJudgeId(): number;
  setJudgeId(value: number): GetJudgeRequest;

  getTournamentId(): number;
  setTournamentId(value: number): GetJudgeRequest;

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
    tournamentId: number,
    token: string,
  }
}

export class GetJudgeResponse extends jspb.Message {
  getJudgeId(): number;
  setJudgeId(value: number): GetJudgeResponse;

  getName(): string;
  setName(value: string): GetJudgeResponse;

  getIdebateId(): string;
  setIdebateId(value: string): GetJudgeResponse;

  getPreliminaryMap(): jspb.Map<number, RoomInfo>;
  clearPreliminaryMap(): GetJudgeResponse;

  getEliminationMap(): jspb.Map<number, RoomInfo>;
  clearEliminationMap(): GetJudgeResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetJudgeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetJudgeResponse): GetJudgeResponse.AsObject;
  static serializeBinaryToWriter(message: GetJudgeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetJudgeResponse;
  static deserializeBinaryFromReader(message: GetJudgeResponse, reader: jspb.BinaryReader): GetJudgeResponse;
}

export namespace GetJudgeResponse {
  export type AsObject = {
    judgeId: number,
    name: string,
    idebateId: string,
    preliminaryMap: Array<[number, RoomInfo.AsObject]>,
    eliminationMap: Array<[number, RoomInfo.AsObject]>,
  }
}

export class UpdateJudgeRequest extends jspb.Message {
  getJudgeId(): number;
  setJudgeId(value: number): UpdateJudgeRequest;

  getTournamentId(): number;
  setTournamentId(value: number): UpdateJudgeRequest;

  getPreliminaryMap(): jspb.Map<number, RoomInfo>;
  clearPreliminaryMap(): UpdateJudgeRequest;

  getEliminationMap(): jspb.Map<number, RoomInfo>;
  clearEliminationMap(): UpdateJudgeRequest;

  getToken(): string;
  setToken(value: string): UpdateJudgeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateJudgeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateJudgeRequest): UpdateJudgeRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateJudgeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateJudgeRequest;
  static deserializeBinaryFromReader(message: UpdateJudgeRequest, reader: jspb.BinaryReader): UpdateJudgeRequest;
}

export namespace UpdateJudgeRequest {
  export type AsObject = {
    judgeId: number,
    tournamentId: number,
    preliminaryMap: Array<[number, RoomInfo.AsObject]>,
    eliminationMap: Array<[number, RoomInfo.AsObject]>,
    token: string,
  }
}

export class UpdateJudgeResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): UpdateJudgeResponse;

  getMessage(): string;
  setMessage(value: string): UpdateJudgeResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateJudgeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateJudgeResponse): UpdateJudgeResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateJudgeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateJudgeResponse;
  static deserializeBinaryFromReader(message: UpdateJudgeResponse, reader: jspb.BinaryReader): UpdateJudgeResponse;
}

export namespace UpdateJudgeResponse {
  export type AsObject = {
    success: boolean,
    message: string,
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

  getHeadJudgeName(): string;
  setHeadJudgeName(value: string): Pairing;

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
    headJudgeName: string,
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

  getSpeakerNamesList(): Array<string>;
  setSpeakerNamesList(value: Array<string>): Team;
  clearSpeakerNamesList(): Team;
  addSpeakerNames(value: string, index?: number): Team;

  getTotalPoints(): number;
  setTotalPoints(value: number): Team;

  getLeagueName(): string;
  setLeagueName(value: string): Team;

  getFeedback(): string;
  setFeedback(value: string): Team;

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
    speakerNamesList: Array<string>,
    totalPoints: number,
    leagueName: string,
    feedback: string,
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

  getTeamId(): number;
  setTeamId(value: number): Speaker;

  getTeamName(): string;
  setTeamName(value: string): Speaker;

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
    teamId: number,
    teamName: string,
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

export class UpdatePairingsRequest extends jspb.Message {
  getPairingsList(): Array<Pairing>;
  setPairingsList(value: Array<Pairing>): UpdatePairingsRequest;
  clearPairingsList(): UpdatePairingsRequest;
  addPairings(value?: Pairing, index?: number): Pairing;

  getToken(): string;
  setToken(value: string): UpdatePairingsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdatePairingsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdatePairingsRequest): UpdatePairingsRequest.AsObject;
  static serializeBinaryToWriter(message: UpdatePairingsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdatePairingsRequest;
  static deserializeBinaryFromReader(message: UpdatePairingsRequest, reader: jspb.BinaryReader): UpdatePairingsRequest;
}

export namespace UpdatePairingsRequest {
  export type AsObject = {
    pairingsList: Array<Pairing.AsObject>,
    token: string,
  }
}

export class UpdatePairingsResponse extends jspb.Message {
  getPairingsList(): Array<Pairing>;
  setPairingsList(value: Array<Pairing>): UpdatePairingsResponse;
  clearPairingsList(): UpdatePairingsResponse;
  addPairings(value?: Pairing, index?: number): Pairing;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdatePairingsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdatePairingsResponse): UpdatePairingsResponse.AsObject;
  static serializeBinaryToWriter(message: UpdatePairingsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdatePairingsResponse;
  static deserializeBinaryFromReader(message: UpdatePairingsResponse, reader: jspb.BinaryReader): UpdatePairingsResponse;
}

export namespace UpdatePairingsResponse {
  export type AsObject = {
    pairingsList: Array<Pairing.AsObject>,
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

  getLastUpdatedBy(): number;
  setLastUpdatedBy(value: number): Ballot;

  getLastUpdatedAt(): string;
  setLastUpdatedAt(value: string): Ballot;

  getHeadJudgeSubmitted(): boolean;
  setHeadJudgeSubmitted(value: boolean): Ballot;

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
    lastUpdatedBy: number,
    lastUpdatedAt: string,
    headJudgeSubmitted: boolean,
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

export class GetBallotByJudgeIDRequest extends jspb.Message {
  getJudgeId(): number;
  setJudgeId(value: number): GetBallotByJudgeIDRequest;

  getTournamentId(): number;
  setTournamentId(value: number): GetBallotByJudgeIDRequest;

  getToken(): string;
  setToken(value: string): GetBallotByJudgeIDRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBallotByJudgeIDRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetBallotByJudgeIDRequest): GetBallotByJudgeIDRequest.AsObject;
  static serializeBinaryToWriter(message: GetBallotByJudgeIDRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBallotByJudgeIDRequest;
  static deserializeBinaryFromReader(message: GetBallotByJudgeIDRequest, reader: jspb.BinaryReader): GetBallotByJudgeIDRequest;
}

export namespace GetBallotByJudgeIDRequest {
  export type AsObject = {
    judgeId: number,
    tournamentId: number,
    token: string,
  }
}

export class GetBallotByJudgeIDResponse extends jspb.Message {
  getBallot(): Ballot | undefined;
  setBallot(value?: Ballot): GetBallotByJudgeIDResponse;
  hasBallot(): boolean;
  clearBallot(): GetBallotByJudgeIDResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBallotByJudgeIDResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetBallotByJudgeIDResponse): GetBallotByJudgeIDResponse.AsObject;
  static serializeBinaryToWriter(message: GetBallotByJudgeIDResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBallotByJudgeIDResponse;
  static deserializeBinaryFromReader(message: GetBallotByJudgeIDResponse, reader: jspb.BinaryReader): GetBallotByJudgeIDResponse;
}

export namespace GetBallotByJudgeIDResponse {
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

export class GeneratePreliminaryPairingsRequest extends jspb.Message {
  getTournamentId(): number;
  setTournamentId(value: number): GeneratePreliminaryPairingsRequest;

  getToken(): string;
  setToken(value: string): GeneratePreliminaryPairingsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GeneratePreliminaryPairingsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GeneratePreliminaryPairingsRequest): GeneratePreliminaryPairingsRequest.AsObject;
  static serializeBinaryToWriter(message: GeneratePreliminaryPairingsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GeneratePreliminaryPairingsRequest;
  static deserializeBinaryFromReader(message: GeneratePreliminaryPairingsRequest, reader: jspb.BinaryReader): GeneratePreliminaryPairingsRequest;
}

export namespace GeneratePreliminaryPairingsRequest {
  export type AsObject = {
    tournamentId: number,
    token: string,
  }
}

export class GenerateEliminationPairingsRequest extends jspb.Message {
  getTournamentId(): number;
  setTournamentId(value: number): GenerateEliminationPairingsRequest;

  getRoundNumber(): number;
  setRoundNumber(value: number): GenerateEliminationPairingsRequest;

  getToken(): string;
  setToken(value: string): GenerateEliminationPairingsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenerateEliminationPairingsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GenerateEliminationPairingsRequest): GenerateEliminationPairingsRequest.AsObject;
  static serializeBinaryToWriter(message: GenerateEliminationPairingsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenerateEliminationPairingsRequest;
  static deserializeBinaryFromReader(message: GenerateEliminationPairingsRequest, reader: jspb.BinaryReader): GenerateEliminationPairingsRequest;
}

export namespace GenerateEliminationPairingsRequest {
  export type AsObject = {
    tournamentId: number,
    roundNumber: number,
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

export class DeleteTeamRequest extends jspb.Message {
  getTeamId(): number;
  setTeamId(value: number): DeleteTeamRequest;

  getToken(): string;
  setToken(value: string): DeleteTeamRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteTeamRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteTeamRequest): DeleteTeamRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteTeamRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteTeamRequest;
  static deserializeBinaryFromReader(message: DeleteTeamRequest, reader: jspb.BinaryReader): DeleteTeamRequest;
}

export namespace DeleteTeamRequest {
  export type AsObject = {
    teamId: number,
    token: string,
  }
}

export class DeleteTeamResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): DeleteTeamResponse;

  getMessage(): string;
  setMessage(value: string): DeleteTeamResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteTeamResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteTeamResponse): DeleteTeamResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteTeamResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteTeamResponse;
  static deserializeBinaryFromReader(message: DeleteTeamResponse, reader: jspb.BinaryReader): DeleteTeamResponse;
}

export namespace DeleteTeamResponse {
  export type AsObject = {
    success: boolean,
    message: string,
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

export class OverallRankingRequest extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): OverallRankingRequest;

  getToken(): string;
  setToken(value: string): OverallRankingRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OverallRankingRequest.AsObject;
  static toObject(includeInstance: boolean, msg: OverallRankingRequest): OverallRankingRequest.AsObject;
  static serializeBinaryToWriter(message: OverallRankingRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OverallRankingRequest;
  static deserializeBinaryFromReader(message: OverallRankingRequest, reader: jspb.BinaryReader): OverallRankingRequest;
}

export namespace OverallRankingRequest {
  export type AsObject = {
    userId: number,
    token: string,
  }
}

export class OverallRankingResponse extends jspb.Message {
  getStudentRank(): number;
  setStudentRank(value: number): OverallRankingResponse;

  getTotalStudents(): number;
  setTotalStudents(value: number): OverallRankingResponse;

  getRankChange(): number;
  setRankChange(value: number): OverallRankingResponse;

  getTopStudentsList(): Array<TopStudent>;
  setTopStudentsList(value: Array<TopStudent>): OverallRankingResponse;
  clearTopStudentsList(): OverallRankingResponse;
  addTopStudents(value?: TopStudent, index?: number): TopStudent;

  getStudentInfo(): StudentInfo | undefined;
  setStudentInfo(value?: StudentInfo): OverallRankingResponse;
  hasStudentInfo(): boolean;
  clearStudentInfo(): OverallRankingResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OverallRankingResponse.AsObject;
  static toObject(includeInstance: boolean, msg: OverallRankingResponse): OverallRankingResponse.AsObject;
  static serializeBinaryToWriter(message: OverallRankingResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OverallRankingResponse;
  static deserializeBinaryFromReader(message: OverallRankingResponse, reader: jspb.BinaryReader): OverallRankingResponse;
}

export namespace OverallRankingResponse {
  export type AsObject = {
    studentRank: number,
    totalStudents: number,
    rankChange: number,
    topStudentsList: Array<TopStudent.AsObject>,
    studentInfo?: StudentInfo.AsObject,
  }
}

export class TopStudent extends jspb.Message {
  getRank(): number;
  setRank(value: number): TopStudent;

  getName(): string;
  setName(value: string): TopStudent;

  getTotalPoints(): number;
  setTotalPoints(value: number): TopStudent;

  getRankChange(): number;
  setRankChange(value: number): TopStudent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TopStudent.AsObject;
  static toObject(includeInstance: boolean, msg: TopStudent): TopStudent.AsObject;
  static serializeBinaryToWriter(message: TopStudent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TopStudent;
  static deserializeBinaryFromReader(message: TopStudent, reader: jspb.BinaryReader): TopStudent;
}

export namespace TopStudent {
  export type AsObject = {
    rank: number,
    name: string,
    totalPoints: number,
    rankChange: number,
  }
}

export class StudentInfo extends jspb.Message {
  getName(): string;
  setName(value: string): StudentInfo;

  getTotalPoints(): number;
  setTotalPoints(value: number): StudentInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StudentInfo.AsObject;
  static toObject(includeInstance: boolean, msg: StudentInfo): StudentInfo.AsObject;
  static serializeBinaryToWriter(message: StudentInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StudentInfo;
  static deserializeBinaryFromReader(message: StudentInfo, reader: jspb.BinaryReader): StudentInfo;
}

export namespace StudentInfo {
  export type AsObject = {
    name: string,
    totalPoints: number,
  }
}

export class PerformanceRequest extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): PerformanceRequest;

  getStartDate(): string;
  setStartDate(value: string): PerformanceRequest;

  getEndDate(): string;
  setEndDate(value: string): PerformanceRequest;

  getToken(): string;
  setToken(value: string): PerformanceRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PerformanceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PerformanceRequest): PerformanceRequest.AsObject;
  static serializeBinaryToWriter(message: PerformanceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PerformanceRequest;
  static deserializeBinaryFromReader(message: PerformanceRequest, reader: jspb.BinaryReader): PerformanceRequest;
}

export namespace PerformanceRequest {
  export type AsObject = {
    userId: number,
    startDate: string,
    endDate: string,
    token: string,
  }
}

export class PerformanceResponse extends jspb.Message {
  getPerformanceDataList(): Array<PerformanceData>;
  setPerformanceDataList(value: Array<PerformanceData>): PerformanceResponse;
  clearPerformanceDataList(): PerformanceResponse;
  addPerformanceData(value?: PerformanceData, index?: number): PerformanceData;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PerformanceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PerformanceResponse): PerformanceResponse.AsObject;
  static serializeBinaryToWriter(message: PerformanceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PerformanceResponse;
  static deserializeBinaryFromReader(message: PerformanceResponse, reader: jspb.BinaryReader): PerformanceResponse;
}

export namespace PerformanceResponse {
  export type AsObject = {
    performanceDataList: Array<PerformanceData.AsObject>,
  }
}

export class PerformanceData extends jspb.Message {
  getTournamentDate(): string;
  setTournamentDate(value: string): PerformanceData;

  getStudentTotalPoints(): number;
  setStudentTotalPoints(value: number): PerformanceData;

  getStudentAveragePoints(): number;
  setStudentAveragePoints(value: number): PerformanceData;

  getTournamentRank(): number;
  setTournamentRank(value: number): PerformanceData;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PerformanceData.AsObject;
  static toObject(includeInstance: boolean, msg: PerformanceData): PerformanceData.AsObject;
  static serializeBinaryToWriter(message: PerformanceData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PerformanceData;
  static deserializeBinaryFromReader(message: PerformanceData, reader: jspb.BinaryReader): PerformanceData;
}

export namespace PerformanceData {
  export type AsObject = {
    tournamentDate: string,
    studentTotalPoints: number,
    studentAveragePoints: number,
    tournamentRank: number,
  }
}

export class TournamentRankingRequest extends jspb.Message {
  getTournamentId(): number;
  setTournamentId(value: number): TournamentRankingRequest;

  getToken(): string;
  setToken(value: string): TournamentRankingRequest;

  getPage(): number;
  setPage(value: number): TournamentRankingRequest;

  getPageSize(): number;
  setPageSize(value: number): TournamentRankingRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TournamentRankingRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TournamentRankingRequest): TournamentRankingRequest.AsObject;
  static serializeBinaryToWriter(message: TournamentRankingRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TournamentRankingRequest;
  static deserializeBinaryFromReader(message: TournamentRankingRequest, reader: jspb.BinaryReader): TournamentRankingRequest;
}

export namespace TournamentRankingRequest {
  export type AsObject = {
    tournamentId: number,
    token: string,
    page: number,
    pageSize: number,
  }
}

export class TournamentRankingResponse extends jspb.Message {
  getRankingsList(): Array<StudentRanking>;
  setRankingsList(value: Array<StudentRanking>): TournamentRankingResponse;
  clearRankingsList(): TournamentRankingResponse;
  addRankings(value?: StudentRanking, index?: number): StudentRanking;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TournamentRankingResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TournamentRankingResponse): TournamentRankingResponse.AsObject;
  static serializeBinaryToWriter(message: TournamentRankingResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TournamentRankingResponse;
  static deserializeBinaryFromReader(message: TournamentRankingResponse, reader: jspb.BinaryReader): TournamentRankingResponse;
}

export namespace TournamentRankingResponse {
  export type AsObject = {
    rankingsList: Array<StudentRanking.AsObject>,
  }
}

export class StudentRanking extends jspb.Message {
  getStudentId(): number;
  setStudentId(value: number): StudentRanking;

  getStudentName(): string;
  setStudentName(value: string): StudentRanking;

  getSchoolName(): string;
  setSchoolName(value: string): StudentRanking;

  getTotalWins(): number;
  setTotalWins(value: number): StudentRanking;

  getTotalPoints(): number;
  setTotalPoints(value: number): StudentRanking;

  getAverageRank(): number;
  setAverageRank(value: number): StudentRanking;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StudentRanking.AsObject;
  static toObject(includeInstance: boolean, msg: StudentRanking): StudentRanking.AsObject;
  static serializeBinaryToWriter(message: StudentRanking, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StudentRanking;
  static deserializeBinaryFromReader(message: StudentRanking, reader: jspb.BinaryReader): StudentRanking;
}

export namespace StudentRanking {
  export type AsObject = {
    studentId: number,
    studentName: string,
    schoolName: string,
    totalWins: number,
    totalPoints: number,
    averageRank: number,
  }
}

export class TournamentTeamsRankingRequest extends jspb.Message {
  getTournamentId(): number;
  setTournamentId(value: number): TournamentTeamsRankingRequest;

  getToken(): string;
  setToken(value: string): TournamentTeamsRankingRequest;

  getPage(): number;
  setPage(value: number): TournamentTeamsRankingRequest;

  getPageSize(): number;
  setPageSize(value: number): TournamentTeamsRankingRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TournamentTeamsRankingRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TournamentTeamsRankingRequest): TournamentTeamsRankingRequest.AsObject;
  static serializeBinaryToWriter(message: TournamentTeamsRankingRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TournamentTeamsRankingRequest;
  static deserializeBinaryFromReader(message: TournamentTeamsRankingRequest, reader: jspb.BinaryReader): TournamentTeamsRankingRequest;
}

export namespace TournamentTeamsRankingRequest {
  export type AsObject = {
    tournamentId: number,
    token: string,
    page: number,
    pageSize: number,
  }
}

export class TournamentTeamsRankingResponse extends jspb.Message {
  getRankingsList(): Array<TeamRanking>;
  setRankingsList(value: Array<TeamRanking>): TournamentTeamsRankingResponse;
  clearRankingsList(): TournamentTeamsRankingResponse;
  addRankings(value?: TeamRanking, index?: number): TeamRanking;

  getTotalCount(): number;
  setTotalCount(value: number): TournamentTeamsRankingResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TournamentTeamsRankingResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TournamentTeamsRankingResponse): TournamentTeamsRankingResponse.AsObject;
  static serializeBinaryToWriter(message: TournamentTeamsRankingResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TournamentTeamsRankingResponse;
  static deserializeBinaryFromReader(message: TournamentTeamsRankingResponse, reader: jspb.BinaryReader): TournamentTeamsRankingResponse;
}

export namespace TournamentTeamsRankingResponse {
  export type AsObject = {
    rankingsList: Array<TeamRanking.AsObject>,
    totalCount: number,
  }
}

export class TeamRanking extends jspb.Message {
  getTeamId(): number;
  setTeamId(value: number): TeamRanking;

  getTeamName(): string;
  setTeamName(value: string): TeamRanking;

  getSchoolNamesList(): Array<string>;
  setSchoolNamesList(value: Array<string>): TeamRanking;
  clearSchoolNamesList(): TeamRanking;
  addSchoolNames(value: string, index?: number): TeamRanking;

  getWins(): number;
  setWins(value: number): TeamRanking;

  getTotalPoints(): number;
  setTotalPoints(value: number): TeamRanking;

  getAverageRank(): number;
  setAverageRank(value: number): TeamRanking;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TeamRanking.AsObject;
  static toObject(includeInstance: boolean, msg: TeamRanking): TeamRanking.AsObject;
  static serializeBinaryToWriter(message: TeamRanking, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TeamRanking;
  static deserializeBinaryFromReader(message: TeamRanking, reader: jspb.BinaryReader): TeamRanking;
}

export namespace TeamRanking {
  export type AsObject = {
    teamId: number,
    teamName: string,
    schoolNamesList: Array<string>,
    wins: number,
    totalPoints: number,
    averageRank: number,
  }
}

export class TournamentSchoolRankingRequest extends jspb.Message {
  getTournamentId(): number;
  setTournamentId(value: number): TournamentSchoolRankingRequest;

  getToken(): string;
  setToken(value: string): TournamentSchoolRankingRequest;

  getPage(): number;
  setPage(value: number): TournamentSchoolRankingRequest;

  getPageSize(): number;
  setPageSize(value: number): TournamentSchoolRankingRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TournamentSchoolRankingRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TournamentSchoolRankingRequest): TournamentSchoolRankingRequest.AsObject;
  static serializeBinaryToWriter(message: TournamentSchoolRankingRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TournamentSchoolRankingRequest;
  static deserializeBinaryFromReader(message: TournamentSchoolRankingRequest, reader: jspb.BinaryReader): TournamentSchoolRankingRequest;
}

export namespace TournamentSchoolRankingRequest {
  export type AsObject = {
    tournamentId: number,
    token: string,
    page: number,
    pageSize: number,
  }
}

export class TournamentSchoolRankingResponse extends jspb.Message {
  getRankingsList(): Array<SchoolRanking>;
  setRankingsList(value: Array<SchoolRanking>): TournamentSchoolRankingResponse;
  clearRankingsList(): TournamentSchoolRankingResponse;
  addRankings(value?: SchoolRanking, index?: number): SchoolRanking;

  getTotalCount(): number;
  setTotalCount(value: number): TournamentSchoolRankingResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TournamentSchoolRankingResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TournamentSchoolRankingResponse): TournamentSchoolRankingResponse.AsObject;
  static serializeBinaryToWriter(message: TournamentSchoolRankingResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TournamentSchoolRankingResponse;
  static deserializeBinaryFromReader(message: TournamentSchoolRankingResponse, reader: jspb.BinaryReader): TournamentSchoolRankingResponse;
}

export namespace TournamentSchoolRankingResponse {
  export type AsObject = {
    rankingsList: Array<SchoolRanking.AsObject>,
    totalCount: number,
  }
}

export class SchoolRanking extends jspb.Message {
  getSchoolName(): string;
  setSchoolName(value: string): SchoolRanking;

  getTeamCount(): number;
  setTeamCount(value: number): SchoolRanking;

  getTotalWins(): number;
  setTotalWins(value: number): SchoolRanking;

  getAverageRank(): number;
  setAverageRank(value: number): SchoolRanking;

  getTotalPoints(): number;
  setTotalPoints(value: number): SchoolRanking;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SchoolRanking.AsObject;
  static toObject(includeInstance: boolean, msg: SchoolRanking): SchoolRanking.AsObject;
  static serializeBinaryToWriter(message: SchoolRanking, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SchoolRanking;
  static deserializeBinaryFromReader(message: SchoolRanking, reader: jspb.BinaryReader): SchoolRanking;
}

export namespace SchoolRanking {
  export type AsObject = {
    schoolName: string,
    teamCount: number,
    totalWins: number,
    averageRank: number,
    totalPoints: number,
  }
}

export class OverallSchoolRankingRequest extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): OverallSchoolRankingRequest;

  getToken(): string;
  setToken(value: string): OverallSchoolRankingRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OverallSchoolRankingRequest.AsObject;
  static toObject(includeInstance: boolean, msg: OverallSchoolRankingRequest): OverallSchoolRankingRequest.AsObject;
  static serializeBinaryToWriter(message: OverallSchoolRankingRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OverallSchoolRankingRequest;
  static deserializeBinaryFromReader(message: OverallSchoolRankingRequest, reader: jspb.BinaryReader): OverallSchoolRankingRequest;
}

export namespace OverallSchoolRankingRequest {
  export type AsObject = {
    userId: number,
    token: string,
  }
}

export class OverallSchoolRankingResponse extends jspb.Message {
  getSchoolRank(): number;
  setSchoolRank(value: number): OverallSchoolRankingResponse;

  getTotalSchools(): number;
  setTotalSchools(value: number): OverallSchoolRankingResponse;

  getRankChange(): number;
  setRankChange(value: number): OverallSchoolRankingResponse;

  getTopSchoolsList(): Array<TopSchool>;
  setTopSchoolsList(value: Array<TopSchool>): OverallSchoolRankingResponse;
  clearTopSchoolsList(): OverallSchoolRankingResponse;
  addTopSchools(value?: TopSchool, index?: number): TopSchool;

  getSchoolInfo(): SchoolInfo | undefined;
  setSchoolInfo(value?: SchoolInfo): OverallSchoolRankingResponse;
  hasSchoolInfo(): boolean;
  clearSchoolInfo(): OverallSchoolRankingResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OverallSchoolRankingResponse.AsObject;
  static toObject(includeInstance: boolean, msg: OverallSchoolRankingResponse): OverallSchoolRankingResponse.AsObject;
  static serializeBinaryToWriter(message: OverallSchoolRankingResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OverallSchoolRankingResponse;
  static deserializeBinaryFromReader(message: OverallSchoolRankingResponse, reader: jspb.BinaryReader): OverallSchoolRankingResponse;
}

export namespace OverallSchoolRankingResponse {
  export type AsObject = {
    schoolRank: number,
    totalSchools: number,
    rankChange: number,
    topSchoolsList: Array<TopSchool.AsObject>,
    schoolInfo?: SchoolInfo.AsObject,
  }
}

export class TopSchool extends jspb.Message {
  getRank(): number;
  setRank(value: number): TopSchool;

  getName(): string;
  setName(value: string): TopSchool;

  getTotalPoints(): number;
  setTotalPoints(value: number): TopSchool;

  getRankChange(): number;
  setRankChange(value: number): TopSchool;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TopSchool.AsObject;
  static toObject(includeInstance: boolean, msg: TopSchool): TopSchool.AsObject;
  static serializeBinaryToWriter(message: TopSchool, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TopSchool;
  static deserializeBinaryFromReader(message: TopSchool, reader: jspb.BinaryReader): TopSchool;
}

export namespace TopSchool {
  export type AsObject = {
    rank: number,
    name: string,
    totalPoints: number,
    rankChange: number,
  }
}

export class SchoolInfo extends jspb.Message {
  getName(): string;
  setName(value: string): SchoolInfo;

  getTotalPoints(): number;
  setTotalPoints(value: number): SchoolInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SchoolInfo.AsObject;
  static toObject(includeInstance: boolean, msg: SchoolInfo): SchoolInfo.AsObject;
  static serializeBinaryToWriter(message: SchoolInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SchoolInfo;
  static deserializeBinaryFromReader(message: SchoolInfo, reader: jspb.BinaryReader): SchoolInfo;
}

export namespace SchoolInfo {
  export type AsObject = {
    name: string,
    totalPoints: number,
  }
}

export class SchoolPerformanceRequest extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): SchoolPerformanceRequest;

  getStartDate(): string;
  setStartDate(value: string): SchoolPerformanceRequest;

  getEndDate(): string;
  setEndDate(value: string): SchoolPerformanceRequest;

  getToken(): string;
  setToken(value: string): SchoolPerformanceRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SchoolPerformanceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SchoolPerformanceRequest): SchoolPerformanceRequest.AsObject;
  static serializeBinaryToWriter(message: SchoolPerformanceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SchoolPerformanceRequest;
  static deserializeBinaryFromReader(message: SchoolPerformanceRequest, reader: jspb.BinaryReader): SchoolPerformanceRequest;
}

export namespace SchoolPerformanceRequest {
  export type AsObject = {
    userId: number,
    startDate: string,
    endDate: string,
    token: string,
  }
}

export class SchoolPerformanceResponse extends jspb.Message {
  getPerformanceDataList(): Array<SchoolPerformanceData>;
  setPerformanceDataList(value: Array<SchoolPerformanceData>): SchoolPerformanceResponse;
  clearPerformanceDataList(): SchoolPerformanceResponse;
  addPerformanceData(value?: SchoolPerformanceData, index?: number): SchoolPerformanceData;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SchoolPerformanceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SchoolPerformanceResponse): SchoolPerformanceResponse.AsObject;
  static serializeBinaryToWriter(message: SchoolPerformanceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SchoolPerformanceResponse;
  static deserializeBinaryFromReader(message: SchoolPerformanceResponse, reader: jspb.BinaryReader): SchoolPerformanceResponse;
}

export namespace SchoolPerformanceResponse {
  export type AsObject = {
    performanceDataList: Array<SchoolPerformanceData.AsObject>,
  }
}

export class SchoolPerformanceData extends jspb.Message {
  getTournamentDate(): string;
  setTournamentDate(value: string): SchoolPerformanceData;

  getSchoolTotalPoints(): number;
  setSchoolTotalPoints(value: number): SchoolPerformanceData;

  getSchoolAveragePoints(): number;
  setSchoolAveragePoints(value: number): SchoolPerformanceData;

  getTournamentRank(): number;
  setTournamentRank(value: number): SchoolPerformanceData;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SchoolPerformanceData.AsObject;
  static toObject(includeInstance: boolean, msg: SchoolPerformanceData): SchoolPerformanceData.AsObject;
  static serializeBinaryToWriter(message: SchoolPerformanceData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SchoolPerformanceData;
  static deserializeBinaryFromReader(message: SchoolPerformanceData, reader: jspb.BinaryReader): SchoolPerformanceData;
}

export namespace SchoolPerformanceData {
  export type AsObject = {
    tournamentDate: string,
    schoolTotalPoints: number,
    schoolAveragePoints: number,
    tournamentRank: number,
  }
}

