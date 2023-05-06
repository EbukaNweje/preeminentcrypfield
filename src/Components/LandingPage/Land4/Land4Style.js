import styled from "styled-components";

export const Container = styled.div`
width: 100%;
height: 100vh;
background-color: #fff;
display: flex;
justify-content: center;
align-items: center;
`;
export const Wrapper = styled.div`
width: 80%;
height: 100%;
/* background-color: green; */
display: flex;
justify-content: space-between;
align-items: center;
`;
export const Left = styled.div`
width: 50%;
height: 80%;
`;
export const Right = styled.div`
width: 50%;
height: 80%;
/* background-color: tomato; */

p{
    color: #2A203B;
    font-family: roboto;
}
`;
export const Img1 = styled.img`
border-radius: 1rem;
margin-left: 75px;
width: 70%;
height: 70%;
position: relative;
`;
export const Img2 = styled.img`
position: absolute;
left: 40px;
margin-top: 230px;
border-radius: 1rem;
width: 50%;
height: 50%;
`;


// export const Div = styled.div`
// /* border-radius: ; */
// display: flex;
// justify-content: center;
// align-items: center;
// width: 150px;
// height: 98px;
// background-image: linear-gradient(to right, #187FBA, skyblue);
// margin-bottom: 100px;
// margin-left: 250px;
// color: white;
// `;
export const Exp = styled.div`
background-color: #2A203B;
width: 200px;
/* padding: 2.5rem 0.5rem; */
display: flex;
justify-content: center;
align-items: center;
position: absolute;
top: 25rem;
left: 15rem;
border-radius: 0.6rem;
padding:0.8rem 0.4rem;
`;

export const Holder = styled.div`
border: 2px dashed #0CD5F9;
width: 80%;
padding: 0.2rem 0.9rem;
border-radius: 0.4rem;
display: flex;
justify-content: space-around;
align-items: center;

b{
    font-size: 50px;
    color :silver;
}

p{
    font-size: 18px;
    color: silver;
}
`;
export const Button = styled.div`
background-color: #2A203B;
/* border-radius: 1rem 3rem 3rem 1rem; */
border-radius: 0.3rem;
border: none;
outline: none;
padding: 0.7rem 3.2rem;
cursor: pointer;
color: aliceblue;
font-size: 17px;

:hover{
    background-color: #BA2222;
    transition: all 1s;
    
}

`;
export const Trade = styled.div`
width: 30%;
display: flex;
align-items: center;
justify-content: space-between;
color: #2A203B;

:hover{
    width: 32%;
    cursor: pointer;
    transition: all 2s;
}
`;
export const Img = styled.img`

`;
export const H1 = styled.div`
font-size: 35px;
font-weight: bold;
color: #BF1E24;
margin-bottom: 40px;
`;
export const ButtonHold = styled.div`
width: 70%;
display: flex;
justify-content: space-between;
align-items: center;
margin-top: 50px;
`;

export const ContactHold = styled.div`
/* width: 17%; */
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
border: 2px solid #2A203B;
color: #2A203B;
margin-right: 9px;
`;
export const ContDiv = styled.div`

`;
export const Nav = styled.div`
color: #2A203B;
font-size: 17px;
font-weight: 400;
font-family: sans-serif;
opacity: 90%;

:hover{
    cursor: pointer;
    transition: all 2s;
}
`;

export const P = styled.div`
color: #2A203B;
`;