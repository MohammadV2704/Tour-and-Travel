import React from 'react'
import Vohrabar from '../Vohrabar';
import Hero from '../Hero';
import Footer from '../Footer';
import Contactform from '../Contactform';

const Contact = () => {
  return (
    <>
    <Vohrabar />
    <Hero
      cName="hero-mid"
      heroImg="https://www.sydneycarrecyclers.com.au/wp-content/uploads/2020/01/Long-road-trip.jpg"
      title="Contact" 
      btnclass="hide"
      />
      <Contactform/>
      <Footer/>
  </>
  )
}

export default Contact;
