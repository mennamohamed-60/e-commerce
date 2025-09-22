import * as zod from "zod";

export const schema = zod
    .object({
        name: zod
            .string()
            .nonempty("user name is required")
            .min(3, "at least 3 char")
            .max(15, "max 15 characters"),
        email: zod
            .string()
            .nonempty("email is required ")
            .email("Invalid email address"),
        password: zod
            .string()
            .nonempty("password is required ")
            .min(8, { message: "Password must be at least 8 characters" })
            .regex(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/, {
                message: `Password must include:
                         - At least 8 characters
                         - At least One uppercase letter
                         - At least One lowercase letter
                         - At least One number
                         - At least One special character (@$!%*?&)`,
            }),
        rePassword: zod.string().nonempty("Confirm password is required"),

        phone: zod
            .string()
            .nonempty("user name is required")
            .regex(/^01[0125][0-9]{8}$/, "phone must be an egyptian num"),
    })
    .refine((data) => data.password === data.rePassword, {
        path: ["rePassword"],
        message: "Passwords do not match",
    });
