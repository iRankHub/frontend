import validator from "validator";
import * as z from "zod"

export const StudentSchema = z.object({
    firstName: z.string().min(2, {
        message: "name too short"
    }).max(30, {
        message: "name too long"
    }),
    lastName: z.string().min(2, {
        message: "name too short"
    }).max(30, {
        message: "name too long"
    }),
    email: z.string().email(),
    school: z.string().min(2, {
        message: "School is required!"
    }),
    password: z.
        string()
        .min(8, {
            message: "Password must be atleast 8 characters long"
        })
        .max(100)
        .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/, {
            message:
                "Password must contain at least 8 characters, one uppercase, one lowercase, one number and one special character",
        }),
    confirm_password: z.
        string()
        .min(8, {
            message: "Password must be atleast 8 characters long"
        })
        .max(100)
        .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/, {
            message:
                "Password must contain at least 8 characters, one uppercase, one lowercase, one number and one special character",
        }),
}).superRefine(({ confirm_password, password }, ctx) => {
    if (confirm_password !== password) {
        ctx.addIssue({
            code: "custom",
            message: "The passwords did not match",
            path: ['confirm_password']
        });
    }
});


export const schoolSchema = z.object({
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
    contact_person: z.string().min(3, {
        message: "Name too short!"
    }),
    contact_person_number: z.string().refine(validator.isMobilePhone),
    contact_person_email: z.string().email(),
    email: z.string().email(),
    password: z.
        string()
        .min(8, {
            message: "Password must be atleast 8 characters long"
        })
        .max(100)
        .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/, {
            message:
                "Password must contain at least 8 characters, one uppercase, one lowercase, one number and one special character",
        }),
    confirm_password: z.
        string()
        .min(8, {
            message: "Password must be atleast 8 characters long"
        })
        .max(100)
        .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/, {
            message:
                "Password must contain at least 8 characters, one uppercase, one lowercase, one number and one special character",
        }),
}).superRefine(({ confirm_password, password }, ctx) => {
    if (confirm_password !== password) {
        ctx.addIssue({
            code: "custom",
            message: "The passwords did not match",
            path: ['confirm_password']
        });
    }
});

export const volunteerSchema = z.object({
    firstName: z.string().min(2, {
        message: "name too short"
    }).max(30, {
        message: "name too long"
    }),
    lastName: z.string().min(2, {
        message: "name too short"
    }).max(30, {
        message: "name too long"
    }),
    dob: z.date({
        required_error: "A date of birth is required.",
    }),
    gender: z.string().min(2, {
        message: "gender is required!"
    }),
});
