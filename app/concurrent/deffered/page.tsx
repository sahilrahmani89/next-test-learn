"use client"

import { useDeferredValue, useState } from "react";

export default function Home(){
      const [query,setquery] = useState('')
      const deferredQuery = useDeferredValue(query); 
      const filteredList = Array.from({ length: 100000 }, (_, i) => i).filter(
        (item) => item.toString().includes(deferredQuery)
      );
    return(
        <>
        <input type="text" className="border-1" value={query} onChange={(e)=>setquery(e.target.value)}/>
         <ul>
        {filteredList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
        </>
    )
}