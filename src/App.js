import React, { Component } from "react";
import {todos} from './seedData';
import TodoList from './TodoList'
import "./App.css";

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1 className="App-title">~ Todo List ~</h1>
        </div>
        <TodoList todos={todos} />
      </div>
    );
  }
}

export default App;
