import React from 'react';
import { List, ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@material-ui/core'
import { Delete } from '@material-ui/icons'
import PropTypes from 'prop-types'


const TodoItem = (props) => {
    return (
        <div id="list-items">
            <List>
                <ListItem>
                    <ListItemText onClick={() => props.onDone(props.index)}>
                    {props.todo.isCompleted && <span className="task-completed"><s>{props.todo.name}</s></span>}
                    {!props.todo.isCompleted && props.todo.name}
                    </ListItemText>
                    <ListItemSecondaryAction>
                        <IconButton color='primary' onClick={ () => props.handleDelete(props.index)}>
                            <Delete /> 
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
            </List>
             
        </div>
    );
}

TodoItem.propTypes = {
    onDone: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired,
    todo: PropTypes.shape({
        name: PropTypes.string.isRequired,
        isCompleted: PropTypes.bool.isRequired
    })
}

export default TodoItem;
