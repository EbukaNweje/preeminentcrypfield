import React, { useState, useEffect } from "react";
import { A, CallIcon, ContactHold, Container, ContDiv, Header1, Header2, Left, Line, Login, Logo, LogoHold, Nav, NavHold, P, Right, SignUp, SocialHold, SocialIcon, Wrapper , Icon, Wrapper1, BurgerHold, NavDiv} from './HeaderStyle';
import {AiOutlinePhone,AiFillPhone,AiOutlineMenu, AiFillMail} from 'react-icons/ai'
import {BsInstagram, BsTwitter, BsYoutube} from 'react-icons/bs'
import {} from 'react-icons'
import logo from '../../Assets/real-logo.png'
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
                            <Nav>(760)545-5660</Nav>
                        </A>
                        <A>
                            <Icon> <AiFillMail/> </Icon>
                            <Nav>info@pipscountdigitalvip.net</Nav>
                        </A>
                    </Left>
                    <Right>
                        <Nav>FAQ's</Nav>
                        <Nav>Policy Privacy</Nav>
                        <SocialHold>
                            <SocialIcon><BsTwitter style={{width: "20px", height: "20px"}}/></SocialIcon>
                            <SocialIcon><BsYoutube style={{width: "20px", height: "20px"}}/></SocialIcon>
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
                        <Nav>Homes</Nav>
                        <Nav>Spot Trading</Nav>
                        <Nav>How our mining work</Nav>
                        <Nav>About us</Nav>
                        <Nav>Contact</Nav>
                        <Line></Line>
                        <Login>login</Login>
                        <SignUp>SignUp</SignUp>
                    </NavHold>
                    <ContactHold>
                        <CallIcon><AiFillPhone style={{width: "30px", height: "35px", color:"#254477"}}/></CallIcon>
                        <ContDiv>
                            <P>(760)545-5660</P>
                            <Nav style={{color: "#254477", fontSize: "18px", fontWeight: "bold"}}>Call to Our Experts</Nav>
                        </ContDiv>
                    </ContactHold>
            </Header2>
            <BurgerHold onClick={() =>{
          setNav(true)
        }}> 
          <AiOutlineMenu style={{color: "white", width: "40px", height: "40px"}}/>
        </BurgerHold>
            </Wrapper>
            {
        nav? (<NavDiv data-aos="flip-left"> 
          <SideNav setNav={setNav}/>
        </NavDiv>) : null
            }
        </Container>
    )
};

export default Header;