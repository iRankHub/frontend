import * as z from "zod"
import validator from "validator";

// Helper regex patterns
// const SCHOOL_ID_PATTERN = /^[A-Za-z0-9]{1,3}-[A-Za-z0-9]{1,3}-[A-Za-z0-9]{1,3}-\d{2}-\d{5}$/;
const SCHOOL_ID_PATTERN = /^[A-Z0-9]+-[A-Z0-9]+-[A-Z0-9]+-[A-Z0-9]+-\d{5}$/;
const STUDENT_ID_PATTERN = /^STUD\d{6}$/;
const VOLUNTEER_ID_PATTERN = /^VOL\d{6}$/;
const EMAIL_PATTERN = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// Base schema for password to avoid repetition
const basePasswordSchema = z.string().min(1, {
    message: "Password can't be empty"
});

// Create a base validator function for email
const validateEmail = (value: string) => EMAIL_PATTERN.test(value);

export const adminLoginSchema = z.object({
    email: z.string()
        .min(1, { message: "Email is required" })
        .max(100, { message: "Email too long" })
        .email({ message: "Please enter a valid email address" }),
    password: basePasswordSchema
});

export const schoolLoginSchema = z.object({
    email_or_id: z.string()
        .min(1, { message: "Email or ID is required" })
        .max(100, { message: "Email or ID too long" })
        .refine((value) => {
            if (value.includes('@')) {
                return validateEmail(value);
            }
            const trimmedValue = value.trim();
            return SCHOOL_ID_PATTERN.test(trimmedValue);
        }, {
            message: "Please enter a valid email address or school ID (format: X-X-X-X-00000)"
        }),
    password: basePasswordSchema
});

export const studentLoginSchema = z.object({
    email_or_id: z.string()
        .min(1, { message: "Email or ID is required" })
        .max(100, { message: "Email or ID too long" })
        .refine((value) => {
            if (value.includes('@')) {
                return validateEmail(value);
            }
            const trimmedValue = value.trim();
            return STUDENT_ID_PATTERN.test(trimmedValue.toUpperCase());
        }, {
            message: "Please enter a valid email address or student ID (format: STUD000001)"
        }),
    password: basePasswordSchema
});

export const volunteerLoginSchema = z.object({
    email_or_id: z.string()
        .min(1, { message: "Email or ID is required" })
        .max(100, { message: "Email or ID too long" })
        .refine((value) => {
            if (value.includes('@')) {
                return validateEmail(value);
            }
            const trimmedValue = value.trim();
            return VOLUNTEER_ID_PATTERN.test(trimmedValue.toUpperCase());
        }, {
            message: "Please enter a valid email address or volunteer ID (format: VOL0000001)"
        }),
    password: basePasswordSchema
});

// Type exports
export type AdminLoginFormData = z.infer<typeof adminLoginSchema>;
export type SchoolLoginFormData = z.infer<typeof schoolLoginSchema>;
export type StudentLoginFormData = z.infer<typeof studentLoginSchema>;
export type VolunteerLoginFormData = z.infer<typeof volunteerLoginSchema>;

export const emailLoginSchema = z.object({
    email: z.string().email(),
    password: z.
        string()
        .min(1, {
            message: "Password can't be empty"
        })
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
    school: z.string().min(1, {
        message: "School is required!"
    }),
    grade: z.string().min(1, {
        message: "Grade is required!"
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
    // Basic Information
    name: z.string().min(2, {
        message: "name too short"
    }).max(200, {
        message: "name too long"
    }),
    type: z.string({
        required_error: "Please select a school type to display.",
    }),
    address: z.string().min(1, {
        message: "Address is required"
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
    continent: z.string().optional(),
    // Fields for local schools
    province_state: z.string().optional(),
    district_region: z.string().optional(),

    // Contact Information
    contact_person_firstname: z.string().min(3, {
        message: "First name too short!"
    }),
    contact_person_lastname: z.string().min(3, {
        message: "Last name too short!"
    }),
    contact_person_number: z.string().refine(validator.isMobilePhone, {
        message: "Please enter a valid phone number"
    }),
    contact_person_email: z.string().email({
        message: "Please enter a valid email address"
    }),
    email: z.string().email({
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
}).superRefine((data, ctx) => {
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
    } else if (data.locationType === "local") {
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
    country: z.string().min(2, {
        message: "country name can't be less than 2 characters"
    }),
    national_id: z
      .number()
      .refine((val) => {
        const numStr = val.toString();
        return numStr.length === 16;
      }, {
        message: "National Id/passport number must be exactly 16 digits"
      })
      .transform((val) => Number(val)),
    current_address: z.string().min(2, {
        message: "address invalid"
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


// forgot-password
export const forgotPasswordSchema = z.object({
    email: z.string().email(),
})

export const resetPasswordSchema = z.object({
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
})

// 2fa
export const twoFactorSchema = z.object({
    code: z.string().min(6, {
        message: "Your one-time password must be 6 characters."
    }).max(6)
})