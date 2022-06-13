import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyBHvStUiO9O3rDWTRC5SQqVRhbj5PQLJKQ",
  authDomain: "docs-next-77ed6.firebaseapp.com",
  projectId: "docs-next-77ed6",
  storageBucket: "docs-next-77ed6.appspot.com",
  messagingSenderId: "603295215094",
  appId: "1:603295215094:web:79804adfd1392b15186bd7",
};

// Initialize Firebase
const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const db = getFirestore(app);
const storage = getStorage(app);

export { app, db, storage };
