import type { Metadata } from "next";
import Nav from '../components/Nav'

import "./globals.css";

export const metadata: Metadata = {
  title: "Inicio",
  description: "Página de inicio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="antialiased min-h-screen">
        <Nav />
        {children}
      </body>
    </html>
  );
}
