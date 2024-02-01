import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAMVL6NQNK9597hQ0UaCfdZ7m4mrPVHECs",
  authDomain: "cubist-app.firebaseapp.com",
  projectId: "cubist-app",
  storageBucket: "cubist-app.appspot.com",
  messagingSenderId: "1009875229309",
  appId: "1:1009875229309:web:3c16d1026a9b0184b4af14",
  measurementId: "G-P0P7G2Z73D"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

await createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage);
  });