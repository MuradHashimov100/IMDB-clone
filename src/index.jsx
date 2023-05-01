

import Results from '@/Components/Results';
import { Fragment } from 'react';

const API_KEY = process.env.API_KEY;

export default  async function Home({results}) {

  console.log(results);
  console.log('test')

  return (
   <Fragment>
      <Results></Results>
   </Fragment>
  )

 
}

export async function getStaticProps(){
  const genre = searchParams.genre || 'fetchTrending';
  const res = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`);
  const data = await res.json();
  const results = data.results;
  console.log(results);
}