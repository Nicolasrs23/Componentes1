import Item from "../Item/Item";
import "../Category/Itemlist.scss";

const Category = ({products}) => {
    return (
        <div id="ItemList" className="productContainer">
        {products.map((item, idx) => {
          return <Item key={idx} item={item} />;
        })}
      </div>
    )
}

export default Category
