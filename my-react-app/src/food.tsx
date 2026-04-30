
    function Food(){
        let food1: string = "Pizza";
        let food2: string = "Burger";
        let food3: string = "Pasta";
    return(
        <ul className="flex text-center justify-center space-x-10 text-lg py-4 bg-gray-400">
            <li className="text-white">{food1.toUpperCase()}</li>
            <li className="text-white">{food2.toUpperCase()}</li>
            <li className="text-white">{food3.toUpperCase()}</li>
        </ul>
    );
    }
    export default Food;