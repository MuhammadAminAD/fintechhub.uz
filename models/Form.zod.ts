import { z } from "zod"

export const FormsSchema = z.object({
    ism: z.string().min(3, "Ism kiritilishi kerak"),
    phone: z
        .string()
        .regex(/^998\d{9}$/, "Telefon raqami to‘liq kiritilishi kerak"),
})