import React from 'react'
import styled from 'styled-components'
import {VscCheck} from 'react-icons/vsc'

const PackageCard = (props) => {
  return (
    <Container>
        <Wrapper>
            <Price>{props.price}</Price>
            <Title>{props.title}</Title>
            <Packages>
                <VscCheck style={{color: "aqua", width: 25, height: 25}}/>
                <A>{props.a}</A>
            </Packages>
            <Packages>
                <VscCheck style={{color: "aqua", width: 25, height: 25}}/>
                <B>{props.b}</B>
            </Packages>
            <Packages>
                <VscCheck style={{color: "aqua", width: 25, height: 25}}/>
                <C>{props.c}</C>
            </Packages>
            <Packages>
                <VscCheck style={{color: "aqua", width: 25, height: 25}}/>
                <D>{props.d}</D>
            </Packages>
            <Packages>
                <VscCheck style={{color: "aqua", width: 25, height: 25}}/>
                <E>{props.e}</E>
            </Packages>
            <Button>Get Started</Button>
        </Wrapper>
    </Container>
  )
};

export default PackageCard;


const Container = styled.div`
width: 21%;
background-color: whitesmoke;
height: auto;
display: flex;
justify-content: center;
align-items: center;
padding: 3rem 0.5rem;
border-radius: 0.3rem;
`;
const Wrapper = styled.div`
width: 90%;
display: flex;
flex-direction: column;
align-items: center;
`;
const Price = styled.div`
color: #014FC9;
font-size: 25px;
font-weight: bold;
`;
const Title = styled.div`
color: #05203D;
font-size: 25px;
font-weight: 500;
margin: 0.4rem 0 2rem 0;
`;
const Packages = styled.div`
display: flex;
/* justify-content: space-between; */
width: 80%;
margin: 0.5rem 0;
`;
const A = styled.div`
color: #808080;
margin-left : 20px;
`;
const B = styled.div`
color: #808080;
margin-left : 20px;

`;
const C = styled.div`
color: #808080;
margin-left : 20px;

`;
const D = styled.div`
color: #808080;
margin-left : 20px;

`;
const E = styled.div`
color: #808080;
margin-left : 20px;

`;
const Button = styled.div`
background-color: #05203D;
width: 70%;
padding: 1.1rem 0.2rem;
text-align: center;
color: silver;
border-radius: 0.5rem;
font-size: 17px;
font-weight: 500;
margin-top: 2rem;
cursor: pointer;

:hover{
    background-color: #BA2222;
    transition: all 1s;
}
`;