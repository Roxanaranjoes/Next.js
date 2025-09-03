'use client';
import { useState } from 'react';

export default function Counter(){
  const [n,setN]=useState(0);
  return <button aria-label="increment" onClick={()=>setN(n+1)}>Count: {n}</button>;
}
