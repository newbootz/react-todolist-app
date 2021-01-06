import React from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

export default class TodoList2 extends React.Component {
    //lift state, keep todos in parent component
    state = {
        todos: [],
        todosToShow: 'all',
        toggleAllComplete: true
    }

    addTodo = (todo) => {
        this.setState({
            todos: [todo, ...this.state.todos]
        });
    };

    toggleComplete = (id) => {
        this.setState({
            todos: this.state.todos.map( todo => {
                if (todo.id === id) {
                    //suppose to update, keep id and text the same, only change complete status
                    return {
                        ...todo,
                        complete: !todo.complete
                    };
                } else {
                    return todo;
                }
            })
        });
    };

    updateTodosToShow = (s) => {
        this.setState({
            todosToShow: s
        });
    };

    handleDeleteTodo = (id) => {
        this.setState({
            todos: this.state.todos.filter(todo => todo.id !== id)
        });
    };

    removeAllTodoThatAreComplete = () => {
        this.setState({
            todos: this.state.todos.filter(todo => !todo.complete)
        });
    };

    toggleAllComplete = () => {
        this.setState({
            todos: this.state.todos.map( todo => ({
                ...todo,
                complete: this.state.toggleAllComplete
            })),
            toggleAllComplete: !this.state.toggleAllComplete
        });
        
    };

    /* prop that is being passed to toggleComplete in Todo.js, 
    lambda grabs the id from the map and passes it in so we know which one to update
    filter function updates the state, updateTodosToShow, depending on which filter button was clicked
    if removeAllTodoThatAreComplete finds some todo that is complete, run remove all */
    render () {
        let todos = [];

        if (this.state.todosToShow === 'all') {
            todos = this.state.todos;
        } else if (this.state.todosToShow === 'active'){
            todos = this.state.todos.filter(todo => !todo.complete);
        } else if (this.state.todosToShow === 'complete'){
            todos = this.state.todos.filter(todo => todo.complete);
        }

        return (
            <div>
                <TodoForm onSubmit={this.addTodo}/>
                {todos.map( todo => (
                <Todo 
                key={todo.id} 
                todo={todo} 
                onDelete={() => this.handleDeleteTodo(todo.id)}
                toggleComplete={() => this.toggleComplete(todo.id) } />
                ))}
                <div>
                    todos left: {this.state.todos.filter(todo=> !todo.complete).length}
                </div>
                <div>
                    <button onClick={() => this.updateTodosToShow("all")}>
                        all</button>
                    <button onClick={() => this.updateTodosToShow("active")}>
                        active</button>
                    <button onClick={() => this.updateTodosToShow("complete")}>
                        complete</button>
                </div>
                {this.state.todos.some(todo => todo.complete) ? (<div>
                    <button onClick={this.removeAllTodoThatAreComplete}>remove all complete todos</button>
                </div>) : null}
                <div>
                    <button onClick={this.toggleAllComplete}>toggle all complete: {`${this.state.toggleAllComplete}`} </button>
                </div>
            </div>
        );
    }
}