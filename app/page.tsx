'use client'
import Link from "next/link";
import Board from "./tictactoe";

export default function Home() {
  return (
    <main className="">
      <div className="flex flex-col items-center">
        <h1 className="pb-4">
        Welcome to the Dungeons and DragonBalls Wiki!
        </h1>
        <h2 className="pb-3">
          Here you can learn all about the interactive experience that indulges in the world of DragonBall!
        </h2>
        <h3 className="pb-3">
          This application is being developed with the intent to record my notes and development of the assests of the world in a way that can translate to the actual game. If you are seeing this that means you are here before the official release of what is Dungeons and DragonBalls. <i> Lucky you -.-</i>
        </h3>
        <h4>
          {`Don't forget that you are so much happier when you are coding.`}
        </h4>

      </div>
      {/* <Board /> */}
    </main>
  );
}
