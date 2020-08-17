import React from 'react';
import imgPrueba from './../../assets/img/home.png';
import ProductCard from './../../components/ProductCard/ProductCard';
import './Galeria.scss';

const Galeria = () => {
    return (
        <section className='galeria'>
            <h2>Macetas</h2>
            <div className='galeriaWrapper'>
                <ProductCard title="Nombre producto" price={100} img={imgPrueba}/>
                <ProductCard title="Nombre producto" price={100} img={imgPrueba}/>
                <ProductCard title="Nombre producto" price={100} img={imgPrueba}/>
            </div>
        </section>
    )
}

export default Galeria;