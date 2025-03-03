import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDuTy4VRCwF1iO83xAHsgA06Sr2NGkaDZ4",
  authDomain: "club-ecommerce-e9191.firebaseapp.com",
  projectId: "club-ecommerce-e9191",
  storageBucket: "club-ecommerce-e9191.firebasestorage.app",
  messagingSenderId: "1077133574883",
  appId: "1:1077133574883:web:c307548413aeea0887bbd6",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
