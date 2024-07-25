
import { Fragment, useState } from "react"
import './assets/additem.css'




function Tasklist({taskList,handleDelete,handleChange}) {
  

  const listOfTask  = taskList.map( (task)  =>  {

    return(
    <div 
      key={task.id}
      className="tasklist"
    >
      < input 
          type="checkbox"
          id={task.id}
          onChange={e=> 
            handleChange(e,task.id)
          } 
          checked={ task.completed } 

      />

      < h1 
          className={ task.completed && "completed" || "empty"}
      >

        {task.tasks}

      </h1>
      <button 
        id={task.id}
        onClick= { ()=>{
          handleDelete(event,task.id)
        }
      } 
      > 
      delete


      </button>

    </div>
    )
  })

  return (
  <div 
    className="list"
  >

    {taskList.length && listOfTask || "Empty List"}

    <br />
    <br />
    
    


  </div> 
    
  )

}

export default Tasklist