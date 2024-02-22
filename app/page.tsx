import Square from "./tictactoe";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="flex flex-col items-center justify-between p-24">
        Dungeons & DragonBalls Wiki!
      </div>
      <Square />
    </main>
  );
}
