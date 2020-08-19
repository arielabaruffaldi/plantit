import React from 'react';
import './ItemDetail.scss';
import ItemCount from './../ItemCount/ItemCount';

const ItemDetail = (item) => {
    console.log(item)
    return (
        <article className='itemDetail'>
            <img src={item.img} />
            <div className='info'>
                <h3>{item.title}</h3>
                <p>{`$${item.price}`}</p>
            </div>

            <ItemCount
                initial={0}
                min={0}
                max={5} />
        </article>
    )
}

export default ItemDetail;