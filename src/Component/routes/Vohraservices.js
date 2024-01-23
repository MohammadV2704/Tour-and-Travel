import React from 'react'
import Vohrabar from '../Vohrabar';
import Hero from '../Hero';
import Trip from '../Trip';
import Footer from '../Footer';

const Vohraservices = () => {
  return (
    <>
    <Vohrabar/>
    <Hero
      cName="hero-mid"
      heroImg="https://www.coolpicking.com/wp-content/uploads/2015/01/7-best-types-of-people-to-travel-with.jpg"
      title="Service" 
      btnclass="hide"
      />
       <Trip/>
       <Footer/>
  </>
  
  )
}

export default Vohraservices
