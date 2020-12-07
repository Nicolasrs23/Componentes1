import React from 'react';
import useAppContext from '../UseContext/UseAppContext';
import {useEffect, useState} from 'react'

const Cart = () => {


const  { products } = useAppContext()
/* const [product, setProduct] = useState({})  */
console.log(products)



return(
    <div id='Cart'>
         {products.map((product) => (
            <h1> {product.productName}  </h1>
            ))}
    {/*     {products.map((product) => (
       
     
            <h1>{product.productName}</h1>
           
           
        ))} */}

    </div>
)

}

export default Cart;