import frofilePic from './assets/profile.jpg';

function Card(){
    return(
        <div className="w-80 mx-auto mt-10 p-6 text-center bg-white rounded-xl shadow-2xl hover:shadow-2xl transition  ">
            <img className='w-60 h-60 mx-auto rounded-full' src={frofilePic} alt="profile pic" />
            <h1 className='text-2xl font-bold mt-4'>Youssef Card</h1>
            <p className='text-gray-500 '>i try to learn react from pro code</p>
        </div>
    );
}

export default Card;