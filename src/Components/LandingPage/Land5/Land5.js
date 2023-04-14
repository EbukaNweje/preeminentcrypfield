import React from 'react';
import {Container, Wrapper, TopDiv, BottomDiv,
    Left, Right, Trade, Img, H1, P
} from './Land5Style';
import arr from '../../../Assets/arr.png'
import arr2 from '../../../Assets/arr2.png'
import PackageCard from './PackageCard';

const Land5 = ({price,title,a,b,c,e}) =>{
    return(
        <Container>
            <Wrapper>
                <TopDiv>
                    <Left>
                    <Trade>
                     <Img src={arr} alt='arr left'/>
                     <h4>OUR PACKAGE</h4>
                     <Img src={arr2} alt='arr right'/>
                    </Trade>
                     <H1>Investing.Now<br/> Available to everyone.</H1>
                    </Left>
                    <Right>
                        <P>Select any of our packages to start your journey of investment and <br/>enjoy huge benefit of trading while you sleep</P>
                    </Right>
                </TopDiv>
                <BottomDiv>
                    <PackageCard price='$3,000 - $9,000' title='Starter Package' a='20+ assets/products' b='24/7 support' c='Risk Management' d='Free Signals' e='Unlimited Support' />
                    <PackageCard price='$10,000 - $29,000' title='Deluxe Package' a='50+ assets/product' b='24/7 support' c='Risk Management' d='Free Signals' e='Unlimited support'/>
                    <PackageCard price='$30,000 - $49,000' title='Premium Package' a='100+ assets/product' b='24/7 support' c='Risk Management' d='Free Signals' e='Unlimited support'/>
                    <PackageCard price='$100,000 - MORE' title='VIP Package' a='200+ assets/product' b='24/7 support' d='Free Signals' e='Unlimited support'/>
                </BottomDiv>
            </Wrapper>
        </Container>
    )
};

export default Land5;