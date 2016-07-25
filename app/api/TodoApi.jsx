const TODOS_KEY = 'todos';
const SHOWALL_KEY = 'show_all';

export function setTodos(todos) {
  if (Array.isArray(todos)) {
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
    return todos;
  }
  console.log(`Bad todos ${todos}`);
};

export function getTodos() {
  const todosString = localStorage.getItem(TODOS_KEY);
  return todosString ? JSON.parse(todosString) : [];
}

export function setShowAll(showAll) {
  if (typeof showAll === 'boolean') {
    localStorage.setItem(SHOWALL_KEY, JSON.stringify(showAll));
    return showAll;
  }
  console.log(`Bad showAll ${showAll}`);
}

export function getShowAll() {
  const showAllString = localStorage.getItem(SHOWALL_KEY);
  return showAllString ? JSON.parse(showAllString) : [];
}
