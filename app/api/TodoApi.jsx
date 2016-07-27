import firebase from 'firebase';
import moment from 'moment';

const config = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  storageBucket: process.env.STORAGE_BUCKET,
};

firebase.initializeApp(config);

const gitHubProvider = new firebase.auth.GithubAuthProvider();

function todos(user) {
  return firebase.database().ref().child(`users/${user.uid}/todos`);
}
function showAll(user) {
  firebase.database().ref().child(`users/${user.uid}/showAll`);
}

function newTodo(text) {
  return {
    text,
    completed: false,
    created: moment().unix(),
    completedAt: null,
  }
}

export function addTodo(uid, text) {
  return todos(uid).push(newTodo(text));
}

export function getTodos(uid) {
  return todos(uid).once('value').then(snapshot => snapshot.val());
}

export function updateTodo(uid, id, newValues) {
  return todos(uid).child(id).update(newValues);
}

export function subscribeToTodos(uid, f) {
  todos(uid).on('child_added', c => f(c.key, c.val()));
  todos(uid).on('child_changed', c => f(c.key, c.val()));
}
export function unsubscribeToTodos(uid) {
  todos(uid).off('child_added');
  todos(uid).off('child_changed');
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

export function loggedInUser() {
  return firebase.auth().currentUser ? firebase.auth().currentUser.uid : null;
}

export function logIn() {
  return firebase.auth().signInWithPopup(gitHubProvider);
}

export function logOut() {
  return firebase.auth().signOut();
}

export function onUserLoaded(f) {
  let unsubscribe = () => {};
  unsubscribe = firebase.auth().onAuthStateChanged(
    user => f(firebase.auth().currentUser ? firebase.auth().currentUser : null),
    e => {console.log(e);},
    unsubscribe
  );
}
