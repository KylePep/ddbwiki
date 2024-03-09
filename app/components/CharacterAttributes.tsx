import React from 'react'

export default function CharacterAttributes() {
  return (
    <div>
      <h1 className='font-bold mt-8'>Health:</h1>
      <p>Health points are not directly tied to a specific stat, health points are connected to the level of sparking. In effect, a character can only die if their health points and their spark are reduce to zero.</p>
      <p>The higher the sparking level the higher the level of the health point. A higher level health point requires that much damage in order to reduce it.</p>
      <p>A sparking level 4 character will have to be hit by at least 4 damage in order to have 1 hit point removed. 7 damage will result in 1 health point being removed, 8 will remove 2.</p>
      <p>If a transformation has a level associated with it, it will have incoming damage reduced by the difference of transformation levels between it and the attacker per affected hit point.</p>
      <p>EX: level 4 sparking, level  2 transformation being dealt 8 damage by a transformation level 1 enemy, it will instead receive 6 damage because unalterted it would affect 2 points</p>
      <p>It is reduced x damage where x is the difference in their transformations * the number of health points affected. The health points affected are then reevaluated</p>
    </div>
  )
}
