import React, { useState } from 'react'

const Cart = (props) => {
        let arr = JSON.parse(localStorage.getItem('Cart')) || []
        const [value, setvalue] = useState(false);
       
        // console.log(arr);
        let sum=0;
         arr.forEach((el) => {
                sum +=el.Price;
        });

        const plus=(data)=>{
                let obj={
                        ...data,
                        quantity:data.quantity+1,
                        Price:data.Price+(data.Price/data.quantity),
                }
                let index = arr.findIndex((e)=>e._id==data._id);
                console.log(index)
                arr[index] = obj;
                localStorage.setItem('Cart',JSON.stringify(arr))
                setvalue(!value)
        }


        const minus = (data)=>{
                
                let obj={
                        ...data,
                        quantity:data.quantity>1?data.quantity-1:data.quantity,
                        Price:data.quantity>1?data.Price-(data.Price/data.quantity):data.Price
                }
                
                let index = arr.findIndex((el)=>el.id===data.id);
                arr[index] = obj;
                localStorage.setItem('Cart',JSON.stringify(arr))
                setvalue(!value)
        }

        const remove=(data)=>{
                console.log(data);
                let arr1 = arr.filter((el)=>el._id!==data._id)
                localStorage.setItem('Cart',JSON.stringify(arr1))
                setvalue(!value)
                props.setclicked(!props.clicked)
        }






  return (
    <div style={{overflow:"hidden"}}>
        {arr.map((e)=>{
                return <div  key={e.id} className="row">
                        <div className="col-3">
                                <img style={{width:"18rem",height:"190px",borderRadius:"20px"}} src={e.Image} alt="" />
                        </div>
                        <div id='title' className="col-1">
                                <h5> {e.Title} </h5>
                        </div>
                        <div id='title' className="col-1">
                                <h5> {e.Price}</h5>
                        </div>
                        <div id='title' className="col-1">
                                <button onClick={()=>{minus(e)}}>
                                        -
                                </button>
                                <h5>{e.quantity} </h5>
                                <button onClick={()=>{plus(e)}}>
                                        +
                                </button>
                        </div>
                        <div id='title' className="col-2">
                                <button onClick={()=>{remove(e)}}> Delete Item</button>
                        </div>
                       
                </div>

        })}
      
      <h1>
      Total = {sum}
      </h1>
    </div>
  )
}

export default Cart
