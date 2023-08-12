import { useState } from "react";
import Output from "./components/Output.js";
import Input from "./components/Input.js";
import Button from "./components/Button.js";
import ProductsList from "./components/ProductsList.js";


function App() {

 const [inputValue,setinputValue] =useState();//[state,setstate];
//  const [showValue,setShowValue] =useState();//[state,setstate];
 
const [products,setProducts] =useState(["iphones","samnsung"]); 
 
  const handleChange = (e)=>{

   
   setinputValue(e.target.value)

  }
const handleClick = (e)=>{
// setShowValue(inputValue);
// const tempProducts = [...products];
// tempProducts.push(inputValue);
// setProducts(tempProducts);
// console.log(products);
setProducts([...products,inputValue]);


}

  return (
<div>

<Input handleChange={handleChange}/>
    <Button handleClick={handleClick} />

<ProductsList products={products} />

</div>
  ); 
  }
  
  

export default App;
