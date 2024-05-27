import styled, { keyframes } from "styled-components";
import a15 from "../assets/Images/A15-Bionic.jpg"

const Sections = styled.div`
width: 100vw;
height: 100vh;
position: relative;

display: flex;
justify-content: flex-start;
align-items: center;

background-color: var(--dark);
color: var(--white);
overflow: hidden;
`

const Title = styled.h1`
width: 100%;
text-align: center;
position: absolute;
bottom: 2rem;
left: 50%;
transform: translate(-50%);
font-size: var(--fontBig);
font-family: var(fontL);
z-index: 1;
background-image: linear-gradient(-45deg, var(--gradient));
background-clip: text;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
`

const glow = keyframes`
0%{
    box-shadow: 1px 1px 10px var(--white);
}

50%{
    box-shadow: 2px 2px 25px var(--white);
}

100%{
    box-shadow: 1px 1px 10px var(--white);
}
`

const Processor = styled.div`
width: 25%;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
animation: ${glow} 3s ease infinite;
padding: 0.5rem;

display: flex;
justify-content: center;
align-items: center;

img{
    width: 100%;
    height: auto;
}
`

const Text = styled.div`
font-size: var(--fontxs);
color: var(--greyLight);
width: 30%;
height: 40vh;

display: flex;
flex-direction: column;
justify-content: center;

span{
    margin: 0.2rem 0;
    padding-left: 2rem;
}

`


const ProcessorSection = () => {

    return (
        <Sections>
            <Title>
                Fastest Processor
            </Title>
            <Processor>
            <img src={a15} alt="A15 Processor" />
            </Processor>
            <Text>
                <span>Lorem djkdhjk ajdjadv akdj fkjjjjjj jfffffff jdsdsdsd    dsd</span>
            </Text>
        </Sections>
    )
}

export default ProcessorSection;