import useAppContext from '../UseContext/UseAppContext'
import {useEffect, useState,  useParams} from 'react'
import {  Link } from "react-router-dom";
/* import useAppContext from '../UseContext/UseAppContext' */


const { default: ItemCounter } = require("../Counter/ItemCount")



const ItemDetail =({ product }) => {

  /* const { parametro } = useParams(); */
  const [quantity, setQuantity] = useState(1)
  const {addProduct} = useAppContext()

/*     useEffect(() => {
      console.log(parametro);
    }, [parametro]);
 */



/* const ctx = useAppContext() */


/* useEffect(() => {
    console.log(parametro);
  }, [parametro]); */

const handleCounter = (counter) =>{
    setQuantity(counter)
}

const addProductToCart = () =>{
addProduct(product, quantity)
}
 console.log({...product, quantity});

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
       <ItemCounter maxValue={8} minValue={0} initialValue={0} onAdd={handleCounter}/>
       <button onClick={addProductToCart}>
       <Link to='/Cart'>Agregar al carrito </Link>
        </button>
    
{/*         {items.map((item,idx) => {
            return <Item item={item}/>
        })} */}

    </div>
)

}

export default ItemDetail;