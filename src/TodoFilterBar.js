import React, { Component } from 'react';

class TodoFilterBar extends Component {
    constructor(props) {
        super(props);
        this.state ={
            value: ""
        }
    }
    
    handleChange = (event) => {
        this.setState({value: event.target.value})
    }
    

    render() {
        return (
            <div>
                 <input type="text" placeholder="Filter Todo!" value={this.state.value} onChange={this.handleChange}/>
                <button onClick={(event)=> this.props.onFilter(this.state.value, event)}>Filter</button>
                <button onClick={(event)=> this.props.onReset(event)}>See all todos</button>
            </div>
        );
    }
}

export default TodoFilterBar;
