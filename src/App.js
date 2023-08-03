import { useState } from "react";
import Output  from "./components/Output";

function App() {
  let [inputValue,setInputValue]= useState(""); //[state,setState] 
  let [showValue,setShowValue]= useState(""); //[state,setState] 

  const handleChange=(e)=>{

    //console.log("value>>>",e.target.value);
    //inputValue = e.target.value;
    setInputValue(e.target.value);
  }
  const handleClick=()=>{
   setShowValue(inputValue);

  }
  
  return( 
  <div>
    <input onChange={handleChange}/> 
    <button onClick={handleClick}>Clickme</button>
    {/* <div>Result:{showValue}</div> */}
    <Output value={showValue}/>
  </div>
  );
}

export default App;
