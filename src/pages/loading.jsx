import React from 'react';
import spinner from '../../public/spinner.svg';
import Image from 'next/image';

export default function loading() {
  return (
    <div className='flex justify-center'>
      <Image 
       className='h-96'
      src={spinner}></Image>
    </div>
  )
}
