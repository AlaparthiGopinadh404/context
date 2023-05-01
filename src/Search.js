import React, { useState } from 'react'

function Search({add}) {
    const[inputt,setInputt]=useState("")
  return (
    <>
        <input type="text" value={inputt } onChange={(e )=>{setInputt(e.target.value)}} />
        <button onClick={()=>{ add(inputt)}}>AddTodo</button>
    </>
  )
}

export default Search