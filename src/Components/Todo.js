import React from 'react';

const Todo = ({text, todo, todos, setTodos}) => {
    const deleteHandler = () => {
        setTodos(todos.filter((el)  => el.id !== todo.id));
    }
    const checkCompleteHandler = () => {
        setTodos(todos.map((item) =>{
            if(item.id === todo.id){
                return{
                    ...item, completed: !item.completed
                }
            }
            return item;
        }))
    }
    return (
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed": ''}`}>{text}</li>
            <button onClick={checkCompleteHandler} className="btnCheck" > Check </button>
            <button onClick={deleteHandler} className="btnDelete"> Delete </button>
        </div>
    );
};

export default Todo;