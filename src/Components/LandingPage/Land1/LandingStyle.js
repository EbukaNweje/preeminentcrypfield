import styled from "styled-components";
import pic from '../../../Assets/slider1.jpg'

//#072847 #193B56

export const Container = styled.div`
background: url(${pic});
background-position: center;
background-repeat: no-repeat;
background-size: cover;
width: 100%;
height: 95vh;
display: flex;
justify-content: center;
align-items: center;

@media Screen and (max-width: 768px){
    width: 100%;
}

`;

export const Wrapper = styled.div`
width: 100%;
height: 100%;
background-image: linear-gradient(to right,#00000065, #bf1e2365);
display: flex;
flex-direction: column;
opacity: 80%;

@media Screen and (max-width: 768px){
    width: 100%;
}
`;

export const Wrap = styled.div`
width: 50%;
height: 80%;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;
/* background-color: green; */
margin-left: 150px;
margin-top: 100px;

@media Screen and (max-width: 768px){
 width: 100%;
 margin-top: 30px;
}
`;

export const Rec = styled.div`
width: 50%;
height: 18px;
background-image: linear-gradient(to right, #254477,  #BF1E24, #254477);
border-radius: 2rem;
`;

export const H2 = styled.div`
color: aliceblue;
font-size: 55px;
font-weight: bold;
`;
export const H5 = styled.h5`
color: aliceblue;
width: 45%;
font-weight: 400;
`;

export const Button = styled.button`
background-color: #254477;
/* border-radius: 1rem 3rem 3rem 1rem; */
border-radius: 0.3rem;
border: none;
outline: none;
padding: 0.7rem 3.2rem;
margin-top: 20px;
cursor: pointer;
color: aliceblue;
font-size: 17px;
`;
