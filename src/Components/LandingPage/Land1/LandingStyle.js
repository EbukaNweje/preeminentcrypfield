import styled from "styled-components";

//#072847 #193B56
export const OverBackround = styled.div`
background-color: #0E192B;
position: absolute;
width: 100%;
height: 100%;
opacity: 92%;
`;

export const Container = styled.div`
width: 100%;
height: 95vh;
display: flex;
justify-content: center;
align-items: center;
position: relative;
z-index: -1;


video{
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;

}

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
/* opacity: 80%; */

@media Screen and (max-width: 768px){
    width: 100%;
    align-items: center;
    text-align:center;
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
 margin-top: 30px;
 align-items: center;
margin-left: 0;

}
`;

export const Rec = styled.div`
width: 50%;
height: 18px;
background-image: linear-gradient(to right, #FFCC40,  #F14456);
border-radius: 2rem;

@media Screen and (max-width: 768px){
    margin-bottom: 20px;
}
`;

export const H2 = styled.div`
/* color: #2A203B; */
color: whitesmoke;
font-size: 55px;
font-weight: bold;

@media Screen and (max-width: 768px){
    font-size: 30px;
}

`;
export const H5 = styled.h5`
/* color: #2A203B; */
width: 45%;
font-weight: 400;
color: whitesmoke;
.scale-up-horizontal-center{animation:scale-up-horizontal-center 0.4s} @keyframes scale-up-horizontal-center{0%{transform:scaleX(.2)}100%{transform:scaleX(1)}}

@media Screen and (max-width: 768px){
    width: 90%
}

`;

export const Button = styled.button`
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
`;
