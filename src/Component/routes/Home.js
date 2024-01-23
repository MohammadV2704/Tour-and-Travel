import React from 'react'
import Vohrabar from '../Vohrabar';
import Hero from '../Hero';
import Destination from '../Destination';
import Trip from '../Trip';
import Footer from '../Footer';
// import Aboutus from '../Aboutus';
// import Contactform from '../Contactform';

function Home() {
  return (
    <>
      <Vohrabar />
      <Hero
        cName="hero"
        heroImg="https://travel.mqcdn.com/mapquest/travel/wp-content/uploads/2020/05/GettyImages-1200901287.jpg"
        title="Your Journey Your Story"
        text="Choose Your Favourite Destination."
        buttonText="Travel Plan"
        url="/" 
        btnclass="show"
   
        />
        
        {/* <Aboutus/> */}
        <Destination/>
        <Trip/>
        <Footer/>
    </>
  );
}

export default Home;
