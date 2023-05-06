import React from 'react'
import Card from './Card'
import {
    Container, Wrapper, Trade, H1, Img, CardHold
} from './Land9Style';
import arr from '../../../Assets/arr.png'
import arr2 from '../../../Assets/arr2.png'
import avatar from './avat.png'


const Land7 = () => {
  return (
    <Container>
        <Wrapper>
        <Trade>
        <Img src={arr} alt='arr left'/>
        <h4>TESTIMONIALS</h4>
        <Img src={arr2} alt='arr right'/>
      </Trade>
        <H1>What our customers are <br/>
              talking about</H1>
            <CardHold>
               <Card avatar={avatar} name="Kevin Martin" review="This platform is the best. Trading is superb, withdrawal is easy not too much stress. I really recommend this platform "/>
               <Card avatar={avatar} review="This platform is amazing, really wish I have a lot more money I would invest more. The customer support response is fast. would recommend this platform to anybody." name="Adam Smith"/>
            </CardHold>
        </Wrapper>
    </Container>
  )
}

export default Land7;