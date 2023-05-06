import React, {useEffect} from 'react';
import styled from 'styled-components';
import { SpinnerCircular } from 'spinners-react';
import LandingPage from './Land1/LandingPage'
import Land2 from './Land2/Land2'
// import Land3 from './Land3/Land3'
// import Land4 from './Land4/Land4'
// import Land5 from './Land5/Land5'
// import Land6 from './Land6/Land6'
// import Land7 from './Land7/Land7'
// import Land8 from './Land8/Land8'
// import Land9 from './Land9/Land9'
import EthScroll from './EthScroll'


const Landing = () => {

  const [loading, setLoading] = React.useState(true);

  useEffect(()=>{
    setTimeout(() => {
      setLoading(false)
    }, [5000])
  });

  return (
    <div>
      {
        loading? <Div>
        <SpinnerCircular size={45} thickness={100} speed={100} color="rgba(255, 255, 255, 1)" secondaryColor="rgba(0, 0, 0, 0.44)" /> 
       </Div> : <>
       <EthScroll/>
      <LandingPage/>
      <Land2/>
      {/* <Land3/> */}
      {/* <Land4/> */}
      {/* <Land5/> */}
      {/* <Land6/> */}
      {/* <Land7/> */}
      {/* <Land8/> */}
      {/* <Land9/> */}
       </>
      }
    </div>
  )
}

export default Landing;

const Div = styled.div`
width: 100%;
height: 100vh;
position: fixed;
z-index: 100000;
background-color: #101C30;
top: 0;
display: flex;
justify-content: center;
align-items: center;

`;


