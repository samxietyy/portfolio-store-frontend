import {z} from 'zod';

export const loginSchema = z.object({
    email: z.email("Invalid email address."),
    password: z.string().min(8, "Minimum 8 characters are required.")
})