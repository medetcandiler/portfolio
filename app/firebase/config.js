import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDpEvX1crjm7VokAjRw341ANRDhwlY1aqw",
  authDomain: "my-portfolio-8772d.firebaseapp.com",
  projectId: "my-portfolio-8772d",
  storageBucket: "my-portfolio-8772d.appspot.com",
  messagingSenderId: "623141335546",
  appId: "1:623141335546:web:ee7d3f9dad8b9b2644b443"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);