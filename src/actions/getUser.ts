import { db } from "@/lib/db";

export const getUserByEmail = async (email: string, type: "PARTICIPANT" | "SCHOOL" | "ADMIN") => {
  try {
    if (type === "SCHOOL") {
      const user = await db.school.findUnique({ where: { email } });

      return user;
    } else if (type === "PARTICIPANT") {
      const user = await db.participant.findUnique({ where: { email } });

      return user;
    } else {
      return null;
    }
  } catch {
    return null;
  }
};

export const getUserById = async (id: string, type: "PARTICIPANT" | "SCHOOL" | "ADMIN") => {
  try {
    if (type === "SCHOOL") {
      const user = await db.school.findUnique({ where: { id } });

      return user;
    } else if (type === "PARTICIPANT") {
      const user = await db.participant.findUnique({ where: { id } });

      return user;
    } else {
      return null;
    }
  } catch {
    return null;
  }
};
