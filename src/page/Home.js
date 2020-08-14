import React from 'react';
import styled from "styled-components";
import ItemCount from './../components/ItemCount'


const Home = ({greeting}) => {
    return (
        <Section className='home'>
            <h1> {greeting} </h1>
            <ItemCount></ItemCount>
        </Section>
    )
}

export default Home;

const Section = styled.section`
    min-height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-transform: center;
    align-items: center
`
