import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const fire = firebase.initializeApp({
    apiKey: "AIzaSyAqNXXTiGCmc551DjdWfgrrnhUuuRyc888",
    authDomain: "my-app-81d5d.firebaseapp.com",
    projectId: "my-app-81d5d",
    storageBucket: "my-app-81d5d.appspot.com",
    messagingSenderId: "666888809847",
    appId: "1:666888809847:web:74521ac2f237a6572b4572",
    measurementId: "G-VVMYLE9HZ2"
});

export const auth = fire.auth();
export const db = fire.firestore();
export default {
  fire,
};