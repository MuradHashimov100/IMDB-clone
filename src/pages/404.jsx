'use client';
import { useEffect } from "react";
export default function Custom404({error, reset}) {
    useEffect(() => {
        // console.log(error);
    }, [error]);
    // console.log(error);
  return (
    <div className="text-center mt-3">
        <h1 className="py-3 pb-4">Something wrong please wait</h1>
        <button className="hover:text-amber-700" onClick={() => reset }>Try Again</button>
        {/* <button className="hover:text-amber-700 transition duration-500">Try Again</button> */}
    </div>
  )
}
