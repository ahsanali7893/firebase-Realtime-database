import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyA0i5bYs0apAZbsk-hnYcDirEu_oAbZzog",
  authDomain: "red-girder-395709.firebaseapp.com",
  projectId: "red-girder-395709",
  databaseURL:
    "https://red-girder-395709-default-rtdb.asia-southeast1.firebasedatabase.app/",
  storageBucket: "red-girder-395709.appspot.com",
  messagingSenderId: "945338196823",
  appId: "1:945338196823:web:d2eedaea8588efec3cd412",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
export { database };
