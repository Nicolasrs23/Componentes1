import "../ItemList/Itemlist.scss";
import Item from "../Item/Item";

const Itemlist = ({ items }) => {
  console.log(items);
  return (
    <div id="ItemList" className="productContainer">
      {items.map((item, idx) => {
        return <Item key={idx} item={item} />;
      })}
    </div>
  );
};

export default Itemlist;
