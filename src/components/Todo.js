import React from 'react';

/* When todo is clicked, calls toggleComplete to update the state
when "x" is clicked, will permanently delete the todo from state
this is done through a prop function in TodoList */
export default (props) => (
    <div style={{ display: "flex", justifyContent: "center"}}>
    <div style={{textDecoration: props.todo.complete? "line-through" : "" }} 
    onClick={props.toggleComplete}>
        {props.todo.text}
    </div>
    <button onClick={props.onDelete}>x</button>
    </div>

);