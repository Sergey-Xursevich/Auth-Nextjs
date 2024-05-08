import * as zod from "zod";

export const LoginSchema = zod.object({
    email: zod.string().email(),
    password: zod.string().min(8),
});

export const RegisterSchema = zod.object({
    email: zod.string().email({ 
        message: "Email is required"
    }),
    password: zod.string().min(6, {
        message: "Password must be at least 6 characters"
    }),
    name: zod.string().min(2, {
        message: "Name must be at least 2 characters"
    })
});