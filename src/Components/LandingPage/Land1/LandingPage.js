import React, {useEffect, useState} from 'react';
import {
  Container, Wrapper, Wrap, Rec, H2, H5, Button, OverBackround
} from './LandingStyle';
import AOS from 'aos'
import 'aos/dist/aos.css';
import data from './land.json';
// import pic from '../../../Assets/slider1.jpg'
import vid from './CryptoCurrency Animated Video.mp4';



const LandingPage = () => {

  const [count, setcount] = useState(true);

  useEffect(()=>{
    AOS.init({duration:2000})
    setInterval(() =>{
        setcount((el) => el +1)
    }, 4000)
}, []);

  return (
    <Container 
    data-aos="fade-in"
    >
      <video autoPlay loop muted>
    <source src={vid} type='video/mp4' />
  </video>
  <OverBackround></OverBackround>
        <Wrapper>
            <Wrap>
              <Rec data-aos='fade-down'></Rec>
             <H2 data-aos='fade-down'>{data[count % data.length].H1}</H2>
              <H5 data-aos='fade-up' > {data[count % data.length].P}
              </H5>
              <Button data-aos='fade-up'>Let's get started</Button>
            </Wrap>
        </Wrapper>
    </Container>
  )
};

export default LandingPage;