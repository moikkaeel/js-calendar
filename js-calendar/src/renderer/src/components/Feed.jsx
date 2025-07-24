import { React, useState } from 'react'
import Task from './Task'
import NewTaskButton from './NewTaskButton'

// TODO: sort tasks by completion

export default function Feed() {

    // States
    const [tasks, setTasks] = useState([]);

    // Functions
    const addNewTask=() => {
        const newTask = { title: `Task`, isComplete: false };
        setTasks([...tasks, newTask]);
    }

    const completeTask=(index) => {
        setTasks(tasks.map((task, i) =>
            i === index ? { ...task, isComplete: !task.isComplete } : task
        ));
    }

    const deleteTask=(indexToRemove) => {
        setTasks(tasks.filter((_, i) => i !== indexToRemove));
    }

  return (
    <div className='flex flex-col items-center mt-3 w-full'>
        <NewTaskButton onAdd={addNewTask}></NewTaskButton>
        <div id="tasks" className='flex flex-col mt-3 w-full max-h-80 overflow-y-scroll'>
            {tasks.map((task, i) => (
                <Task 
                index={i} 
                title={task.title} 
                completeTask={completeTask}
                deleteTask={deleteTask}
                isComplete={task.isComplete}></Task>
            ))}
        </div>
    </div>
    
  )
}
