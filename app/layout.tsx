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
      <body className={` bg-gray-300`}>
        <Nav/>
        <div className="mx-4 md:mx-48 xl:mx-96 px-10">
        {children}
        </div>
        <footer className="min-h-20 mt-16 bg-gray-400 grid justify-items-center items-center"><div>
          Kyle Peppersack
          </div> </footer>
        </body>
    </html>
  );
}
