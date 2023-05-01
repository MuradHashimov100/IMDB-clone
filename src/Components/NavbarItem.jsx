import React from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

const NavbarItem = ({title,param}) => {
    const searchParams = useSearchParams();
    const genre  = searchParams.get("genre");  
  return (
    <div className='flex justify-center dark:bg-gray-600'>
        {/* {
            genre && genre === param && "underline underline-offset-8 decoration-4 decoration=ember-500 rounded-lg"
        } */}
        <Link href={`/?genre=${param}`} className={`mt-4 hover:text-amber-600 font-semibold p-2 ${
            genre && genre === param && "underline underline-offset-8 decoration-4 decoration-ember-500 rounded-lg"
        }`}>        
            {title}
        </Link>
    </div>
  )
}

export default NavbarItem;