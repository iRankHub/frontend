import * as jspb from 'google-protobuf'



export class DateRange extends jspb.Message {
  getStartDate(): string;
  setStartDate(value: string): DateRange;

  getEndDate(): string;
  setEndDate(value: string): DateRange;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DateRange.AsObject;
  static toObject(includeInstance: boolean, msg: DateRange): DateRange.AsObject;
  static serializeBinaryToWriter(message: DateRange, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DateRange;
  static deserializeBinaryFromReader(message: DateRange, reader: jspb.BinaryReader): DateRange;
}

export namespace DateRange {
  export type AsObject = {
    startDate: string,
    endDate: string,
  }
}

export class FinancialReportRequest extends jspb.Message {
  getToken(): string;
  setToken(value: string): FinancialReportRequest;

  getDateRange(): DateRange | undefined;
  setDateRange(value?: DateRange): FinancialReportRequest;
  hasDateRange(): boolean;
  clearDateRange(): FinancialReportRequest;

  getTournamentId(): string;
  setTournamentId(value: string): FinancialReportRequest;
  hasTournamentId(): boolean;
  clearTournamentId(): FinancialReportRequest;

  getReportType(): string;
  setReportType(value: string): FinancialReportRequest;
  hasReportType(): boolean;
  clearReportType(): FinancialReportRequest;

  getGroupBy(): string;
  setGroupBy(value: string): FinancialReportRequest;
  hasGroupBy(): boolean;
  clearGroupBy(): FinancialReportRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FinancialReportRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FinancialReportRequest): FinancialReportRequest.AsObject;
  static serializeBinaryToWriter(message: FinancialReportRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FinancialReportRequest;
  static deserializeBinaryFromReader(message: FinancialReportRequest, reader: jspb.BinaryReader): FinancialReportRequest;
}

export namespace FinancialReportRequest {
  export type AsObject = {
    token: string,
    dateRange?: DateRange.AsObject,
    tournamentId?: string,
    reportType?: string,
    groupBy?: string,
  }

  export enum TournamentIdCase { 
    _TOURNAMENT_ID_NOT_SET = 0,
    TOURNAMENT_ID = 3,
  }

  export enum ReportTypeCase { 
    _REPORT_TYPE_NOT_SET = 0,
    REPORT_TYPE = 4,
  }

  export enum GroupByCase { 
    _GROUP_BY_NOT_SET = 0,
    GROUP_BY = 5,
  }
}

export class TournamentIncome extends jspb.Message {
  getTournamentId(): string;
  setTournamentId(value: string): TournamentIncome;

  getTournamentName(): string;
  setTournamentName(value: string): TournamentIncome;

  getLeagueId(): string;
  setLeagueId(value: string): TournamentIncome;

  getLeagueName(): string;
  setLeagueName(value: string): TournamentIncome;

  getTotalIncome(): number;
  setTotalIncome(value: number): TournamentIncome;

  getNetRevenue(): number;
  setNetRevenue(value: number): TournamentIncome;

  getNetProfit(): number;
  setNetProfit(value: number): TournamentIncome;

  getTournamentDate(): string;
  setTournamentDate(value: string): TournamentIncome;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TournamentIncome.AsObject;
  static toObject(includeInstance: boolean, msg: TournamentIncome): TournamentIncome.AsObject;
  static serializeBinaryToWriter(message: TournamentIncome, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TournamentIncome;
  static deserializeBinaryFromReader(message: TournamentIncome, reader: jspb.BinaryReader): TournamentIncome;
}

export namespace TournamentIncome {
  export type AsObject = {
    tournamentId: string,
    tournamentName: string,
    leagueId: string,
    leagueName: string,
    totalIncome: number,
    netRevenue: number,
    netProfit: number,
    tournamentDate: string,
  }
}

export class SchoolPerformanceData extends jspb.Message {
  getGroupName(): string;
  setGroupName(value: string): SchoolPerformanceData;

  getTotalAmount(): number;
  setTotalAmount(value: number): SchoolPerformanceData;

  getSchoolCount(): number;
  setSchoolCount(value: number): SchoolPerformanceData;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SchoolPerformanceData.AsObject;
  static toObject(includeInstance: boolean, msg: SchoolPerformanceData): SchoolPerformanceData.AsObject;
  static serializeBinaryToWriter(message: SchoolPerformanceData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SchoolPerformanceData;
  static deserializeBinaryFromReader(message: SchoolPerformanceData, reader: jspb.BinaryReader): SchoolPerformanceData;
}

export namespace SchoolPerformanceData {
  export type AsObject = {
    groupName: string,
    totalAmount: number,
    schoolCount: number,
  }
}

export class ExpenseCategory extends jspb.Message {
  getTournamentId(): string;
  setTournamentId(value: string): ExpenseCategory;

  getTournamentName(): string;
  setTournamentName(value: string): ExpenseCategory;

  getFoodExpense(): number;
  setFoodExpense(value: number): ExpenseCategory;

  getTransportExpense(): number;
  setTransportExpense(value: number): ExpenseCategory;

  getPerDiemExpense(): number;
  setPerDiemExpense(value: number): ExpenseCategory;

  getAwardingExpense(): number;
  setAwardingExpense(value: number): ExpenseCategory;

  getStationaryExpense(): number;
  setStationaryExpense(value: number): ExpenseCategory;

  getOtherExpenses(): number;
  setOtherExpenses(value: number): ExpenseCategory;

  getTotalExpense(): number;
  setTotalExpense(value: number): ExpenseCategory;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExpenseCategory.AsObject;
  static toObject(includeInstance: boolean, msg: ExpenseCategory): ExpenseCategory.AsObject;
  static serializeBinaryToWriter(message: ExpenseCategory, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExpenseCategory;
  static deserializeBinaryFromReader(message: ExpenseCategory, reader: jspb.BinaryReader): ExpenseCategory;
}

export namespace ExpenseCategory {
  export type AsObject = {
    tournamentId: string,
    tournamentName: string,
    foodExpense: number,
    transportExpense: number,
    perDiemExpense: number,
    awardingExpense: number,
    stationaryExpense: number,
    otherExpenses: number,
    totalExpense: number,
  }
}

export class FinancialReportResponse extends jspb.Message {
  getTournamentIncomesList(): Array<TournamentIncome>;
  setTournamentIncomesList(value: Array<TournamentIncome>): FinancialReportResponse;
  clearTournamentIncomesList(): FinancialReportResponse;
  addTournamentIncomes(value?: TournamentIncome, index?: number): TournamentIncome;

  getSchoolPerformanceList(): Array<SchoolPerformanceData>;
  setSchoolPerformanceList(value: Array<SchoolPerformanceData>): FinancialReportResponse;
  clearSchoolPerformanceList(): FinancialReportResponse;
  addSchoolPerformance(value?: SchoolPerformanceData, index?: number): SchoolPerformanceData;

  getExpenseCategoriesList(): Array<ExpenseCategory>;
  setExpenseCategoriesList(value: Array<ExpenseCategory>): FinancialReportResponse;
  clearExpenseCategoriesList(): FinancialReportResponse;
  addExpenseCategories(value?: ExpenseCategory, index?: number): ExpenseCategory;

  getReportType(): string;
  setReportType(value: string): FinancialReportResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FinancialReportResponse.AsObject;
  static toObject(includeInstance: boolean, msg: FinancialReportResponse): FinancialReportResponse.AsObject;
  static serializeBinaryToWriter(message: FinancialReportResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FinancialReportResponse;
  static deserializeBinaryFromReader(message: FinancialReportResponse, reader: jspb.BinaryReader): FinancialReportResponse;
}

export namespace FinancialReportResponse {
  export type AsObject = {
    tournamentIncomesList: Array<TournamentIncome.AsObject>,
    schoolPerformanceList: Array<SchoolPerformanceData.AsObject>,
    expenseCategoriesList: Array<ExpenseCategory.AsObject>,
    reportType: string,
  }
}

export class AttendanceReportRequest extends jspb.Message {
  getToken(): string;
  setToken(value: string): AttendanceReportRequest;

  getDateRange(): DateRange | undefined;
  setDateRange(value?: DateRange): AttendanceReportRequest;
  hasDateRange(): boolean;
  clearDateRange(): AttendanceReportRequest;

  getTournamentId(): string;
  setTournamentId(value: string): AttendanceReportRequest;
  hasTournamentId(): boolean;
  clearTournamentId(): AttendanceReportRequest;

  getReportType(): string;
  setReportType(value: string): AttendanceReportRequest;

  getCountriesList(): Array<string>;
  setCountriesList(value: Array<string>): AttendanceReportRequest;
  clearCountriesList(): AttendanceReportRequest;
  addCountries(value: string, index?: number): AttendanceReportRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AttendanceReportRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AttendanceReportRequest): AttendanceReportRequest.AsObject;
  static serializeBinaryToWriter(message: AttendanceReportRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AttendanceReportRequest;
  static deserializeBinaryFromReader(message: AttendanceReportRequest, reader: jspb.BinaryReader): AttendanceReportRequest;
}

export namespace AttendanceReportRequest {
  export type AsObject = {
    token: string,
    dateRange?: DateRange.AsObject,
    tournamentId?: string,
    reportType: string,
    countriesList: Array<string>,
  }

  export enum TournamentIdCase { 
    _TOURNAMENT_ID_NOT_SET = 0,
    TOURNAMENT_ID = 3,
  }
}

export class CategoryAttendance extends jspb.Message {
  getCategory(): string;
  setCategory(value: string): CategoryAttendance;

  getSchoolCount(): number;
  setSchoolCount(value: number): CategoryAttendance;

  getPercentageChange(): number;
  setPercentageChange(value: number): CategoryAttendance;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CategoryAttendance.AsObject;
  static toObject(includeInstance: boolean, msg: CategoryAttendance): CategoryAttendance.AsObject;
  static serializeBinaryToWriter(message: CategoryAttendance, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CategoryAttendance;
  static deserializeBinaryFromReader(message: CategoryAttendance, reader: jspb.BinaryReader): CategoryAttendance;
}

export namespace CategoryAttendance {
  export type AsObject = {
    category: string,
    schoolCount: number,
    percentageChange: number,
  }
}

export class LocationAttendance extends jspb.Message {
  getLocation(): string;
  setLocation(value: string): LocationAttendance;

  getLocationType(): string;
  setLocationType(value: string): LocationAttendance;

  getSchoolCount(): number;
  setSchoolCount(value: number): LocationAttendance;

  getPercentageChange(): number;
  setPercentageChange(value: number): LocationAttendance;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LocationAttendance.AsObject;
  static toObject(includeInstance: boolean, msg: LocationAttendance): LocationAttendance.AsObject;
  static serializeBinaryToWriter(message: LocationAttendance, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LocationAttendance;
  static deserializeBinaryFromReader(message: LocationAttendance, reader: jspb.BinaryReader): LocationAttendance;
}

export namespace LocationAttendance {
  export type AsObject = {
    location: string,
    locationType: string,
    schoolCount: number,
    percentageChange: number,
  }
}

export class AttendanceReportResponse extends jspb.Message {
  getReportType(): string;
  setReportType(value: string): AttendanceReportResponse;

  getCategoryAttendanceList(): Array<CategoryAttendance>;
  setCategoryAttendanceList(value: Array<CategoryAttendance>): AttendanceReportResponse;
  clearCategoryAttendanceList(): AttendanceReportResponse;
  addCategoryAttendance(value?: CategoryAttendance, index?: number): CategoryAttendance;

  getLocationAttendanceList(): Array<LocationAttendance>;
  setLocationAttendanceList(value: Array<LocationAttendance>): AttendanceReportResponse;
  clearLocationAttendanceList(): AttendanceReportResponse;
  addLocationAttendance(value?: LocationAttendance, index?: number): LocationAttendance;

  getTotalSchools(): number;
  setTotalSchools(value: number): AttendanceReportResponse;

  getTotalPercentageChange(): number;
  setTotalPercentageChange(value: number): AttendanceReportResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AttendanceReportResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AttendanceReportResponse): AttendanceReportResponse.AsObject;
  static serializeBinaryToWriter(message: AttendanceReportResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AttendanceReportResponse;
  static deserializeBinaryFromReader(message: AttendanceReportResponse, reader: jspb.BinaryReader): AttendanceReportResponse;
}

export namespace AttendanceReportResponse {
  export type AsObject = {
    reportType: string,
    categoryAttendanceList: Array<CategoryAttendance.AsObject>,
    locationAttendanceList: Array<LocationAttendance.AsObject>,
    totalSchools: number,
    totalPercentageChange: number,
  }
}

