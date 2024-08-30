import validator from "validator";
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

export const schoolProfileSchemaStep1 = z.object({
    name: z.string().min(2, {
        message: "name too short"
    }).max(200, {
        message: "name too long"
    }),
    type: z.string({
        required_error: "Please select a school type to display.",
    }),
    country: z.string().min(2, {
        message: "country name can't be 2 characters"
    }),
    province_state: z.string().min(1),
    district_region: z.string().min(1),
});

export const schoolProfileSchemaStep2 = z.object({
    email: z.string().email(),
    contact_person: z.string().min(3, {
        message: "Name too short!"
    }),
    contact_person_number: z.string().refine(validator.isMobilePhone),
    contact_person_email: z.string().email(),
});

export const schoolProfileSchemaStep3 = z.object({
    password: z
        .string()
        .min(8, {
            message: "Password must be atleast 8 characters long"
        })
        .max(100)
        .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/, {
            message:
                "Password must contain at least 8 characters, one uppercase, one lowercase, one number and one special character",
        }),
    new_password: z
        .string()
        .min(8, {
            message: "Password must be atleast 8 characters long"
        })
        .max(100)
        .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/, {
            message:
                "Password must contain at least 8 characters, one uppercase, one lowercase, one number and one special character",
        }),
    confirm_password: z
        .string()
        .min(8, {
            message: "Password must be atleast 8 characters long"
        })
        .max(100)
        .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/, {
            message:
                "Password must contain at least 8 characters, one uppercase, one lowercase, one number and one special character",
        }),
}).superRefine(({ confirm_password, new_password }, ctx) => {
    if (confirm_password !== new_password) {
        ctx.addIssue({
            code: "custom",
            message: "The passwords did not match",
        });
    }
});

// volunteer profile schema
export const volunteerProfileSchemaStep1 = z.object({
    first_name: z.string().min(2, {
        message: "First name too short"
    }),
    last_name: z.string().min(2, {
        message: "Last name too short"
    }),
    school_id: z.string().min(1, {
        message: "Please select a school"
    }),
    graduation_year: z.string().min(4, {
        message: "Please enter a valid graduation year"
    })
});

export const volunteerProfileSchemaStep2 = z.object({
    name: z.string().min(2, {
        message: "name too short"
    }).max(200, {
        message: "name too long"
    }),
    email: z.string().email(),
    national_id: z.string().min(6, {
        message: "National ID too short"
    }),
    hasInternship: z.enum(["yes", "no"], {
        message: "Please select an option"
    }),
    dob: z.date({
        required_error: "A date of birth is required.",
    }),
    gender: z.string().min(4, {
        message: "Please select gender",
    }),
});

export const twoFactorEnableSchema = z.object({
    password: z.string().min(8, {
        message: "Password must be atleast 8 characters long"
    }),
});