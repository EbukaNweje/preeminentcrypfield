import React from 'react'
import styled from 'styled-components';
import {FaLaptopCode} from 'react-icons/fa'
import {VscAccount} from 'react-icons/vsc'
import {HiOutlineCurrencyDollar} from 'react-icons/hi'
import {AiOutlineFundProjectionScreen} from 'react-icons/ai'
import {BsBagCheck} from 'react-icons/bs'
import {GiShakingHands} from 'react-icons/gi'


const DashSideNav = ({setState}) => {
  return (
    <Container>
      <Hold onClick={() =>{
        setState(false)
      }}>
        <FaLaptopCode style={{width: 30, height: 30, color: "silver"}}/>
        <Title>Dashboard</Title>
      </Hold>
      <Hold>
        <VscAccount style={{width: 30, height: 30, color: "silver"}}/>
        <Title>Update Account</Title>
      </Hold>
      <Hold>
        <HiOutlineCurrencyDollar style={{width: 30, height: 30, color: "silver"}}/>
        <Title>Make Deposit</Title>
      </Hold>
      <Hold>
        <AiOutlineFundProjectionScreen style={{width: 30, height: 30, color: "silver"}}/>
        <Title>Withdraw</Title>
      </Hold>
      <Hold>
        <BsBagCheck style={{width: 30, height: 30, color: "silver"}}/>
        <Title>Orders</Title>
      </Hold>
      <Hold>
        <GiShakingHands style={{width: 30, height: 30, color: "silver"}}/>
        <Title>Affiliate Program</Title>
      </Hold>
    </Container>
  )
}

export default DashSideNav;

const Container = styled.div`
/* background-color: green; */
width: 100%;
`;
const Hold = styled.button`
width: 100%;
padding: 20px 0 20px 30px;
display: flex;
justify-content: flex-start;
align-items: center;
margin: 5px 0;
background: transparent;
border: none;
outline: none;


:hover{
  background-color: #192441;
  border-left: 2px solid tomato;
  width: 100%;
  cursor: pointer;
}
`;
const Title = styled.div`
margin-left: 5px;
font-size: 15px;
font-weight: 500;
color: silver;
`;