import React, {
    useState,
    useEffect
} from 'react';
import '../ItemList/Itemlist.scss'


import Item from '../Item/Item'
const Itemlist =({items}) =>{

return(
    <div id='ItemList'>
        {items.map((item,idx) => {
            return <Item key={idx} item={item}/>
        })}

    </div>
)

}

export default Itemlist