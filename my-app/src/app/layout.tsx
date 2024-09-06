import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { PlanetProvider } from "./PlanetContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "StarExplorer",
  description: "Under development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <PlanetProvider>
          {children}
        </PlanetProvider>
      </body>
    </html>
  );
}
