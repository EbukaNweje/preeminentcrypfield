import React from 'react';
import styled from 'styled-components';
import { FaBitcoin, FaDollarSign} from 'react-icons/fa';
import {AiOutlineDollar} from 'react-icons/ai'
import {AiFillHome, AiFillWallet, AiOutlineCodeSandbox,AiFillCreditCard} from 'react-icons/ai'
import usdt from './usdt.png';
import eth from './eth.png';
import line from './line.png';
import bgbg from './bgbg.jpg';


const DashHome = () => {
  return (
    <>
    <Container>
      <Title>Dashboard</Title>
      <First>
        <Circle><img src={line} alt='line'/></Circle>
        <Left>
          <Text>Current balance</Text>
          <Price>$0</Price>
          <RecHold>
            <Rec>
              <FaBitcoin style={{color: "gold", width: 30, height: 30, marginRight: "5px"}}/>
              0.00$
            </Rec>
            <Rec>
              <img src={usdt} alt='usdt'/>
              0.00$
            </Rec>
            <Rec>
              <img src={eth} alt='eth'/>
              0.00$
            </Rec>
            <Rec>
              <FaDollarSign style={{color: "gold", width: 30, height: 30}}/>
              0.00$
            </Rec>
          </RecHold>
        </Left>
      </First>
      <Next>
        <Dep>
          <One>
            <P>Deposited</P>
            <Price2>$0.00</Price2>
          </One>
          <Two>
            <Button1>Replenish</Button1>
            <Button2>Replenishment History</Button2>
          </Two>
        </Dep>
        <With>
        <One>
            <P>Withdrawal</P>
            <Price2>$0.00</Price2>
          </One>
          <Two>
            <Button1>Withdrawal</Button1>
            <Button2>Withdrawal History</Button2>
          </Two>
        </With>
      </Next>
      <Next2>
        <Dep2>
          <Topic>Financial Orders</Topic>
          <Mid>
            <ButHold>
            <H5>Last Deposit</H5>
            <BigBut>$ N/A</BigBut>
            </ButHold>
            <ButHold>
            <H5>Last Deposit</H5>
            <BigBut>$ N/A</BigBut>
            </ButHold>
          </Mid>
          <Last>
            <ButtonHold>
              <Button1>Create deposit</Button1>
              <Button2>Withdraw</Button2>
            </ButtonHold>
          </Last>
        </Dep2>
        <With2>
        <Topic>Earning Information</Topic>
          <Mid>
            <ButHold>
            <H5>Earned Total</H5>
            <BigBut>$0.00</BigBut>
            </ButHold>
            <ButHold>
            <H5>Active Deposits</H5>
            <BigBut>$0.00</BigBut>
            </ButHold>
          </Mid>
          <Last>
            <ButtonHold>
              <Button1>Earnings</Button1>
              <Button2>Your Deposits</Button2>
            </ButtonHold>
          </Last>
        </With2>
      </Next2>
    </Container>
    <Container2>
      <Wrapper2>
        <Hold2>
          <Div2>
            <H12>Dashboard</H12>
            <Pagename>
              <Icon2/>
              <Page>--Home</Page>
            </Pagename>
          </Div2>
        </Hold2>
      </Wrapper2>
      <Down>
          <InputHold2>
            <Left2>
              <Title2>Deposit Wallet Balance</Title2>
              <Price3>$10</Price3>
            </Left2>
            <Right>
              <AiOutlineDollar style={{width: 40, height: 40, color: "#FF4D4D"}}/>
            </Right>
          </InputHold2>
          <InputHold2>
            <Left2>
              <Title2>Interest Wallet Balance</Title2>
              <Price3>$0</Price3>
            </Left2>
            <Right>
              <AiFillWallet style={{width: 40, height: 40, color: "#FF4D4D]"}}/>
            </Right>
          </InputHold2>
          <InputHold2>
            <Left2>
              <Title2>Total Invest</Title2>
              <Price3>$0</Price3>
            </Left2>
            <Right>
              <AiFillWallet style={{width: 40, height: 40, color: "#FF4D4D]"}}/>
            </Right>
          </InputHold2>
          <InputHold2>
            <Left2>
              <Title2>Total Deposit</Title2>
              <Price3>$0</Price3>
            </Left2>
            <Right>
              <AiOutlineCodeSandbox style={{width: 40, height: 40, color: "#FF4D4D"}}/>
            </Right>
          </InputHold2>
          <InputHold2>
            <Left2>
              <Title2>Total Withdrawal</Title2>
              <Price3>$0</Price3>
            </Left2>
            <Right>
              <AiFillCreditCard style={{width: 40, height: 40, color: "#FF4D4D"}}/>
            </Right>
          </InputHold2>
          <InputHold2>
            <Left2>
              <Title2>Total Withdrawal</Title2>
              <Price3>$0</Price3>
            </Left2>
            <Right>
              <AiFillCreditCard style={{width: 40, height: 40, color: "#FF4D4D"}}/>
            </Right>
          </InputHold2>
        </Down>
    </Container2>
    </>
  )
}

export default DashHome;


//proof of payment and change from pending to approved..,
const Title2 = styled.div`
display: none;

@media Screen and (max-width: 768px){
  display: block;
  font-size: 20px;
font-weight: 500;
color: whitesmoke;
}
`;
const Price3 = styled.div`
display: none;

@media Screen and (max-width: 768px){
  display: block;
  font-size: 20px;
font-weight: 500;
color: whitesmoke;
}
`;
const InputHold2 = styled.div`
display: none;
@media Screen and (max-width: 768px){
  display : block;
  width: 78%;
  height: auto;
  background-color: #015FC9;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-radius: 0.7rem;
  padding: 20px;
  margin :10px 0;
}
`;
const Left2 = styled.div`
display: none;
@media Screen and (max-width: 768px){
width: 60%;
display: flex;
flex-direction: column;
display: block;

}
`;
const Right = styled.div`
display: none;
@media Screen and (max-width: 768px){
  display: block;
  display: flex;
  jystify-content: center;
  align-items: center;
}
`;

const Container2 = styled.div`
display: none;
@media Screen and (max-width: 768px){
  display: block;
  width: 100%;
  min-height: max-content;
  background-color: #0F192C;
  display: flex;
  flex-direction: column;
}
`;
const Wrapper2 = styled.div`
display: none;
@media Screen and (max-width:768px){
display: block;
width: 100%;
height:auto;
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
width :100%;
height: 40vh;
background-color: #0F192C;
opacity: 75%;
display: flex;
align-items:center;
}
`;
const Down = styled.div`
display: none;    
@media Screen and (max-width: 768px){
  display: block;
  width: 100%;
  height: 100%;
display: flex;
flex-direction:column;
align-items:center;
background-color: red;
            

/* background-color: red; */
padding: 20px 0;
}
`;
const Div2 = styled.div`
display: none;

@media Screen and (max-width: 768px){
width: 35%;
display :block;
height :10vh;
/* background-color: #015FC9; */
margin-left: 80px;
}
`;
const H12 = styled.div`
display: none;

@media Screen and (max-width: 768px){
font-size: 30px;
color: whitesmoke;
display: block;
}
`;
const Pagename = styled.div`
display: none;

@media Screen and (max-width: 768px){
font-size: 18px;
color: #FF4D4D;
font-weight: bold;
display: block;
display: flex;
justify-content: flex-start;
}
`;
const Icon2 = styled(AiFillHome)`
display: none;

@media Screen and (max-width: 768px){
  display: block;
  width: 20px;
  height: 20px;
}
`;
const Page = styled.div``;













const Dep2 = styled.div`
background-color: #19244190;
width: 45%;
height: 90%;
border-radius: 0.5rem;
padding: 20px;
display: flex;
flex-direction: column;

@media Screen and (max-width: 768px){
/* flex-direction: column;
width: 100%;
align-items: center;
margin-bottom: 20px; */
display: none;
}
`;
const Mid = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;

@media Screen and (max-width: 768px){
  display: none;
}
`;
const ButtonHold = styled.div`
width: 80%;
margin-right: 30px;

@media Screen and (max-width: 768px){
  display: none;
}
`;
const H5 = styled.div`
font-size: 15px;
font-weight: 500;
color: whitesmoke;

@media Screen and (max-width: 768px){
  display: none;
}
`;
const BigBut = styled.div`
width: 80%;
text-align: center;
padding: 10px;
background-color: whitesmoke;
color: #192441;
border-radius: 0.3rem;
margin-top: 10px;
font-size: 20px;
font-weight: 500;
@media Screen and (max-width: 768px){
  display: none;
}
`;
const ButHold = styled.div`
/* background-color: red; */
width: 45%;
margin: 30px 0;
@media Screen and (max-width: 768px){
  display: none;
}
`;
const Last = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;

@media Screen and (max-width: 768px){
  display: none;
}
`;
// const Butto = styled.div``;

const Container = styled.div`
width: 90%;
margin-left: 30px;
display: flex;
flex-direction: column;
@media Screen and (max-width: 768px){
  display: none;
}
`;
const Title = styled.div`
font-size: 40px;
color: whitesmoke;
font-weight: bold;
@media Screen and (max-width: 768px){
  display: none;
}
`;
const First = styled.div`
width: 100%;
height: 250px;
margin: 30px 0;
display: flex;
justify-content: space-between;
align-items: center;

@media Screen and (max-width: 768px){
  /* width: 100%;
  height: auto;
  flex-direction: column; */
  display: none;
}
/* background-color: #233053; */
background-color: #19244190;
border-radius: 0.5rem;
padding: 20px 0;

@media Screen and (max-width: 768px){
  flex-direction: column;
  display: none;
}
`;
const Circle = styled.div`
width :250px;
height: 250px;
border-radius: 50%;
background-color: #394565;
display: flex;
justify-content: center;
/* border: 1px solid red; */
@media Screen and (max-width: 768px){
  display: none;
}

`;
const Left = styled.div`
width: 65%;
display: flex;
flex-direction: column;

@media Screen and (max-width: 768px){
  display: none;
}

`;
const Text = styled.div`
color: whitesmoke;
font-size: 17px;
font-weight: bold;
@media Screen and (max-width: 768px){
  display: none;
}
`;
const Price = styled.div`
color: green;
font-size: 25px;
font-weight: bold;
@media Screen and (max-width: 768px){
  display: none;
}
`;
const RecHold = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
@media Screen and (max-width: 768px){
  display: none;
}
`;
const Rec = styled.div`
color: whitesmoke;
width: 20%;
background-color: #192441;
padding: 10px 5px;
border-radius: 0.3rem;
display: flex;
justify-content: flex-start;
align-items: center;
@media Screen and (max-width: 768px){
  display: none;
}

img{
  width: 30px;
  height: 30px;
  margin-right: 5px;
  @media Screen and (max-width: 768px){
  display: none;
}
}
`;

const Next2 = styled.div`
width: 103.5%;
height: 300px;
margin: 30px 0;
display: flex;
justify-content: space-between;
align-items: center;
/* background-color: red; */
padding: 20px 10px;

@media Screen and (max-width: 768px){
/* flex-direction: column;
height: auto;
margin-top: 170px;
padding: 0;
width: 100%; */
display: none;
}
`;
const Next = styled.div`
width: 103.5%;
height: 200px;
margin: 30px 0;
display: flex;
justify-content: space-between;
align-items: center;
/* background-color: red; */
padding: 20px 0;

@media Screen and (max-width: 768px){
/* flex-direction: column;
width: 100%; */
display: none;
}
@media Screen and (max-width: 425px){
/* flex-direction: column;
width: 90%; */
display: none;
}
`;
const Dep = styled.div`
background-color: #19244190;
width: 45%;
height: 90%;
border-radius: 0.5rem;
padding: 20px;
display: flex;
justify-content: space-between;

@media Screen and (max-width: 768px){
/* flex-direction: column;
width: 100%;
align-items: center;
margin-bottom: 20px; */

display: none;
}

`;
const One= styled.div`
width: 50%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
/* background-color: red; */

@media Screen and (max-width: 768px){
  display: none;
}

`;
const P= styled.div`
color: whitesmoke;
font-size:20px;
font-weight: bold;

@media Screen and (max-width: 768px){
  display: none;
}

`;
const Price2= styled.div`
color: whitesmoke;
font-size:20px;
font-weight: bold;

@media Screen and (max-width: 768px){
  display: none;
}

`;
const Two= styled.div`
width: 50%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
/* background-color: red; */
@media Screen and (max-width: 768px){
  display: none;
}
`;
const Button1= styled.div`
background-color: #FF4D4D;
width: 100%;
padding: 10px;
border-radius: 0.3rem;
display: flex;
justify-content: center;
align-items: center;
box-shadow: rgba(253, 254, 255, 0.3) 0px 1px 2px 0px, rgba(255, 255, 255, 0.15) 0px 1px 3px 1px;
margin-bottom: 5px;
color: whitesmoke;
cursor: pointer;

@media Screen and (max-width: 768px){
  display: none;
}


`;
const Button2= styled.div`
width: 100%;
padding: 10px;
border-radius: 0.3rem;
display: flex;
justify-content: center;
align-items: center;
margin-top: 5px;
border: 1px solid #FF4D4D;
color: whitesmoke;
cursor: pointer;

@media Screen and (max-width: 768px){
  display: none;
}
`;

const With2 = styled.div`
background-color: #19244190;
width: 45%;
height: 90%;
border-radius: 0.5rem;
padding: 20px;
display: flex;
flex-direction: column;
justify-content: space-between;

@media Screen and (max-width: 768px){
/* flex-direction: column;
width: 100%;
align-items: center;
margin-bottom: 20px; */

display: none;
}
`;
const With = styled.div`
background-color: #19244190;
width: 45%;
height: 90%;
border-radius: 0.5rem;
padding: 20px;
display: flex;
justify-content: space-between;

@media Screen and (max-width: 768px){
/* flex-direction: column;
width: 100%;
align-items: center;
margin-bottom: 20px; */
display: none;
}
`;

const Topic = styled.div`
font-size: 18px;
font-weight: 500;
color: whitesmoke;

@media Screen and (max-width: 768px){
  display: none;
}
`;

