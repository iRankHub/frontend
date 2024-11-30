// Mock Rwanda provinces data
const rwandaOnlyData = {
  categoryAttendanceList: [],
  locationAttendanceList: [
    {
      location: "Western Province",
      locationType: "province",
      schoolCount: 200,
      percentageChange: 15.5
    },
    {
      location: "Eastern Province",
      locationType: "province",
      schoolCount: 300,
      percentageChange: 20.2
    },
    {
      location: "Southern Province",
      locationType: "province",
      schoolCount: 500,
      percentageChange: -5.8
    },
    {
      location: "Northern Province",
      locationType: "province",
      schoolCount: 30,
      percentageChange: 8.3
    },
    {
      location: "Kigali City",
      locationType: "province",
      schoolCount: 150,
      percentageChange: 25.0
    }
  ],
  reportType: "location",
  totalSchools: 1180,
  totalPercentageChange: 12.64
};

// Mock multiple countries data (including Rwanda at country level)
const multiCountryData = {
  categoryAttendanceList: [],
  locationAttendanceList: [
    {
      location: "Rwanda",
      locationType: "country",
      schoolCount: 1180,
      percentageChange: 12.64
    },
    {
      location: "Kenya",
      locationType: "country",
      schoolCount: 60,
      percentageChange: 5.2
    },
    {
      location: "Ethiopia",
      locationType: "country",
      schoolCount: 34,
      percentageChange: -2.8
    },
    {
      location: "Uganda",
      locationType: "country",
      schoolCount: 12,
      percentageChange: 15.3
    }
  ],
  reportType: "location",
  totalSchools: 1286,
  totalPercentageChange: 7.58
};

// Usage example:
const getMockData = (selectedCountries: string[]) => {
  // If only Rwanda is selected and it's the only country, return province data
  if (selectedCountries.length === 1 && selectedCountries[0] === "Rwanda") {
    return rwandaOnlyData;
  }
  // Otherwise return country-level data
  return multiCountryData;
};

export { rwandaOnlyData, multiCountryData, getMockData };