import './App.css'
// import Price from './amzoon/Price.jsx';

// // import Product from './Product.jsx';
// // import Msgbox from './Msg.jsx';
import ProductTab from './amzoon/ProductTab.jsx';

function App() {
  // let feature=["Apple" , "Banana" , "Orange"];
  // let obj= {a:"I phone" ,b:"Sumsung" , c: "Xhomi" }

  return (
   <>
    {/* <Product tittle="Laptop" des={30000}  obj={obj}/>
    <Product tittle="Pen" des={900}  obj={obj}/>
    <Product tittle="Mobile" des={90000}  obj={obj}/>
    <Product tittle="Bike" des={1250000}  obj={obj}/> */}
    {/* <Msgbox title="jawad" colorMsg="green"/> */}
    <h1>Block Boster Product || Click more product </h1>
    <ProductTab/>
    {/* <Price/> */}
    </>
   
  
  );
}

export default App
