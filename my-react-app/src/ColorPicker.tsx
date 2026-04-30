import React, { useState } from 'react'

function ColorPicker() {
    const [color, setColor] = useState("#ffffff");
    function handleColorChange(e:any) {
        setColor(e.target.value)
    }

    return (
        <div>
            <h1 className='font-bold text-4xl text-center mb-2 '>Color Picker</h1>
            <div style={{backgroundColor: color, width: "200px", height: "200px", marginBottom: "20px"}} className='flex justify-center items-center mx-auto border-4 border-gray-400 rounded-lg'>
            <p className='font-bold text-l'>selected Color :  {color}</p>
            </div>
            <div className='flex justify-center items-center mx-auto mb-10'>
            <label>select a Color:</label> 
            
            <input type="color" value={color} onChange={handleColorChange}/>
            </div>
        </div>
    )
}

export default ColorPicker