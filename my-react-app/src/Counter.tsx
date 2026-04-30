import React, { useState } from 'react'
function Counter() {

    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count + 1);
    }

    const incrementBy2 = () => {
        setCount(c => c + 1);
        setCount(c =>c + 1);
    }
    const decrement = () => {
        setCount(count - 1);
    }

    const decrementBy2 = () => {
        setCount(c => c - 1);
        setCount(c => c - 1);
    }

    const reset = () => {
        setCount(c => c = 0);
    }
    return (
        <div>
            <h1 className='text-[100px] font-bold text-center mt-10'> {count}</h1>
            <div className='flex justify-center gap-4 mt-7 mb-10 '>
                <button onClick={increment} className='bg-blue-400 hover:bg-blue-700 text-white font-bold py-8 px-16 rounded text-2xl'>
                    Increment
                </button>
                <button onClick={reset} className='bg-blue-400 hover:bg-blue-700 text-white font-bold py-8 px-16 rounded text-2xl'>
                    Reset
                </button>
                <button onClick={decrement} className='bg-blue-400 hover:bg-blue-700 text-white font-bold py-8 px-16 rounded text-2xl'>
                    Decrement
                </button>
                <button onClick={incrementBy2} className='bg-blue-400 hover:bg-blue-700 text-white font-bold py-8 px-16 rounded text-2xl'>
                    Increment By 2
                </button>
                <button onClick={decrementBy2} className='bg-blue-400 hover:bg-blue-700 text-white font-bold py-8 px-16 rounded text-2xl'>
                    Decrement By 2
                </button>
            </div>
        </div>
        
    )
}   

export default Counter