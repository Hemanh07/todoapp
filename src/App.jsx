import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddItem from './additem'
import Qr from './qr'
import Weather from './weather'
 import Header from './header'
import TodoList from './todolist'
import Test from './test'
/* async function fetchdata(){
  const data = await (await fetch("http://127.0.0.1:3500/data")).json()
  return data
}

const data=await fet chdata()
console.log(data)*/
function App() {
  
  return(
    <>
    <TodoList/>
     
    

   
   </>
  )
}

export default App



/*

 <h1 className='title'>To Do App</h1>
  <AddItem/>
*/
