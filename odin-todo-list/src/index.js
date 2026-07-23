import "./style.css";
import { loadFromStorage, saveToStorage } from "./storage.js";
import { initProjects } from "./project.js";
import { initTodos } from "./todo.js";

const appData = loadFromStorage();

initProjects(appData, saveToStorage);
initTodos(appData, saveToStorage);
