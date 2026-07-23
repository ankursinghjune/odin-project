const STORAGE_KEY = "todo-app-data";

export function loadFromStorage() {
    const raw = localStorage.getItem(STORAGE_KEY);

    if (!raw) {
        return { projects: [] };
    }

    const parsed = JSON.parse(raw);

    if (!Array.isArray(parsed.projects)) {
        return { projects: [] };
    }

    return parsed;
}

export function saveToStorage(data) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export function clearStorage() {
    localStorage.removeItem(STORAGE_KEY);
}
