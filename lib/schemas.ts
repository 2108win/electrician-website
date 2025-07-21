import * as z from "zod";
export const appointmentFormSchema = z.object({
  name: z.string().min(1, {
    message: "Name is required.",
  }),
  email: z.string().min(1, {
    message: "Email is required.",
  }),
  phone: z.string().optional(),
  address: z.string().min(1, {
    message: "Address is required.",
  }),
  service: z.string().min(1, {
    message: "Please select a service.",
  }),
  date: z.string().optional(),
  description: z.string().optional(),
});
export const defaultAppointmentValues = {
  name: "",
  email: "",
  phone: "",
  address: "",
  service: "",
  date: "",
  description: "",
};
export type AppointmentFormValues = z.infer<typeof appointmentFormSchema>;
