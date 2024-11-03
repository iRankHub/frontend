export const splitName = (name: string) => {
    const names = name.split(" ");
    return {
        first_name: names[0],
        last_name: names.slice(1).join(" "),
    };
}

export function formatName(currentUserName: string) {
    // Handle empty or null input
    if (!currentUserName) return "";

    // Split the name by spaces and filter out empty strings
    const names = currentUserName.split(" ").filter((name) => name.length > 0);

    // Based on number of names, return appropriate format
    switch (names.length) {
        case 1:
            // For single name, return first two characters
            return names[0].substring(0, 2);

        case 2:
            // For two names, return first character of each name
            return names[0][0] + names[1][0];

        case 3:
            // For three names, return first character of each name
            return names[0][0] + names[1][0] + names[2][0];

        default:
            // If more than 3 names, only consider first 3
            if (names.length > 3) {
                return names[0][0] + names[1][0] + names[2][0];
            }
            return "";
    }
}