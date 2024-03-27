import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const Contact = () => {
  return (
    <div>
      <div style={{width:"1530px"}} className="row">
        <div className="col-6 mt-5 mb-5">
                <img style={{width:"100%"}} src="https://jimmie.qodeinteractive.com/wp-content/uploads/2023/01/inner-git-img-1.jpg" alt="" />
        </div>
        <div id='about' className="col-6">
                <div style={{width:"450px",marginLeft:"100px",marginTop:"-50px",marginBottom:"25px"}}>

                <h1 style={{fontFamily:"fantasy"}}>
                Our Locations
                </h1>
                
                </div>
                <div style={{width:"350px",marginLeft:"100px"}}>
                        
                <h3 style={{fontFamily:"fantasy"}}> Our Address</h3>
                <p> <FaLocationDot style={{fontSize:"22px"}} /> Gomti Nagar , Lucknow,226010,Uttar Pradesh </p>
                </div>
                <div style={{width:"300px",marginLeft:"100px"}}>

                <h3 style={{fontFamily:"fantasy"}}>
                Phone No.</h3>
                <p > <FaPhoneAlt style={{fontSize:"20px"}} /> (+91)12345-678910 </p>
                </div>
                <div style={{width:"350px",marginLeft:"100px"}}> 

                <h3 style={{fontFamily:"fantasy"}}> Email Address</h3>
                <p> <MdEmail style={{fontSize:"25px"}} /> Goodfood@gmail.com.</p>
                </div>
                
        </div>
      </div>

      <div className="row">
        <div id='get' className="col-6">
                <h1 style={{fontFamily:"fantasy"}}>
                Get In Touch
                </h1>
                <form>
  <div className="mb-3">
    <input placeholder='Name' type="text" className="form-control" id="exampleInput"  />
  </div>
  <div className="mb-3">
    <input placeholder='Email' type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
  </div>
  
  <div className="mb-3">
    <textarea placeholder='Message' name="" id="" cols="30" rows="10"></textarea>
  </div>
  
  <button type="submit" className="btn btn-success">Submit</button>
</form>

        </div>
        <div className="col-6">
                <iframe src="https://www.google.com/maps/@26.8500304,81.0072281,14.96z?entry=ttu" frameborder="10"></iframe>
        </div>
      </div>









    </div>
  )
}

export default Contact
