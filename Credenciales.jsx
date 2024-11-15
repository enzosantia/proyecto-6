// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBVWKPUstZ1yjcbJFH5kralJuX-nrlMalI",
  authDomain: "proyecto-skibidi-bd.firebaseapp.com",
  projectId: "proyecto-skibidi-bd",
  storageBucket: "proyecto-skibidi-bd.appspot.com",
  messagingSenderId: "186612984896",
  appId: "1:186612984896:web:cdfb723db127c6c785c3a5",
  measurementId: "G-LW87Z897FD",
  mapsKey: "APIGOOGLEMAPS"
};

const database = initializeApp(firebaseConfig);
const appFirebase = getDatabase(database); // Obtener la referencia a la base de datos

export { appFirebase }

/**
 *  el codigo fue copiado y pegado de la pagina oficial de firebase, salbo algunas pocas modificaciones como getDatabase
 */