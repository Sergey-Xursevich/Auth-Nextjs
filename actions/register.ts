"use server";

import * as z from "zod";
import { RegisterSchema } from "@/schema";
import { getUserByEmail, saveUserData } from "@/data/user";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
    const validateFields = RegisterSchema.safeParse(values);

    if (!validateFields.success) {
        return { error: "Invalid fields" };
    }

    const user = await getUserByEmail(values);

    if (user) {
        return { error: "User already exists" };
    }

    const userData = await saveUserData(values);   
    
    if (!userData) {
        return { error: "Error creating user" };
    }

    return { success: "Creating an account has been successful" };
}