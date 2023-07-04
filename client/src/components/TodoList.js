import React, { useEffect, useState } from "react";

function ToDoList(){
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3000/api/todo')
          .then(response => response.json())
          .then(data => {
            setTodos(data);
          })
          .catch(error => {
            console.error(error);
          });
      }, []);
    
      return(
        <div>
        <h2>Todo List</h2>
        {todos.map(todo => (
          <div key={todo._id}>
            <h3>{todo.title}</h3>
            <p>{todo.comment}</p>
          </div>
        ))}
      </div>
    );
  }
  
  export default ToDoList;
