export const CONTACT_EMAIL = "hola@loucobos.com";
import { Category } from "@/types/projects";

export const SOCIAL_LINKS = [
  { label: "LINKEDIN", href: "https://www.linkedin.com/in/loucobos/" },
  { label: "BEHANCE", href: "https://www.behance.net/loucobos" },
  { label: "INSTAGRAM", href: "https://www.instagram.com/loucobos/" },
];

export const CATEGORY_FILTER_OPTIONS: { value: Category; label: string }[] = [
  { value: Category.FIRST, label: "First" },
  { value: Category.SECOND, label: "Second" },
  { value: Category.THIRD, label: "Third" },
  { value: Category.FOURTH, label: "Fourth" },
  { value: Category.FIFTH, label: "Fifth" },
  { value: Category.SIXTH, label: "Sixth" },
  { value: Category.SEVENTH, label: "Seventh" },
];
