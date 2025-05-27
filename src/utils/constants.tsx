export const CONTACT_EMAIL = "hola@loucobos.com";
import { ChevronDown } from "lucide-react";

// Footer social links
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
