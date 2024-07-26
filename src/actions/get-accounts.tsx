import { db as prisma } from "@/lib/db";

export async function getUnverifiedSchoolAccounts() {
    try {
        const accounts = await prisma.school.findMany({
            where: {
                is_verified: false,
            }
        })
        return accounts;
    } catch (error) {
        return [];
    }
}
