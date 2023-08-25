
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyDojwiFVXg_ODi-2c3gVW8SDTKYWDmgsoA",
  authDomain: "drunken-d21b2.firebaseapp.com",
  projectId: "drunken-d21b2",
  storageBucket: "drunken-d21b2.appspot.com",
  messagingSenderId: "626232112754",
  appId: "1:626232112754:web:30f57285783e8a52dff4eb",
  measurementId: "G-9EQ4QZS9YN"
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const storage = getStorage(app)
const db = getFirestore(app)
export { storage, db };
