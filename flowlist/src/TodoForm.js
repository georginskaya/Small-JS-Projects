import React, { useState } from "react";
import './App.css';
import { FaArrowRight} from 'react-icons/fa';

function TodoForm({addTodos}) {
    const [inputValue, setInputValue] = React.useState("");

   const handleSubmit = event => {
       event.preventDefault();
       if (!inputValue) return;
       addTodos(inputValue);
       setInputValue("");
   }


  return (
    <div>
        <form className="toDoForm" onSubmit={handleSubmit}>
      
            <input type="text"  placeholder="Enter a todo" value={inputValue}
            onChange={event => setInputValue(event.target.value)} /> 
            <button type="submit"> <FaArrowRight className="arrow-right"/> </button>
        </form>
    </div>
   
      
  )
}

export default TodoForm;