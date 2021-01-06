import './App.css';

import TodoList2 from './components/TodoList2.js';
import { Component } from 'react';

class App extends Component {
  state = {
    count: 0
  };

  increment = () => {
    console.log("increment")
    this.setState({
      count: this.state.count +1
    })
  };

  decrement = () => {
    console.log("decrement")
    this.setState({
      count: this.state.count -1
    })
  };

  render() {
    return (
    <div className="App"><TodoList2/></div>
    )
  }

}

export default App;



