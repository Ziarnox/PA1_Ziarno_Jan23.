import React, { useState } from 'react';
//let ToDoList = require('./components/TodoList.js');
import ToDoList from './components/TodoList.js';

function App() {
  const [ title, setTitle ] = useState('');
  const [ comment, setComment ] = useState('');
  const [ showTodoList, setShowTodoList ] = useState(false);

function handleSubmit(e){
  e.preventDefault();
  const data = { title, comment };
  fetch('http://localhost:3000/api/todo', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json'
  },
  body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(response => {
    console.log(response);
    setTitle('');
    setComment('');
  })
  .catch(error => {
    console.error(error)
  });
}

function handleShowTodoList(){
  setShowTodoList(true);
}
function handleHideTodoList(){
  setShowTodoList(false);
}

  return (
  <div>
    <form onSubmit={handleSubmit}>
      <label>
        Title:
      <input type="text" value={title} onChange={e => setTitle(e.target.value)}/>
      </label>
      <label>
        Comment:
        <input type="text" value={comment} onChange={e => setComment(e.target.value)}/>
      </label>
      <button type="submit">Submit</button>
    </form>
    {!showTodoList && (
      <button onClick={handleShowTodoList}>Show Todo's</button>
    )}
    {showTodoList && (
      <div>
      <button onClick={handleHideTodoList}>Hide Todo's</button>
      {showTodoList && <ToDoList/>}
      </div>
    )}
  </div>
  );
}

export default App;
