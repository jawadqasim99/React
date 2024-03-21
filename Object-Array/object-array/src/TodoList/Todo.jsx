import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function Todo(){
    const [Todo , setTodo] = useState([]);
    const [newTodo, setNewTodo] = useState("");
    let newTodoFunc = (event)=>{
      setNewTodo(event.target.value);
    }
    let updatedTodo = ()=>{
        setTodo((preValue)=>[...preValue , {task : newTodo , id : uuidv4(), isDone:false}]);
        setNewTodo("");
    }

    let deleteTodo =(id)=>{
      setTodo((delItem)=>delItem.filter((del)=> del.id != id));

    }

    let upperCaseList = ()=>{
       setTodo((previousTask) => previousTask.map((val)=>{
     return({...val, task : val.task.toUpperCase()})
       })) ;
    }

    let allDone = ()=>{
       
    setTodo(Todo.map((val)=>{
        return {...val ,isDone:true} 
      }))  

        
    }

    let upperTodo= (id)=>{
        setTodo(Todo.map((val)=>{
            if (val.id === id) {
              return  {...val ,isDone:true}  
                
            }else{
                return val;
            }
        }))
    }

    return(
        <>
        <input placeholder="Enter a text" style={{width : '15rem' , height: "2rem" , borderRadius: "1rem" , padding: "0.5rem"}} value={newTodo} onChange={newTodoFunc}/>
        <br /><br />    
        <button onClick={updatedTodo}>Add</button>
        <br /><br />
        <ul >
          {Todo.map((value)=>{
           return <li key={value.id}><span style={value.isDone ? { textDecoration: 'line-through'} : {textDecoration : "none"}} >{value.task}
      
           </span>
           &nbsp;  &nbsp;  &nbsp;  &nbsp;
          <button onClick={()=>deleteTodo(value.id)}> <i className="fa-solid fa-trash"></i></button>
          &nbsp;  &nbsp;  &nbsp;  &nbsp; 
          <button onClick={()=>upperTodo(value.id)}> <i class="fa-solid fa-pen"></i></button>
           </li>;
        
          })}
         
         
        </ul>
        <button onClick={upperCaseList}>UpperCase</button>
        <button onClick={allDone}>All Done</button>

        </>
    );
}