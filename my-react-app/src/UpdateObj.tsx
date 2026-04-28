import React, { useState } from 'react';

function UpdateObj() {

    const [car, setCar] = useState({    brand: "bmw" 
                                    ,   model : "e36" ,
                                        year : 1995 });

        function handleBrandChange(e:any) {
            setCar(c => ({...c, brand: e.target.value}));
        }
        function handleModelChange(e:any) {
            setCar(c => ({...c, model: e.target.value}));
        }
        function handleYearChange(e:any) {
            setCar(c => ({...c, year: parseInt(e.target.value)}))   ;
        }

    return (
        <div className='flex flex-col justify-center items-center mt-10 bg-gray-200 p-10 rounded-lg  w-1/2 mx-auto mb-10'>
            <p className='font-bold text-4xl'> Your Vaforite Car is {car.brand} {car.model} {car.year}</p>

            <p className='font-bold mt-10'>The Brande</p>
            <input type = "text" value = {car.brand} onChange={handleBrandChange}  className='border-2 border-black m-5' /> <br/>
            <p className='font-bold '>The Model</p>
            <input type = "text" value = {car.model} onChange={handleModelChange} className='border-2 border-black m-5'/> <br/>
            <p className='font-bold'>The Year</p>
            <input type = "number" value = {car.year} onChange={handleYearChange} className='border-2 border-black m-5'/> <br/>
        </div>
    )
}

export default UpdateObj