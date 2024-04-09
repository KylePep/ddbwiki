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
          <div className="my-6">
            I need to begin figuring out how the interactions a player can make through their character will play out.
              <p className="font-semibold my-2">Things like</p>
              <ul className="list-disc">
                <li>Is it using {`'Dice'`}? If so which ones?</li>
                <li>Is it using an AC like system? - I feel original intent is the sparking system to play a role.</li>
                <li>What is the sparking system and why is it important.</li>
                <li>What happens when characters run out of HP</li>
                <li>What happens when an enemy runs out of HP</li>
                <li>How do transformations work? They give stat bonuses but why do they matter</li>
                <li>What is the basic kit of interactions and what are the moves</li>
                <li>What will simultaneous rounds do or mean for the players? - This is pretty make or break.</li>
                <li>How can players interact with each other and each others characters during a battle?</li>
                <li>How hard of a game is this supposed to be?</li>
                <li>Its clear this isnt D&D, but what is it? How is something like this meant to work?</li>
              </ul>
          </div>
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
