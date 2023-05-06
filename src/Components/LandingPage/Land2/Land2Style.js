import styled from "styled-components";
import hover from '../../../Assets/feature-one-shape-1.png'


export const Container = styled.div`
width: 100%;
height: 60vh;
/* background-color: #05203D; */
background-color: #111D32;
display: flex;
justify-content: center;
align-items: center;

@media Screen and (max-width: 768px){
    height: auto;
}
`;
export const Wrapper = styled.div`
width: 70%;
height: 73%;
display: flex;
justify-content: space-between;
align-items: center;

@media Screen and (max-width: 768px){
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 4rem;
    height: auto;
}

@media Screen and (max-width: 768px){
    width: 90%
}
`;
export const Card = styled.div`
width: 30%;
height: 80%;
background-color: #16243D;
border-radius: 0.2rem;
;
box-shadow:   rgb(0 0 0 / 50%) 0px 1px 10px 0px, rgb(27 31 35 / 25%) 0px 0px 0px 1px;

:hover{
    background-image: url(${hover});
    background-position: right;
    background-repeat: no-repeat;
    background-size: contain;
    transition: all 1s;
    cursor: pointer;
}
@media Screen and (max-width: 768px){
    width: 60%;
    margin-right: 5rem;
    margin-bottom: 3rem;
}
@media Screen and (max-width: 425px){
    width: 100%;
    margin-bottom: 3rem;
    margin-right: 0;
}
@media Screen and (max-width: 320px){
    width: 100%;
    margin-right: 0;
    margin-bottom: 3rem;
    margin-left: 1px;
}
`;
export const Div = styled.div`
border-radius: 0 0 100% 10%;
display: flex;
justify-content: center;
align-items: center;
width: 150px;
height: 130px;
background-image: linear-gradient(to right, #FFCC40,  #F14456);
/* background-image: linear-gradient(to right, #187FBA, skyblue); */
margin-bottom: 20px;
color: white;
`;
export const H3 = styled.div`
color: white;
font-weight: 500;
font-size: 20px;
margin: 20px 0 20px 20px;

`;
export const H6 = styled.h5`
color: silver;
width: 57%;
font-weight: 400;
margin-left: 20px;


`;

export const Div2 = styled.div`
p{
    display: none;
}
:hover{
    /* width: 100%;
    height: 52%; */
    /* background-image: linear-gradient(to left, #3C6B94, #455470); */
    /* background-color: #9AD2E7;
    opacity: 80%;
    transition: all 2s;
    cursor: pointer; */

    /* p{
        display: block;
        color: #424749;
        font-size: 10px;
        width: 57%;
        font-weight: 400;
        margin-left: 20px;
        transition: all 2s;
    } */

    /* h6{
        display: none;
    } */
   
}


`;

