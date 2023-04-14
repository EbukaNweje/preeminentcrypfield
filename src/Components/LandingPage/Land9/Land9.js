import React from 'react'
import Card from './Card'
import {
    Container, Wrapper, Display
} from './Land9Style';
import img1 from '../../../Assets/wave.png'
import img2 from '../../../Assets/wave2.png'

const Land7 = () => {
  return (
    <Container>
      <Display>
        {/* <img src={img1} alt='g'/> */}
      </Display>
        <Wrapper>
            <Card/>
        </Wrapper>
        <Display>gfgfg
          {/* <img src={img2} alt='g'/> */}
        </Display>
    </Container>
  )
}

export default Land7;