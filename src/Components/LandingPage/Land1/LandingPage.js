import React, {useEffect} from 'react';
import {
  Container, Wrapper, Wrap, Rec, H2, H5, Button
} from './LandingStyle';
import AOS from 'aos'
import 'aos/dist/aos.css'

const LandingPage = () => {

  useEffect(() =>{
    AOS.init({duration:2000})
  },[]);

  return (
    <Container data-aos="fade-in">
        <Wrapper>
            <Wrap>
              <Rec data-aos='fade-down'></Rec>
              <H2 data-aos='fade-down'>We are beyond your imagination</H2>
              <H5 data-aos='fade-up'>"We define economic freedom as the ability to make choices with respect to one's personal resources"
              </H5>
              <Button data-aos='fade-up'>Let's get started</Button>
            </Wrap>
        </Wrapper>
    </Container>
  )
};

export default LandingPage;