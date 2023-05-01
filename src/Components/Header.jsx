'use client';
import { Menuitem } from './Menuitem';
import DarkMode from './DarkMode';
import {AiFillHome} from 'react-icons/ai';
import {BsFillInfoSquareFill} from  'react-icons/bs';
import Link from 'next/link';


export const Header = () => {
  return (
   <header className='flex justify-between items-center mx-4 mt-4 max-w-6xl py-0'>
      <div className='flex'>
            <Menuitem 
            title="HOME"
            address="/"
            Icon={AiFillHome}
            />
            <Menuitem 
            title="ABOUT"
            address="/about/about"
            Icon={BsFillInfoSquareFill}
            />
        </div>
        <div className='flex items-center space-x-4'>
            <DarkMode/>
            <Link href={'/'}>
                <h2 className='text-2xl'>
                    <span className='font-bold bg-amber-500 py-1 px-2 rounded-lg mr-4'>IMDB</span>
                    <span className='text-xl hidden sm:inline'>CLONE</span>
                </h2>
            </Link>
        </div>
   </header>
  )
}
