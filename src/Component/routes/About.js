import React from 'react'
import Vohrabar from '../Vohrabar';
import Hero from '../Hero';
// import Destination from '../Destination';
import Aboutus from '../Aboutus';
import Footer from '../Footer';

const About = () => {
  return (
    <>
    <Vohrabar />
    <Hero
      cName="hero-mid"
      heroImg="https://iso.500px.com/wp-content/uploads/2015/08/travel_cover-1500x1000.jpeg"
      title="About"
      url="/" 
      btnclass="hide"
 
      />
      <Aboutus/>
    <Footer/>
  </>
  )
}

export default About;
