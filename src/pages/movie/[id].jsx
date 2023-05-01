import React from 'react';
import { useSearchParams } from 'next/navigation';
import { useState,useEffect } from 'react';
import Image from 'next/image';



const MoviePage = () => {
    // debugger
    const router = useSearchParams();
    const movieId = router.get('id');
    const [data,setData] = useState();
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=9d7c257e4e0a121e19bc18929b8cf7ec`);
            const movie = await res.json();
            setData(movie);
            // console.log(data);
        }
        fetchData( )
    }, [])
  return (
    <div className='w-full'>
        <div className='p-4 md:top-8 flex flex-col md:flex-row items-center justify-center content-center max-w-6xl mx-auto md:space-x-6'>
        <Image 
            className='rounded-lg'
            src={`https://image.tmdb.org/t/p/original/${data?.backdrop_path || data?.poster_path}`}
            width={400}
            alt={'movie'}
            height={300 }
            // placeholder='blur'
            // blurDataURL={spinner}
            priority={true}
            style={
                {
                    maxWidth:'100%',
                    height:'100%',
                }
            }
        ></Image>
        <div className='p-2 mt-20'>
            <h2 className='text-lg mb-3 font-bold'>{data?.title || data?.name}</h2>
            <p className='text-lg mb-3 '>
                <span className='font-semibold'>overview: {data?.overview}</span>
            </p>
            <p className='mb-3'>
            <span className='font-semibold mr-1'>Date Released: </span>
            {data?.release_date}
        </p>
        <p className='mb-3'>
            <span className='font-semibold mr-1'>Raiting:</span>
            {data?.vote_count}
        </p>
        </div>
        </div>
        
    </div>
  )
}


export default MoviePage;