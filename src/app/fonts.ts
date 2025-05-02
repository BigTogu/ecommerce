import { Barlow_Semi_Condensed, Playfair_Display, Roboto } from "next/font/google";

export const barlow = Barlow_Semi_Condensed({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-barlow",
});

export const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-playfair",
});

export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300"],
  variable: "--font-roboto",
});
