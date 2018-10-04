import React from 'react';


const TodoItem = (props) => {
    return (
        <div>
            <ul> 
            <li onClick={()=>{props.onDone(props.index)}}>
           {props.item.isCompleted && <s>{props.item.name}</s>}
            {!props.item.isCompleted && props.item.name}
            </li>
            </ul>
        </div>
    );
}

export default TodoItem;
