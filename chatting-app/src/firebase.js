import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCzZ8_Y6ibi452bgyuiVFfzdJxcXGArzm8",
    authDomain: "chatting-app-77c49.firebaseapp.com",
    projectId: "chatting-app-77c49",
    storageBucket: "chatting-app-77c49.appspot.com",
    messagingSenderId: "252737472362",
    appId: "1:252737472362:web:7581e6aa4877cbeba78713",
    measurementId: "G-Q9WMP33QFD"
})

const db = firebaseApp.firestore()  
const auth = firebase.auth()

export {db , auth}
