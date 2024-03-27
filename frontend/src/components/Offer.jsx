import React, { useEffect, useState } from 'react'

const Offer = () => {
        const [offer,setoffer] = useState([])

        const getoffer =async()=>{
                const res = await fetch('http://localhost:6392/Offer/get')
                const data = await res.json()
                // console.log(data) 
                setoffer(data.data)
                
        } 
        
    useEffect(()=>{
      getoffer()
    },[])

  return (
    <div>
      <div style={{width:"1531px"}} className="row">
        {offer.map((e)=>{
               return <div className="col-6">
                <img  src={e.Photo} alt="" />
                
                
                 </div>

        })}
        <div className="col-6">
                {offer.map((e)=>{
                        return <div className='offer'>
                               <div id='off'><h1>{e.Offers} </h1>
                               
                                </div> 
                                <h1 style={{marginTop:"200px",fontFamily:"fantasy",fontSize:"90px"}}>{e.About} </h1> 
                                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt <br/> ut labore et dolore magna aliqua.</p>
                        </div>
                })}
        </div>
      </div>
    </div>
  )
}

export default Offer
