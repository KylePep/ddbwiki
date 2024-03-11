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
  <body className="relative flex flex-col min-h-screen bg-gray-300">
    <Nav />
    <div className="flex-grow mx-4 md:mx-48 xl:mx-96 px-10 overflow-y-auto">
      {children}
    </div>
    <footer className="mt-auto">
      <div className="bg-gray-400 mt-16 min-h-10 flex justify-center items-center">
        <div>
          Kyle Peppersack
        </div>
        <p className="ml-4">R.I.P Akira Toriyama</p>
      </div>
    </footer>
  </body>
</html>
  );
}
