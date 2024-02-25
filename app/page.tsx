'use client'
import Board from "./tictactoe";

export default function Home() {
  return (
    <main className="min-h-screen px-10">
      <div className="flex flex-col items-center justify-between p-24">
        Dungeons & DragonBalls Wiki!
      </div>
      <Board />
    </main>
  );
}
