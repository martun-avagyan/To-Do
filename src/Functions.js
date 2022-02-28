"use strict";

import { todoInput, todoList } from "./Selectors.js";

// Functions

export const addTodo = function (event) {
  // Prevent form from submitting
  event.preventDefault();
  //   Todo Div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  //   Create the li
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);
  //   Done
  const completedBtn = document.createElement("button");
  completedBtn.innerHTML = `<i class="fas fa-check"></i>`;
  completedBtn.classList.add("complete-btn");
  todoDiv.appendChild(completedBtn);
  //   Delete
  const trashBtn = document.createElement("button");
  trashBtn.innerHTML = `<i class="fas fa-trash"></i>`;
  trashBtn.classList.add("trash-btn");
  todoDiv.appendChild(trashBtn);

  // Append to list
  todoList.appendChild(todoDiv);
  // Clear todo input value
  todoInput.value = "";
};

// Listener for clicks to delete or check
export const deleteCheck = function (e) {
  const item = e.target;
  // Delete todo

  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    todo.classList.add("fall");
    todo.addEventListener("transitionend", () => todo.remove());
  }

  // Check mark

  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
};

// Filter Function

export const filterTodo = function (e) {
  const todos = todoList.childNodes;
  todos.forEach(function (todo) {
    switch (e.target.value) {
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      case "uncompleted":
        if (!todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
    }
  });
};
