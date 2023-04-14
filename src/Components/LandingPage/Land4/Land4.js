import React, {useEffect} from 'react';
import {Container, Left, Right, Wrapper, Trade, Img, H1, Img1, Img2, Button, ButtonHold,Holder, ContactHold, ContDiv, CallIcon, P, Nav, Exp} from './Land4Style'
import arr from '../../../Assets/arr.png'
import arr2 from '../../../Assets/arr2.png'
import bg1 from '../../../Assets/bkbg.jpg'
import bg2 from '../../../Assets/frbg.jpg'
// import bg3 from '../../../Assets/bg5.png'
import {AiFillPhone} from 'react-icons/ai'
import AOS from 'aos'
import 'aos/dist/aos.css'


const Land4 = () => {

    useEffect(() =>{
        AOS.init({duration:2000})
      },[]);

  return (
    <Container>
        <Wrapper>
        <Left data-aos="fade-right">
            <Img1 src={bg1}/>
            <Img2 src={bg2}/>
            {/* <Div><AiOutlineHome style={{width: 50, height: 50}}/>
            </Div> */}
            <Exp>
                <Holder>
                    <b>30</b> 
                    <p>Years of <br/>Experience</p>
                </Holder>
            </Exp>
        </Left>
        <Right data-aos="fade-left">
            <Trade>
                <Img src={arr} alt='arr left'/>
                <h4>Who we are</h4>
                <Img src={arr2} alt='arr right'/>
            </Trade>
            <H1>Reliability, productive, <br/> Opportunities</H1>
            <p>At Preeminent crypt field Digital VIP, we see investing differently. Today's <br/> financial system is complex, exclusive and expensive - making it <br/> hard for the typical person to start investing.</p>
            <p>So, we're building a platform without digital walls and complex <br/> barriers. A platform that empowers you to see new possibilities for <br/> your money -  and helps make them a reality.</p>
            <p>Preeminent crypt field VIP is backed by a team of world-class experts <br/> and the best technology talent. To stay at the forefront of <br/>innovation, we're always working on strengthening our position as <br/> Europe's leading digital asset platform.</p>
            <ButtonHold>
                <Button>Discover More</Button>
                <ContactHold>
                        <CallIcon><AiFillPhone style={{width: "30px", height: "35px"}}/></CallIcon>
                        <ContDiv>
                            <P>(760)545-5660</P>
                            <Nav>Call to Our Experts</Nav>
                        </ContDiv>
                    </ContactHold>
            </ButtonHold>
        </Right>
        </Wrapper>
    </Container>
  )
}

export default Land4