import { LucideIcon } from "lucide-react";

export type NavType = {
  name: string;
  href: string;
};
export type ServiceType = {
  name: string;
  description: string;
  icon?: LucideIcon;
  image: string;
};
