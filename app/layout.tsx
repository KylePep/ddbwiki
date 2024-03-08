import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./nav/Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "D&DBWiki",
  description: "Dungeons and DragonBall Wiki",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`mx-4 md:mx-48 xl:mx-96 bg-gray-300`}>
        <Nav/>
        {children}
        </body>
    </html>
  );
}
