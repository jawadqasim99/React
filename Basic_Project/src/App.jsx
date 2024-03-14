import './App.css'

import Product from './Product.jsx';

function App() {
  let feature=["Apple" , "Banana" , "Orange"];
  let obj= {a:"I phone" ,b:"Sumsung" , c: "Xhomi" }

  return (
   <>
    <Product tittle="Laptop" des={30000}  obj={obj}/>
    <Product tittle="Pen" des={900}  obj={obj}/>
    <Product tittle="Mobile" des={90000}  obj={obj}/>
    <Product tittle="Bike" des={1250000}  obj={obj}/>
    </>
   
  
  );
}

export default App
