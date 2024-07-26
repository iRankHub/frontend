import getSession from "./getSession";

export async function getUserRole() {
    try {
        const session = await getSession();
        return session?.user.role;
    } catch (error) {
        return null;
    }
}