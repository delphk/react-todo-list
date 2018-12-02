import React, { Component } from 'react';
import TodoItem from './TodoItem';
import TodoCreationBar from './TodoCreationBar';
import TodoFilterBar from './TodoFilterBar'
import PropTypes from 'prop-types'


class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state ={
            todosList: this.props.todos,
            filterValue: ""
        }
    }
    
    toggleCompletedTask = (index) => {
        let todosList = [...this.state.todosList]
        todosList[index].isCompleted = !todosList[index].isCompleted
        this.setState({todosList})
        // item.isCompleted = !item.isCompleted
        // console.log(this.state.todosList)
    }

    addNewTask = (task) => {
        let todosList = [...this.state.todosList]
        todosList.push({name: task, isCompleted: false})
        this.setState({todosList})
    }

    handleFilter = (input) => {
        this.setState({filterValue: input})
    }

    handleDelete = (index) => {
        let todosList = [...this.state.todosList]
        todosList.splice(index, 1)
        this.setState({todosList})
    }
    


    render() {
        let filteredItems = this.state.todosList.filter(list => list.name.toLowerCase().includes(this.state.filterValue.toLowerCase()))

        return (
            <div>
                <TodoCreationBar onAdd={this.addNewTask}/>
                <TodoFilterBar onFilter={this.handleFilter}/>
               {filteredItems.length > 0 && filteredItems.map((todo, index) => <TodoItem key={index} index={index} todo= {todo} onDone={this.toggleCompletedTask} handleDelete={this.handleDelete}/>)}
               {filteredItems.length === 0 && <p>Task not found!</p>}
            </div>
        );
    }
}

TodoList.propTypes = {
    todos: PropTypes.array.isRequired
}

export default TodoList;
