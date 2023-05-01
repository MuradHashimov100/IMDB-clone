import { Inter } from 'next/font/google';
const API_KEY = process.env.API_KEY;
import { useSearchParams } from 'next/navigation';
import Results from '@/Components/Results'; 
import { Fragment } from 'react';
import { useEffect, useState } from 'react';
export default function Home() {
  const [data, setData] = useState();
  const searhcParams = useSearchParams();
  const genre = searhcParams.get('genre');
 useEffect(() => {
  const fetchData = async () => {
    const res = await fetch(`https://api.themoviedb.org/3/${genre === 'fetchTrending' ? 'movie/top_rated' : 'trending/all/week'}?api_key=9d7c257e4e0a121e19bc18929b8cf7ec`,
    {
      next:{
        revalidate:1000,
      }
    }
    );
    const data = await res.json();
    const results = data.results;
    setData(results);
    // console.log(results)  
  }
  fetchData()
 }, [searhcParams])
//  console.log(data);
  return (
   <Fragment>
      <Results results={data}></Results>
   </Fragment>
  )
}
// export async function getStaticProps(){
//   // const searhcParams = useSearchParams();
//   // const genre = searhcParams.genre || 'fetchTrending';
//   const res = await fetch(`https://api.themoviedb.org/3/movie/api_key=9d7c257e4e0a121e19bc18929b8cf7ec`);
//   const data = await res.json();
//   const results = data.res;
//   return{
//     props:{
//       results,
//     },
//   }
// }