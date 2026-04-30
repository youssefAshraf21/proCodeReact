import React, { useState } from "react";

function UpdateList() {
    type typeOfCar = {
        year: number;
        make: string;
        model: string;
    }

    const [cars, setCars] = useState<typeOfCar[]>([]);
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carMake, setCarMake] = useState("");
    const [carModel, setCarModel] = useState("");

    function handleAddCar(){

        const newCar = {year: carYear ,
                        make: carMake,
                        model: carModel};
            setCars(c => [...c, newCar]);

        setCarYear(new Date().getFullYear());
        setCarMake("");
        setCarModel("");
    }

    function handleRemoveCar(index: number) {
        setCars(c => c.filter((_, i) => i !== index));
    }

    function handleYearChange(e: any) {
            setCarYear(e.target.value);
        }

        function handleMakeChange(e: any) {
            setCarMake(e.target.value);
    }

    function handleModelChange(e: any) {
            setCarModel(e.target.value);
    }

    return (
        <div className="flex flex-col items-center gap-4 mt-10 bg-cyan-400 p-5 rounded-lg w-1/2 mx-auto mb-10" >
            <h1 className="font-bold text-3xl text-white"> List Of Objects Cars </h1>
            <ul className="text-red-500 text-lg">
                {cars.map((car, index) => (
                    <li key={index} onClick={() => handleRemoveCar(index)}>
                        {car.year} {car.make} {car.model}
                    </li>
                ))}
            </ul>
                <input type="number" value={carYear} onChange={handleYearChange} className="bg-white text-gray-800 placeholder:text-gray-500"/>
                <input type="text" placeholder="Enter Car Make" value={carMake} onChange={handleMakeChange} className="bg-white text-gray-800 placeholder:text-gray-500"/>
                <input type="text" placeholder="Enter Car Model" value={carModel} onChange={handleModelChange} className="bg-white text-gray-800 placeholder:text-gray-500"/>
                <button onClick={handleAddCar} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Add Car
                </button>
        </div>
    );
}

export default UpdateList