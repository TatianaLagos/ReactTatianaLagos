// src/config/firebase.js

import { initializeApp } from "firebase/app";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { productos } from "../data/asyncMock";  // Importa tu array de productos

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAU4ku7fmlA4ZpCOEzT_M3OSYaWDBnGNM",
  authDomain: "entregafinaltatianalagos2.firebaseapp.com",
  projectId: "entregafinaltatianalagos2",
  storageBucket: "entregafinaltatianalagos2.appspot.com",
  messagingSenderId: "258999267226",
  appId: "1:258999267226:web:dfe5c7a8e1345568a2d423"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

//const insertarProductos = async () => {
 // try {
   // const coleccionProductos = collection(db, "productos");
    //for (const prod of productos) {
     // const docRef = await addDoc(coleccionProductos, prod);
     // console.log(`Producto agregado con ID: ${docRef.id}`);
   // }
   // console.log("Todos los productos se han agregado correctamente.");
  //} catch (error) {
  //  console.error("Error agregando el producto: ", error);
  //}
//};

// Llamar a la función para insertar productos
//insertarProductos();


