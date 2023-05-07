import React, { useState, useEffect } from "react";
import { A, Container, Header1, Header2, Left, Line, Login, Logo, LogoHold, Nav, NavHold, Right, SignUp, SocialHold, SocialIcon, Wrapper , Icon, Wrapper1, BurgerHold, NavDiv} from './HeaderStyle';
import {AiOutlinePhone,AiOutlineMenu, AiFillMail} from 'react-icons/ai'
import {BsInstagram, BsTwitter, BsYoutube} from 'react-icons/bs'
import logo from '../../Assets/mylogo.png'
import SideNav from "./SideNav";
import AOS from 'aos'
import 'aos/dist/aos.css'

const Header = () =>{

    const [nav, setNav] = useState(false);

    useEffect(() =>{
        AOS.init({duration:1000})
      },[])

    return(
        <Container>
            <Wrapper1>
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
            </Wrapper1>
            <Wrapper>
            <Header2>
                    <LogoHold>
                        <Logo src={logo} alt="logo"/>
                    </LogoHold>
                    <NavHold>
                        <Nav to='/'>Home</Nav>
                        <Nav to='/aboutus'>About Us</Nav>
                        {/* <Nav to='/investment'>Investment Plan</Nav> */}
                        <Nav to='/arbitage'>Arbitage</Nav>
                        <Nav to='/affiliate'>Affiliate program</Nav>
                        <Nav to='/support'>Support</Nav>
                        <Line></Line>
                        <Login to='/login'>login</Login>
                        <SignUp to='/register'>SignUp</SignUp>
                    </NavHold>
                    {/*    <ContactHold>
                        {/* <CallIcon><AiFillPhone style={{width: "30px", height: "35px", color:"#45395b"}}/></CallIcon> */}
                        {/* <ContDiv>
                            <P>(760)545-5660</P>
                        <Nav style={{color: "#45395b", fontSize: "18px", fontWeight: "bold"}}>Call to Our Experts</Nav>
                        </ContDiv> */}
                    {/*</ContactHold>*/}
            </Header2>
            <BurgerHold onClick={() =>{
          setNav(true)
        }}> 
          <AiOutlineMenu style={{color: "#0CE0FF", width: 20, height: 20}}/>
        </BurgerHold>
       </Wrapper>
            {
        nav? (<NavDiv data-aos="fade-right"> 
          <SideNav setNav={setNav}/>
        </NavDiv>) : null
            }
        </Container>
    )
};

export default Header;

