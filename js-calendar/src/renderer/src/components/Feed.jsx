import { React, useState } from 'react'
import Task from './Task'
import NewTaskButton from './NewTaskButton'

// TODO: change task title by clicking; sort tasks by completion

export default function Feed() {

    // States
    const [tasks, setTasks] = useState([]);

    // Functions
    const addNewTask=() => {
        const newTask = { title: `New Task`, isComplete: false, 
        isInput: false
        };
        setTasks([...tasks, newTask]);
    }

    const completeTask=(index) => {
        setTasks(tasks.map((task, i) =>
            i === index ? { ...task, isComplete: !task.isComplete } : task
        ));
    }

    const deleteTask=(index) => {
        setTasks(tasks.filter((_, i) => i !== index));
    }

    const changeTaskTitle=(index, newTitle) => {
        const selected = setTasks(tasks.map((task, i) =>
            i === index ? { ...task, title: newTitle} : task
        ));
    }

    const changeIsInputValue=(index) => {
        setTasks(tasks.map((task, i) =>
            i === index ? { ...task, isInput: !task.isInput } : task
        ));
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
                isComplete={task.isComplete}
                isInput={task.isInput}
                changeIsInputValue={changeIsInputValue}
                onTitleChange={(newTitle) => changeTaskTitle(i, newTitle)}></Task>
            ))}
        </div>
    </div>
    
  )
}
