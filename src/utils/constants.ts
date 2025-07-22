export const CONTACT_EMAIL = "hola@loucobos.com";
import { Category } from "@/types/projects";

export const SOCIAL_LINKS = [
  { label: "LINKEDIN", href: "https://www.linkedin.com/in/loucobos/" },
  { label: "BEHANCE", href: "https://www.behance.net/loucobos" },
  { label: "INSTAGRAM", href: "https://www.instagram.com/loucobos/" },
];

export const CATEGORY_FILTER_OPTIONS: { value: Category; label: string }[] = [
  { value: Category.WEB, label: Category.WEB },
  { value: Category.DIGITAL, label: Category.DIGITAL },
  { value: Category.VIDEO, label: Category.VIDEO },
  { value: Category.GRAPHIC, label: Category.GRAPHIC },
  { value: Category.BRANDING, label: Category.BRANDING },
  { value: Category.EDITORIAL, label: Category.EDITORIAL },
  { value: Category.PACKAGING, label: Category.PACKAGING },
  { value: Category.COMMUNICATION, label: Category.COMMUNICATION },
];

export const ALL_CATEGORIES_LABEL = "TODOS";

export const colors = {
  background: "#FFFFFF",
  textPrimary: "#000000",
  textSecondary: "#FFFFFF",
  hover: "#BEAF87",
};
