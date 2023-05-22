import React, { useState, useEffect } from "react";
import { Container, Header2, Line, Login, Logo, LogoHold, Nav, NavHold,SignUp,Wrapper,BurgerHold, NavDiv} from './HeaderStyle';
import {AiOutlineMenu} from 'react-icons/ai'
import {BsFillPersonFill} from 'react-icons/bs'
import logo from './preeminentlogo.png'
import SideNav from "./SideNav";
import AOS from 'aos'
import 'aos/dist/aos.css'
import DashHeader from "./DashHeader";
// import {useNavigate} from 'react-router-dom'

const Header = () =>{

    // const navigate = useNavigate();
    const [nav, setNav] = useState(false);
    // const [navData, setNavData] = useState();
    const UserData = JSON.parse(localStorage.getItem("User"));

    const deleteUser = () =>{
        localStorage.removeItem("User");
        // navigate("/")
        window.location.reload();
    };

    useEffect(() =>{
        AOS.init({duration:1000})
      },[])

    return(
        <Container>
            {/* <Wrapper1>
            <Header1>
                    <Left>
                        <A>
                            <Icon> <AiOutlinePhone/> </Icon>
                            <Nav>phone number</Nav>
                        </A>
                        <A>
                            <Icon> <AiFillMail/> </Icon>
                            <Nav>example@gmail.com</Nav>
                        </A>
                    </Left>
                    <Right>
                        <Nav>FAQ's</Nav>
                        <Nav>Policy Privacy</Nav>
                        <SocialHold>
                            <SocialIcon><BsTwitter style={{width: "17px", height: "17px"}}/></SocialIcon>
                            <SocialIcon><BsYoutube style={{width: "17px", height: "17px"}}/></SocialIcon>
                            <SocialIcon><BsInstagram style={{width: "20px", height: "20px"}}/></SocialIcon>
                        </SocialHold>
                    </Right>
            </Header1>
            </Wrapper1> */}
            <Wrapper>
            <Header2>
                    <LogoHold>
                        <Logo src={logo} alt="logo"/>
                    </LogoHold>
                    
                    {UserData? <Nav onClick={() =>{
                            deleteUser();
                        }}  to='/' style={{color: "#fff", fontWeight: "bold", fontSize: "20px", display: "flex", alignItems: "center"}}> <BsFillPersonFill/> Sign Out</Nav>  : <>
                        <NavHold>
                        <Nav to='/'>Home</Nav>
                        <Nav to='/aboutus'>About Us</Nav>
                        {/* <Nav to='/investment'>Investment Plan</Nav> */}
                        <Nav to='/arbitage'>Investment Plans</Nav>
                        <Nav to='/affiliate'>Affiliate program</Nav>
                        <Nav to='/support'>Support</Nav>
                        <Line></Line>
                        <Login to='/login'>login</Login>
                        <SignUp to='/register'>SignUp</SignUp>
                    </NavHold></>
                    }
            </Header2>
            <BurgerHold onClick={() =>{
          setNav(!nav)
        }}> 
          <AiOutlineMenu style={{color: "#0CE0FF", width: 15, height: 15}}/>
        </BurgerHold>
       </Wrapper>
            {UserData ? <>{nav?(<DashHeader/>):""}</> :   <>
                 {
        nav? (<NavDiv data-aos="fade-right"> 
          <SideNav setNav={setNav}/>
        </NavDiv>) : null
            }
            </>}
        </Container>
    )
};

export default Header;

   