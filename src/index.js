"use strict";

// Selectors

const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-btn");
const todoList = document.querySelector(".todo-list");

// Functions

const addTodo = function (event) {
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
};

// Event Listeners

todoButton.addEventListener("click", addTodo);
