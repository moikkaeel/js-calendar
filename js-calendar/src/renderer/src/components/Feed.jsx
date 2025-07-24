import { React, useState } from 'react'
import Task from './Task'
import NewTaskButton from './NewTaskButton'

export default function Feed() {

    const [tasks, setTasks] = useState([]);

    const addNewTask=() => {
        setTasks([...tasks, `Task ${tasks.length + 1}`]);
    }

  return (
    <div className='flex flex-col items-center mt-3 w-full'>
        <NewTaskButton onAdd={addNewTask}></NewTaskButton>
        <div id="tasks" className='flex flex-col mt-3 w-full max-h-80 bg-blue-400 overflow-y-scroll'>
            {tasks.map((task, i) => (
                <div key={i} className='bg-gray-200 p-2 m-1'>{task}</div>
            ))}
        </div>
    </div>
    
  )
}
