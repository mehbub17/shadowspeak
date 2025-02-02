import {z} from 'zod';

export const MessageSchema = z.object({
    content:z
    .string()
    .min(10,{message:"Content should be atleast 10 characters long"})
    .max(300,{message:"Content should be atmost 300 characters long"})
})