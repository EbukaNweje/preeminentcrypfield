import React from 'react'
import styled from 'styled-components';

const DashHeader = () => {
  return (
    <Container>
        <Wrapper>
            <LogoHold>
                <Logo/>
            </LogoHold>
            <Left>
                <SearchBar>
                    <Input placeholder='search'/>
                    <Icon/>
                </SearchBar>
                <End>
                    <Profile>
                        <Profileicon/>
                        <Settings/>
                        <Notification/>
                        <Settings/>
                    </Profile>
                </End>
            </Left>
        </Wrapper>
    </Container>
  )
};

export default DashHeader;


const Container = styled.div`
width: 100%;
height: 70px;
background-color: #16233C;
`;
const Wrapper = styled.div``;
const LogoHold = styled.div``;
const Logo = styled.img``;
const Left = styled.div``;
const SearchBar = styled.div``;
const Input = styled.input``;
const Icon = styled.div``;
const End = styled.div``;
const Profile = styled.div``;
const Profileicon = styled.div``;
const Settings = styled.img``;
const Notification = styled.img``;