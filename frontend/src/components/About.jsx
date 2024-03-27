import React from 'react'
import { FaAward } from "react-icons/fa6";
import { LuChefHat } from "react-icons/lu";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { TbChessQueen } from "react-icons/tb";

const About = () => {
  return (
    <div >
      <div style={{width:"1530px"}} className="row">
        <div id='about' className="col-6">
                <h1 style={{fontFamily:"fantasy",marginLeft:"20px"}}>
                Who are we?
                </h1>
                <p style={{marginLeft:"20px"}}>
                Launched in 2010, Our technology platform connects customers, restaurant partners and delivery partners, serving their multiple needs. Customers use our platform to search and discover restaurants, read and write customer generated reviews and view and upload photos, order food delivery, book a table and make payments while dining-out at restaurants. On the other hand, we provide restaurant partners with industry-specific marketing tools which enable them to engage and acquire customers to grow their business while also providing a reliable and efficient last mile delivery service. We also operate a one-stop procurement solution, Hyperpure, which supplies high quality ingredients and kitchen products to restaurant partners. We also provide our delivery partners with transparent and flexible earning opportunities.
                </p>
        </div>
        <div className="col-6 mt-5 mb-5">
                <img src="https://jimmie.qodeinteractive.com/wp-content/uploads/2023/01/p3-img-01.png" alt="" />
        </div>
      </div>
      <div style={{width:"1530px"}} className="row">
        <div className="col-6 mt-5 mb-5">
                <img style={{width:"100%"}} src="https://jimmie.qodeinteractive.com/wp-content/uploads/2023/02/inner-img-01.jpg" alt="" />
        </div>
        <div id='about' className="col-6">
                <div style={{width:"450px",marginLeft:"100px",marginTop:"-50px",marginBottom:"25px"}}>

                <h1 style={{fontFamily:"fantasy"}}>
                About Me
                </h1>
                <p>
                Voluptatem ea rerum nisi. Ullam debitis optio. Quae odio quasi repellat sit fugiat dolor manet.
                </p>
                </div>
                <div style={{width:"350px",marginLeft:"100px"}}>
                        
                <h3 style={{fontFamily:"fantasy"}}> <FaAward style={{fontSize:"50px",marginRight:"15px",color:"green"}} />Golden Chicken Award</h3>
                <p style={{marginLeft:"70px",marginTop:"-10px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo.</p>
                </div>
                <div style={{width:"300px",marginLeft:"100px"}}>

                <h3 style={{fontFamily:"fantasy"}}>
                <LuChefHat style={{fontSize:"50px",marginRight:"15px",color:"green"}} />Chef Of The Year</h3>
                <p style={{marginLeft:"70px",marginTop:"-10px"}} >Lorem ipsum dolor sit  adipiscing elit, seddo.</p>
                </div>
                <div style={{width:"350px",marginLeft:"100px"}}> 

                <h3 style={{fontFamily:"fantasy"}}> <MdOutlineProductionQuantityLimits style={{fontSize:"50px",marginRight:"15px",color:"green"}} />  Quality and Quantity</h3>
                <p style={{marginLeft:"70px",marginTop:"-10px"}} >Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo.</p>
                </div>
                <div style={{width:"300px",marginLeft:"100px"}}>

                <h3 style={{fontFamily:"fantasy"}}> <TbChessQueen style={{fontSize:"50px",marginRight:"15px",color:"green"}} /> King of The Kitchen</h3>
                <p style={{marginLeft:"70px",marginTop:"-10px"}} > Lorem ipsum dolor sit amet consectetur.</p>
                
                </div>
        </div>
      </div>
    </div>
  )
}

export default About
