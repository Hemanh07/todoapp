import React, { Fragment,useEffect,useState } from 'react'
import './assets/background.css'
import AddItem from './additem'
import  Header  from './header'
import Tasklist from './tasklist'
import Footer from './footer'

const TodoList = () => {


//_-__-__-__-__-__-__-__-__-__-__-STATE SECTIION __-__-__-__-__-__-__-__-__-__-__-__-__-__-_//

 const [taskList, setTaskList] = useState( []);
//-------------------------------------------------------//

const [task, setTask] = useState("");
useEffect(()=>{
  const data= JSON.parse(localStorage.getItem("tasks"));
  if (data){
    setTaskList(data)
  }
},[ ])

//_-__-__-__-__-__-__-__-__-__-__-EVENT HANDLER SECTIION __-__-__-__-__-__-__-__-__-__-__-__-__-__-_//
//-------------------------------------------------------//


function handleSubmit(event) {

  event.preventDefault();

}


//-------------------------------------------------------//
async function handleUpdateTaskList(event){
  event.preventDefault();

  if ( task != "") {
    const updatedList=[   ...taskList,
      {
          id  : taskList.length   &&  (   taskList    [   taskList.length-1   ] .id    )+1    ||  0,
          tasks:task,
          completed:false
      }
  ]
      setTaskList(
          updatedList
      )

     await localStorage.setItem("tasks",JSON.stringify(updatedList))
             
  }
}

//--------------------------------------------------------//

async function handleDelete(event,id){
  event.preventDefault();

  const list = taskList.filter( (task)=>  task.id !== id);
  setTaskList(list)
  await localStorage.setItem("tasks",JSON.stringify(list))

}


//---------------------------------------------------------//
async function handleChange(e,id){

  e.preventDefault();


  const newTaskList=await taskList.map( task=>  {

      if(task.id==id){

          task.completed=e.target.checked
      
      }

      return task
  }
  )


 await setTaskList(newTaskList)
 await localStorage.setItem("tasks",JSON.stringify(taskList))

}


//_-__-__-__-__-__-__-__-__-__-__-__-__-__-__-__-__-__-__-__-__-__-__-__-__-_//

  return (
    <div >
        <div
        className='background'
      >
          <Header
           title="to do app"
           />

          < AddItem
            task={task}
             setTask={setTask}
            handleSubmit={handleSubmit}
            handleUpdateTaskList={handleUpdateTaskList}
          
          />

          < Tasklist
            taskList={taskList}
            handleChange={handleChange}
            handleDelete={handleDelete}
          
          
          />
          < Footer
            taskListlength={taskList.length}
          />
        </div>
    </div>
  )
}

export default TodoList