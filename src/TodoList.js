import React, { Component } from 'react';
import TodoItem from './TodoItem'
import TodoCreationBar from './TodoCreationBar';
import TodoFilterBar from './TodoFilterBar'

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: this.props.items,
        }
    }
    
    toggleTaskStatus = (index) => {
        const todos = [...this.state.todos];
        if (todos[index].isCompleted) {
            todos[index].isCompleted = false;
            this.setState({todos})
        } else 
            {todos[index].isCompleted = true;
            this.setState({todos})
        }
    }

    handleAdd = (value, event) => {
        event.preventDefault();
        let todos = [...this.state.todos];
        todos.push({name: value, isCompleted: false})
        this.setState({todos})
    }

    handleFilter = (value, event) => {
        event.preventDefault();
        let todos = [...this.state.todos];
        todos = todos.filter(t => t.name.includes(value))
        this.setState({todos})
    }

    handleReset = (event) => {
        event.preventDefault();
        let todos = this.props.items
        this.setState({todos})
    }

    render() {

        return (
            <div>
                <TodoCreationBar onAdd={this.handleAdd} />
                <TodoFilterBar onFilter={this.handleFilter} onReset={this.handleReset}/>
                {this.state.todos.map((t,index) => <TodoItem key={index} item={t} index={index} onDone={this.toggleTaskStatus} />)}
            </div>
        );
    }
}

export default TodoList;
