import styled from "styled-components";

const Section = styled.section`

width: 100vw;
height: 100vh;
position: relative;

display: flex;
justify-content: flex-end;
align-items: center;
background-color: var(--white);

`

const Title = styled.h1`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-55%, -50%);
text-transform: uppercase;
font-size: var(--fontBig);
z-index: 1;

`

const Battery = styled.ul`
position: absolute;
right: 4rem;
list-style: none;
background-color: var(--white);
border: 3px solid var(--dark);
border-radius: 8px;
padding: 0.5rem;
width: 15rem;

li{
    width: 100%;
    height: 5rem;
    background-color: var(--dark);
    background-image: linear-gradient(-90deg, var(--gradient));
    margin: 0.5rem 0;

}
`
const BatterySection = () => {
    return (
        <Section>
            <Title>Go all day with single charge...</Title>
            <Battery>
                <li />
                <li />
                <li />
                <li />
                <li />
            </Battery>
        </Section>
    )
}

export default BatterySection;
