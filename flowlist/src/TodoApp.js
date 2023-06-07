import React, { useState } from "react";
import TodoForm from "./TodoForm";
import './App.css';
import { FaCheck} from 'react-icons/fa';
import { FaTimes} from 'react-icons/fa';


function TodoApp() {
    const [todos, setTodos] = React.useState([]);
     

    const addTodos = inputValue =>{
        const updatedTodos = [...todos, { text: inputValue }];
        setTodos(updatedTodos)
      // saving todos in the localstorage
        localStorage.setItem("todos", JSON.stringify(updatedTodos));
        
    }
    // retriving todos from the local storage
    React.useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
    setTodos(JSON.parse(storedTodos));
    }
    }, []);


    const removeElement = (event) => {

    var target = event.currentTarget;
      var parent = target.parentElement
      parent.remove();
  
  
};

    const handleDone = (event) => {
      var target = event.currentTarget;
      var parent = target.parentElement
      parent.classList.toggle('done')
    }

  
    
  return (<div className="todoApp">
      <h1>Flowlist</h1>
     
      <div>
      <TodoForm addTodos={addTodos}/>
      </div>

        <ul className="todo_list">
        {todos.map((todo, index) => (
         <li key={index}>
           {todo.text}
         
          <button onClick={removeElement}> <FaTimes/> </button>
           <button onClick={handleDone}><FaCheck/> </button>
         </li>
         
       ))}
       
     </ul>

     
      </div>

  )
}

export default TodoApp;