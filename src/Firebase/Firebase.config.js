// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSkERNf_o3HuekFiYVxVbsh2RwscQI_Is",
  authDomain: "library-management-82f5a.firebaseapp.com",
  projectId: "library-management-82f5a",
  storageBucket: "library-management-82f5a.appspot.com",
  messagingSenderId: "386604442926",
  appId: "1:386604442926:web:20e3973b773b56fe46c6bf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app