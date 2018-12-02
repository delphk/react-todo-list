import React from 'react';
import { TextField } from '@material-ui/core'
import PropTypes from 'prop-types'

const TodoFilterBar = props => {

const handleChange = event => {
        props.onFilter(event.target.value)
    }
    
    return (
            <div>
                <TextField className="form__filter" type="text" onChange={handleChange} label="search todo ..." />
            </div>
        );
}

TodoFilterBar.propTypes = {
    onFilter: PropTypes.func.isRequired
}

export default TodoFilterBar;
