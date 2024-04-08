'use client'
import Link from "next/link";
import Board from "./tictactoe";
import SpecialResources from "./components/SpecialResources";
import CharacterStats from "./components/CharacterStats";
import SparkingMeter from "./components/SparkingMeter";
import CharacterAttributes from "./components/CharacterAttributes";
import Dice from "./components/Dice";

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
        <h3 className="mb-5">
          <p className="mb-3 text-xl font-bold">ToDo List:</p>
          <ul className="list-decimal">
            <li>
              <p className="font-bold">Enemies</p>
              <ul className="list-disc">
                <li>Bosses</li>
                <li>Common Enemies</li>
                <li>Enemy AI or logic</li>
              </ul>
            </li>
            <li>
              <p className="font-bold">Sparking & HP</p>
              <ul className="list-disc">
                <li>Define the relationship</li>
                <li>Make it simple</li>
              </ul>
            </li>
 
          </ul>
          <p className="font-bold text-xl my-3">Done:</p>
          <ul>
            <li>
              <p className="font-bold">
              Create a filter component capable of being used on several pages
              </p>
              <ul className="list-disc">
                <li>LIST_TYPE</li>
                <li>Filter Categories</li>
                <li>Filter Options</li>
                <li>Return new list</li>
              </ul>
            </li>
            <li>
              <p className="font-bold">Fill out Data types</p>
              <ul className="list-disc">
                <li>Origins</li>
                <li>Archetypes</li>
                <li>Moves</li>
                <li>Enemies</li>
                <li>Items</li>
                <li>Forms</li>
              </ul>
            </li>
          </ul>
        </h3>
        <h4 className="pb-3">
          This application is being developed with the intent to record my notes and development of the assests of the world in a way that can translate to the actual game. If you are seeing this that means you are here before the official release of what is Dungeons and DragonBalls. <i> Lucky you -.-</i>
        </h4>
        <h5>
          {`Don't forget that you are so much happier when you are coding.`}
        </h5>
      </div>
      <Dice/>
      <CharacterStats/>
      <SpecialResources/>
      <SparkingMeter/>
      <CharacterAttributes/>
      {/* <Board /> */}
    </main>
  );
}
