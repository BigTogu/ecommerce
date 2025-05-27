import Footer from "@/components/Footer";
import { JSX, ReactNode } from "react";
import { barlow, playfair, roboto } from "./fonts";
import "./globals.css";
import ReactQueryProvider from "./QueryClientProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>): JSX.Element {
  return (
    <html lang="es">
      <body className={`${barlow.variable} ${roboto.variable} ${playfair.variable}`}>
        <ReactQueryProvider>
          {children}
          <Footer />
        </ReactQueryProvider>
      </body>
    </html>
  );
}
