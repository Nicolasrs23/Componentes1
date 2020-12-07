import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../Item/products";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    getProduct();
    setTimeout(() => {
      getProduct()
        .then((response) => {
          response.forEach((element) => {
            if (Number(id) === element.id) {
              setProduct(element);
            }
          });
          setLoading(false);
        })
        .finally(() => {});
    }, 3000);
  }, [id]);
  return (
    <div id="ItemDetailContainer">
      {loading ? <h2> Loading </h2> : <ItemDetail product={product} />}
    </div>
  );
};

export default ItemDetailContainer;
