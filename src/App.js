// import React from 'react';
// // import logo from './logo.svg';
// import './App.css';
// // import Context from './Context';
// import Provider from './Provider';

// function App() {
//   return (
//     <div className="App">
//     <h1>USE CONTEXT HOOK</h1>
//     {/* <Context/> */}
//     <Provider/>
//     </div>
//   );
// }

// export default App;
import React from "react";
import './App.css';
// import Children from "./Children";
import { useState } from "react";
// import Search from "./Search";
import Data from "./Data";
import BlogList from "./BlogList";
import Errorhandling from "./Errorhandling";
// import Dataindex from "./Dataindex";
function App(){
  // const [Todos,UpdateTodos]=useState([
  //   'Task1',
  //   'Task2'
 
  // ])
  // const addNew =(task)=>{
  //   UpdateTodos([...Todos,task ])
  // }
  
  return(
    <>
      
      
      {/* <Data/> */}
      <Errorhandling/>
      {/* <BlogList/> */}
      {/* <Dataindex/> */}
     
    </>
  )
}
export default App ;