import React from "react";
import { render, fireEvent, within } from "react-testing-library";
import TodoList from "./TodoList";

test("should be able to add new tasks to the list", () => {
  const todosList = [];

  const { container, queryByText } = render(<TodoList todos={todosList} />);

  const todoCreationBar = container.querySelector("input");

  fireEvent.change(todoCreationBar, {
    target: { value: "task1" }
  });

  const addTaskButton = container.querySelector("button");
  fireEvent.click(addTaskButton);

  expect(queryByText("task1")).toBeInTheDocument();
});

test("should be able to mark tasks as done", () => {
  const todosList = [{ name: "task1", isCompleted: false }];

  const { getByText } = render(<TodoList todos={todosList} />);
  const toggleTask = getByText(/task1/);
  expect(toggleTask).toBeInTheDocument();

  expect(todosList[0].isCompleted).toEqual(false);
  fireEvent.click(toggleTask);
  expect(todosList[0].isCompleted).toEqual(true);
});
