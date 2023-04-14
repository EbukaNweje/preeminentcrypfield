import styled from 'styled-components';


//#072847 #193B56

export const Container = styled.div`
width: 100%;
height: 130px;
/* background-color:  #05203d; */
background-color:  #fff;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
position: fixed;
overflow: hidden;
z-index: 999;

@media Screen and (max-width: 768px){
    height: 120px;
    width: 92.2%;
}

`;
export const Wrapper = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
height: 70%;


`;
export const Wrapper1 = styled.div`
width: 100%;
background-color: #BF1E24;
display: flex;
align-items: center;
justify-content: center;
height: 30%;

@media Screen and (max-width: 768px){
    display: none;
}


`;
export const NavDiv = styled.div`
position: fixed;
height: 50vh;
width: 90%;
display: flex;
justify-content: center;
align-items: center;
bottom: 100px;
top: 200px;

@media Screen and (max-width: 768px){
    width: 92%;
    top: 250px;
}

`;
export const BurgerHold = styled.button`
display: none;
@media Screen and (max-width: 768px){
    display: block;
    background: transparent;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 3px;
    opacity: 90%;
    border: none;
    overflow-x: hidden;
    transition: 0.5s;
    cursor: pointer;
}
`;
export const Header1 = styled.div`
width: 80%;
display: flex;
justify-content: space-between;
align-items: center;
height: 100%;
`
export const Left = styled.div`
height: 100%;
width: 33%;
display: flex;
justify-content: space-between;
align-items: center;
`
export const Right = styled.div`
height: 100%;
width: 35%;
display: flex;
justify-content: space-between;
align-items: center;

@media Screen and (max-width: 768px){
    background-color: red;
}

`
export const A = styled.div`
/* background-color: lightcoral; */
display: flex;
justify-content: space-between;
align-items: center;
height: 50%;
width: auto;
`;
export const Icon = styled.div`
color: #018ACA;
display: flex;
justify-content: center;
align-items: center;

:hover{
    cursor: pointer;
    transition: all 2s;
}
`;
export const SocialHold = styled.div`
width: 40%;
/* background-color: papayawhip; */
display: flex;
justify-content: space-between;
align-items: center;
`;
export const SocialIcon = styled.div`
color: aliceblue;
:hover{
    cursor: pointer;
    transition: all 2s;
}
`;
export const Header2 = styled.div`
height: 100%;
width: 80%;
/* background: gainsboro; */
display: flex;
justify-content: space-between;
align-items: center;

@media Screen and (max-width: 768px){
    width: 85%;
    justify-content: space-between;
}

`;
export const LogoHold = styled.div`
width: 15%;
display: flex;
justify-content: center;
align-items: center;

@media Screen and (max-width: 768px){
    width: 30%;
}
`;
export const Logo = styled.img`
width: 100%;
height: 100%;
margin-top: 20px;
`;

export const NavHold = styled.div`
width: 60%;
background-color: #BF1E24;
border-radius: 0.3rem;
display: flex;
justify-content: space-between;
align-items: center;
padding: 0.2rem 0 0.2rem 1rem;
height: 50%;
@media Screen and (max-width: 768px){
    display: none;
}
`;
export const Nav = styled.div`
color: aliceblue;
font-size: 17px;
font-weight: 400;
font-family: sans-serif;
opacity: 90%;

:hover{
    cursor: pointer;
    transition: all 2s;
}
`;
export const Login = styled.button`
border: none;
outline: none;
background: none;
color: aliceblue;
font-size: 16px;
font-weight: bold;
cursor: pointer;
transition: all 350ms;
`;
export const SignUp = styled.button`
padding: 1.02rem 1.5rem;
font-size: 16px;
font-weight: bold;
color: aliceblue;
border: none;
outline: none;
/* background-image: linear-gradient(to right,#008CC9, #212121); */
border-radius: 0 0.3rem 0.3rem 0;
/* border-radius: 0.3rem; */
background-color: #254477;
:hover{
    cursor: pointer;
    /* background: transparent; */
}
`;
export const ContactHold = styled.div`
width: 18%;
display: flex;
justify-content: space-between;
align-items: center;

@media Screen and (max-width: 768px){
    display: none;
}

`;
export const CallIcon = styled.div`
width: 50px;
height: 50px;
border-radius: 50%;
display: flex;
justify-content: center;
align-items: center;
border: 2px solid #254477;
color: #018ACA;
`;
export const ContDiv = styled.div`

`;
export const P = styled.div`
color: #254477;
font-size: 18px;
font-weight: bold;
`;
export const Line = styled.div`
width: 1px;
height: 100%;
background-color: aliceblue;
`;

// background-image: linear-gradient(to right, #aa05a8, #212121);
