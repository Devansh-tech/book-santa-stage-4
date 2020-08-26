import * as firebase from 'firebase'
require('@firebase/firestore')
    // Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDAyvC54KJlBFzqxlWQNlgZZ7n2IGVOW1g",
    authDomain: "booksanta-a378c.firebaseapp.com",
    databaseURL: "https://booksanta-a378c.firebaseio.com",
    projectId: "booksanta-a378c",
    storageBucket: "booksanta-a378c.appspot.com",
    messagingSenderId: "1024468118337",
    appId: "1:1024468118337:web:49f297a314207962098fc0",
    measurementId: "G-43F0XT4KBG"
};
// Initialize Firebase
if (!firebase.apps.length) { firebase.initializeApp(firebaseConfig); }
export default firebase.firestore();