import React from 'react'
import {Link} from 'react-router-dom'
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div id='div'>
      <div id='footer' style={{width:"1531px",backgroundColor:"black",height:"500px",color:"white"}} className="row ">
        <div style={{marginTop:"-140px"}} className="col-3 ">
                <h1 >GOOD FOOD</h1>
                <p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.

</p>
<p>© 2023 Qode Interactive, All Rights Reserved</p>


        </div>
        <div id='foot' className="col-2">
                <h4>Contact us</h4>
                <Link style={{textDecoration:"none",color:"white"}} >Help & Support</Link>
                <Link style={{textDecoration:"none",color:"white"}}>Partner with us</Link>
                <Link style={{textDecoration:"none",color:"white"}}>Ride with us</Link>
                <Link style={{textDecoration:"none",color:"white"}}>Our Team</Link>
        </div>
        <div id='foot' className="col-2 ">
                <h4>
Opening Hours</h4>
                <Link style={{textDecoration:"none",color:"white"}}>Mon-Fri
08:00-12:00</Link>
                <Link style={{textDecoration:"none",color:"white"}}>Saturday
08:00-18:00</Link>
                <Link style={{textDecoration:"none",color:"white"}}>Sunday
08:00-18:00</Link>
        </div>
        <div id='foot' className="col-2">
                <h4>Legal</h4>
                <Link style={{textDecoration:"none",color:"white"}}>

Terms & Conditions</Link>
                <Link style={{textDecoration:"none",color:"white"}}>
Privacy Policy</Link>
                <Link style={{textDecoration:"none",color:"white"}}>Cookie Policy</Link>
        </div>
        <div  className="col-2">
                <h4>OUR SOCIAL LINK</h4>
                <div id='link'>
                <Link><FaInstagramSquare /></Link>
                <Link><FaFacebookSquare /></Link>
                <Link><FaSquareTwitter /></Link>
                <Link><IoLogoYoutube /></Link>
                <Link><FaLinkedin /></Link>
                </div>
        </div>
       
      </div>
    </div>
  )
}

export default Footer
