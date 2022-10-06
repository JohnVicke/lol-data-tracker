import { z, type ZodFormattedError } from "zod";

export const serverSchema = z.object({
  PORT: z.number().default(3001),
  NODE_ENV: z.enum(["development", "test", "production"]),
});

export const formatErrors = (
  errors: ZodFormattedError<Map<string, string>, string>
) =>
  Object.entries(errors)
    .map(([name, value]) => {
      if (value && "_errors" in value)
        return `${name}: ${value._errors.join(", ")}\n`;
    })
    .filter(Boolean);
