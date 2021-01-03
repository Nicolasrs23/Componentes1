import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Category from "../../components/Category/Category";
import {getFirestore} from "../../FireBase/index";


const CategoryContainer = () => {
    const [products, setProducts] = useState([]);
    const {id} = useParams();


    useEffect(() => {
       const db = getFirestore();
       const itemCollection = db.collection("Producto").where("category", "==", id);
       
       itemCollection.get().then(response => {
           if(response.size === 0 ) {
               console.log("no hay productos");
               alert("No hay productos");
           } else {
               setProducts(response.docs.map((doc) => {
                return { id: doc.id, ...doc.data() };
               })) 
           }

       }) 
    })

    return (
        <div>
            <Category products={products} />
        </div>
    )
}

export default CategoryContainer
