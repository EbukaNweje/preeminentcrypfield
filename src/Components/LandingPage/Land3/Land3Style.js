import styled from 'styled-components';


export const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
background-color: #042843;
@media Screen and (max-width: 768px){
    height: auto
}
`;
export const Wrapper = styled.div`
width: 80%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
/* background-color: red; */

`;
export const TopDiv = styled.div`
width: 90%;
/* background-color: azure; */
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 40px;

@media Screen and (max-width: 768px){
    flex-direction: column;
    text-align: center;
}
`;
export const BottomDiv = styled.div`
background-color: #061D35;
width: 100%;
height: 500px;
border: 1px solid silver;

@media Screen and (max-width: 768px){
    height: 400px
}
`;

export const Left = styled.div`
/* background-color: indigo; */

@media Screen and (max-width: 768px){
    display: flex;
    flex-direction: column;
    align-items: center;
}
`;
export const Right = styled.div`
font-size: 20px;
font-weight: 400;
color: white;
`;
export const Trade = styled.div`
width: 50%;
display: flex;
align-items: center;
justify-content: space-between;
color: white;

:hover{
    width: 52%;
    cursor: pointer;
    transition: all 2s;
}
`;
export const Img = styled.img`
:hover{
    margin-left: 5px;
    transition: all 1s;
}
`;
export const H1 = styled.div`
font-size: 45px;
font-weight: bold;
color: white;
`;