import React from 'react'
import "./Contactform.css";

const Contactform = () => {
  return (
 <>
    <div className='from-container'>
        <h1>
           Send a message to us! 
        </h1>
        <form>
            <input placeholder='Name'/>
            <input placeholder='Email'/>
            <input placeholder='Subject'/>
            <textarea placeholder='Meassage' rows="4"></textarea>
            <button>Send Meassage</button>
        </form>
    </div>
 </>
  )
}

export default Contactform
