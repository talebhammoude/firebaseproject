// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getDatabase, ref, onValue} from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdAnlmX_mxn81UBIBOdlpZdiSmAjzmH10",
  authDomain: "fe21-js2-801d6.firebaseapp.com",
  databaseURL: "https://fe21-js2-801d6-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "fe21-js2-801d6",
  storageBucket: "fe21-js2-801d6.appspot.com",
  messagingSenderId: "150869399051",
  appId: "1:150869399051:web:de572bfe1333dcd22d990e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



 
const db = getDatabase(app); //Databasen
const dbRef = ref(db); //En referens till hela databasen
 
onValue(dbRef, (snapshot) => {
  //Vi får tillbaka en snapshot av databasen vid tidpunkten av ändringen
 
  //vi kommer åt en lokal kopia av databasens innehåll i form av JS-objekt genom .val()
  const data = snapshot.val();
  console.log(data);
});


