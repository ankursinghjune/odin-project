// todo.js

/* ---------- DOM ---------- */

const dialog = document.querySelector(".create-todo-dialog");
const form = dialog.querySelector("form");
const todoListContainer = document.querySelector(".todo-list-container");

/* ---------- STATE ---------- */

let data;
let save;
let activeProjectId = null;

/* ---------- INIT ---------- */

export function initTodos(appData, saveFn) {
    data = appData;
    save = saveFn;
}

/* ---------- API ---------- */

export function openToDoDialog(projectId) {
    activeProjectId = projectId;
    form.reset();
    dialog.showModal();
}

export function renderTodosForProject(projectId) {
    todoListContainer.innerHTML = "";

    const project = data.projects.find((p) => p.id === projectId);
    if (!project) return;

    project.todos.forEach((todo, index) => {
        todoListContainer.appendChild(createTodo(todo, project, index));
    });
}

/* ---------- FORM ---------- */

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!activeProjectId) return;

    const project = data.projects.find((p) => p.id === activeProjectId);
    if (!project) return;

    const todo = {
        title: form["todo-title"].value.trim(),
        description: form["todo-description"].value.trim(),
        priority: form.priority.checked,
        completed: false,
    };

    if (!todo.title) return;

    project.todos.push(todo);
    save(data);

    dialog.close();
    renderTodosForProject(activeProjectId);
});

form.addEventListener("reset", () => dialog.close());

/* ---------- UI ---------- */

function createTodo(todo, project, index) {
    const item = document.createElement("div");
    item.classList.add("todo-item");

    const title = document.createElement("h4");
    title.textContent = todo.title;

    const desc = document.createElement("p");
    desc.textContent = todo.description;

    if (todo.completed) {
        title.style.textDecoration = "line-through";
        desc.style.textDecoration = "line-through";
    }

    if (todo.priority === true) {
        title.style.color = "#dc2626";
    }

    const toggle = document.createElement("button");
    toggle.textContent = todo.completed ? "Undo" : "Done";
    toggle.classList.add("toggle-todo-button");
    toggle.addEventListener("click", () => {
        todo.completed = !todo.completed;
        save(data);
        renderTodosForProject(project.id);
    });

    const del = document.createElement("button");
    del.textContent = "Delete";
    del.classList.add("delete-todo-button");
    del.addEventListener("click", () => {
        project.todos.splice(index, 1);
        save(data);
        renderTodosForProject(project.id);
    });

    item.append(title, desc, toggle, del);
    return item;
}
