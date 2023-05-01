import React from 'react';

function A() {
    const parent = "this is parent data from Context component"
  return (
    <div>
     <h1>A-component</h1>
     <B value={parent}/>
    </div>
  )
}
function B({value}){
    return<div>
        <h1>B-component</h1>
        <C value={value}/>
    </div>
}
function C({value}){
    
    return<div>
        <h1>C-component</h1>
    <D value={value}/>
    </div>
}
function D({value}){
    return<div>
        <h1>D-component</h1>
        <E  value={value }/>
    </div>
}
function E({value}){
    return<div>
        <h1>E-component</h1>
        <h1>finally recived parent  data in E component :{value}</h1>
    </div>
}
function F({value}){
    return<div>
        <h1>F-component</h1>
        <F value={value}/>
    </div>
}
function G({value}){
    return<div>
        <h1>G-component</h1>
        <G value={value}/>
    </div>
}
export default A ;