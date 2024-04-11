'use client'

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
                <li>Is it using {`'Dice'`}? If so which ones? | <span className="text-green-900"> A 6 Sided die</span> </li>
                <li>Is it using an AC like system? - I feel original intent is the sparking system to play a role. | <span className="text-green-900">Sparking Meter will be used to determine if attacks hit or miss.</span></li>
                <li>What is the sparking system and why is it important. | <span className="text-green-900">The sparking system is the way the game describes to you how dangerous the situation is.</span></li>
                <li>What happens when characters run out of HP | <span className="text-green-900">The character gets sidelined until healed or wished back in extreme cases.</span></li>
                <li>What happens when an enemy runs out of HP | <span className="text-green-900">When an enemy -dies- if the conditions are met for combat to be over then the combat room resolution plays and the players either get rewarded or simply move on to the next room.</span></li>
                <li>How do transformations work? They give stat bonuses but why do they matter | <span className="text-green-900">Transformations will have a list of moves added or moves removed, IE Great Ape cant do all of the same attack, but a super saiyan my just loose spirit bomb. Each transformation will have a cost or parameters that need to be met.</span></li>
                <li>What is the basic kit of interactions and what are the moves | <span className="text-green-900">The basic kit of interactions will be, Interact {`( talk, pick up, activate, read )`}, attack, approach, use {`( items from inventory )`}, assist.</span></li>
                <li>What will simultaneous rounds do or mean for the players? - This is pretty make or break. | <span className="text-green-900">Because of the way D&DBs combat takes place, it would be incredibly slow to wait for everyones actions to resolve before going on to the next players turns. Instead all of these actions happen at the same time based on turn/agility order. This means that combinative will either happen at turn order or effect the following rounds. These actions may be happening in turn order but within those turns there are mini rounds. This is to make sure the player has several actions to do every time they log in.</span></li>
                <li>How can players interact with each other and each others characters during a battle? | <span className="text-green-900">Players will have the opportunity to message each other within party chat to try and communicate their conditions. There is nothing preventing players from communicating outside of the app. In battle, something like a support move will be added to effected characters status upon activation, or if the other turn had already taken place, before the blocks wrap up.</span></li>
                <li>How hard of a game is this supposed to be? | <span className="text-green-900">Easy, the point is not to make a difficult experience, just a complete one.</span></li>
                <li>Its clear this isnt D&D, but what is it? | <span className="text-green-900">It is a role playing game with the specific intention of reenacting the DBZ Movies with custom characters and a reasonable amount of player agency.</span></li>
                <li>How is something like this meant to work? | <span className="text-green-900">With the participation of your team members, the hope is that you, within a relatively short amount of time, progress through a DBZ movie. During that time, You will help each other tell that story and defeat the villain at the end.</span></li>
              </ul>
          </div>
        <h4 className="pb-3">
          This application is being developed with the intent to record my notes and development of the assests of the world in a way that can translate to the actual game. If you are seeing this that means you are here before the official release of what is Dungeons and DragonBalls. <i> Lucky you -.-</i>
        </h4>
        <h5>
          {`Don't forget that you are so much happier when you are coding.`}
        </h5>
      </div>
      {/* <Board /> */}
    </main>
  );
}
