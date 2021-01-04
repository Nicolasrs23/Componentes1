import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../../components/Item/products";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import  Error  from "../../components/Error/Error";


const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

useEffect(() => {
    setLoading(true);
    getProduct(id)
    .then
    ((element) => {
      setProduct(element) ;
      setLoading(false);
      
    } 
    ) ;
  }, [id]);

  console.log(product)
  
  return (
    <div id="ItemDetailContainer"> 
      {loading ? (<h2> Loading </h2>) : (product.productName === undefined) ?
  <Error/> : <ItemDetail  product={product} />}
    </div>
  );
};

export default ItemDetailContainer;

