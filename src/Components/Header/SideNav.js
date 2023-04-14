import React from 'react';
import styled from 'styled-components';
import {AiOutlineCloseSquare} from 'react-icons/ai';
import {Link} from 'react-router-dom';

const SideNav = ({setNav}) =>{
    return(
        <Container>
            <Wrapper>
        <Button  onClick={()=>{
                setNav(false);
            }}  style={{border: "none", background: "none", width: 50, height: 50}}>
            <AiOutlineCloseSquare style={{width: 50, height: 50, color:"#fff",}}/>
            </Button>
                <MidNav>
                    <Div>
                    <Span to='/'>Homes</Span>
                    <Span to='/trading'>Spot Trading</Span>
                    <Span to='/minning'>How our minning work </Span>
                    <Span to='/about'>About us </Span>
                    <Span to='/contact'>Contact</Span>
                    <Span to='/login'>Login</Span>
                    <Span to='/signup'>Sign Up</Span>
                    </Div>
                    <Line></Line>
                    <Div>
                    <Span to='/policy'>Policy Privacy</Span>
                    <Span to='/faqs'>FAQ's </Span>
                    <Span to='https://mail.google.com/'>info@pipscountdigitalvip.net </Span>
                    <Span to='/'>(760)545-5660</Span>
                    <Span to='/'>Call to Our Experts</Span>
                    </Div>
                </MidNav>
        </Wrapper>
        </Container>
    )
}
export default SideNav;

const Div = styled.div`
/* background-color: blanchedalmond; */
display: flex;
flex-direction: column;
justify-content: center;
`;

const Line = styled.div`
width: 1px;
background-color: #fff;
height: 200px;
margin: 0 30px 0 20px;
`;

const Button = styled.button`
  width: 200px;
  height: 30px;
  border: none;
  padding: 5px 0;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: medium;
  font-weight: bold;
  color: silver;
  cursor: pointer;

  :hover{
    opacity: 80%;
    transition: all 400ms;
    cursor: pointer;
  }

  @media Screen and (max-width: 768px){
    margin: 0 0 30px 40px;
  }
`;

const Container = styled.div`
    width: 100%;
    height: auto;
    background-color: #05203D;
    border: 2px solid silver;
    transition: all 2s;
    ::after{
      transition: ease-in-out 1s;
    };
    padding: 7.6rem 0 9rem 0;
   
    @media Screen and (max-width: 425px){
    padding: 6rem 0 9rem 0;
    }
    @media Screen and (max-width: 375px){
    padding: 5rem 0 9rem 0;
    }
    @media Screen and (max-width: 320px){
    padding: 4rem 0 9rem 0;
    }
    /* margin-right: 300px; */
`;
const Wrapper = styled.div`
    width: 100%;
    height: 100%;
`;

const MidNav = styled.div`
    width: 85%;
    display: flex;
    justify-content: space-between;
    margin-left: 50px;
`;

const Span = styled(Link)`
            color: #fff;
            text-decoration: none;
            font-size: 20px;
            font-family: monospace;
      :hover{
            cursor: pointer;
            text-decoration: underline #003C58 1.5px;
        }
`;