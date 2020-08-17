import React from 'react';
import imgPrueba from './../../assets/img/home.png';
import './ProductCard.scss';
import ItemCount from './../ItemCount/ItemCount';

const ProductCard = ({ title, price }) => {
    return (
        <article className='productCard'>
            <img src={imgPrueba} />
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