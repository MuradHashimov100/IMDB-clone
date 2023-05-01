"use client";
import React from 'react';
import { useState } from 'react';
import { useRouter } from 'next/router'; 
export default function SearchBox() {
    const [search,setsearch] = useState('');
    const router = useRouter();
   const handeleSubmit = (e) =>{
      e.preventDefault();
      // if(!search) return;
      router.replace(`/search/${search}`);
      e.target.reset();
   }
  return (
    <form action="" className='flex max-w-6xl mx-auto justify-between items-center px-5'
      onSubmit={handeleSubmit}
    >
        <input type="text"
        placeholder='Search keywords...'
        className='w-full h-14 rounded-sm placeholder-gray-500 outline-none bg-transparent'
        onChange={(e) => setsearch(e.target.value)}
        />
        <button
        className='text-amber-700 disabled:text-gray-400 flex-1'
        type='submit'
        disabled={!search}
        >
            Search
        </button>
    </form>
  )
}
