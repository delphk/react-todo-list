 import React, { Component } from 'react';
 
 class TodoCreationBar extends Component {
    constructor(props) {
        super(props);
        this.state ={
            value: ""
        }
    }

 
    handleChange = (event) => {
        this.setState({value: event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({value: ""})
    }


     render() {
         return (
             <div>
                 <form onSubmit={this.handleSubmit}>
                 <input type="text" placeholder="Add Todo!" value={this.state.value} onChange={this.handleChange}/>
             <button onClick={(event)=> this.props.onAdd(this.state.value, event)}>submit</button>
             </form>
             </div>
         );
     }
    }

export default TodoCreationBar;
