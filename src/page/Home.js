import React from 'react';
import styled from "styled-components";
import ItemList from './../components/ItemList/ItemList'


const Home = ({ greeting }) => {
    return (
        <Section className='home'>
            <h1> {greeting} </h1>
            <ItemList />
        </Section>
    )
}

export default Home;

const Section = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-transform: center;
    align-items: center;
    padding: 3em 0;
`
