import React from 'react'
import styled from 'styled-components'
import { AiFillCopy, AiOutlineCloud, AiOutlineCreditCard, AiOutlineDollar, AiOutlineWallet} from 'react-icons/ai'
import {AiFillHome, AiFillWallet, AiOutlineCodeSandbox} from 'react-icons/ai'
import usdt from './usdt.png';
import eth from './eth.png';
import line from './line.png';
import bgbg from './bgbg.jpg';

const DashboardMobile = () => {
  return (
    <Container>
        <Wrapper>
            <Hold2>
                <Div>
                    <H1>Dashboard</H1>
                    <Holder>
                        <Icon />
                        <Pagename>--Home</Pagename>
                    </Holder>
                </Div>
            </Hold2>
        </Wrapper>
        <Wrapper2>
            <Hold>
            {/* <InputHold>
            <Left1>
                <Title>Referral Links</Title>
              <Linkput>https://premium-cryptassets/123ref_io
              <AiFillCopy style={{width: 45, height: 45, color: "#FF4D4D"}}/>
               </Linkput>
            </Left1>
          </InputHold> */}
            <InputHold>
            <Left>
              <Title>Deposit Wallet Balance</Title>
              <Price>$10</Price>
            </Left>
            <Right>
              <AiOutlineDollar style={{width: 45, height: 45, color: "#FF4D4D"}}/>
            </Right>
          </InputHold>
            <InputHold>
            <Left>
              <Title>Interest Wallet Balance</Title>
              <Price>$10</Price>
            </Left>
            <Right>
              <AiOutlineWallet style={{width: 45, height: 45, color: "#FF4D4D"}}/>
            </Right>
          </InputHold>
            <InputHold>
            <Left>
              <Title>Total Invest</Title>
              <Price>$10</Price>
            </Left>
            <Right>
              <AiOutlineCodeSandbox style={{width: 45, height: 45, color: "#FF4D4D"}}/>
            </Right>
          </InputHold>
            <InputHold>
            <Left>
              <Title>Total Deposit</Title>
              <Price>$10</Price>
            </Left>
            <Right>
              <AiOutlineCreditCard style={{width: 45, height: 45, color: "#FF4D4D"}}/>
            </Right>
          </InputHold>
            <InputHold>
            <Left>
              <Title>Total Withdrawal</Title>
              <Price>$10</Price>
            </Left>
            <Right>
              <AiOutlineCloud style={{width: 45, height: 45, color: "#FF4D4D"}}/>
            </Right>
          </InputHold>
            <InputHold>
            <Left>
              <Title>Interest Wallet Balance</Title>
              <Price>$10</Price>
            </Left>
            <Right>
              <AiFillWallet style={{width: 45, height: 45, color: "#FF4D4D"}}/>
            </Right>
          </InputHold>
            <InputHold>
            <Left>
              <Title>Interest Wallet Balance</Title>
              <Price>$10</Price>
            </Left>
            <Right>
              <AiFillWallet style={{width: 45, height: 45, color: "#FF4D4D"}}/>
            </Right>
          </InputHold>
            </Hold>
        </Wrapper2>
    </Container>
  )
}

export default DashboardMobile;

const Linkput = styled.div`
display: none;

@media Screen and (max-width: 768px){
    display: block;
    color: whitesmoke;
    background-color: #111D32;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;
    border-radius: 0.3rem;
}


`;

const InputHold = styled.div`
display: none;
@media Screen and (max-width: 768px){
    display: block;
    width: 100%;
    height: auto;
    /* min-height: max-content; */
    background-color: #015FC9;
    display: flex;
    justify-content: space-around;
    align-items: center;
  /* padding: 10px 0; */
    border-radius: 0.7rem;
    padding: 10px 0 10px 20px;
    margin :10px 0;
}
`;
const Left1 = styled.div`
display: none;
@media Screen and (max-width: 768px){
    display: block;
    width: 92%;
    display: flex;
    flex-direction :column;
}
`;
const Left = styled.div`
display: none;
@media Screen and (max-width: 768px){
    display: block;
    width: 70%;
    display: flex;
    flex-direction :column;
}
`;
const Title = styled.div`
display: none;
@media Screen and (max-width: 768px){
    display: block;
    font-size: 20px;
    font-weight: 500;
    color: whitesmoke;
}
`;
const Price = styled.div`
display: none;
@media Screen and (max-width: 768px){
    display: block;
    font-size: 20px;
    font-weight: 500;
    color: whitesmoke;
}
`;
// const Icon2 = styled(AiOutlineDollar)`
// display: none;

// @media Screen and (max-width: 768px){
// display: block;
// color: #FF4D4D;
// width: 50px;
// height: 50px;
// }
// `;
const Right = styled.div`
display: none;

@media Screen and (max-width: 768px){
    display: block;
    width: 80px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #111D32;
    border-radius: 0.4rem;
}
`;

const Wrapper2 = styled.div`
display: none;
@media Screen and (max-width: 768px){
display: block;
width: 100%;
height: auto;
display: flex;
flex-direction: column;
align-items: center;
/* background-color: red; */
}

`;

const Hold = styled.div`
display: none;
@media Screen and (max-width: 768px){
    display: block;
    width :80%;
    height: 100%;
    /* background-color: red; */
    padding: 20px 0;
}
`;


const Container = styled.div`
display: none;
@media Screen and (max-width: 768px){
    display: block;
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  background-color: #0F192C;
}

`;

const Wrapper = styled.div`
display: none;

@media Screen and (max-width: 768px){
    display: block;
    width: 100%;
    height: 40vh;
    /* min-height: max-content; */
    background-image: url(${bgbg});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}
`;

const Hold2 = styled.div`
display: none;
@media Screen and (max-width: 768px){
    display: block;
    width: 100%;
    height: 40vh;
    background-color: #0F192C;
    opacity: 75%;
    display: flex;
    align-items:center;
}

`;

const Div = styled.div`
display: none;
@media Screen and (max-width: 768px){
    display: block;
    width: auto;
    height: auto;
    /* background-color: red; */
    margin-left: 80px;
}

`;
const H1 = styled.div`
display: none;
@media Screen and (max-width: 768px){
    display: block;
    font-size: 45px;
    color: whitesmoke;
    font-weight: bold;
}
`;
const Holder = styled.div`
display: none;

@media Screen and (max-width: 768px){
    display: block;
    width: auto;
    display: flex;
    align-items: center;
    /* justify-content: ; */
} 
`;
const Pagename = styled.div`
display: none;
@media Screen and (max-width: 768px){
font-size: 25px;
color: #FF4D4D;
font-weight: bold;
display: block;
display: flex;
justify-content: flex-start;
}
`;
const Icon = styled(AiFillHome)`
display: none;

@media Screen and (max-width: 768px){
    display: block;
    color: #FF4D4D;
    width: 30px;
    height: 30px;

}
`;