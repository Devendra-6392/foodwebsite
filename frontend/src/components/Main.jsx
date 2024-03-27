import React from 'react'

const Main = () => {


        
  return (
    <div>
      <div id='main' className="row ">
        <div className="col-3">
                <img style={{height:"490px",width:"510px"}} src="https://p4.wallpaperbetter.com/wallpaper/532/938/333/pizza-cheese-tomato-vegetables-wallpaper-preview.jpg" alt="" />
        </div>
        <div  className="col-3">
                <div id='abc' style={{height:"490px",marginLeft:"127px",width:"510px"}} >
                        <h1 style={{fontFamily:"fantasy",color:"green"}}> Order Now</h1>
                        <p style={{width:"290px"}}> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu.</p>
                        <button id='btn'> Order Now</button>
                         </div>
        </div>
        <div className="col-3">
        <img style={{height:"490px",marginLeft:"254px",width:"500px"}} src="https://w0.peakpx.com/wallpaper/561/734/HD-wallpaper-delicious-pizza-pizza-delicious.jpg" alt="" />
        </div>


      </div>
    </div>
  )
}

export default Main
