import React from 'react';
import './Home.scss';
import fondo from './../../assets/img/home.png'





const Home = ({ greeting }) => {

    return (
        <section className='home'>
            <div></div>
            <p>trending <span>collection</span></p>
            <h1> Re-discover <span>your green</span></h1>
            <a href="">view collection</a>
            <img src= {fondo}/>
        </section>
    )
}

export default Home;

