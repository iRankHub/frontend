import { z } from "zod";

export const studentProfileSchemaStep1 = z.object({
    first_name: z.string().min(2, {
        message: "First name too short"
    }),
    last_name: z.string().min(2, {
        message: "Last name too short"
    }),
    school_id: z.string().min(1, {
        message: "Please select a school"
    }),
    bio: z.string().min(10, {
        message: "Bio too short"
    })
});

export const studentProfileSchemaStep2 = z.object({
    name: z.string().min(2, {
        message: "name too short"
    }).max(200, {
        message: "name too long"
    }),
    role: z.string().min(2, {
        message: "role too short"
    }),
    email: z.string().email(),
});
