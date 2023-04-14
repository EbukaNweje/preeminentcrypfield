import styled from "styled-components";
import mainbg from '../../../Assets/mainbg.png'

export const Container = styled.div`
width: 100%;
height: auto;
background-image: url(${mainbg});
background-size: auto;
background-repeat: no-repeat;
background-position: left;
background-color: black;
`;
export const Wrapper = styled.div`
background-color: #05203D;
opacity: 99%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
padding: 8rem 0;

`;
export const Wrap = styled.div`
width: 80%;
display: flex;
justify-content: space-between;
align-items: center;
`;
export const LeftDiv = styled.div`
width: 50%;
`;
export const BoxHold = styled.div`
width: 90%;
margin: 1rem 0;
display: flex;
justify-content: space-between;
align-items: center;
`;
export const Box= styled.div`
width: 45%;
background-image: linear-gradient(45deg, #061D35, #061D45);
height: 11rem;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border-radius: 0.4rem;
box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
transition: all 2s;

p{
    display: none;
}

h6{
    color: whitesmoke;
}

:hover{
    cursor: pointer;
    transform: scale(1.02);
    transition: ease-in-out 2s;

    h6{
        display: none;
    }

    p{
        display: block;
        text-align: center;
        font-size: 13px;
        color: whitesmoke;
        transition: all 1s;
    }
}

`;

export const BgImg = styled.img`
width: 50%;
position: absolute;
right: 5rem;
margin-bottom: 20px;
`;
export const NewBg = styled.img`
width: 34%;
margin-left: 200px;
`;
export const NewBg2 = styled.img`
width: 34%;
/* margin-left: 100px; */
`;
export const NewBg3 = styled.img`
width: 45%;
margin-left: 400px;
`;
// export const NewBg4 = styled.img`
// width: 45%;
// margin-left: 500px;
// `;

export const Trade = styled.div`
width: 30%;
display: flex;
align-items: center;
justify-content: space-between;
color: white;

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
color: white;
margin-bottom: 40px;
`;
export const P = styled.div`
color: whitesmoke;
`;
export const P2 = styled.div`
color: whitesmoke;
`;
export const PP = styled.div`
color: whitesmoke;
font-size: 20px;
font-weight: bold;
`;

export const RightDiv = styled.div`
width: 50%;
/* background-color: indianred; */
`;
