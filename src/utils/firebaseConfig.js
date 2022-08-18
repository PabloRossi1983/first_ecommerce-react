// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxYxWfHCyFm2Flm1cXbCwZ9GfAhwdzJB4",
  authDomain: "e-commerce-pablo-rossi.firebaseapp.com",
  projectId: "e-commerce-pablo-rossi",
  storageBucket: "e-commerce-pablo-rossi.appspot.com",
  messagingSenderId: "901526825461",
  appId: "1:901526825461:web:59848af193545f569518bc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export default db;