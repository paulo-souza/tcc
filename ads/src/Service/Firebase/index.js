import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBeHW_Dg8voFyYO7gaCRi2470rOEPSPiK0",
    authDomain: "tcc-ads-8e992.firebaseapp.com",
    projectId: "tcc-ads-8e992",
    storageBucket: "tcc-ads-8e992.appspot.com",
    messagingSenderId: "980041213450",
    appId: "1:980041213450:web:d8d57d953572f92f45e1f3"
  };

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);   
    firebase.auth().useDeviceLanguage(); 
}

const auth = firebase.auth();
const database = firebase.database();
const storage = firebase.storage();

export default firebase;
export { auth, database, storage }; 

