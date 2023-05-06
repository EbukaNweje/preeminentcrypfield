import React from 'react'
import styled from 'styled-components';
import {BsFillStarFill} from 'react-icons/bs'
import pic from './illus.png'
import quote from './quote.png'

const Card = (props) => {
  return (
    <Container>
      <Img src={pic} alt='imgpic'/>
      <Wrapper>
        <Top>
          <Avatar>
            <InAvatar>
              <Square src={props.avatar} alt='avatar'/>
              <Circle>
                <img src={quote} alt='quote'/>
              </Circle>
            </InAvatar>
          </Avatar>
          <Right>
            <Review>
              <BsFillStarFill style={{color: "#FAB600"}}/>
              <BsFillStarFill style={{color: "#FAB600"}}/>
              <BsFillStarFill style={{color: "#FAB600"}}/>
              <BsFillStarFill style={{color: "#FAB600"}}/>
              <BsFillStarFill style={{color: "#FAB600"}}/>
            </Review>
            <Name>{props.name}</Name>
          </Right>
        </Top>
        <Bottom>
          <p>{props.review}</p>
        </Bottom>
      </Wrapper>
    </Container>
  )
}

export default Card;

const Container = styled.div`
width: 40%;
height: 300px;
display:flex;
flex-direction: column;
align-items:center;
box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
background-color: white;
padding-bottom: 40px;
border-radius: 0.6rem;
transition: all 2s;
:hover{
  transform: scale(1.07);
  cursor: pointer;
  transition: transform ease 2s;
}

`;
const Wrapper = styled.div`
width: 80%;
height: 95%;
padding-top: 50px;
`;
const Img = styled.img`
position:absolute;
margin-left: 275px;
margin-bottom: 100px;
border-radius: 0.5rem;
opacity: 40%;
cursor: pointer;
transition: all 2s;
:hover{
  opacity: 100%;
  transition: opacity ease 2s;
}
`;
const Top = styled.div`
display: flex;
justify-content: space-between;
width: 90%;
align-items: center;
`;
const Avatar = styled.div`
background-image: linear-gradient(45deg, skyblue, red);
width: 40%;
height:150px;
border-radius: 3rem 0.5rem 0.5rem 0.6rem;
display: flex;
justify-content:center;
align-items: center;
`;
const InAvatar = styled.div`
background-color: #2A203B;
width: 90%;
height: 90%;
border-radius: 2.8rem 0.5rem 0.5rem 0.6rem;
display:flex;
justify-content: center;
align-items: center;
`;
const Square = styled.img`
width: 90%;
height: 90%;
object-fit: cover;
border-radius: 2.7rem 0.5rem 0.5rem 0.6rem;

`;
const Circle = styled.div`
position: absolute;
width: 60px;
height: 60px;
background-color: #2A203B;
border-radius: 50%;
margin-left: 110px;
margin-bottom: 100px;
display: flex;
justify-content: center;
align-items: center;
`;
const Right = styled.div`
/* background-color: tomato; */
`;
const Review = styled.div`
display: flex;
justify-content: space-between;
align-items:center;
`;
const Name = styled.div`
font-size: 20px;
font-weight: 500;
color: #2A203B;
`;
const Bottom = styled.div`
font-size: 19px;
color: #2A203B;
font-weight: 500;
/* background-color: green; */
`;