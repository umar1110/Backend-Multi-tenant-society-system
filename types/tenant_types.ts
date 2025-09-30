import { z } from 'zod';
// Zod Schemas 
export const tenantSchema = z.object({
  name: z.string("Not a string !").min(1, "Name is required"),
  email: z.string("Not a string !").email("Invalid email address"),
  phone: z.string("Not a string !").min(10, "Phone number must be at least 10 digits"),
  address: z.string("Not a string !").optional(),
  isActive: z.boolean().default(true),
});


//  TS Types
export type TenantType = z.infer<typeof tenantSchema>;
