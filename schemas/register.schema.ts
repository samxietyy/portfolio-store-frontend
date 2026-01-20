import {z} from 'zod';

export const registerSchema = z.object({
    firstName: z.string().min(1,"Please enter your first name."),
    lastName: z.string().min(1, "Please enter your last name."),
    email: z.email("Invalid email address."),
    password: z.string().min(8, "Password must be at least 8 char lenght."),
    DOB: z.string()

})