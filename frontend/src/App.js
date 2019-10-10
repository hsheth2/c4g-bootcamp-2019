import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loaded: false,
      items: [],
      inputText: "",
    }
  }

  componentDidMount() {
    this.fetchItems();
  }

  fetchItems = () => {
    fetch('/api/items')
      .then((response) => {
        console.log(response);
        response.json()
          .then((data) => {
            console.log(data);
            this.setState({
              loaded: true,
              items: data,
            })
          })
          .catch((err) => {
            console.error(err);
          })
      })
      .catch((err) => {
        console.error(err);
      })
  }

  itemInputChanged = (event) => {
    console.log('input state changed')
    this.setState({
      inputText: event.value,
    })
  }

  addItem = () => {
    console.log('adding item');
    fetch('/api/items', {
      method: 'POST',
      body: JSON.stringify({
        text: this.state.inputText,
      }),
    })
      .then((response) => {
        console.log("added item!");

        this.setState({
          inputText: "",
          loaded: false,
        })
        this.fetchItems();
      })
  }

  render() {
    if (!this.state.loaded) {
      return (
        <div><h1>Loading...</h1></div>
      )
    }

    return (
      <div>
        <h1>To Do List</h1>
        <input onChange={this.itemInputChanged} value={this.inputText} placeholder="Enter your to do list item:"></input>
        <button onClick={this.addItem}>Add item</button>
        <ul>
          {this.state.items.map((item) => 
            <li key={item.id}>{item.text}</li>
          )}
        </ul>
      </div>
    );
  }
}

export default App;
