import { db as prisma } from "@/lib/db";
import getSession from "./getSession";
import { Participant, School } from "@prisma/client";

export type UserStateSchool = School & {
  role: "SCHOOL"
};

export type UserStatePartiticpant = School & {
  role: "PARTICIPANT"
};

export type UserStateAdmin = School & {
  role: "ADMIN"
};

const getCurrentUser = async () => {
  try {
    const session = await getSession();

    if (!session?.user?.email) {
      return {} as School | Participant;
    }

    if (session.user.role == "PARTICIPANT") {
      const currentUser = await prisma.participant.findUnique({
        where: {
          email: session.user.email
        },
      });

      return {...currentUser, role: "PARTICIPANT"} as UserStatePartiticpant;
    } else if (session.user.role == "SCHOOL") {
      const currentUser = await prisma.school.findUnique({
        where: {
          email: session.user.email
        },
      });

      return {...currentUser, role: "SCHOOL"} as UserStateSchool;
    } else {
      // is an admin
      return {} as UserStateAdmin;
    }
  } catch (error: any) {
    return {} as School | Participant;
  }
};

export default getCurrentUser;