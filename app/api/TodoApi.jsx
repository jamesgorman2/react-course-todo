import firebase from 'firebase';
import moment from 'moment';

const config = {
  apiKey: "AIzaSyCAUgwjBzcxP7FYeAAg5MUKVrKbAZNLzEI",
  authDomain: "react-course-todo.firebaseapp.com",
  databaseURL: "https://react-course-todo.firebaseio.com",
  storageBucket: "react-course-todo.appspot.com",
};

firebase.initializeApp(config);
const todos = firebase.database().ref().child('todos');
const showAll = firebase.database().ref().child('showAll');

function newTodo(text) {
  return {
    text,
    completed: false,
    created: moment().unix(),
    completedAt: null,
  }
}

export function addTodo(text) {
  return todos.push(newTodo(text));
}

export function getTodos() {
  return todos.once('value').then(snapshot => snapshot.val());
}

export function updateTodo(id, newValues) {
  return todos.child(id).update(newValues);
}

export function subscribeToTodos(f) {
  todos.on('child_added', c => f(c.key, c.val()));
  todos.on('child_changed', c => f(c.key, c.val()));
}

const SHOWALL_KEY = 'show_all';

export function setShowAll(showAll) {
  if (typeof showAll === 'boolean') {
    localStorage.setItem(SHOWALL_KEY, JSON.stringify(showAll));
    return showAll;
  }
  return Promise.reject('setShowAll expects a boolean');
}

export function getShowAll() {
  const showAllString = localStorage.getItem(SHOWALL_KEY);
  return showAllString ? JSON.parse(showAllString) : false;
}
