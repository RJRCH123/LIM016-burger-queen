import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAuth } from 'firebase/auth';

/* const firebaseConfig = {
    apiKey: "AIzaSyAznpwdMl-5qy1VPHc2YNbv62rRZ1VkJVk",
    authDomain: "burger-queen-karma.firebaseapp.com",
    projectId: "burger-queen-karma",
    storageBucket: "burger-queen-karma.appspot.com",
    messagingSenderId: "602431561617",
    appId: "1:602431561617:web:053735a5891830c4424430"
}; */

// Your web app's Firebase configuration  LLAVE DE PRUEBA 2
const firebaseConfig = {
    apiKey: "AIzaSyBEsogL6UHnmzTG5S1497bsmA6NgK6qdFs",
    authDomain: "burger-karma.firebaseapp.com",
    projectId: "burger-karma",
    storageBucket: "burger-karma.appspot.com",
    messagingSenderId: "481727358955",
    appId: "1:481727358955:web:2efb981da38b79f035dbae"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);
export const storage = getStorage(app);


