import Link from 'next/link'
import React from 'react'
import { ADVENTURE_TYPES, ENEMY_TYPES } from '@/shared/constants'
import TreeOfMight from '@/app/enemies/[slug]/TreeOfMight'

type URL = {
  params: {
    slug: string
  }
}

type Data = {
    id: string;
    title: string;
    summary: string;
    players: string;
    roles: string[];
    villain: string;
    opponents: string[];
    primaryLocation: string;
    act1Summary: string;
    act2Summary: string;
    act3Summary: string;
    battles: string[];
    story: string;
}

type ComponentMap = {
  [key: string]: React.ReactNode;
}

const fetchDetails = (slug:string) => {
  const data = ADVENTURE_TYPES.find((a) => a.id == slug)
  if (!data){
    return null
  }
  return data
}

const enemyName = ((enemyName: string)=>{
  const enemy =  ENEMY_TYPES.find((e) => e.name == enemyName)
  return enemy?.displayName
})

const componentToRender = ((data: Data | any) => {
  if(!data){
    return null
  }

  const componentMap: ComponentMap = {
    treeOfMight: <TreeOfMight />
  }

  const ComponentToRender = componentMap[data.id] || null

  return ComponentToRender
})

export default function page(url:URL) {
  const data = fetchDetails(url.params.slug)
    const Component = componentToRender(data)
  return (
    <div>
      
      <div className='bg-blue-200 rounded-t p-2 font-bold text-center'>
        <Link href={`/adventure`}>
          <button className='hover:text-white'>Return to adventures</button>
        </Link>
      </div>
      <div className='bg-blue-300 rounded-b p-2 flex justify-around'>
        <Link href={`/adventure/treeOfMight`}>
          <button className='font-bold hover:text-white'>Tree of Might</button>
        </Link>
        <Link href={`/adventure/worldsStrongest`}>
        <button className='font-bold hover:text-white'>{`World's`} Strongest</button>
        </Link>
        <Link href={`/adventure/lordSlug`}>
        <button className='font-bold hover:text-white'>Lord Slug</button>
        </Link>
        <Link href={`/adventure/deadZone`}>
        <button className='font-bold hover:text-white'>Dead Zone</button>
        </Link>
      </div>
      
      { 
        data ?
        
          <div>
          <h1 className='font-bold text-xl text-center bg-white rounded p-4'>
            {data.title}
            </h1>
            


            <div className='bg-white rounded p-4 my-2 grid grid-cols-2 gap-2'>

              <div className='grid grid-cols-1 gap-2'>
                <div>
                  <p className='font-bold'>Summary:</p>
                  <p>{data.summary}</p>
                  <div className='grid grid-cols-4'>
                    <p className='font-semibold'>Act 1:</p>
                    <p className='grid-cols-subgrid col-span-3'>{data.act1Summary}</p>
                    <p className='font-semibold'>Act 2:</p>
                    <p className='grid-cols-subgrid col-span-3'>{data.act2Summary}</p>
                    <p className='font-semibold'>Act 3:</p>
                    <p className='grid-cols-subgrid col-span-3'>{data.act3Summary}</p>

                  </div>
                </div>

                <div>
                  <p className='font-bold'>Location: <span className='font-normal'>{data.primaryLocation}</span></p>
                </div>

                <div>
                  <p className='font-bold'>Player Count: <span className='font-normal'>{data.players}</span></p>
                  <p className='font-bold'>Roles: 
                  <span className='font-normal'>{` ( A role is a narrative device players pick to organize them into the story )`}</span>
                  </p>
                <p>{data.roles.map((role: any) =>(
                  <span key={role} className='font-normal'> {role} </span>
                ))}</p>
                </div>

                <div>
                  <p className='font-bold'>Villain: <span className='font-normal'>{enemyName(data.villain)}</span></p>

                  <p className='font-bold'>Opponents:</p>
                  <ul>
                    {data.opponents?.map((opponent: any) => (
                      <li key={opponent}>{enemyName(opponent)}</li>
                    ))}
                  </ul>
                </div>

              </div>



              <div>
                <p className='font-bold'>Battles:</p>
                <ul className='mb-3'>
                  {data.battles.map((battle: any) => (
                    <li key={battle}>{battle}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className='bg-white rounded p-4'>
              {Component}
            </div>
          </div>
          :
          <div> This adventure does not exist.</div>
      }
    </div>
  )
}
