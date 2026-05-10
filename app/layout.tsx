import type { Metadata } from "next";
import { Playfair_Display, Outfit, Syncopate, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
});

const syncopate = Syncopate({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-mono",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Clean Cut Barber Shop | Master Grouping Phoenix AZ",
  description: "Phoenix's premier high-end barbershop. Owned by brothers Jimmy, Alex, and Ayman. Master fades, straight razor shaves, and editorial-style grooming. Walk-ins welcome.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${outfit.variable} ${syncopate.variable} ${inter.variable} antialiased bg-brand-bg text-brand-text min-h-screen flex flex-col`}
      >
        {children}
      </body>
    </html>
  );
}
