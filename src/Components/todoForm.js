import React from 'react';
import './App.css';

const Todoform = ({ inputText, setInputText, todos, setTodos, setStatus}) => {

// JavaScript & Functions
    const inputTextHandler = (e) => {
        console.log(e.target.value); /* when user inputs text in the input textbox 
                                     the outcome should  */
        setInputText(e.target.value); // setInputText(e.target.value)
    };

    const submitInputHandler = (e)=> {
        e.preventDefault();
        setTodos([
            ...todos, { text: inputText, completed: false, id: Math.random() * 1000 },
        ]);
        setInputText("");
    };

    const statusHandler = (e) => {
        setStatus(e.target.value);
    }

    return (
        /* This creates the form layout where it has input which is the textbox, submit button
        and selection tab which has 3 opttons these are All task, Completed Task, Uncompleted Task */

        <form>
            <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input"/>
            <button onClick={submitInputHandler} className="todo-button" type="submit"> Submit </button>
            <div className="select">
                <select onChange={statusHandler} name="todos" className="filter-todo">
                    <option value="all"> All Task</option>
                    <option value="completed"> Completed Task</option>
                    <option value="uncompleted"> Uncompleted Task</option>
                </select>
            </div>
        </form>
    );
};

export default Todoform;