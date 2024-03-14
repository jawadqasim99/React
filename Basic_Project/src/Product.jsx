
function Product({tittle , des,fruits,obj}) {
    let style = {backgroundColor: des>50000 ? "green" : ""};
    return(
        <div style={style}>

      
        <h1>{tittle}</h1>
        <p>{des > 50000 ? <p>Discount 8%</p> : <p>No Discount</p>}</p>
        
        <p>{obj.a}</p>
        </div>
    );
}

export default Product;