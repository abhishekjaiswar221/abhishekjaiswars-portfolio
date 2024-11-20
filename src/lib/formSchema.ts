import { z, ZodSchema } from "zod";

export const FormSchema: ZodSchema = z.object({
  name: z
    .string()
    .min(1, {
      message: "Required Field",
    })
    .min(3, {
      message: "Name must be at least 3 characters",
    }),
  email: z
    .string()
    .min(1, { message: "Required Field" })
    .email("This is not a valid email"),
  message: z
    .string()
    .min(1, {
      message: "Required Field",
    })
    .min(10, {
      message: "Message must be minimum 10 characters",
    })
    .max(160, {
      message: "Message must not be longer than 30 characters",
    }),
});