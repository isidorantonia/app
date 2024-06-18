 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
 import { getFirestore, addDoc,onSnapshot } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firebase.js";

 const firebaseConfig = {
  apiKey: "AIzaSyCFynsU8RaCveloyevmyA5wWDBUcHAx6xw",
  authDomain: "crud-a68c2.firebaseapp.com",
  projectId: "crud-a68c2",
  storageBucket: "crud-a68c2.appspot.com",
  messagingSenderId: "262971716580",
  appId: "1:262971716580:web:f75abc5c32f253cabdcdf1"
};


const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
export const save = (students) => {
    addDoc(collection(db,'students'))
} 
export const getData = (data) =>{
    onSnapshot(collection(db,'students'))
}








