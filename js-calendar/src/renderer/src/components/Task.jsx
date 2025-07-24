import React, { useState } from 'react'

export default function Task({ title, completeTask, deleteTask, index, isComplete, isInput, changeIsInputValue, onTitleChange }) 
{
    const displayInputField=() => {

        if(isInput) {
            return <input autoFocus placeholder={title} onChange={(e) => onTitleChange(e.target.value)}></input>
        }
        else {
            if(!isComplete){
                return <p>{title}</p> 
            }
            else return <p><s>{title}</s></p>
        }
    }

  return (
    <div id="parent">
        <div className='flex bg-gray-200 justify-between p-2 m-1'>
            <div id="done" onClick={() => completeTask(index)} className='cursor-pointer'>&#10003;</div>
            <div id="task-title" className='cursor-pointer' 
            onClick={()=> changeIsInputValue(index)}>
                {displayInputField()}
            </div>
            <div id="delete" onClick={() => deleteTask(index)} className='cursor-pointer'>&#x2715;</div>
        </div>
    </div>
  )
}
