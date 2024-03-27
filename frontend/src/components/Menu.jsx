import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import Silde from './Silde';

const Menu = (props) => {
        const [menu, setmenu] = useState([]);
        const imageRef  = useRef();
        const priceref = useRef();
        const titleRef = useRef();
        
        const getdata = async()=>{
                let res = await fetch('http://localhost:6392/Menu/get')
                let data = await res.json()
                // console.log(data);
                setmenu(data.data)
        }
        useEffect(() => {
                getdata()
        
        }, []);


        const AddTocart = (data)=>{
                // console.log(data);
                let arr = JSON.parse(localStorage.getItem('Cart')) ||[]
               console.log(arr);
               let obj={
                ...data,
                quantity:1
               }
        //        console.log(obj);
        let check = ()=>{
                for (let i = 0; i < arr.length; i++) {
                        if (arr[i]._id === data._id) {
                                return true
                        }
                        
                                return false
                        
                }
        }
                let checkdata = check() 
                if (!checkdata) {
                        arr.push(obj) 
localStorage.setItem('Cart',JSON.stringify(arr))                       
                }

                props.setclicked(!props.clicked)
        
        }





  return (
    <div>
      <div style={{position:"relative"}}> <img style={{width:"100%",height:"800px",}} src="https://storage.googleapis.com/mytour-prod/blog/1687878015795_shutterstock-795649972-jpg.jpeg" alt="" />
      <h1 style={{position:"absolute",marginTop:"-550px",color:"white",fontFamily:'fantasy',marginLeft:"200px"}}>
        Menu
      </h1>
      </div>
      <div>
        <h1 className='m-5'> What's on your mind?</h1>
      </div>
      <div id='card' className="row container"> 
      {menu.map((e)=>{
        
        return <div className="card" style={{width: '18rem',borderRadius:"20px"}}>
  <img ref={imageRef} style={{borderRadius:"20px",height:"180px"}} src={e.Image} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 ref={titleRef} className="card-title ">{e.Title} </h5>
    <p ref={priceref} className="card-text h3">{e.Price} </p>
    <Link onClick={()=>{AddTocart(e)}} className="btn btn-primary">Add to cart</Link>
  </div>
</div>

      })}
      </div>

<Silde/>

    </div>
  )
}

export default Menu
