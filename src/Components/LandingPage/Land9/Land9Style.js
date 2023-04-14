import styled from 'styled-components';
import bg from '../../../Assets/test.png'
import bg2 from '../../../Assets/wave2.png'

export const Container = styled.div`
width: 100%;
background-color: #122036;
height: 70vh;
display: flex;
/* justify-content: center; */
align-items: center;
`;
export const Wrapper = styled.div`
width: 80%;
height: 100%;
/* background-color: green; */
`;

export const Display = styled.div`
    position: absolute;
    top: -40px;
    right: 0;
    mix-blend-mode: luminosity;
`;