export interface Project {
  id: number;
  name: string;
  category: Category[];
  price: number;
  image: string;
}

export enum Category {
  WEB = "WEB · UI/UX",
  DIGITAL = "DIGITAL",
  VIDEO = "VÍDEO/ANIMACIÓN",
  GRAPHIC = "GRÁFICO",
  BRANDING = "BRANDING",
  EDITORIAL = "EDITORIAL",
  PACKAGING = "PACKAGING",
  COMMUNICATION = "COMUNICACIÓN",
}
