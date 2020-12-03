const { default: ItemCounter } = require("../Counter/ItemCount")




const ItemDetail =({product}) =>{
console.log(product)
return(
    <div id='ItemDetail'>
        <h2>
        {product.productName}
        </h2>
       <h3>
       {product.price}
       </h3>
       <h3>
       {product.details}
       </h3>
       <ItemCounter maxValue={8} minValue={0} initialValue={0} onAdd={0}/>
    
{/*         {items.map((item,idx) => {
            return <Item item={item}/>
        })} */}

    </div>
)

}

export default ItemDetail;