import React, { Component } from "react";
import {todos} from './seedData'
import TodoList from './TodoList'

class App extends Component {
  render() {
    return (
      <div>
        <h1>Todo List</h1>
       <TodoList items={todos} />
      </div>
    );
  }
}

export default App;
