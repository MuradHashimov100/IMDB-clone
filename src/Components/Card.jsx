import React from 'react';
import Link from 'next/link';
import { Fragment } from 'react';
import Image from 'next/image';
import movie1 from '../../public/movie1.jpg';
import spinner from '../../public/spinner.svg';
import { BsHandThumbsUp   } from 'react-icons/bs';


export default function Card ({data}) {
    const id = 1;
    // console.log(data.id);
  return (
   <div className='sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200 p-2'>
      <Link href={`/movie/${data.id}`}>
        <Image 
            className='sm:rounded-t-lg groups-hover:opacity-80 transition-opacity duration-200'
            src={`https://image.tmdb.org/t/p/original${data.backdrop_path || data.poster_path}`}
            width={400}
            alt={'movie'}
            height={500 }
            // placeholder='blur'
            // blurDataURL={spinner}
            priority={true}
            style={
                {
                    maxWidth:'100%',
                    height:'auto',
                }
            }
        ></Image>
        <div className='p-2'>
            <p className='line-clamp-2'>
                {data.overview}
            </p>
            <h2 className='truncate text-lg font-bold'>{data.title || data.name}</h2>
            <p className='flex items-center'>
                {data.release_date}
                <BsHandThumbsUp   className='h-5 mr-2 ml-3' />
                <span>{data.vote_count}</span>
            </p>
        </div>
     </Link>
   </div>
  )
}
