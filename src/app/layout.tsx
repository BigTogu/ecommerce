import { JSX, ReactNode } from "react";
import "./globals.css";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>): JSX.Element {
  return (
    <html lang="es">
      <body>{children}<Footer /></body>
    </html>
  );
}
