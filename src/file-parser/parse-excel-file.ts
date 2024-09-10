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
    try {
        const data = await file.arrayBuffer();
        const workbook = XLSX.read(data, { type: 'array' });

        const parseSheet = <T>(sheetName: string): T[] => {
            const sheet = workbook.Sheets[sheetName];
            if (!sheet) {
                console.warn(`Sheet "${sheetName}" not found in the Excel file.`);
                return [];
            }
            return XLSX.utils.sheet_to_json<T>(sheet, { defval: '' }); // Use defval to ensure empty cells are ''
        };

        return {
            admin: parseSheet<ParsedDataAdmin>('Admin'),
            student: parseSheet<ParsedDataStudent>('Student'),
            school: parseSheet<ParsedDataSchool>('School'),
            volunteer: parseSheet<ParsedDataVolunteer>('Volunteer'),
        };
    } catch (error) {
        console.error('Error parsing Excel file:', error);
        throw new Error('Failed to parse Excel file. Please check the file format and try again.');
    }
};

export function excelSerialToDate(serial: number): string {
    if (isNaN(serial)) {
        console.warn('Invalid date serial number:', serial);
        return '';
    }

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