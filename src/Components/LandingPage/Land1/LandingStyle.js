import styled from "styled-components";
// import mainslider from "./bit1.jpg"
import mainslider from "./slider1.jpg"
import { Link } from "react-router-dom";
//#072847 #193B56

export const Container = styled.div`
width: 100%;
height: 95vh;
display: flex;
justify-content: center;
align-items: center;
position: relative;
/* z-index: -1; */
/* background:linear-gradient(45deg,  #7a12125b, #7a1212), url(${mainslider}); */
background:linear-gradient(45deg, #015ec989,  #a60a0a8f), url(${mainslider});
background-position: center;
background-size: cover;
background-repeat: no-repeat;

@media Screen and (max-width: 768px){
    width: 100%;
}

`;

export const Wrapper = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
margin-bottom: 20px;
/* background-color: */
/* opacity: 80%; */

@media Screen and (max-width: 768px){
    width: 97%;
    align-items: center;
    /* margin-bottom: 20px; */

    /* justify-content: center; */
}
`;

export const Wrap = styled.div`
width: 50%;
height: 80%;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;
margin-left: 150px;
margin-top: 50px;

@media Screen and (max-width: 768px){
 width: 100%;
 margin-top: 70px;
 align-items: flex-start;
margin-left: 0;
margin-left: 10px;
}
@media Screen and (max-width: 500px){
 width: 100%;
 margin-top: 70px;
 align-items: center;
margin-left: 0;
margin-left: 10px;
}
`;

export const Rec = styled.div`
width: 50%;
height: 18px;
background-image: linear-gradient(to right, #FFCC40,  #F14456);
border-radius: 2rem;

@media Screen and (max-width: 768px){
    margin-bottom: 20px;
    width: 60%;
    margin-right: 140px;
}
`;

export const H2 = styled.div`
/* color: #111D32; */
color: whitesmoke;
font-size: 65px;
font-weight: bold;

@media Screen and (max-width: 1280px){
    font-size: 47px;
}
@media Screen and (max-width: 768px){
    font-size: 53px;
    font-weight: bold;
}
@media Screen and (max-width: 500px){
    font-size: 43px;
    font-weight: bold;
}

`;
export const H5 = styled.h5`
/* color: #2A203B; */
width: 45%;
font-weight: 400;
color: lightgrey;
/* color: #111D32; */
font-size: 18px;

@media Screen and (max-width: 768px){
    width: 100%;
    font-size: 20px;
}

`;

export const Button = styled(Link)`
background-color: #015FC9;
/* border-radius: 1rem 3rem 3rem 1rem; */
border-radius: 0.3rem;
border: none;
outline: none;
padding: 0.7rem 3.2rem;
margin-top: 20px;
cursor: pointer;
color: whitesmoke;
font-size: 17px;
text-decoration: none;

@media Screen and (max-width: 768px){
    margin-right: 120px;
    height: 40px;
    font-weight: bold;
    margin-top: 0;
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
}
`;
