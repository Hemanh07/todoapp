import { useRef, useState } from "react";
import Tasklist from "./tasklist";
import './assets/additem.css'




 function AddItem({ task,setTask,handleSubmit,handleUpdateTaskList}){
      const inputRef=useRef()
    return(
        <>
            <form
            className="additem" 
            onSubmit={
              ()=>  handleSubmit(event)
            }
            >


                < input 

                    type="text"
                    className="inputbox"
                    name="additem" 
                    id="additem" 
                    placeholder="Add Task"
                    ref={inputRef}
                    autoFocus
                    required
                    value={task}
                    onChange={
                        (event)=>{
                            setTask(event.target.value)
                        }
                    }
                />
                < button

                    className="addButton" 
                    id="add" 
                    type="submit"
                    onClick={(event)=>{
                        inputRef.current.focus();
                        handleSubmit(event);
                        handleUpdateTaskList(event);
                        setTask('');
                    }
                  }
                >
                 +
                </ button >


            </form>
        
        
        </>
    )
}
export default AddItem;