
function Button2() {

    const handleClick = (e :any) => e.target.innerText = "OUTH! 🤥" 

    return (<button onClick={(e)=>handleClick(e)} className="border-2 mb-6 flex justify-center items-center mx-auto p-4 px-10 bg-blue-600  text-white rounded-xl    ">  Click Me 😊</button>)

}

export default Button2