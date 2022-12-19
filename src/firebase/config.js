import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyBGKDIxh-4AFkK7qNDSY-7Q8mpXYkD3zM0",
    authDomain: "olx-clone-57b53.firebaseapp.com",
    projectId: "olx-clone-57b53",
    storageBucket: "olx-clone-57b53.appspot.com",
    messagingSenderId: "969353400959",
    appId: "1:969353400959:web:bc697242c6a184cfe7254a",
    measurementId: "G-QYNYGZ8M28"
  };

export default firebase.initializeApp(firebaseConfig)