import React, { useState } from 'react'

export default function Task({ title, completeTask, deleteTask, index, isComplete }) 
{
    

  return (
    <div id="parent">
        <div className='flex bg-gray-200 justify-between p-2 m-1'>
            <div id="done" onClick={() => completeTask(index)} className='cursor-pointer'>&#10003;</div>
            <div id="task-title">
                { !isComplete ? <p>{title}</p> : <p><s>{title}</s></p> }
            </div>
            <div id="delete" onClick={() => deleteTask(index)} className='cursor-pointer'>&#x2715;</div>
        </div>
    </div>
  )
}
