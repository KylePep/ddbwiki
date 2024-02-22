import Square from "./tictactoe";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        Dungeons & DragonBalls Wiki!
      </div>
      <Square />
    </main>
  );
}
