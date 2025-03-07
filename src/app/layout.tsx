import { JSX, ReactNode } from "react";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>): JSX.Element {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
