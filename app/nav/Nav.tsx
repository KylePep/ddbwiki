'use client'

import Link from 'next/link'
import React from 'react'

export default function Nav() {
  return (
    <nav>
      <div className="flex flex-col items-center justify-between py-12 text-lg font-black">
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
    </nav>
  )
}
