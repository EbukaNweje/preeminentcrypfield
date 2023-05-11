import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header'
import Landing from './Components/LandingPage/Landing';
import Login from './Components/Auth/Login';
import SignUp from './Components/Auth/SignUp';
// import VerificationPage from './Components/Auth/VerificationPage';
import Footer from './Components/Footer/Footer';
import Affiliate from './Components/Affiliate/Affiliate';
import AboutUs from './Components/AboutUs/Aboutus';
import Arbitage from './Components/Arbitage/Arbitage';
import Support from './Components/Support/Support';
import Faq from './Components/Support/Faq';
import Howreg from './Components/Support/Howreg';
import Sendreq from './Components/Support/Sendrequest';
import Investment from './Components/LandingPage/Land5/Land5';
// import Dashboard from './Components/Dashboard/Dashboard';
import Dashboard2 from './Dashboard2/Dashboard2';
import Setting from './Dashboard2/Setting/Setting'


const App = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<SignUp/>}/>
        <Route path="/affiliate" element={<Affiliate/>}/>
        <Route path="/aboutus" element={<AboutUs/>}/>
        <Route path="/arbitage" element={<Arbitage/>}/>
        {/* <Route path="/verify" element={<VerificationPage/>}/> */}
        <Route path="/investment" element={<Investment/>}/>
        <Route path="/support" element={<Support/>}/>
        <Route path="/faqdet" element={<Faq/>}/>
        <Route path="/sendrequest" element={<Sendreq/>}/>
        <Route path="/Howreg" element={<Howreg/>}/>
        <Route path="/dashboard/:userid" element={<Dashboard2/>}/>
        <Route path="/settings" element={<Setting/>}/>
      </Routes>
      <Footer/> 
       </BrowserRouter>
  )
};

export default App;



