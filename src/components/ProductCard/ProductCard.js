import React from 'react';
import './ProductCard.scss';
import ItemCount from './../ItemCount/ItemCount';

const ProductCard = ({ title, price, img }) => {
    return (
        <article className='productCard'>
            <img src={img} />
            <div className='info'>
                <h3>{title}</h3>
                <p>{`$${price}`}</p>
            </div>

            <ItemCount
                initial={0}
                min={0}
                max={5} />
        </article>
    )
}

export default ProductCard;