import React from 'react';
import styled from "styled-components";


const Home = ({greeting}) => {
    return (
        <Section className='home'>
            <h1> {greeting} </h1>
        </Section>
    )
}

export default Home;

const Section = styled.section`
    min-height: 80vh;
    display: flex;
    justify-content: center;
    text-transform: center;
    align-items: center
`
