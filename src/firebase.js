import firebase from 'firebase';
var firebaseConfig = {
  apiKey: 'AIzaSyAGwrgjOfp7q9tUZQxe0I7qPkEPWIjxY2s',
  authDomain: 'project-38377.firebaseapp.com',
  databaseURL: 'https://project-38377.firebaseio.com',
  projectId: 'project-38377',
  storageBucket: 'project-38377.appspot.com',
  messagingSenderId: '76559492290',
  appId: '1:76559492290:web:c11ee2d820ae635478c75b',
};
// Initialize Firebase

const db = firebase
  .initializeApp(firebaseConfig)
  .firestore();

export default db;
