import React from 'react';
import styled from 'styled-components';

const Orders = () =>{
  return(
    <Container>
      <Wrapper>
        <H1>Your deposits</H1>
        <Hold>
          <Bigbutton>
            Total: $0.00
          </Bigbutton>
          <One>
            one
          </One>
          <Two>Two</Two>
          <Three>Three</Three>
          <Two>Two</Two>
          <Three>Three</Three>
          <Two>Two</Two>
        </Hold>
      </Wrapper>
    </Container>
  )
};

export default Orders;

const Container = styled.div`
width: 100%;
height: auto;
background-color: #111C31;
display: flex;
justify-content: center;
align-items: center;
`;//

const Wrapper = styled.div`
width: 100%;
height: 80%;
/* background-color: red; */
display :flex;
flex-direction: column;
padding: 10px;

`;

const One = styled.div`
width: 95%;
background-color: #192441;
padding: 20px 25px;
margin-top: 30px;
`;
const Two = styled.div``;
const Three = styled.div``;
const H1 = styled.div`
font-size: 40px;
/* font-weight: bold; */
color: whitesmoke;
margin-bottom: 30px;
`;
const Bigbutton = styled.div`
width: 250px;
height: 30px;
display: flex;
justify-content: center;
align-items: center;
background-color: white;
padding: 15px;
border-radius: 8px;
font-size: 20px;
font-weight: bold;
`;
const Hold = styled.div`
width: 95%;
background-color: #233053;
height: auto;
display: flex;
flex-direction: column;
padding: 20px;

`;


