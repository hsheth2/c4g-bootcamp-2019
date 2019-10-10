import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 5,
    }
  }

  incrementCounter = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  }

  render() {
    return (
      <div>
        <h1>Counter: {this.state.counter}</h1>
        <button onClick={this.incrementCounter}>Increment the counter</button>
      </div>
    );
  }
}

export default App;
