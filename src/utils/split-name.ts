export const splitName = (name: string) => {
    const names = name.split(" ");
    return {
        first_name: names[0],
        last_name: names.slice(1).join(" "),
    };
}