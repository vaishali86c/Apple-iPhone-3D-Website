import React from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";
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

const moveup = keyframes`

100%{
    transform: translateY(0);
}

`

const Text = styled.p`

width: 50%;
font-size: var(--fontlg);
position: relative;
height: var(--fontmd);
overflow: hidden;

span{
    position: absolute;
    transform: translateY(3rem);
    animation-name: ${moveup};
    animation-duration: 2.5s;
    animation-timing-function: ease;
}

`


const Quote = () => {
    return (
        <Section>
            <TextContainer>
                <Text><span>line-1</span></Text>
                <Text><span>line-2</span></Text>
                <Text><span>line-3</span></Text>
                <Text><span>line-4</span></Text>
                <Text><span>line-5</span></Text>
            </TextContainer>
        </Section>
    );
}

export default Quote;