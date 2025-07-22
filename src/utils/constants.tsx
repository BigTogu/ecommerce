export const CONTACT_EMAIL = "hola@loucobos.com";
import { ChevronDown } from "lucide-react";
import { Category } from "@/types/projects";

// Social links Footer
export const SOCIAL_LINKS = [
  { label: "LINKEDIN", href: "https://www.linkedin.com/in/loucobos/" },
  { label: "BEHANCE", href: "https://www.behance.net/loucobos" },
  { label: "INSTAGRAM", href: "https://www.instagram.com/loucobos/" },
];

export const LOGO = { name: "Lou Cobos", link: "/" };
// dropdown items
export const PROJECTS = [
  { label: "Proyectos", href: "/proyectos" },
  { label: "Playground", href: "/playground" },
  { label: "Marcas", href: "/marcas" },
];
// nav items
export const NAVITEMS = [
  { label: "Proyectos", link: "/proyectos", icon: <ChevronDown className="w-5 h-5" />, itemsDropdown: PROJECTS },
  { label: "Sobre mí", link: "/about" },
  { label: "Inloue", link: "/inloue" },
  { label: "Contacto", link: "/contacto" },
];

//Filter options for projects
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
