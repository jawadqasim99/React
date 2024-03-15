import Product from "./Product";
import './ProductTab.css'


export default function ProductTab(){
    let description=["Best" , "Good" , "Bad" , "Normal"];
    return(
        <div id="tab">
       <Product tittle="Apple" idx={0}/>
       <Product tittle="Sumsung" idx={1}/>
       <Product tittle="Xhomi" idx={2}/>
       <Product tittle="Infinix" idx={3}/>
        
        </div>
    );
}