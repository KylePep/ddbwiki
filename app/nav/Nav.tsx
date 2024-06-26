'use client'

import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'


export default function Nav() {
  const pathName = usePathname() 

  return (
    <nav className='sticky top-0 z-50'>
      <div className="flex flex-col items-center py-6 text-lg font-black bg-gray-200">
        <Link href={"/"}>
        Dungeons & DragonBalls Wiki!
        </Link>
      </div>
      <div className="bg-orange-600 px-10 md:px-48 xl:px-96  py-3 font-bold mb-7">
        <div className='flex justify-between mb-1'>
          <Link href={"/origins"}>{pathName !== "/origins" ? `Origins` : `ORIGINS`}</Link>
          <Link href={"/archetypes"}>{pathName !=="/archetypes" ? `Archetypes` : `ARCHETYPES`}</Link>
          <Link href={"/moves"}>{pathName !=="/moves" ? `Moves` : `MOVES`}</Link>
          <Link href={"/items"}>{pathName !=="/items" ? `Items` : `ITEMS`}</Link>
          <Link href={"/forms"}>{pathName !=="/forms" ? `Awakenings` : `AWAKENINGS`}</Link>
        </div>
        <div className='flex justify-around'>
          <Link href={"/rules"}>{pathName !=="/rules" ? `Rules` : `RULES`}</Link>
          <Link href={"/enemies"}>{pathName !=="/enemies" ? `Enemies` : `ENEMIES`}</Link>
          <Link href={"/combat"}>{pathName !=="/combat" ? `Combat` : `COMBAT`}</Link>
          <Link href={"/world"}>{pathName !== "/world" ? `World` : `WORLD`}</Link>
          <Link href={"/adventure"}>{pathName !== "/adventure" ? `Adventure` : `ADVENTURE`}</Link>
          <Link href={"/demo"}>{pathName !== "/demo" ? `Demo` : `DEMO`}</Link>
        </div>
      </div>
    </nav>
  )
}
