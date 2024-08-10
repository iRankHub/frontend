import * as z from "zod"
import validator from "validator";

export const loginSchema = z.object({
    id: z.string().min(5, {
        message: "User ID too short"
    }).max(100),
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
})

export const emailLoginSchema = z.object({
    email: z.string().email(),
    password: z.
        string()
        .min(8, {
            message: "Password must be atleast 8 characters long"
        })
        .max(100)
        // .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/, {
        //     message:
        //         "Password must contain at least 8 characters, one uppercase, one lowercase, one number and one special character",
        // }),
})

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
    dob: z.date({
        required_error: "A date of birth is required.",
    }),
    school: z.string().min(2, {
        message: "School is required!"
    }),
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
    address: z.string().min(1),
    province_state: z.string().min(1),
    district_region: z.string().min(1),
    contact_person_firstname: z.string().min(3, {
        message: "Name too short!"
    }),
    contact_person_lastname: z.string().min(3, {
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
    country: z.string().min(2, {
        message: "country name can't be less than 2 characters"
    }),
    national_id: z.string().min(10, {
        message: "National Id/passport number can't be less than 10 characters"
    }),
    current_address: z.string().min(2, {
        message: "address invalid"
    }),
    contact_person_email: z.string().email(),
    secondary_school: z.string().min(5, {
        message: "School name too small"
    }),
    graduation_year: z.string(),
    enrolled: z.enum(["yes", "no"], {
        required_error: "You need to select if your are enrolled.",
    }),
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
