import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareYoutube } from "react-icons/fa6";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";



function Footer() {
  return (
    <>
    <div 
  className="d-flex flex-column justify-content-center align-items-center text-center" 
  style={{
    background: "linear-gradient(to right, rgb(253, 253, 253),  rgb(253, 253, 253))",
    width: "100%",
    height: "40vh"
  }}
>
  <h3 className="text-dark mb-3">Contact Us</h3>
 <h6 className='text-dark '> <FaPhoneSquareAlt  />+10 12345678</h6>
<h6 className='text-dark'>  <MdEmail           /> YogaStudio@gmail.com</h6>

  <div className="text-dark">
  
<h2 className='py-1'>
  <h4>Follow Us</h4>
  < FaInstagram      className='mx-2'/>
  < FaFacebookSquare className='mx-2'/>
  < FaSquareXTwitter className='mx-2'/>
  < FaSquareYoutube  className='mx-2' />
</h2>
    <p>Help | Website Policies | Copyright Policy | Terms & Conditions | Reach Us | Jobs | Contact
 </p>

  </div>
</div>
     <div className="d-flex justify-content-center text-align-center py-2 text-dark" style={{backgroundColor:" rgb(250, 234, 234)"}}>
      Copyright © 2025 YOGA STUDIO ⭐
    
     </div>
    </>
  )
}

export default Footer