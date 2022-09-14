import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA-MDUanJriACqvinxH7sjbB3ImT3d5baI",
  authDomain: "bankapp-requejo.firebaseapp.com",
  projectId: "bankapp-requejo",
  storageBucket: "bankapp-requejo.appspot.com",
  messagingSenderId: "837578215833",
  appId: "1:837578215833:web:ba8b03ea48bc1b7641c308"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);