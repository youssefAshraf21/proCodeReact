import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './header'
import Footer from './footer'
import Food from './food'
import Card from './card'
import Botton from './botton'
import Students from './students'
import UserGreeter from './usergreeter'
import List from './List'
import Button2 from './button2'
import ProfilePic from './profilePic'
import Counter from './Counter'
import MyComponent from './MyComponent'
import ColorPicker from './ColorPicker'
import UpdateObj from './UpdateObj'
import UpdateList from './UpdateList'
import UpdateObj2 from './UpdateObj2'
import ToDoList from './ToDoList'
type Item = {
  id: number;
  name: string;
  calories: number;
};
function App() {
        const fruits: Item[] = [
    { id: 1, name: "apple", calories: 95 },
    { id: 2, name: "orange", calories: 45 },
    { id: 3, name: "banana", calories: 105 },
    { id: 4, name: "coconut", calories: 159 },
    { id: 5, name: "pineapple", calories: 37 },
  ];

  fruits.sort((a, b) => a.calories - b.calories);

  const vegetables: Item[] = [
    { id: 6, name: "potatoes", calories: 110 },
    { id: 7, name: "celery", calories: 15 },
    { id: 8, name: "carrots", calories: 25 },
    { id: 9, name: "corn", calories: 63 },
    { id: 10, name: "broccoli", calories: 50 },
  ];

  vegetables.sort((a, b) => a.calories - b.calories);

  return (
    <>
      <Header />
      <Food />
      <div className='flex justify-center flex-wrap gap-8 mt-10'>
      <Card />
      <Card />
      <Card />
      </div>
      <Botton />  
      <Students name="Youssef" age={22}  IsAstudent={true}/>
      <Students name="El-Joo" age={19}  IsAstudent={false}/>
      <Students name="Ahmed" age={20}  IsAstudent={false}/>
      <Students name="Mohamed" age={29}  IsAstudent={true}/>
      <Students  name="zero"/>
      <UserGreeter isloggedIn={true} username="Youssef"/>
      <List items={fruits} category="Fruits" />
      <List items={vegetables} category="Vegetables" />

      <Button2 />
      <ProfilePic />
      <Counter />
      <MyComponent />
      <ColorPicker />
      <UpdateObj />
      <UpdateList />
      <UpdateObj2 />
      <ToDoList />
      <Footer />
      

    </>
      
  )
}

export default App
