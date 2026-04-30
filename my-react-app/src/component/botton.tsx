function Botton(){
    function handleClick(e :any) {
        e.target.innerText = "OUTH! 🤥"
    }
    return(
        <button onClick={handleClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-center mx-auto block mt-40 h-20 w-80 text-3xl ">
            Click Me
        </button>
    );
}

export default Botton;