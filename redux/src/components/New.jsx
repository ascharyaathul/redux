import React from 'react'
import { useState } from 'react'

const New = () => {
    const[count,setcount]=useState(0)
const increment=()=>{
    setcount(count+1)
}
const decrement=()=>{
    setcount(count-1)
}
  return (
    <div>
      <div>{count}</div>
<div onClick={increment}>increment</div>
<div onClick={decrement}>decrement</div>
    </div>
  )
}

export default New
