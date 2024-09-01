import * as XLSX from 'xlsx';

export interface ParsedDataAdmin {
    firstName: string;
    lastName: string;
    email: string;
    gender: string;
}

export interface ParsedDataStudent {
    firstName: string;
    lastName: string;
    email: string;
    gender: string;
    dateOfBirth: string;
    grade: string;
    schoolID: string;
    schoolName: string;
}

export interface ParsedDataSchool {
    firstName: string;
    lastName: string;
    email: string;
    gender: string;
    nationalID: string;
    schoolName: string;
    address: string;
    country: string;
    province: string;
    district: string;
    contactEmail: string;
    schoolType: string;
}

export interface ParsedDataVolunteer {
    firstName: string;
    lastName: string;
    email: string;
    gender: string;
    dateOfBirth: string;
    nationalID: string;
    roleInterestedIn: string;
    graduationYear: string;
    hasInternship: string;
    isEnrolledInUniversity: string;
}

export const parseExcelFile = async (file: File) => {
    const data = await file.arrayBuffer();
    const workbook = XLSX.read(data, { type: 'array' });

    // Parse Admin sheet
    const adminSheet = XLSX.utils.sheet_to_json<ParsedDataAdmin>(workbook.Sheets['Admin']);

    // Parse Student sheet
    const studentSheet = XLSX.utils.sheet_to_json<ParsedDataStudent>(workbook.Sheets['Student']);

    // Parse School sheet
    const schoolSheet = XLSX.utils.sheet_to_json<ParsedDataSchool>(workbook.Sheets['School']);

    // Parse Volunteer sheet
    const volunteerSheet = XLSX.utils.sheet_to_json<ParsedDataVolunteer>(workbook.Sheets['Volunteer']);

    return {
        admin: adminSheet,
        student: studentSheet,
        school: schoolSheet,
        volunteer: volunteerSheet,
    };
};

export function excelSerialToDate(serial: number) {
    // Excel wrongly treats 1900 as a leap year, so subtract 1 if the serial number is >= 60
    const offset = serial >= 60 ? -1 : 0;
    const excelEpoch = new Date(Date.UTC(1899, 11, 30)); // December 30, 1899, UTC (Excel's epoch start)
    const daysInMilliseconds = (serial + offset) * 86400000; // Convert days to milliseconds

    const date = new Date(excelEpoch.getTime() + daysInMilliseconds);

    // Format to "YYYY-MM-DD"
    const year = date.getUTCFullYear();
    const month = String(date.getUTCMonth() + 1).padStart(2, '0'); // Months are zero-indexed
    const day = String(date.getUTCDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
}