import { JSX, ReactNode } from "react";
import { barlow, playfair, roboto } from "./fonts";
import Footer from "@/components/Footer";
import NavBar from "@/components/Navbar";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>): JSX.Element {
  return (
    <html lang="es">
      <body className={`${barlow.variable} ${roboto.variable} ${playfair.variable}`}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
