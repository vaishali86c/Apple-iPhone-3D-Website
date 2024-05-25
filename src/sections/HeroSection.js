import styled from "styled-components";

const Section = styled.section`

width: 100vw;
height: 100vh;
position: relative;

display: flex;
background-color: var(--dark);
overflow: hidden;
`

const Title = styled.h1`

position: absolute;
top: 2rem;
left: 2rem;

font-size: var(--fontlg);
font-family: var(--fontL);
color: var(--greyLight);

`

const TextContainer = styled.div`

width: 100vw;
height: 100vh;

display: flex;
justify-content: space-between;
align-items: center;

background-image: linear-gradient(-45deg, var(--gradient));
background-clip: text;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;

`

const HeroSection = () => {
    return (
        <Section>
            <Title>iPhone 14 Pro Max</Title>
            <TextContainer>
               <span>So.Cold.</span>
               <span>So.Bold.</span> 
            </TextContainer>
        </Section>
    );
}

export default HeroSection;