import React, { useState } from 'react';

function UpdateList() {

    const [foods, setFoods] = useState <string[]>(["Pizza", "Burger", "Pasta"]);
    const [newFood, setNewFood] = useState<string>("");

    function addFood() {

        if (newFood.trim() === "") {
            return;
        }
        console.log([...foods, newFood.trim()]);
        setFoods([...foods, newFood.trim()]);
        setNewFood("");
    }

    function removeFood(index: number) {
        setFoods(foods.filter((_, i) => i !== index));
    }
    return (
        <div className='flex flex-col items-center gap-4 mt-10 bg-blue-400 p-5 rounded-lg w-1/2 mx-auto mb-10'>
            <h1 className='font-bold text-3xl text-white'>List Of Foods</h1>
            <ul className=' text-center text-white' >
                {foods.map((food, index) => (
                    <li key={index}>{food}</li>
                ))}
                
                <input type="text" placeholder="Add a new food..."  id='NewFood ' value={newFood} 
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewFood(e.target.value)}
                className='border-2 border-white m-5'/>
            </ul>
            <button onClick={addFood} className='bg-blue-500 text-white px-4 py-2 rounded mt-5'>
                    Add Food
                </button>
                <br/>
                <button onClick={() => removeFood(foods.length - 1)} className='bg-red-500 text-white px-4 py-2 rounded mb-5' >
                    Remove Last Food
                </button>
        </div>
    )
}

export default UpdateList