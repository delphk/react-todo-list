import React from "react";
import { render, fireEvent } from "react-testing-library";
import TodoItem from "./TodoItem";

let props = {
  todo: { name: "buy milk", isCompleted: true },
  onDone: jest.fn(),
  handleDelete: jest.fn()
};

test("should display todo item", () => {
  const { queryByText } = render(<TodoItem {...props} />);

  expect(queryByText("buy milk")).toBeInTheDocument();
});

test("should be strikethrough if task is completed", () => {
  const { container } = render(<TodoItem {...props} />);
  const taskItem = container.querySelector("li s");
  expect(taskItem).toHaveTextContent("buy milk");
});

test("should not be strikethrough if task is clicked", () => {
  const { container } = render(<TodoItem {...props} />);

  const taskItem = container.querySelector("li s");
  fireEvent.click(taskItem);
  expect(props.onDone).toHaveBeenCalledTimes(1);
});

test("should render a li element", () => {
  const { container } = render(<TodoItem {...props} />);

  expect(container.querySelector("ul").firstChild.tagName).toEqual("LI");
});
