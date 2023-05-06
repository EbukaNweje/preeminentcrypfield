import React from 'react'
import {
    Container, Wrapper, Top, Copyright, Line, Left, Mid, Right,
    Logo, Content, IconHold,Icon, Topic,  First, InputHold, Input,
    CallIcon, ContDiv, ContactHold, Nav, P
} from './FooterStyle'

const Footer = () => {
  return (
    <Container>
        <Wrapper>
            <Top>
                <Left>
                    <Logo/>
                    <Content>
                    Pips Count Digital VIP has been a global leader in introducing user to invest and earn. We make it easy for anyone to invest, earn, and stay up-to-date on cryptocurrency and the future of finance.
                    </Content>
                    <IconHold>
                        <Icon>Tw</Icon>
                        <Icon>Yu</Icon>
                        <Icon>Ins</Icon>
                    </IconHold>
                </Left>
                <Mid>
                <Topic></Topic>
                    <First>
                        <Icon></Icon>
                        <Content><a href='https://gmail.com'>Email@email.com</a></Content>
                    </First>
                    <First>
                        <Icon></Icon>
                        <Content>Pips Count Digital VIP ,81 - 83 Frizinghall Road, Bradford",BD9 4LG, United Kingdom</Content>
                    </First>
                </Mid>
                <Right>
                    <Topic></Topic>
                    <Content>Subscribe our newsletter to get our <br/>latest update & news</Content>
                    <InputHold>
                        <Input placeholder='Email address'/>
                        <Icon></Icon>
                    </InputHold>
                    <ContactHold>
                        <CallIcon></CallIcon>
                        <ContDiv>
                            <P>(760) 545-5660</P>
                            <Nav>Call to Our Experts</Nav>
                        </ContDiv>
                    </ContactHold>
                </Right>
            </Top>
            <Line></Line>
            <Copyright>© All Copyright 2023 by Pips Count Digital VIP</Copyright>
        </Wrapper>
    </Container>
  )
}

export default Footer