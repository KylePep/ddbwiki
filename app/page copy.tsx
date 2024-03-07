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
        <Link href={"/origins"}>Origins</Link>
        <Link href={"/archetypes"}>Archetypes</Link>
        <Link href={"/moves"}>Moves</Link>
        <Link href={"/forms"}>Forms</Link>
      </div>
      <div className="flex flex-col items-center">
        <h1 className="pb-4">
        Welcome to the Dungeons and DragonBalls Wiki!
        </h1>
        <h2 className="pb-3">
          Here you can learn all about the interactive experience that indulges in the world of DragonBall!
        </h2>
        <h3>
          This application is being developed with the intent to record my notes and development of the assests of the world in a way that can translate to the actual game. If you are seeing this that means you are here before the official release of what is Dungeons and DragonBalls. <i> Lucky you -.-</i>
        </h3>

      </div>
      {/* <Board /> */}
    </main>
  );
}
