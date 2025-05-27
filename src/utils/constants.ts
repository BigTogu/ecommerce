export const CONTACT_EMAIL = "hola@loucobos.com";
import { Category } from "@/types/projects";

export const SOCIAL_LINKS = [
  { label: "LINKEDIN", href: "https://www.linkedin.com/in/loucobos/" },
  { label: "BEHANCE", href: "https://www.behance.net/loucobos" },
  { label: "INSTAGRAM", href: "https://www.instagram.com/loucobos/" },
];

export const CATEGORY_FILTER_OPTIONS: { value: Category; label: string }[] = [
  { value: Category.WEB, label: "WEB · UI/UX" },
  { value: Category.DIGITAL, label: "DIGITAL" },
  { value: Category.VIDEO, label: "VÍDEO/ANIMACIÓN" },
  { value: Category.GRAPHIC, label: "GRÁFICO" },
  { value: Category.BRANDING, label: "BRANDING" },
  { value: Category.EDITORIAL, label: "EDITORIAL" },
  { value: Category.PACKAGING, label: "PACKAGING" },
  { value: Category.COMMUNICATION, label: "COMUNICACIÓN" },
];

export const ALL_CATEGORIES_LABEL = "TODOS";

export const colors = {
  background: "#FFFFFF",
  textPrimary: "#000000",
  textSecondary: "#FFFFFF",
  hover: "#BEAF87",
};
