import z from "zod";

export const formSchema = z.object({
  userName: z
    .string()
    .min(2, { error: "Too short. Enter at least 2 characters" })
    .max(12, { error: "Limit reached: 12 characters max" }),
  userEmail: z
    .email({ error: "Invalid email address" })
    .max(64, { error: "Limit reached: 64 characters max" })
    .endsWith("@gmail.com", { error: "Please use a Gmail account" }),
});

export type FormType = z.infer<typeof formSchema>;
