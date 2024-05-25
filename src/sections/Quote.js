import React from "react";
import styled from "styled-components";
import "../styles/GlobalStyle"

const Section = styled.section`

width: 100vw;
height: 100vh;
posotion: relative;

display: flex;
justify-content: center;
align-items: center;


`
const TextContainer = styled.div`

width: 100vw;
height: 100vh;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

background-color: var(--dark);
color: var(--white);

`

const Quote = () => {
    return (
        <Section>
            <TextContainer>
                <span>line-1</span>
                <span>line-2</span>
                <span>line-3</span>
                <span>line-4</span>
                <span>line-5</span>
            </TextContainer>
        </Section>
    );
}

export default Quote;