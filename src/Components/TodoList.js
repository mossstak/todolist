import React from 'react';
//import Component
import Todo from "./Todo";
import './App.css';

const TodoList = ({todos, setTodos, filteredTodos}) => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {/* todos.map  */}
                {filteredTodos.map(todo => (
                    <Todo
                    setTodos={setTodos}
                    todos={todos} 
                    key={todo.id}
                    todo={todo}
                    text={todo.text} 
                    completion={todo.completion}
                    />
                ))}    
            </ul>
        </div>
    );
};

export default TodoList;