import React from 'react'
import Tripdata from './Tripdata'

const Trip = () => {
  return (
    <>
        <div className='trip'>
            <h1>Recent Trip</h1>
            <p>You can discover unique
            Destinations using google Map.
            </p>
            <div className='tripcard'>
  <Tripdata

           image="https://nriol.com/images/mal-place.jpg"
           heading="Trip in Malaysia"
           text="Malaysia’s population is a mix of three major ethnic groups, each with its own heritage, culture and tradition. 60% of the population are Bumiputera – traditional inhabitants of the country and includes Malays, Orang Asli and other indigenous peoples.
            Minorities are Chinese, about 20%, and Indians (6%).Some of the obstacles overseas voters face include the time factor and an archaic postal voting system."
   />

  <Tripdata

        image="https://mlss4lcacflq.i.optimole.com/hTyAvII-IX03TAEP/w:1600/h:900/q:auto/https://www.asiantrails.travel/wp-content/uploads/2020/11/asian-trails-indonesia-sailing-safely-in-indonesia.jpg"
        heading="Trip in Indonesia"
        text="Indonesia currently holds twelve items of UNESCO's Intangible Cultural Heritage, including a wayang puppet theatre, kris, batik, pencak silat, angklung, gamelan, and the three genres of traditional Balinese dance. Indonesian arts 
        include both age-old art forms developed through centuries and recently developed contemporary art."
 /> 

<Tripdata

image="https://www.outlookindia.com/outlooktraveller/public/uploads/filemanager/images/rani-ki-vav-is-situated-in-the-town-of-Patan.jpg"
heading="Trip in Ran ki vav"
text="The first thing you notice about Rani ki vav is the size. It is mammoth, the largest stepwell of its kind, and also sumptuously beautiful. But all of this is below ground. From the plain, as you approach, it descends suddenly.
 Designed as an inverted temple with four pavilions on various levels, it highlights the sanctity of water."
 />
       </div>
        </div>
    </>
  )
}

export default Trip
