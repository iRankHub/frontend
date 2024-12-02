import validator from "validator";
import * as z from "zod"

export const adminSchema = z.object({
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
    gender: z.string().min(2, {
        message: "gender is required!"
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
    school: z.string().min(1, {
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
    name: z.string()
        .min(2, {
            message: "name too short"
        })
        .max(200, {
            message: "name too long"
        }),

    type: z.string({
        required_error: "Please select a school type to display.",
    }),

    // Location Fields
    locationType: z.enum(["local", "international"], {
        required_error: "Please select a location type.",
    }),

    // Fields for international schools
    country: z.string({
        required_error: "Please select a country",
    }).min(2, {
        message: "country name can't be 2 characters"
    }),
    continent: z.string()
        .optional(),
    // Fields for local schools
    province_state: z.string()
        .optional(),
    district_region: z.string()
        .optional(),
    // Contact Information
    contact_person_firstname: z.string().min(3, {
        message: "First name too short!"
    }),
    contact_person_lastname: z.string().min(3, {
        message: "Last name too short!"
    }),
    contact_person_number: z.string()
        .refine(validator.isMobilePhone, {
            message: "Please enter a valid phone number"
        }),
    contact_person_email: z.string()
        .email({
            message: "Please enter a valid email address"
        }),
    email: z.string()
        .email({
            message: "Please enter a valid email address"
        }),
    // Password fields
    password: z.string()
        .min(8, {
            message: "Password must be at least 8 characters long"
        })
        .max(100)
        .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/, {
            message: "Password must contain at least 8 characters, one uppercase, one lowercase, one number and one special character",
        }),
    confirm_password: z.string()
        .min(8, {
            message: "Password must be at least 8 characters long"
        })
        .max(100)
        .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/, {
            message: "Password must contain at least 8 characters, one uppercase, one lowercase, one number and one special character",
        }),
})
    .superRefine((data, ctx) => {
        // Password matching validation
        if (data.confirm_password !== data.password) {
            ctx.addIssue({
                code: "custom",
                message: "The passwords did not match",
                path: ["confirm_password"]
            });
        }

        // Location-specific field validation
        if (data.locationType === "international") {
            if (!data.continent) {
                ctx.addIssue({
                    code: "custom",
                    message: "Continent is required for international schools",
                    path: ["continent"]
                });
            }
            if (!data.country) {
                ctx.addIssue({
                    code: "custom",
                    message: "Country is required for international schools",
                    path: ["country"]
                });
            }
        } else if (data.locationType === "local") { // Changed to else if to make conditions mutually exclusive
            if (!data.province_state) {
                ctx.addIssue({
                    code: "custom",
                    message: "Province is required for local schools",
                    path: ["province_state"]
                });
            }
            if (!data.district_region) {
                ctx.addIssue({
                    code: "custom",
                    message: "District is required for local schools",
                    path: ["district_region"]
                });
            }
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

export const passwordResetSchema = z.object({
    code: z.string().min(6, {
        message: "Code too short"
    }).max(6, {
        message: "Code too long"
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
        });
    }
})