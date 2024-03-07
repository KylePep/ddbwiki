'use client'
import Link from "next/link";
import Board from "./tictactoe";

export default function Home() {
  return (
    <main className="min-h-screen px-10">
      <div className="flex flex-col items-center justify-between px-24 py-12 text-lg font-black">
        <Link href={"/"}>
        Dungeons & DragonBalls Wiki!
        </Link>
      </div>
      <div className="flex justify-between px-10 font-bold mb-10">
        <Link href={"/"}>Races</Link>
        <Link href={"/"}>Archetypes</Link>
        <Link href={"/"}>Moves</Link>
        <Link href={"/"}>Forms</Link>
      </div>
      {/* <Board /> */}
    </main>
  );
}
