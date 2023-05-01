import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import Results from "@/Components/Results";
import { useState,useEffect } from "react";
export default function seacrhTerm() {
  const searchParams = useSearchParams();
  const [searchData,setSearchData] = useState();
  const paramsget = searchParams.get('seacrhTerm');
  const [data,setData] = useState();
  const router = useRouter();
  // const {moviesss} = router.query;
  console.log(paramsget);
  // useEffect(() => {
  //   const searchDatas = async () => {
  //     const res = await fetch(`https://api.themoviedb.org/3/movie/api_key=9d7c257e4e0a121e19bc18929b8cf7ec`);
  //     // const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=9d7c257e4e0a121e19bc18929b8cf7ec&query=${paramsget}&language=en-US&include_adult=false`);
  //      if(!res.ok){
  //       throw new Error('Melumat daxil olmadi');
  //      }
  //      const data = await res.json();
  //      const results = data.results;
  //      setSearchData(data);
  //      searchDatas();
  //   }
  // }, []);
  // console.log(searchData); 
  useEffect(() => {
      const fetchData = async () => {
          // const res = await fetch(`https://api.themoviedb.org/3/movie/550?api_key=9d7c257e4e0a121e19bc18929b8cf7ec`);
          const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=9d7c257e4e0a121e19bc18929b8cf7ec&query=${paramsget}&language=en-US&include_adult=false`);
          const movie = await res.json();
          const results = movie.results;
          setData(results);
          // console.log(data);
      }
      fetchData( )
  }, [paramsget])
  console.log(data);
  return (
    // <div>seacrhTerm</div>
    <div>
      {
    data && data.length === 0 && (
      <h1>No results</h1>
    )
   }
   {data && <Results results={data}/>}
    </div>
  )
}
