import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'

// Avoid this line to prevent duplicate entries
// import { seedDatabase } from '../seed';

// Seed the database

const config = {
    apiKey: "AIzaSyAvr5rBmRhA_E85z1gx6G6RCJzbz7eBMp4",
    authDomain: "netflix-clone-cbdf8.firebaseapp.com",
    projectId: "netflix-clone-cbdf8",
    storageBucket: "netflix-clone-cbdf8.appspot.com",
    messagingSenderId: "201673203024",
    appId: "1:201673203024:web:7eaa17eb02f5679411e055"
};

const firebase = Firebase.initializeApp(config);

// Avoid this line to prevent duplicate entries
// seedDatabase(firebase);

export { firebase };