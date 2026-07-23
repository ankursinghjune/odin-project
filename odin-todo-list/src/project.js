import { openToDoDialog, renderTodosForProject } from "./todo.js";

/* ---------- DOM ---------- */

const projectList = document.querySelector(".project-list");
const createProjectButton = document.querySelector(".create-project-button");
const inputProjectName = document.querySelector(".project-name");
const projectHeading = document.querySelector(".project-heading");
const projectButtons = document.querySelector(".project-buttons");
const todoListContainer = document.querySelector(".todo-list-container");

/* ---------- STATE ---------- */

let data;
let save;
let activeProjectId = null;

/* ---------- INIT ---------- */

export function initProjects(appData, saveFn) {
    data = appData;
    save = saveFn;
    renderProjects();
}

/* ---------- EVENTS ---------- */

createProjectButton.addEventListener("click", createProject);

/* ---------- LOGIC ---------- */

function renderProjects() {
    projectList.innerHTML = "";

    data.projects.forEach((project) => {
        const btn = document.createElement("button");
        btn.textContent = project.name;
        btn.classList.add("project-item");
        btn.addEventListener("click", () => openProject(project));
        projectList.appendChild(btn);
    });
}

function createProject() {
    const name = inputProjectName.value.trim();
    if (!name) return;

    data.projects.push({
        id: crypto.randomUUID(),
        name,
        todos: [],
    });

    save(data);
    inputProjectName.value = "";
    renderProjects();
}

function openProject(project) {
    activeProjectId = project.id;

    projectHeading.textContent = project.name;
    projectButtons.innerHTML = "";
    todoListContainer.innerHTML = "";

    renderTodosForProject(project.id);

    projectButtons.append(
        createBackButton(),
        createAddTodoButton(project.id),
        createDeleteButton(project.id)
    );
}

function createBackButton() {
    const btn = document.createElement("button");
    btn.textContent = "Back";
    btn.classList.add("back-button");
    btn.addEventListener("click", resetView);
    return btn;
}

function createAddTodoButton(projectId) {
    const btn = document.createElement("button");
    btn.textContent = "Add ToDo";
    btn.classList.add("add-project-button");
    btn.addEventListener("click", () => openToDoDialog(projectId));
    return btn;
}

function createDeleteButton(projectId) {
    const btn = document.createElement("button");
    btn.textContent = "Delete";
    btn.classList.add("delete-project-button");
    btn.addEventListener("click", () => {
        data.projects = data.projects.filter((p) => p.id !== projectId);
        save(data);
        resetView();
        renderProjects();
    });
    return btn;
}

function resetView() {
    activeProjectId = null;
    projectHeading.textContent = "Open a project to see your ToDo List";
    projectButtons.innerHTML = "";
    todoListContainer.innerHTML = "";
}
