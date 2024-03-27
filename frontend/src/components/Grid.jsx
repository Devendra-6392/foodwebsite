import React from 'react'
import Silde from './Silde'

const Grid = () => {
  return (
        <div> 
     <div className="container">
  <div className="row row-cols-3">
    <div id='grid' className="col">
         <img style={{height:"250px",marginTop:"-99px"}} src="https://jimmie.qodeinteractive.com/wp-content/uploads/2023/01/shop-08-img-01.png" alt="" /> 
         <h1 style={{marginTop:"-10px"}} > Crust Burger</h1>
         <h3 style={{marginTop:"-10px"}}>20$ </h3>
        <button id='add'> ADD TO CART</button>
    </div>
    
    <div id='grid' className="col">
    <img style={{height:"280px",marginTop:"-99px"}} src="https://jimmie.qodeinteractive.com/wp-content/uploads/2023/02/shop-10-img-01.png" alt="" /> 
         <h1 style={{marginTop:"-10px"}} > Duo Taco</h1>
         <h3 style={{marginTop:"-10px"}}>20$ </h3>
        <button id='add'> ADD TO CART</button>
    </div>
    <div id='grid' className="col">
    <img style={{height:"280px",marginTop:"-99px"}} src="https://jimmie.qodeinteractive.com/wp-content/uploads/2023/01/shop-06-img-01.png" alt="" /> 
         <h1 style={{marginTop:"-10px"}} > Burger Menu</h1>
         <h3 style={{marginTop:"-10px"}}>20$ </h3>
        <button id='add'> ADD TO CART</button>
    </div>
  </div>
  <div className="row row-cols-4">
    <div id='grid' className="col">
    <img style={{height:"220px",marginTop:"-79px"}} src="https://jimmie.qodeinteractive.com/wp-content/uploads/2022/12/shop-03-img-01.png" alt="" /> 
         <h1 style={{marginTop:"-10px"}} > Fish Burger</h1>
         <h3 style={{marginTop:"-10px"}}>20$ </h3>
        <button id='add1'> ADD TO CART</button>
    </div>
    <div id='grid' className="col">
    <img style={{height:"280px",marginTop:"-99px"}} src="https://jimmie.qodeinteractive.com/wp-content/uploads/2022/12/shop-04-img-01.png" alt="" /> 
         <h1 style={{marginTop:"-10px"}} > Taco Max</h1>
         <h3 style={{marginTop:"-10px"}}>20$ </h3>
        <button id='add'> ADD TO CART</button>
    </div>
    <div id='grid' className="col">
    <img style={{height:"250px",marginTop:"-66px"}} src="https://jimmie.qodeinteractive.com/wp-content/uploads/2023/01/shop-13-img-01.png" alt="" /> 
         <h1 style={{marginTop:"-10px"}} > Taco Dip</h1>
         <h3 style={{marginTop:"-10px"}}>20$ </h3>
        <button id='add'> ADD TO CART</button>
    </div>
    <div id='grid' className="col">
    <img style={{height:"230px",marginTop:"-49px"}} src="https://jimmie.qodeinteractive.com/wp-content/uploads/2023/01/shop-05-img-01.png" alt="" /> 
         <h1 style={{marginTop:"-10px"}} > Onion Rings</h1>
         <h3 style={{marginTop:"-10px"}}>20$ </h3>
        <button id='add'> ADD TO CART</button>
    </div>
  </div>
</div>

<Silde/>
</div>
    
  )
}

export default Grid
