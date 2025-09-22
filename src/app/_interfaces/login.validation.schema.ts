import * as zod from "zod";

export const  loginSchema = zod
    .object({
       
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
        
       
    })
   