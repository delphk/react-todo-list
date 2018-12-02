import React from 'react'
import {render, fireEvent} from 'react-testing-library'
import TodoFilterBar from './TodoFilterBar'

test('should ', () => {
    const handleChange = jest.fn();
    const { container } = render(<TodoFilterBar onFilter={handleChange}/>)
    const filterinput = container.querySelector("input")
    fireEvent.change(filterinput, {target: {value: "search"}})
    expect(handleChange).toHaveBeenCalledWith("search")
});