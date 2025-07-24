import React from 'react'

export default function NewTaskButton( { onAdd }) {
  return (
    <div className='flex justify-center bg-red-400 w-full cursor-pointer' onClick={onAdd}>
        <p>+ Add a new task</p>
    </div>
  )
}
