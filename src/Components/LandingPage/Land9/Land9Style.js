import styled from 'styled-components';


export const Container = styled.div`
width: 100%;
background-color: #2A203B;
height: 70vh;
display: flex;
justify-content: center;
align-items: center;
padding: 30px 0;

`;
export const Wrapper = styled.div`
width: 75%;
height: 100%;
display:flex;
flex-direction: column;
/* background-color: green; */
`;

export const Display = styled.div`
`;

export const Trade = styled.div`
width: 20%;
display: flex;
align-items: center;
justify-content: space-between;
color: white;
cursor: pointer;

:hover{
    width: 22%;
    cursor: pointer;
    transition: all 2s;
}

`;
export const Img = styled.img`

`;
export const H1 = styled.div`
font-size: 35px;
font-weight: bold;
color: white;
margin-bottom: 40px;
`;

export const CardHold = styled.div`
width :100%;
display: flex;
justify-content: space-between;

`;

