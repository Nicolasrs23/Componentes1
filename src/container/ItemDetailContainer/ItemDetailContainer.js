import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../../components/Item/products";
import ItemDetail from "../../components/ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    getProduct(id).then((element) => { 
      setProduct({ ...element, id }) ;
      setLoading(false);
    } 
    ) ;
  }, [id]);

  return (
    <div id="ItemDetailContainer">
      {loading ? <h2> Loading </h2> : <ItemDetail product={product} />}
    </div>
  );
};

export default ItemDetailContainer;
