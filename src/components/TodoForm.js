import React from 'react';
import shortid from 'shortid';

export default class TodoForm extends React.Component {
    state = {
        text: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
        console.log(JSON.stringify(this.state))

    }

    handleSubmit = (event) => {
        //to prevent refreshing
        event.preventDefault();
        // submit
        this.props.onSubmit({
            id: shortid.generate(),
            text: this.state.text,
            complete: false
        });
        //after we have submitted, clear the textbox
        this.setState({
            text: ""
        });
    }

    render () {
        return (
        <form onSubmit={this.handleSubmit}>
            <input 
            name="text"
            value={this.state.text} 
            onChange={this.handleChange} 
            placeholder="todolist...."/>
            <button onClick={this.handleSubmit}>add todo</button>
        </form>
        )

    }
}