import React, {useEffect} from 'react'
import styled from 'styled-components';
import {AiFillHome} from 'react-icons/ai'
import {RxUpdate} from 'react-icons/rx'
import {MdOutlinePayments, MdAddTask} from 'react-icons/md'
import {BiMoneyWithdraw} from 'react-icons/bi'
import {TbAffiliate} from 'react-icons/tb'
import AOS from 'aos'
import 'aos/dist/aos.css'
import {Link} from 'react-router-dom'


const DashHeader = () => {

    useEffect(() =>{
        AOS.init({duration:1000})
      },[])


    
  return (
    <Container data-aos="fade-down">
        <Wrapper>
            {/* <Logo src={logo} alt="logo"/> */}
            <NavWrap  
            // toggle={toggle}
            >
                <NavHold>
                    <AiFillHome/>
                    <Nav to='/dashboard/:userid'> Home</Nav>
                </NavHold>
                <NavHold>
                    <MdOutlinePayments/>
                    <Nav to='/walletpage'>Make Deposit</Nav>
                </NavHold>
                <NavHold>
                    <BiMoneyWithdraw/>
                    <Nav to='/withdraw'>Withdraw</Nav>
                </NavHold>
                <NavHold>
                    <TbAffiliate/>
                    <Nav to='/qrcodeset'>Two Factor Authentication</Nav>
                </NavHold>
                <NavHold>
                    <RxUpdate/>
                    <Nav to='/settings'>Update Account</Nav>
                </NavHold>
                <NavHold>
                    <MdAddTask/>
                    <Nav to='/deposit'>Confirm Orders</Nav>
                </NavHold>
                {/* <NavHold>
                    <MdAddTask/>
                    <Nav to='/updateuser'>Update User</Nav>
                </NavHold> */}
                
            </NavWrap>
            <BurgerHold 
            // onClick={handleToggle}
            >
                    {/* {
                        toggle ? <FaTimes/> :  <FaTimes />
                    } */}
            </BurgerHold>
        </Wrapper>
    </Container>
  )
};

export default DashHeader;

const BurgerHold = styled.div`
display: none;
z-index: 1;


@media Screen and (max-width: 768px){
    display: flex;
    color: white;
}


`;

const Container = styled.div`
display: none;
@media Screen and (max-width: 768px){
width: 100%;
height: 70px;
display: flex;
justify-content: center;
align-items: center;
background-color: #0D182A;
z-index: 1;
}
`;
const Wrapper = styled.div`
width: 100%;
height: 90%;
display: flex;
justify-content: space-between;
align-items: center;

`;

const NavWrap = styled.div`
width: 65%;
height: 100%;
display: flex;
justify-content: space-between;
align-items: center;
/* background-color: red; */

@media screen and (max-width: 768px){
    /* display: none; */
    flex-direction: column;
    width: 100%;
    position: absolute;
    background-color: #0D182A;
    height: 50vh;
    transition: all ease 1s;
    justify-content: space-evenly;
    /* left: ${({toggle}) => (toggle? 0 : "-100%")}; */
    margin-top: 330px;

}
`;
const NavHold = styled.div`
width: auto;
height: 100%;
display: flex;
align-items: center;
color: white;
:hover{
    text-decoration: 1px underline white;
    transition :all 400ms
}
transition :all 400ms

`;
const Nav = styled(Link)`
color: white;
font-weight: bold;
cursor: pointer;
margin-left :5px;
:hover{
transform: scale(1.05);
}

`;
// const Container = styled.div``;
// const Container = styled.div``;
// const Container = styled.div``;
// const Container = styled.div``;

