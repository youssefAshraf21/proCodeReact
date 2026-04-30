import React, { useState } from 'react';

function ToDoList() {

    const [tasks, setTasks] = useState<string[]>(["Task 1", "Task 2", "Task 3"]);
    const [newTask, setNewTask] = useState<string>("");

    function handleInputChange(e: any) {
        setNewTask(e.target.value);
    }

    function handleAddTask() {
        if(newTask.trim() !== "") {
            setTasks(t =>[...t, newTask]);
        setNewTask("");
        }
    }
    function handleRemoveTask(index: number) {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }

    function toMoveTaskUp(index: number) {
        if (index > 0) {
            const updatedTasks = [...tasks];
            const temp = updatedTasks[index - 1];
            updatedTasks[index - 1] = updatedTasks[index];
            updatedTasks[index] = temp;
            setTasks(updatedTasks);
        }
    }

    function toMoveTaskDown(index: number) {
        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            const temp = updatedTasks[index + 1];
            updatedTasks[index + 1] = updatedTasks[index];
            updatedTasks[index] = temp;
            setTasks(updatedTasks);
        } 
    }


    return (
        <div className='flex flex-col items-center mt-10 bg-amber-50 p-5 rounded-lg shadow-md w-3/4 mx-auto mb-10'>
            <h1 className="text-3xl font-bold">To Do List</h1>
            <div className='flex mt-5 mb-5' >
                <input 
                type="text"
                value={newTask}
                onChange={handleInputChange}
                placeholder="Add a new task..."
                className='border-2 border-gray-400 m-5 '/>
                <button onClick={handleAddTask} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                    add task
                </button>
            </div>
                <ol className='gap-5 flex flex-col'>
                    {tasks.map((task, index) => (
                        <li key={index} className='flex items-center gap-5'>
                            <span>{task}</span>
                            <button onClick={() => handleRemoveTask(index)} className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'>
                                ❌
                            </button>
                            <button onClick={() => toMoveTaskUp(index)} className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'>
                                ☝️
                            </button> 
                            <button onClick={() => toMoveTaskDown(index)} className='bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded'>
                                👇
                            </button>
                        </li>
                    ))}
                </ol>
            </div>
        );}
    
export default ToDoList;