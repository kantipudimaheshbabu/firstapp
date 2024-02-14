import React, { useState } from 'react'

export const Func = () => {
    

    const[num,setNum]=useState(0);

    function increse(){
       
        setNum(num +1 )
    }
    function decrese(){
        
        setNum(num-1 )
    }
    function zero(){
        
        setNum(0)
    }


  return (
    <div className='text-center'>
        <p>{num}</p>
        <button className='btn btn-primary'  onClick={increse}>increse</button>
        <button className='btn btn-light'  onClick={zero}>reset</button>
       
        <button className='btn btn-warning' onClick={decrese}>decrese</button>
    </div>
  )
}
