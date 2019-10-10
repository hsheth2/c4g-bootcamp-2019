import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loaded: false,
      items: [],
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

  render() {
    if (!this.state.loaded) {
      return (
        <div><h1>Loading...</h1></div>
      )
    }

    return (
      <div>
        <h1>To Do List</h1>
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
