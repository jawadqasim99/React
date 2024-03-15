import Price from "./Price";
import './Product.css'

export default function ProductA({tittle,idx}){
    let description=["Best" , "Good" , "Bad" , "Normal"];
    let priceOld=["1000","3000","9000","8000"];
    let priceNew=["100","300","900","800"];
    return(
<div id="product">
    <h2>{tittle}</h2>
    <p>{description[idx]}</p>
    <Price priceOld={priceOld[idx]} priceNew={priceNew[idx]}/>
</div>
    );
}