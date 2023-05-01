import React, { useContext } from 'react'
const context = React.createContext();
function Provider() {
    const data = {id:10, name:"raja", city:"hyderabad",designation:"ui developer"};
  return (
    <div>
     <h1>Provider</h1>
     <context.Provider value={data}>
      {/* <E/>
      <D/> */}
      <F/>
     </context.Provider>
    </div>
  )
}
function A(){
  return "A component";
}
// function D(){
//   const data=useContext(context);
//   return(<div>
//        <h1>iD:{data.id}</h1>
//   </div>)
// }
// function E(){
//   const data = useContext(context);
//   return(<div>
//     <h1>ID:{data.id}</h1>
//     <h1>name:{data.name}</h1>
//     <h1>city:{data.city}</h1>
//     <h1>designation:{data.designation}</h1>
//   </div>)
// }
function F(){
  const data= useContext(context);
  return(<div>
    <h1>Id:{data.id}</h1>
    <h1>name:{data.name}</h1>
    <h1>city:{data.city}</h1>
    <h1>designation:{data.designation}</h1>
  </div>)
}

export default Provider