"use strict";
import "./styles/App.css";
import { addTodo, deleteCheck, filterTodo } from "./Functions.js";
import { filterOption, todoButton, todoList } from "./Selectors.js";

todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", filterTodo);
