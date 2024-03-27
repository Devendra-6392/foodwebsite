import React, { useEffect, useState } from 'react'
import cartContext from './Cart'

const CartState = (props) => {
        const [value, setvalue] = useState(false);
        useEffect(() => {
                
        setvalue(true)
        }, [value]);
        
  return (
    <cartContext.Provider value={{value,setvalue}}>
{props.children}
    </cartContext.Provider>
  )
}

export default CartState
