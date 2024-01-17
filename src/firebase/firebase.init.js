// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-nuOqW5ndXF01RxeCOM93TsW1A5EOLVg",
  authDomain: "simple-daily-news-project.firebaseapp.com",
  projectId: "simple-daily-news-project",
  storageBucket: "simple-daily-news-project.appspot.com",
  messagingSenderId: "1020347838063",
  appId: "1:1020347838063:web:111f16d43699585045679a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;