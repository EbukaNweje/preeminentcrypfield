import React, {useEffect} from 'react';
import {
  Container, Wrapper, Wrap, Rec, H2, H5, Button,
} from './LandingStyle';
import AOS from 'aos'
import 'aos/dist/aos.css';


const LandingPage = () => {

  useEffect(()=>{
    AOS.init({duration:2000})
}, []);

  return (
    <Container >
        <Wrapper>
            <Wrap data-aos="fade-down">
              <Rec></Rec>
             <H2>PREMIUM-CRYPTASSETS IS <span style={{color:"#FFCC40"}}>BEYOND YOUR IMAGINATION</span></H2>
              <H5>Our platform is suitable for all traders, both beginners, and professionals.
              </H5>
              <Button>Let's get started</Button>
            </Wrap>
        </Wrapper>
    </Container>
  )
};

export default LandingPage;