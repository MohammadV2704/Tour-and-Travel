import React from 'react'
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className='Footer'>
        <div className='top'>
            <div>
                <h1>TrippyM</h1>
                <p>Choose Your favourite Destination.</p>
            </div>
            <div>
                <a href='/'>
                  <i className="fa-brands fa-facebook"></i>
                </a>
                <a href='/'>
                  <i className="fa-brands fa-square-instagram"></i>
                </a>
                <a href='/'>
                   <i className="fa-brands fa-square-twitter"></i>
                </a>
                <a href='/'>
                   <i class="fa-brands fa-linkedin"></i>
                </a>
               
            </div>
        </div>
        <div className='bottom'>
           <div>
             <h4>Project</h4>
             <a href='/'>Changelog</a>
             <a href='/'>Status</a>
             <a href='/'>Licence</a>
             <a href='/'>All Versions</a>
           </div>
           <div>
             <h4>Community</h4>
             <a href='/'>Github</a>
             <a href='/'>lssues</a>
             <a href='/'>Project</a>
             <a href='/'>twitter</a>
           </div>
           <div>
             <h4>Help</h4>
             <a href='/'>Support</a>
             <a href='/'>Troubleshooting</a>
             <a href='/'>Contact us</a>
            
           </div>
           <div>
             <h4>Others</h4>
             <a href='/'>Terms of Service</a>
             <a href='/'>Privacy Policy</a>
             <a href='/'>Licence</a>
             
           </div>
        </div>
      </div>
    </>
  )
}

export default Footer
