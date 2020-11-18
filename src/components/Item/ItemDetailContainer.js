import {useEffect, useState} from 'react'
import { getProduct } from '../Item/products';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () =>{
const [product, setProduct] = useState({}) 

    useEffect(() => {
        getProduct()
        .then( 
          (response) =>{
             setProduct(response)
         }
         )
      }, [])
    return(
        <div id='ItemDetailContainer'>
            <h2>
                <ItemDetail product={product}/>
            </h2>
        </div>
        
        
    )
}
export default ItemDetailContainer;