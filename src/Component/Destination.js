import React from 'react'
import "./Destination.css";
import Destinationdata from './Destinationdata';

const Destination = () => {
  return (
    <>
        <div className='destination'>
        <h1> Popular Destination</h1>
        <p>Tours give you the opportunity to see a lot,within a time frame.</p>
        
        <Destinationdata
        className="first-das"

          heading="Taal Volcano, Batangas"
          text="Taal Volcano has had several violent eruptions in the past, causing deaths on the island and the populated areas surrounding the lake, with an overall death toll of about 6,000. Because of its proximity to populated areas and its eruptive history, the volcano was designated a Decade Volcano, worthy of close study to prevent future natural disasters. All volcanoes in the Philippines are part of the Ring of Fire.
                An explosive eruption could be extremely lethal. Ballistic fragments of magma could be violently expelled from the volcano, pyroclastic flows – fast-moving currents of hot gas and volcanic matter – could swallow anything in its path, and the volcano’s slope slumping into the surrounding lake could create a volcanic tsunami.
                "
          img1="https://i.redd.it/h0xin2dt4ej41.jpg"    
          img2="https://www.boredpanda.com/blog/wp-content/uploads/2020/01/B7NpGWLhnxs-png__700.jpg"
         />

        <Destinationdata

          className="first-das-reverse"
          heading="Mt. Daguldal, batangas"
          text="Mt. Daguldol is among the many less popular mountains in Batangas, for newbies at least. The famous choices were always Mt. Batulao and Mt. Maculot. But if you’re one of those who have come to love the outdoors, Mt. Daguldol could be one of your favorites. It’s the kind of mountain that offers a balanced terrain.
          Mt. Daguldol has a total trail length of nine kilometers. Although Mt. Daguldol is not as popular as the other mountain in Batangas such as Mt. Maculot and Mt. Batulao. However, it’s one of a kind mountain where hikers can be able to experience a diversity of landscapes
                "
          img1="https://i.pinimg.com/originals/e6/b2/1b/e6b21bf7e64e2fd2ca621e75ce89d70d.jpg"    
          img2="http://www.batangasbeachhouses.com/uploads/2/2/3/7/22377602/2205762.jpg?665"
         />
        {/* <div className='first-das'>
            <div className='des-text'>
                <h2>Taal Volcano, Batangas</h2>
                <p>Taal Volcano has had several violent eruptions in the past, causing deaths on the island and the populated areas surrounding the lake, with an overall death toll of about 6,000. Because of its proximity to populated areas and its eruptive history, the volcano was designated a Decade Volcano, worthy of close study to prevent future natural disasters. All volcanoes in the Philippines are part of the Ring of Fire.
                An explosive eruption could be extremely lethal. Ballistic fragments of magma could be violently expelled from the volcano, pyroclastic flows – fast-moving currents of hot gas and volcanic matter – could swallow anything in its path, and the volcano’s slope slumping into the surrounding lake could create a volcanic tsunami.
                </p>
            </div>

            <div className='image'>
             <img alt='img' src='https://i.redd.it/h0xin2dt4ej41.jpg'/>
              <img alt='img' src='https://www.boredpanda.com/blog/wp-content/uploads/2020/01/B7NpGWLhnxs-png__700.jpg'/>  
            </div>
        </div> */}
        </div>
    </>
  )
}

export default Destination
