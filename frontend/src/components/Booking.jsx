import React, { useRef } from 'react'

const Booking = () => {
        const timeRef = useRef();
        const personRef = useRef();
        const submit = ()=>{
                let obj={
                        time:timeRef.current.value,
                        people:personRef.current.value
                }
                console.log(obj);
        }



  return (
    <div>
        <div id='book' className="row bg-success">
                <div className="col-4">
                <select ref={personRef}  className="form-select" aria-label="Default select example">

  <option  value={"1 People"}>1 People</option>
  <option  value={"2 People"}>2 People</option>
  <option  value={"3 People"}>3 People</option>
  <option  value={"4 People"}>4 People</option>
  <option  value={"5 People"}>5 People</option>
  <option  value={"6 People"}>6 People</option>
  <option  value={"7 People"}>7 People</option>
  <option  value={"8 People"}>8 People</option>
  <option  value={"9 People"}>9 People</option>
  <option  value={"10 People"}>10 People</option>
  
</select>

                </div>
                <div className="col-3">
                        <input ref={timeRef} type="datetime-local" name="" id="" style={{width:"300px",height:"40px",borderRadius:"7px",border:'none'}}  defaultValue={Date.now()}/>
                        
                        
                </div>
                <div id='inst' className="col-4 ">
                        <textarea style={{borderRadius:"12px"}} placeholder='Any Instruction' name="" id="" cols="50" rows="6"></textarea>
                        <button id='btnn' onClick={submit}>BOOK NOW</button>
                </div>
                
        </div>
      

    </div>
  )
}

export default Booking
