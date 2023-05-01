import React from 'react';
import { useState,useEffect } from 'react';
// import axios from 'axios';
function Data() {

    const[array,setarray]=useState([])
    useEffect(()=>{
        setTimeout(() => {
            fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response)=>response.json())
            .then(json=>{setarray(json)
               console.log(json)
             } )
            .catch((err)=>{
                console.log(err.message  )
            },)
        }, 1000);
       
    },[])
    const  lastindex =array.length
    const beforeindex=lastindex-11
    // useEffect(()=>{
        
    // },[])
    // axios.get('https://jsonplaceholder.typicode.com/posts')
    //  .then((res)=>{
    //     console.log('res',res.data)
    //     setarray(res.data)
    //  })
    //  .catch((err)=>{
    //     console.log(err)
    //  })
  return (
    <div>
        {/* <h1>data</h1> */}
        <table className='table table-responsive table-bordered'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    
                </tr>
            </thead>
            <tbody>
            {
            array && array.slice(beforeindex,lastindex).map((a,i)=>{
                return<tr key={a.id}>
                    <td>{a?.id}</td>
                    <td>{a?.title}</td>
                    {/* <td>{array.lastIndexOf('ad iusto omnis odit dolor voluptatibus')}</td> */}
                </tr>
            })
        }
            </tbody>
        </table>
       
    </div>
  )
}

export default Data