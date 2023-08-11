import { useState } from "react";
import Output from "./components/Output.js";
import Input from "./components/Input.js";
import Button from "./components/Button.js";


function App() {

 const [inputValue,setinputValue] =useState();//[state,setstate];
 const [showValue,setShowValue] =useState();//[state,setstate];
 
 
  const handleChange = (e)=>{

   
  setinputValue(e.target.value)

  }
const handleClick = (e)=>{
setShowValue(inputValue);

}

  return <div>
    <Input handleChange={handleChange}/>
    <Button handleClick={handleClick} />
    {/* <input onChange={handleChange}/> */}
    {/* <button onClick={handleClick}>submit</button> */}

  <Output value={showValue}/>
    </div>
 
  }
  
  

export default App;
