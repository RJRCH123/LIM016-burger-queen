import { initializeApp } from "firebase/app";
import { getFirestore, enableIndexedDbPersistence } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAznpwdMl-5qy1VPHc2YNbv62rRZ1VkJVk",
    authDomain: "burger-queen-karma.firebaseapp.com",
    projectId: "burger-queen-karma",
    storageBucket: "burger-queen-karma.appspot.com",
    messagingSenderId: "602431561617",
    appId: "1:602431561617:web:053735a5891830c4424430"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

enableIndexedDbPersistence(db)
    .catch((err) => {
        if (err.code == 'failed-precondition') {
            // Multiple tabs open, persistence can only be enabled
            // in one tab at a a time.
            // ...
        } else if (err.code == 'unimplemented') {
            // The current browser does not support all of the
            // features required to enable persistence
            // ...
        }
    });

export const auth = getAuth();
export { db };
export const storage = getStorage(app);


