import React from 'react'

export default function DateView() {

    // Functions
    let date = "1.1.2025";
    const getPast=()=>{
        console.log("-1");
    }

    const getFuture=()=>{
        console.log("+1");
    }

  return (
    <div> 
        <div className='flex justify-around'>
            <button id="past" onClick={getPast} className='cursor-pointer'>&#60;</button>
            <p id="date">{date}</p>
            <button id="future" onClick={getFuture} className='cursor-pointer'>&#62;</button>
        </div>
    </div>
  )
}
