import React, { useState, useEffect } from 'react';
import './App.css';

/* Import from files from Components Folder */
import Todoform from "./Components/todoForm";
import TodoList from "./Components/TodoList";

/*
States
*/
function App() {
const [inputText, setInputText] = useState("");
const [todos, setTodos] = useState([]);
const [status, setStatus] = useState('all');
const [filteredTodos, setFilteredTodos] = useState([]);
//Function,
//Use Effect

useEffect(() => {
  LoadLocalTodos();
}, []);

  useEffect(() => {
    const filteredHandler = () => {
      switch(status){
        case 'completed':
          setFilteredTodos(todos.filter(todo => todo.completed === true));
          break;
        case 'uncompleted':
          setFilteredTodos(todos.filter(todo => todo.completed === false));
          break;
        default:
          setFilteredTodos(todos);
          break;
      }
    }
    filteredHandler();
    saveLocalTodos();
  }, [todos, status]);

//Saves to Local
const saveLocalTodos = () => {
  localStorage.setItem('todos', JSON.stringify(todos));
}

//Loads to Local
const LoadLocalTodos = () => {
  if (localStorage.getItem('todos') === null ){
    localStorage.setItem('todos', JSON.stringify([]));
  }else{
    let todoLocal = JSON.parse(localStorage.getItem('todos'));
    setTodos(todoLocal);
  }
};

  return (
    <div className="App">
      <h1>Mostak To Do List </h1>

      <Todoform todos={todos} 
      setTodos={setTodos} 
      inputText={inputText} 
      setInputText={setInputText}
      setStatus={setStatus}
      filteredTodos={filteredTodos}/>

      <TodoList 
      setTodos={setTodos} 
      todos={todos}
      filteredTodos={filteredTodos}/>
    </div>
  );
};

export default App;
