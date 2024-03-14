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
      <div className="flex justify-between bg-orange-600 px-10 md:px-48 xl:px-96  py-3 font-bold mb-7">
        <Link href={"/origins"}>{pathName !== "/origins" ? `Origins` : `ORIGINS`}</Link>
        <Link href={"/archetypes"}>{pathName !=="/archetypes" ? `Archetypes` : `ARCHETYPES`}</Link>
        <Link href={"/moves"}>{pathName !=="/moves" ? `Moves` : `MOVES`}</Link>
        <Link href={"/items"}>{pathName !=="/items" ? `Items` : `ITEMS`}</Link>
        <Link href={"/forms"}>{pathName !=="/forms" ? `Forms` : `FORMS`}</Link>
        <Link href={"/sheet"}>{pathName !== "/sheet" ? `Sheets` : `SHEETS`}</Link>
      </div>
    </nav>
  )
}
