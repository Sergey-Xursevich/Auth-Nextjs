import * as z from "zod";
import bcrypt from "bcrypt";

import { db } from "@/lib/db";
import { RegisterSchema } from "@/schema";

export const getUserByEmail = async (value: z.infer<typeof RegisterSchema>) => {
    try {
        return await db.user.findUnique({ where: { email: value.email } });
    } catch (err) {
        return null
    }   
}

export const saveUserData = async (value: z.infer<typeof RegisterSchema>) => {
    try {
        const rounds = 10;
        const salt = await bcrypt.genSalt(rounds);
        const hashPassword = await bcrypt.hash(value.password, salt);

        return await db.user.create({
            data: {
                email: value.email,
                password: hashPassword,
                name: value.name
            }
        });
    } catch (err) {
        return null;
    }
}