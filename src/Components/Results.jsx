import React from 'react';
import Card from './Card';
export default function Results({results}) {
  // console.log(results); 
  return (
    <div className='sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto p-4 groups'>
        {
          results?.map((el, id) => {
            return(
              <Card key={el.id} data={el}></Card>
            )
          })
        }
    </div>
  )
}
