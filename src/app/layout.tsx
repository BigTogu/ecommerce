import { JSX, ReactNode } from "react";
import { barlow, playfair, roboto } from "./fonts";
import Footer from "@/components/Footer";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>): JSX.Element {
  return (
    <html lang="es">
      <body className={`${barlow.variable} ${roboto.variable} ${playfair.variable}`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
