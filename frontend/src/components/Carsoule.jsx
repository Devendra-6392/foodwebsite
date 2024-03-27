import React, { useEffect, useState } from 'react'

const Carsoule = () => {

  const [Image, setImage] = useState([]);
  const getImage = async()=>{
    let res =  await fetch('http://localhost:6392/Photo/get')
    let data = await res.json()
    // console.log(data)
    setImage(data.Photo)
  }
  useEffect(() => {
    
  getImage()
    
  }, []);
  // console.log(Image);






  return (
    <div>
    <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
       <div className="carousel-inner">
      {Image.map((e)=>{
         return <div className="carousel-item active">
          <img style={{height:"560px"}}  src={e.Images} className="d-block w-100" alt="..." />
          
        </div>
        
      })}
      </div>
 
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>


    </div>
  )
}

export default Carsoule
