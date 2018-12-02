import React, { Component } from 'react';
import { TextField, Button } from '@material-ui/core'
import PropTypes from 'prop-types'

class TodoCreationBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            creationValue: ""
        }
    }

    handleChange =(event) => {
        this.setState({creationValue: event.target.value})
    }

    handleAdd = (event) => {
        event.preventDefault();
        this.props.onAdd(this.state.creationValue);
        this.setState({creationValue: ""});
    }

    render() {
        return (
            <div>
                <form>
                <TextField className="form__input" type="text" value={this.state.creationValue} onChange={this.handleChange} label="add your todo ..."/>
                <Button type="submit" color="primary" variant="raised" onClick={this.handleAdd}>Submit</Button>
                </form>
            </div>
        );
    }
}

TodoCreationBar.propTypes = {
    onAdd: PropTypes.func.isRequired
}

export default TodoCreationBar;
