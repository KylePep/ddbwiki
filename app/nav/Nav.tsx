'use client'

import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'


export default function Nav() {
  const pathName = usePathname() 

  return (
    <nav>
      <div className="flex flex-col items-center justify-between py-12 text-lg font-black">
        <Link href={"/"}>
        Dungeons & DragonBalls Wiki!
        </Link>
      </div>
      <p>Current pathname: {pathName}</p>
      <div className="flex justify-between px-10 font-bold mb-10">
        <Link href={"/origins"}>{pathName !== "/origins" ? `Origins` : `ORIGINS`}</Link>
        <Link href={"/archetypes"}>{pathName !=="/archetypes" ? `Archetypes` : `ARCHETYPES`}</Link>
        <Link href={"/moves"}>{pathName !=="/moves" ? `Moves` : `MOVES`}</Link>
        <Link href={"/forms"}>{pathName !=="/forms" ? `Forms` : `FORMS`}</Link>
      </div>
    </nav>
  )
}
