import React from 'react'
import {
  Container, Wrapper, TopDiv, BottomDiv,Left, Right, Trade, Img, H1
} from "./Land3Style";
import arr from '../../../Assets/arr.png'
import arr2 from '../../../Assets/arr2.png'
const Land3 = () => {
  return (
    <Container>
      <Wrapper>
        <TopDiv>
          <Left>
            <Trade>
              <Img src={arr} alt='arr left'/>
              <h4>TRADING SPOT</h4>
              <Img src={arr2} alt='arr right'/>
            </Trade>
            <H1>Markets closed? Not <br/> anymore</H1>
          </Left>
          <Right>Invest whenever you want, even when the traditional stock <br/> market is closed.</Right>
        </TopDiv>
        <BottomDiv>
          
          bbb

        </BottomDiv>
      </Wrapper>
    </Container>
  )
};

export default Land3;