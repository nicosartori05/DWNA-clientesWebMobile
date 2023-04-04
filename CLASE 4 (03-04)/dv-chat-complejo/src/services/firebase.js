import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDkGUBQdVRFBnIEe3dmX2rEFO5roHyi9Y0",
  authDomain: "dw-1-prueba.firebaseapp.com",
  projectId: "dw-1-prueba",
  storageBucket: "dw-1-prueba.appspot.com",
  messagingSenderId: "647725318919",
  appId: "1:647725318919:web:d3ef1fa2404b6588f13ba2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { app, db };
