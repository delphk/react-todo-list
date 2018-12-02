import React from 'react'
import {render, fireEvent} from 'react-testing-library'
import TodoCreationBar from './TodoCreationBar'


test.only('create new todo task when user clicks the button', () => {
    const onAdd = jest.fn()

    const {container} = render(<TodoCreationBar onAdd={onAdd} />)
    const button = container.querySelector("Button")
    const input = container.querySelector("input")
    const newTaskName = "new task"
    fireEvent.change(input, {target: {value: newTaskName}})
    fireEvent.click(button)
    expect(onAdd).toHaveBeenCalledTimes(1);
    expect(onAdd).toHaveBeenCalledWith(newTaskName);
});