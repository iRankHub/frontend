import * as jspb from 'google-protobuf'



export class LocalDetails extends jspb.Message {
  getProvincesList(): Array<string>;
  setProvincesList(value: Array<string>): LocalDetails;
  clearProvincesList(): LocalDetails;
  addProvinces(value: string, index?: number): LocalDetails;

  getDistrictsList(): Array<string>;
  setDistrictsList(value: Array<string>): LocalDetails;
  clearDistrictsList(): LocalDetails;
  addDistricts(value: string, index?: number): LocalDetails;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LocalDetails.AsObject;
  static toObject(includeInstance: boolean, msg: LocalDetails): LocalDetails.AsObject;
  static serializeBinaryToWriter(message: LocalDetails, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LocalDetails;
  static deserializeBinaryFromReader(message: LocalDetails, reader: jspb.BinaryReader): LocalDetails;
}

export namespace LocalDetails {
  export type AsObject = {
    provincesList: Array<string>,
    districtsList: Array<string>,
  }
}

export class InternationalDetails extends jspb.Message {
  getContinentsList(): Array<string>;
  setContinentsList(value: Array<string>): InternationalDetails;
  clearContinentsList(): InternationalDetails;
  addContinents(value: string, index?: number): InternationalDetails;

  getCountriesList(): Array<string>;
  setCountriesList(value: Array<string>): InternationalDetails;
  clearCountriesList(): InternationalDetails;
  addCountries(value: string, index?: number): InternationalDetails;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InternationalDetails.AsObject;
  static toObject(includeInstance: boolean, msg: InternationalDetails): InternationalDetails.AsObject;
  static serializeBinaryToWriter(message: InternationalDetails, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InternationalDetails;
  static deserializeBinaryFromReader(message: InternationalDetails, reader: jspb.BinaryReader): InternationalDetails;
}

export namespace InternationalDetails {
  export type AsObject = {
    continentsList: Array<string>,
    countriesList: Array<string>,
  }
}

export class League extends jspb.Message {
  getLeagueId(): number;
  setLeagueId(value: number): League;

  getName(): string;
  setName(value: string): League;

  getLeagueType(): LeagueType;
  setLeagueType(value: LeagueType): League;

  getDetails(): string;
  setDetails(value: string): League;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): League.AsObject;
  static toObject(includeInstance: boolean, msg: League): League.AsObject;
  static serializeBinaryToWriter(message: League, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): League;
  static deserializeBinaryFromReader(message: League, reader: jspb.BinaryReader): League;
}

export namespace League {
  export type AsObject = {
    leagueId: number,
    name: string,
    leagueType: LeagueType,
    details: string,
  }
}

export class TournamentFormat extends jspb.Message {
  getFormatId(): number;
  setFormatId(value: number): TournamentFormat;

  getFormatName(): string;
  setFormatName(value: string): TournamentFormat;

  getDescription(): string;
  setDescription(value: string): TournamentFormat;

  getSpeakersPerTeam(): number;
  setSpeakersPerTeam(value: number): TournamentFormat;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TournamentFormat.AsObject;
  static toObject(includeInstance: boolean, msg: TournamentFormat): TournamentFormat.AsObject;
  static serializeBinaryToWriter(message: TournamentFormat, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TournamentFormat;
  static deserializeBinaryFromReader(message: TournamentFormat, reader: jspb.BinaryReader): TournamentFormat;
}

export namespace TournamentFormat {
  export type AsObject = {
    formatId: number,
    formatName: string,
    description: string,
    speakersPerTeam: number,
  }
}

export class Tournament extends jspb.Message {
  getTournamentId(): number;
  setTournamentId(value: number): Tournament;

  getName(): string;
  setName(value: string): Tournament;

  getStartDate(): string;
  setStartDate(value: string): Tournament;

  getEndDate(): string;
  setEndDate(value: string): Tournament;

  getLocation(): string;
  setLocation(value: string): Tournament;

  getFormatId(): number;
  setFormatId(value: number): Tournament;

  getLeagueId(): number;
  setLeagueId(value: number): Tournament;

  getCoordinatorId(): number;
  setCoordinatorId(value: number): Tournament;

  getNumberOfPreliminaryRounds(): number;
  setNumberOfPreliminaryRounds(value: number): Tournament;

  getNumberOfEliminationRounds(): number;
  setNumberOfEliminationRounds(value: number): Tournament;

  getJudgesPerDebatePreliminary(): number;
  setJudgesPerDebatePreliminary(value: number): Tournament;

  getJudgesPerDebateElimination(): number;
  setJudgesPerDebateElimination(value: number): Tournament;

  getTournamentFee(): number;
  setTournamentFee(value: number): Tournament;

  getImageUrl(): string;
  setImageUrl(value: string): Tournament;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Tournament.AsObject;
  static toObject(includeInstance: boolean, msg: Tournament): Tournament.AsObject;
  static serializeBinaryToWriter(message: Tournament, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Tournament;
  static deserializeBinaryFromReader(message: Tournament, reader: jspb.BinaryReader): Tournament;
}

export namespace Tournament {
  export type AsObject = {
    tournamentId: number,
    name: string,
    startDate: string,
    endDate: string,
    location: string,
    formatId: number,
    leagueId: number,
    coordinatorId: number,
    numberOfPreliminaryRounds: number,
    numberOfEliminationRounds: number,
    judgesPerDebatePreliminary: number,
    judgesPerDebateElimination: number,
    tournamentFee: number,
    imageUrl: string,
  }
}

export class CreateLeagueRequest extends jspb.Message {
  getName(): string;
  setName(value: string): CreateLeagueRequest;

  getLeagueType(): LeagueType;
  setLeagueType(value: LeagueType): CreateLeagueRequest;

  getLocalDetails(): LocalDetails | undefined;
  setLocalDetails(value?: LocalDetails): CreateLeagueRequest;
  hasLocalDetails(): boolean;
  clearLocalDetails(): CreateLeagueRequest;

  getInternationalDetails(): InternationalDetails | undefined;
  setInternationalDetails(value?: InternationalDetails): CreateLeagueRequest;
  hasInternationalDetails(): boolean;
  clearInternationalDetails(): CreateLeagueRequest;

  getToken(): string;
  setToken(value: string): CreateLeagueRequest;

  getLeagueDetailsCase(): CreateLeagueRequest.LeagueDetailsCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateLeagueRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateLeagueRequest): CreateLeagueRequest.AsObject;
  static serializeBinaryToWriter(message: CreateLeagueRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateLeagueRequest;
  static deserializeBinaryFromReader(message: CreateLeagueRequest, reader: jspb.BinaryReader): CreateLeagueRequest;
}

export namespace CreateLeagueRequest {
  export type AsObject = {
    name: string,
    leagueType: LeagueType,
    localDetails?: LocalDetails.AsObject,
    internationalDetails?: InternationalDetails.AsObject,
    token: string,
  }

  export enum LeagueDetailsCase { 
    LEAGUE_DETAILS_NOT_SET = 0,
    LOCAL_DETAILS = 3,
    INTERNATIONAL_DETAILS = 4,
  }
}

export class GetLeagueRequest extends jspb.Message {
  getLeagueId(): number;
  setLeagueId(value: number): GetLeagueRequest;

  getToken(): string;
  setToken(value: string): GetLeagueRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLeagueRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetLeagueRequest): GetLeagueRequest.AsObject;
  static serializeBinaryToWriter(message: GetLeagueRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLeagueRequest;
  static deserializeBinaryFromReader(message: GetLeagueRequest, reader: jspb.BinaryReader): GetLeagueRequest;
}

export namespace GetLeagueRequest {
  export type AsObject = {
    leagueId: number,
    token: string,
  }
}

export class ListLeaguesRequest extends jspb.Message {
  getPageSize(): number;
  setPageSize(value: number): ListLeaguesRequest;

  getPageToken(): number;
  setPageToken(value: number): ListLeaguesRequest;

  getToken(): string;
  setToken(value: string): ListLeaguesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListLeaguesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListLeaguesRequest): ListLeaguesRequest.AsObject;
  static serializeBinaryToWriter(message: ListLeaguesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListLeaguesRequest;
  static deserializeBinaryFromReader(message: ListLeaguesRequest, reader: jspb.BinaryReader): ListLeaguesRequest;
}

export namespace ListLeaguesRequest {
  export type AsObject = {
    pageSize: number,
    pageToken: number,
    token: string,
  }
}

export class UpdateLeagueRequest extends jspb.Message {
  getLeagueId(): number;
  setLeagueId(value: number): UpdateLeagueRequest;

  getName(): string;
  setName(value: string): UpdateLeagueRequest;

  getLeagueType(): LeagueType;
  setLeagueType(value: LeagueType): UpdateLeagueRequest;

  getLocalDetails(): LocalDetails | undefined;
  setLocalDetails(value?: LocalDetails): UpdateLeagueRequest;
  hasLocalDetails(): boolean;
  clearLocalDetails(): UpdateLeagueRequest;

  getInternationalDetails(): InternationalDetails | undefined;
  setInternationalDetails(value?: InternationalDetails): UpdateLeagueRequest;
  hasInternationalDetails(): boolean;
  clearInternationalDetails(): UpdateLeagueRequest;

  getToken(): string;
  setToken(value: string): UpdateLeagueRequest;

  getLeagueDetailsCase(): UpdateLeagueRequest.LeagueDetailsCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateLeagueRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateLeagueRequest): UpdateLeagueRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateLeagueRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateLeagueRequest;
  static deserializeBinaryFromReader(message: UpdateLeagueRequest, reader: jspb.BinaryReader): UpdateLeagueRequest;
}

export namespace UpdateLeagueRequest {
  export type AsObject = {
    leagueId: number,
    name: string,
    leagueType: LeagueType,
    localDetails?: LocalDetails.AsObject,
    internationalDetails?: InternationalDetails.AsObject,
    token: string,
  }

  export enum LeagueDetailsCase { 
    LEAGUE_DETAILS_NOT_SET = 0,
    LOCAL_DETAILS = 4,
    INTERNATIONAL_DETAILS = 5,
  }
}

export class DeleteLeagueRequest extends jspb.Message {
  getLeagueId(): number;
  setLeagueId(value: number): DeleteLeagueRequest;

  getToken(): string;
  setToken(value: string): DeleteLeagueRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteLeagueRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteLeagueRequest): DeleteLeagueRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteLeagueRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteLeagueRequest;
  static deserializeBinaryFromReader(message: DeleteLeagueRequest, reader: jspb.BinaryReader): DeleteLeagueRequest;
}

export namespace DeleteLeagueRequest {
  export type AsObject = {
    leagueId: number,
    token: string,
  }
}

export class CreateTournamentFormatRequest extends jspb.Message {
  getFormatName(): string;
  setFormatName(value: string): CreateTournamentFormatRequest;

  getDescription(): string;
  setDescription(value: string): CreateTournamentFormatRequest;

  getSpeakersPerTeam(): number;
  setSpeakersPerTeam(value: number): CreateTournamentFormatRequest;

  getToken(): string;
  setToken(value: string): CreateTournamentFormatRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateTournamentFormatRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateTournamentFormatRequest): CreateTournamentFormatRequest.AsObject;
  static serializeBinaryToWriter(message: CreateTournamentFormatRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateTournamentFormatRequest;
  static deserializeBinaryFromReader(message: CreateTournamentFormatRequest, reader: jspb.BinaryReader): CreateTournamentFormatRequest;
}

export namespace CreateTournamentFormatRequest {
  export type AsObject = {
    formatName: string,
    description: string,
    speakersPerTeam: number,
    token: string,
  }
}

export class GetTournamentFormatRequest extends jspb.Message {
  getFormatId(): number;
  setFormatId(value: number): GetTournamentFormatRequest;

  getToken(): string;
  setToken(value: string): GetTournamentFormatRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTournamentFormatRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetTournamentFormatRequest): GetTournamentFormatRequest.AsObject;
  static serializeBinaryToWriter(message: GetTournamentFormatRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTournamentFormatRequest;
  static deserializeBinaryFromReader(message: GetTournamentFormatRequest, reader: jspb.BinaryReader): GetTournamentFormatRequest;
}

export namespace GetTournamentFormatRequest {
  export type AsObject = {
    formatId: number,
    token: string,
  }
}

export class ListTournamentFormatsRequest extends jspb.Message {
  getPageSize(): number;
  setPageSize(value: number): ListTournamentFormatsRequest;

  getPageToken(): number;
  setPageToken(value: number): ListTournamentFormatsRequest;

  getToken(): string;
  setToken(value: string): ListTournamentFormatsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListTournamentFormatsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListTournamentFormatsRequest): ListTournamentFormatsRequest.AsObject;
  static serializeBinaryToWriter(message: ListTournamentFormatsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListTournamentFormatsRequest;
  static deserializeBinaryFromReader(message: ListTournamentFormatsRequest, reader: jspb.BinaryReader): ListTournamentFormatsRequest;
}

export namespace ListTournamentFormatsRequest {
  export type AsObject = {
    pageSize: number,
    pageToken: number,
    token: string,
  }
}

export class UpdateTournamentFormatRequest extends jspb.Message {
  getFormatId(): number;
  setFormatId(value: number): UpdateTournamentFormatRequest;

  getFormatName(): string;
  setFormatName(value: string): UpdateTournamentFormatRequest;

  getDescription(): string;
  setDescription(value: string): UpdateTournamentFormatRequest;

  getSpeakersPerTeam(): number;
  setSpeakersPerTeam(value: number): UpdateTournamentFormatRequest;

  getToken(): string;
  setToken(value: string): UpdateTournamentFormatRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateTournamentFormatRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateTournamentFormatRequest): UpdateTournamentFormatRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateTournamentFormatRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateTournamentFormatRequest;
  static deserializeBinaryFromReader(message: UpdateTournamentFormatRequest, reader: jspb.BinaryReader): UpdateTournamentFormatRequest;
}

export namespace UpdateTournamentFormatRequest {
  export type AsObject = {
    formatId: number,
    formatName: string,
    description: string,
    speakersPerTeam: number,
    token: string,
  }
}

export class DeleteTournamentFormatRequest extends jspb.Message {
  getFormatId(): number;
  setFormatId(value: number): DeleteTournamentFormatRequest;

  getToken(): string;
  setToken(value: string): DeleteTournamentFormatRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteTournamentFormatRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteTournamentFormatRequest): DeleteTournamentFormatRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteTournamentFormatRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteTournamentFormatRequest;
  static deserializeBinaryFromReader(message: DeleteTournamentFormatRequest, reader: jspb.BinaryReader): DeleteTournamentFormatRequest;
}

export namespace DeleteTournamentFormatRequest {
  export type AsObject = {
    formatId: number,
    token: string,
  }
}

export class CreateTournamentRequest extends jspb.Message {
  getName(): string;
  setName(value: string): CreateTournamentRequest;

  getStartDate(): string;
  setStartDate(value: string): CreateTournamentRequest;

  getEndDate(): string;
  setEndDate(value: string): CreateTournamentRequest;

  getLocation(): string;
  setLocation(value: string): CreateTournamentRequest;

  getFormatId(): number;
  setFormatId(value: number): CreateTournamentRequest;

  getLeagueId(): number;
  setLeagueId(value: number): CreateTournamentRequest;

  getCoordinatorId(): number;
  setCoordinatorId(value: number): CreateTournamentRequest;

  getNumberOfPreliminaryRounds(): number;
  setNumberOfPreliminaryRounds(value: number): CreateTournamentRequest;

  getNumberOfEliminationRounds(): number;
  setNumberOfEliminationRounds(value: number): CreateTournamentRequest;

  getJudgesPerDebatePreliminary(): number;
  setJudgesPerDebatePreliminary(value: number): CreateTournamentRequest;

  getJudgesPerDebateElimination(): number;
  setJudgesPerDebateElimination(value: number): CreateTournamentRequest;

  getTournamentFee(): number;
  setTournamentFee(value: number): CreateTournamentRequest;

  getToken(): string;
  setToken(value: string): CreateTournamentRequest;

  getImageUrl(): string;
  setImageUrl(value: string): CreateTournamentRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateTournamentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateTournamentRequest): CreateTournamentRequest.AsObject;
  static serializeBinaryToWriter(message: CreateTournamentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateTournamentRequest;
  static deserializeBinaryFromReader(message: CreateTournamentRequest, reader: jspb.BinaryReader): CreateTournamentRequest;
}

export namespace CreateTournamentRequest {
  export type AsObject = {
    name: string,
    startDate: string,
    endDate: string,
    location: string,
    formatId: number,
    leagueId: number,
    coordinatorId: number,
    numberOfPreliminaryRounds: number,
    numberOfEliminationRounds: number,
    judgesPerDebatePreliminary: number,
    judgesPerDebateElimination: number,
    tournamentFee: number,
    token: string,
    imageUrl: string,
  }
}

export class GetTournamentRequest extends jspb.Message {
  getTournamentId(): number;
  setTournamentId(value: number): GetTournamentRequest;

  getToken(): string;
  setToken(value: string): GetTournamentRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTournamentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetTournamentRequest): GetTournamentRequest.AsObject;
  static serializeBinaryToWriter(message: GetTournamentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTournamentRequest;
  static deserializeBinaryFromReader(message: GetTournamentRequest, reader: jspb.BinaryReader): GetTournamentRequest;
}

export namespace GetTournamentRequest {
  export type AsObject = {
    tournamentId: number,
    token: string,
  }
}

export class ListTournamentsRequest extends jspb.Message {
  getPageSize(): number;
  setPageSize(value: number): ListTournamentsRequest;

  getPageToken(): number;
  setPageToken(value: number): ListTournamentsRequest;

  getToken(): string;
  setToken(value: string): ListTournamentsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListTournamentsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListTournamentsRequest): ListTournamentsRequest.AsObject;
  static serializeBinaryToWriter(message: ListTournamentsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListTournamentsRequest;
  static deserializeBinaryFromReader(message: ListTournamentsRequest, reader: jspb.BinaryReader): ListTournamentsRequest;
}

export namespace ListTournamentsRequest {
  export type AsObject = {
    pageSize: number,
    pageToken: number,
    token: string,
  }
}

export class UpdateTournamentRequest extends jspb.Message {
  getTournamentId(): number;
  setTournamentId(value: number): UpdateTournamentRequest;

  getName(): string;
  setName(value: string): UpdateTournamentRequest;

  getStartDate(): string;
  setStartDate(value: string): UpdateTournamentRequest;

  getEndDate(): string;
  setEndDate(value: string): UpdateTournamentRequest;

  getLocation(): string;
  setLocation(value: string): UpdateTournamentRequest;

  getFormatId(): number;
  setFormatId(value: number): UpdateTournamentRequest;

  getLeagueId(): number;
  setLeagueId(value: number): UpdateTournamentRequest;

  getCoordinatorId(): number;
  setCoordinatorId(value: number): UpdateTournamentRequest;

  getNumberOfPreliminaryRounds(): number;
  setNumberOfPreliminaryRounds(value: number): UpdateTournamentRequest;

  getNumberOfEliminationRounds(): number;
  setNumberOfEliminationRounds(value: number): UpdateTournamentRequest;

  getJudgesPerDebatePreliminary(): number;
  setJudgesPerDebatePreliminary(value: number): UpdateTournamentRequest;

  getJudgesPerDebateElimination(): number;
  setJudgesPerDebateElimination(value: number): UpdateTournamentRequest;

  getTournamentFee(): number;
  setTournamentFee(value: number): UpdateTournamentRequest;

  getToken(): string;
  setToken(value: string): UpdateTournamentRequest;

  getImageUrl(): string;
  setImageUrl(value: string): UpdateTournamentRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateTournamentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateTournamentRequest): UpdateTournamentRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateTournamentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateTournamentRequest;
  static deserializeBinaryFromReader(message: UpdateTournamentRequest, reader: jspb.BinaryReader): UpdateTournamentRequest;
}

export namespace UpdateTournamentRequest {
  export type AsObject = {
    tournamentId: number,
    name: string,
    startDate: string,
    endDate: string,
    location: string,
    formatId: number,
    leagueId: number,
    coordinatorId: number,
    numberOfPreliminaryRounds: number,
    numberOfEliminationRounds: number,
    judgesPerDebatePreliminary: number,
    judgesPerDebateElimination: number,
    tournamentFee: number,
    token: string,
    imageUrl: string,
  }
}

export class DeleteTournamentRequest extends jspb.Message {
  getTournamentId(): number;
  setTournamentId(value: number): DeleteTournamentRequest;

  getToken(): string;
  setToken(value: string): DeleteTournamentRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteTournamentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteTournamentRequest): DeleteTournamentRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteTournamentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteTournamentRequest;
  static deserializeBinaryFromReader(message: DeleteTournamentRequest, reader: jspb.BinaryReader): DeleteTournamentRequest;
}

export namespace DeleteTournamentRequest {
  export type AsObject = {
    tournamentId: number,
    token: string,
  }
}

export class CreateLeagueResponse extends jspb.Message {
  getLeague(): League | undefined;
  setLeague(value?: League): CreateLeagueResponse;
  hasLeague(): boolean;
  clearLeague(): CreateLeagueResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateLeagueResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateLeagueResponse): CreateLeagueResponse.AsObject;
  static serializeBinaryToWriter(message: CreateLeagueResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateLeagueResponse;
  static deserializeBinaryFromReader(message: CreateLeagueResponse, reader: jspb.BinaryReader): CreateLeagueResponse;
}

export namespace CreateLeagueResponse {
  export type AsObject = {
    league?: League.AsObject,
  }
}

export class GetLeagueResponse extends jspb.Message {
  getLeague(): League | undefined;
  setLeague(value?: League): GetLeagueResponse;
  hasLeague(): boolean;
  clearLeague(): GetLeagueResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLeagueResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetLeagueResponse): GetLeagueResponse.AsObject;
  static serializeBinaryToWriter(message: GetLeagueResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLeagueResponse;
  static deserializeBinaryFromReader(message: GetLeagueResponse, reader: jspb.BinaryReader): GetLeagueResponse;
}

export namespace GetLeagueResponse {
  export type AsObject = {
    league?: League.AsObject,
  }
}

export class ListLeaguesResponse extends jspb.Message {
  getLeaguesList(): Array<League>;
  setLeaguesList(value: Array<League>): ListLeaguesResponse;
  clearLeaguesList(): ListLeaguesResponse;
  addLeagues(value?: League, index?: number): League;

  getNextPageToken(): number;
  setNextPageToken(value: number): ListLeaguesResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListLeaguesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListLeaguesResponse): ListLeaguesResponse.AsObject;
  static serializeBinaryToWriter(message: ListLeaguesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListLeaguesResponse;
  static deserializeBinaryFromReader(message: ListLeaguesResponse, reader: jspb.BinaryReader): ListLeaguesResponse;
}

export namespace ListLeaguesResponse {
  export type AsObject = {
    leaguesList: Array<League.AsObject>,
    nextPageToken: number,
  }
}

export class UpdateLeagueResponse extends jspb.Message {
  getLeague(): League | undefined;
  setLeague(value?: League): UpdateLeagueResponse;
  hasLeague(): boolean;
  clearLeague(): UpdateLeagueResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateLeagueResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateLeagueResponse): UpdateLeagueResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateLeagueResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateLeagueResponse;
  static deserializeBinaryFromReader(message: UpdateLeagueResponse, reader: jspb.BinaryReader): UpdateLeagueResponse;
}

export namespace UpdateLeagueResponse {
  export type AsObject = {
    league?: League.AsObject,
  }
}

export class DeleteLeagueResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): DeleteLeagueResponse;

  getMessage(): string;
  setMessage(value: string): DeleteLeagueResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteLeagueResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteLeagueResponse): DeleteLeagueResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteLeagueResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteLeagueResponse;
  static deserializeBinaryFromReader(message: DeleteLeagueResponse, reader: jspb.BinaryReader): DeleteLeagueResponse;
}

export namespace DeleteLeagueResponse {
  export type AsObject = {
    success: boolean,
    message: string,
  }
}

export class CreateTournamentFormatResponse extends jspb.Message {
  getFormat(): TournamentFormat | undefined;
  setFormat(value?: TournamentFormat): CreateTournamentFormatResponse;
  hasFormat(): boolean;
  clearFormat(): CreateTournamentFormatResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateTournamentFormatResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateTournamentFormatResponse): CreateTournamentFormatResponse.AsObject;
  static serializeBinaryToWriter(message: CreateTournamentFormatResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateTournamentFormatResponse;
  static deserializeBinaryFromReader(message: CreateTournamentFormatResponse, reader: jspb.BinaryReader): CreateTournamentFormatResponse;
}

export namespace CreateTournamentFormatResponse {
  export type AsObject = {
    format?: TournamentFormat.AsObject,
  }
}

export class GetTournamentFormatResponse extends jspb.Message {
  getFormat(): TournamentFormat | undefined;
  setFormat(value?: TournamentFormat): GetTournamentFormatResponse;
  hasFormat(): boolean;
  clearFormat(): GetTournamentFormatResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTournamentFormatResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetTournamentFormatResponse): GetTournamentFormatResponse.AsObject;
  static serializeBinaryToWriter(message: GetTournamentFormatResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTournamentFormatResponse;
  static deserializeBinaryFromReader(message: GetTournamentFormatResponse, reader: jspb.BinaryReader): GetTournamentFormatResponse;
}

export namespace GetTournamentFormatResponse {
  export type AsObject = {
    format?: TournamentFormat.AsObject,
  }
}

export class ListTournamentFormatsResponse extends jspb.Message {
  getFormatsList(): Array<TournamentFormat>;
  setFormatsList(value: Array<TournamentFormat>): ListTournamentFormatsResponse;
  clearFormatsList(): ListTournamentFormatsResponse;
  addFormats(value?: TournamentFormat, index?: number): TournamentFormat;

  getNextPageToken(): number;
  setNextPageToken(value: number): ListTournamentFormatsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListTournamentFormatsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListTournamentFormatsResponse): ListTournamentFormatsResponse.AsObject;
  static serializeBinaryToWriter(message: ListTournamentFormatsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListTournamentFormatsResponse;
  static deserializeBinaryFromReader(message: ListTournamentFormatsResponse, reader: jspb.BinaryReader): ListTournamentFormatsResponse;
}

export namespace ListTournamentFormatsResponse {
  export type AsObject = {
    formatsList: Array<TournamentFormat.AsObject>,
    nextPageToken: number,
  }
}

export class UpdateTournamentFormatResponse extends jspb.Message {
  getFormat(): TournamentFormat | undefined;
  setFormat(value?: TournamentFormat): UpdateTournamentFormatResponse;
  hasFormat(): boolean;
  clearFormat(): UpdateTournamentFormatResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateTournamentFormatResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateTournamentFormatResponse): UpdateTournamentFormatResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateTournamentFormatResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateTournamentFormatResponse;
  static deserializeBinaryFromReader(message: UpdateTournamentFormatResponse, reader: jspb.BinaryReader): UpdateTournamentFormatResponse;
}

export namespace UpdateTournamentFormatResponse {
  export type AsObject = {
    format?: TournamentFormat.AsObject,
  }
}

export class DeleteTournamentFormatResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): DeleteTournamentFormatResponse;

  getMessage(): string;
  setMessage(value: string): DeleteTournamentFormatResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteTournamentFormatResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteTournamentFormatResponse): DeleteTournamentFormatResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteTournamentFormatResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteTournamentFormatResponse;
  static deserializeBinaryFromReader(message: DeleteTournamentFormatResponse, reader: jspb.BinaryReader): DeleteTournamentFormatResponse;
}

export namespace DeleteTournamentFormatResponse {
  export type AsObject = {
    success: boolean,
    message: string,
  }
}

export class CreateTournamentResponse extends jspb.Message {
  getTournament(): Tournament | undefined;
  setTournament(value?: Tournament): CreateTournamentResponse;
  hasTournament(): boolean;
  clearTournament(): CreateTournamentResponse;

  getInvitationIdsList(): Array<number>;
  setInvitationIdsList(value: Array<number>): CreateTournamentResponse;
  clearInvitationIdsList(): CreateTournamentResponse;
  addInvitationIds(value: number, index?: number): CreateTournamentResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateTournamentResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateTournamentResponse): CreateTournamentResponse.AsObject;
  static serializeBinaryToWriter(message: CreateTournamentResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateTournamentResponse;
  static deserializeBinaryFromReader(message: CreateTournamentResponse, reader: jspb.BinaryReader): CreateTournamentResponse;
}

export namespace CreateTournamentResponse {
  export type AsObject = {
    tournament?: Tournament.AsObject,
    invitationIdsList: Array<number>,
  }
}

export class GetTournamentResponse extends jspb.Message {
  getTournament(): Tournament | undefined;
  setTournament(value?: Tournament): GetTournamentResponse;
  hasTournament(): boolean;
  clearTournament(): GetTournamentResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTournamentResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetTournamentResponse): GetTournamentResponse.AsObject;
  static serializeBinaryToWriter(message: GetTournamentResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTournamentResponse;
  static deserializeBinaryFromReader(message: GetTournamentResponse, reader: jspb.BinaryReader): GetTournamentResponse;
}

export namespace GetTournamentResponse {
  export type AsObject = {
    tournament?: Tournament.AsObject,
  }
}

export class ListTournamentsResponse extends jspb.Message {
  getTournamentsList(): Array<Tournament>;
  setTournamentsList(value: Array<Tournament>): ListTournamentsResponse;
  clearTournamentsList(): ListTournamentsResponse;
  addTournaments(value?: Tournament, index?: number): Tournament;

  getNextPageToken(): number;
  setNextPageToken(value: number): ListTournamentsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListTournamentsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListTournamentsResponse): ListTournamentsResponse.AsObject;
  static serializeBinaryToWriter(message: ListTournamentsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListTournamentsResponse;
  static deserializeBinaryFromReader(message: ListTournamentsResponse, reader: jspb.BinaryReader): ListTournamentsResponse;
}

export namespace ListTournamentsResponse {
  export type AsObject = {
    tournamentsList: Array<Tournament.AsObject>,
    nextPageToken: number,
  }
}

export class UpdateTournamentResponse extends jspb.Message {
  getTournament(): Tournament | undefined;
  setTournament(value?: Tournament): UpdateTournamentResponse;
  hasTournament(): boolean;
  clearTournament(): UpdateTournamentResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateTournamentResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateTournamentResponse): UpdateTournamentResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateTournamentResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateTournamentResponse;
  static deserializeBinaryFromReader(message: UpdateTournamentResponse, reader: jspb.BinaryReader): UpdateTournamentResponse;
}

export namespace UpdateTournamentResponse {
  export type AsObject = {
    tournament?: Tournament.AsObject,
  }
}

export class DeleteTournamentResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): DeleteTournamentResponse;

  getMessage(): string;
  setMessage(value: string): DeleteTournamentResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteTournamentResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteTournamentResponse): DeleteTournamentResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteTournamentResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteTournamentResponse;
  static deserializeBinaryFromReader(message: DeleteTournamentResponse, reader: jspb.BinaryReader): DeleteTournamentResponse;
}

export namespace DeleteTournamentResponse {
  export type AsObject = {
    success: boolean,
    message: string,
  }
}

export class GetInvitationsByUserRequest extends jspb.Message {
  getToken(): string;
  setToken(value: string): GetInvitationsByUserRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetInvitationsByUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetInvitationsByUserRequest): GetInvitationsByUserRequest.AsObject;
  static serializeBinaryToWriter(message: GetInvitationsByUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetInvitationsByUserRequest;
  static deserializeBinaryFromReader(message: GetInvitationsByUserRequest, reader: jspb.BinaryReader): GetInvitationsByUserRequest;
}

export namespace GetInvitationsByUserRequest {
  export type AsObject = {
    token: string,
  }
}

export class GetInvitationsByUserResponse extends jspb.Message {
  getInvitationsList(): Array<InvitationInfo>;
  setInvitationsList(value: Array<InvitationInfo>): GetInvitationsByUserResponse;
  clearInvitationsList(): GetInvitationsByUserResponse;
  addInvitations(value?: InvitationInfo, index?: number): InvitationInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetInvitationsByUserResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetInvitationsByUserResponse): GetInvitationsByUserResponse.AsObject;
  static serializeBinaryToWriter(message: GetInvitationsByUserResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetInvitationsByUserResponse;
  static deserializeBinaryFromReader(message: GetInvitationsByUserResponse, reader: jspb.BinaryReader): GetInvitationsByUserResponse;
}

export namespace GetInvitationsByUserResponse {
  export type AsObject = {
    invitationsList: Array<InvitationInfo.AsObject>,
  }
}

export class GetInvitationsByTournamentRequest extends jspb.Message {
  getTournamentId(): number;
  setTournamentId(value: number): GetInvitationsByTournamentRequest;

  getToken(): string;
  setToken(value: string): GetInvitationsByTournamentRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetInvitationsByTournamentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetInvitationsByTournamentRequest): GetInvitationsByTournamentRequest.AsObject;
  static serializeBinaryToWriter(message: GetInvitationsByTournamentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetInvitationsByTournamentRequest;
  static deserializeBinaryFromReader(message: GetInvitationsByTournamentRequest, reader: jspb.BinaryReader): GetInvitationsByTournamentRequest;
}

export namespace GetInvitationsByTournamentRequest {
  export type AsObject = {
    tournamentId: number,
    token: string,
  }
}

export class InvitationInfo extends jspb.Message {
  getInvitationId(): number;
  setInvitationId(value: number): InvitationInfo;

  getStatus(): string;
  setStatus(value: string): InvitationInfo;

  getIdebateId(): string;
  setIdebateId(value: string): InvitationInfo;

  getInviteeName(): string;
  setInviteeName(value: string): InvitationInfo;

  getInviteeRole(): string;
  setInviteeRole(value: string): InvitationInfo;

  getCreatedAt(): string;
  setCreatedAt(value: string): InvitationInfo;

  getUpdatedAt(): string;
  setUpdatedAt(value: string): InvitationInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InvitationInfo.AsObject;
  static toObject(includeInstance: boolean, msg: InvitationInfo): InvitationInfo.AsObject;
  static serializeBinaryToWriter(message: InvitationInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InvitationInfo;
  static deserializeBinaryFromReader(message: InvitationInfo, reader: jspb.BinaryReader): InvitationInfo;
}

export namespace InvitationInfo {
  export type AsObject = {
    invitationId: number,
    status: string,
    idebateId: string,
    inviteeName: string,
    inviteeRole: string,
    createdAt: string,
    updatedAt: string,
  }
}

export class GetInvitationsByTournamentResponse extends jspb.Message {
  getInvitationsList(): Array<InvitationInfo>;
  setInvitationsList(value: Array<InvitationInfo>): GetInvitationsByTournamentResponse;
  clearInvitationsList(): GetInvitationsByTournamentResponse;
  addInvitations(value?: InvitationInfo, index?: number): InvitationInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetInvitationsByTournamentResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetInvitationsByTournamentResponse): GetInvitationsByTournamentResponse.AsObject;
  static serializeBinaryToWriter(message: GetInvitationsByTournamentResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetInvitationsByTournamentResponse;
  static deserializeBinaryFromReader(message: GetInvitationsByTournamentResponse, reader: jspb.BinaryReader): GetInvitationsByTournamentResponse;
}

export namespace GetInvitationsByTournamentResponse {
  export type AsObject = {
    invitationsList: Array<InvitationInfo.AsObject>,
  }
}

export class UpdateInvitationStatusRequest extends jspb.Message {
  getInvitationId(): number;
  setInvitationId(value: number): UpdateInvitationStatusRequest;

  getNewStatus(): string;
  setNewStatus(value: string): UpdateInvitationStatusRequest;

  getToken(): string;
  setToken(value: string): UpdateInvitationStatusRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateInvitationStatusRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateInvitationStatusRequest): UpdateInvitationStatusRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateInvitationStatusRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateInvitationStatusRequest;
  static deserializeBinaryFromReader(message: UpdateInvitationStatusRequest, reader: jspb.BinaryReader): UpdateInvitationStatusRequest;
}

export namespace UpdateInvitationStatusRequest {
  export type AsObject = {
    invitationId: number,
    newStatus: string,
    token: string,
  }
}

export class UpdateInvitationStatusResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): UpdateInvitationStatusResponse;

  getMessage(): string;
  setMessage(value: string): UpdateInvitationStatusResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateInvitationStatusResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateInvitationStatusResponse): UpdateInvitationStatusResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateInvitationStatusResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateInvitationStatusResponse;
  static deserializeBinaryFromReader(message: UpdateInvitationStatusResponse, reader: jspb.BinaryReader): UpdateInvitationStatusResponse;
}

export namespace UpdateInvitationStatusResponse {
  export type AsObject = {
    success: boolean,
    message: string,
  }
}

export class BulkUpdateInvitationStatusRequest extends jspb.Message {
  getInvitationIdsList(): Array<number>;
  setInvitationIdsList(value: Array<number>): BulkUpdateInvitationStatusRequest;
  clearInvitationIdsList(): BulkUpdateInvitationStatusRequest;
  addInvitationIds(value: number, index?: number): BulkUpdateInvitationStatusRequest;

  getNewStatus(): string;
  setNewStatus(value: string): BulkUpdateInvitationStatusRequest;

  getToken(): string;
  setToken(value: string): BulkUpdateInvitationStatusRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BulkUpdateInvitationStatusRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BulkUpdateInvitationStatusRequest): BulkUpdateInvitationStatusRequest.AsObject;
  static serializeBinaryToWriter(message: BulkUpdateInvitationStatusRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BulkUpdateInvitationStatusRequest;
  static deserializeBinaryFromReader(message: BulkUpdateInvitationStatusRequest, reader: jspb.BinaryReader): BulkUpdateInvitationStatusRequest;
}

export namespace BulkUpdateInvitationStatusRequest {
  export type AsObject = {
    invitationIdsList: Array<number>,
    newStatus: string,
    token: string,
  }
}

export class BulkUpdateInvitationStatusResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): BulkUpdateInvitationStatusResponse;

  getMessage(): string;
  setMessage(value: string): BulkUpdateInvitationStatusResponse;

  getUpdatedInvitationIdsList(): Array<number>;
  setUpdatedInvitationIdsList(value: Array<number>): BulkUpdateInvitationStatusResponse;
  clearUpdatedInvitationIdsList(): BulkUpdateInvitationStatusResponse;
  addUpdatedInvitationIds(value: number, index?: number): BulkUpdateInvitationStatusResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BulkUpdateInvitationStatusResponse.AsObject;
  static toObject(includeInstance: boolean, msg: BulkUpdateInvitationStatusResponse): BulkUpdateInvitationStatusResponse.AsObject;
  static serializeBinaryToWriter(message: BulkUpdateInvitationStatusResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BulkUpdateInvitationStatusResponse;
  static deserializeBinaryFromReader(message: BulkUpdateInvitationStatusResponse, reader: jspb.BinaryReader): BulkUpdateInvitationStatusResponse;
}

export namespace BulkUpdateInvitationStatusResponse {
  export type AsObject = {
    success: boolean,
    message: string,
    updatedInvitationIdsList: Array<number>,
  }
}

export class ResendInvitationRequest extends jspb.Message {
  getInvitationId(): number;
  setInvitationId(value: number): ResendInvitationRequest;

  getToken(): string;
  setToken(value: string): ResendInvitationRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResendInvitationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ResendInvitationRequest): ResendInvitationRequest.AsObject;
  static serializeBinaryToWriter(message: ResendInvitationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResendInvitationRequest;
  static deserializeBinaryFromReader(message: ResendInvitationRequest, reader: jspb.BinaryReader): ResendInvitationRequest;
}

export namespace ResendInvitationRequest {
  export type AsObject = {
    invitationId: number,
    token: string,
  }
}

export class ResendInvitationResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): ResendInvitationResponse;

  getMessage(): string;
  setMessage(value: string): ResendInvitationResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResendInvitationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ResendInvitationResponse): ResendInvitationResponse.AsObject;
  static serializeBinaryToWriter(message: ResendInvitationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResendInvitationResponse;
  static deserializeBinaryFromReader(message: ResendInvitationResponse, reader: jspb.BinaryReader): ResendInvitationResponse;
}

export namespace ResendInvitationResponse {
  export type AsObject = {
    success: boolean,
    message: string,
  }
}

export class BulkResendInvitationsRequest extends jspb.Message {
  getInvitationIdsList(): Array<number>;
  setInvitationIdsList(value: Array<number>): BulkResendInvitationsRequest;
  clearInvitationIdsList(): BulkResendInvitationsRequest;
  addInvitationIds(value: number, index?: number): BulkResendInvitationsRequest;

  getToken(): string;
  setToken(value: string): BulkResendInvitationsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BulkResendInvitationsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BulkResendInvitationsRequest): BulkResendInvitationsRequest.AsObject;
  static serializeBinaryToWriter(message: BulkResendInvitationsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BulkResendInvitationsRequest;
  static deserializeBinaryFromReader(message: BulkResendInvitationsRequest, reader: jspb.BinaryReader): BulkResendInvitationsRequest;
}

export namespace BulkResendInvitationsRequest {
  export type AsObject = {
    invitationIdsList: Array<number>,
    token: string,
  }
}

export class BulkResendInvitationsResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): BulkResendInvitationsResponse;

  getMessage(): string;
  setMessage(value: string): BulkResendInvitationsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BulkResendInvitationsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: BulkResendInvitationsResponse): BulkResendInvitationsResponse.AsObject;
  static serializeBinaryToWriter(message: BulkResendInvitationsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BulkResendInvitationsResponse;
  static deserializeBinaryFromReader(message: BulkResendInvitationsResponse, reader: jspb.BinaryReader): BulkResendInvitationsResponse;
}

export namespace BulkResendInvitationsResponse {
  export type AsObject = {
    success: boolean,
    message: string,
  }
}

export enum LeagueType { 
  LOCAL = 0,
  INTERNATIONAL = 1,
}
