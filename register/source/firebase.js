import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";
import { getFirestore, collection, getDocs, doc, setDoc } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-firestore.js";


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
const db = getFirestore(app);
const usernames = [];
const emails = [];

const getUsers = async () => {
  try {
    const usersRef = collection(db, "users");
    const querySnapshot = await getDocs(usersRef);

    querySnapshot.forEach((doc) => {
      const data = doc.data();
      usernames.push(data.displayName);
      emails.push(data.email);
    });

  } catch (error) {
    console.log("Error getting users:", error);
  }
};

getUsers();

let nextBTN = document.getElementById("next-btn");
let step = 1;
let username, email, password, passwordConfirm;

[...document.querySelectorAll("input")].map((element) => {
  element.addEventListener("keydown", function(){

    [...document.querySelectorAll(".error")].map((element) => {
      element.innerText = "";
    })

    element.classList.remove("border-red-700");
    element.classList.remove("shadow-red-700");
    element.classList.add("border-black");
  });
})

nextBTN.addEventListener("click", function(){
    if(step === 1){
      let usernameInput = document.getElementById("username-input");
      let emailInput = document.getElementById("email-input");

      const usernameError = document.getElementById("username-error");
      const emailError = document.getElementById("email-error");

      usernameError.innerText = "";
      usernameInput.classList.remove("border-red-700");
      usernameInput.classList.remove("shadow-red-700");
      usernameInput.classList.add("border-black");

      emailError.innerText = "";
      emailInput.classList.remove("border-red-700");
      emailInput.classList.remove("shadow-red-700");
      emailInput.classList.add("border-black");


      if(usernameInput.value === ""){
        usernameError.innerText = "Enter a username";

        usernameInput.classList.add("border-red-700");
        usernameInput.classList.add("shadow-red-700");
        usernameInput.classList.remove("border-black");
        return;
      }

      if(emailInput.value === ""){
        emailError.innerText = "Enter an E-mail";

        emailInput.classList.add("border-red-700");
        emailInput.classList.add("shadow-red-700");
        emailInput.classList.remove("border-black");
        return;
      }

      username = usernameInput.value;
      email = emailInput.value;

      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      const validateEmail = (email) => {
        return String(email)
          .toLowerCase()
          .match(re);
      };

      if(usernames.includes(username.toLowerCase())){
        usernameError.innerText = "Username already exists";

        usernameInput.classList.add("border-red-700");
        usernameInput.classList.add("shadow-red-700");
        usernameInput.classList.remove("border-black");
        return;
      }

      if(emails.includes(email.toLowerCase())){
        emailError.innerText = "E-mail already exists";

        emailInput.classList.add("border-red-700");
        emailInput.classList.add("shadow-red-700");
        emailInput.classList.remove("border-black");
        return;
      }

      if(!validateEmail(email)){
        emailError.innerText = "Enter a valid E-mail";

        emailInput.classList.add("border-red-700");
        emailInput.classList.add("shadow-red-700");
        emailInput.classList.remove("border-black");
        return;
      }

      step++;

      document.querySelectorAll(".step")[0].classList.add("text-green-800");
      document.querySelectorAll(".step")[1].classList.remove("text-slate-700");

      let stepOneContainer = document.getElementById("step-one-container");
      let stepTwoContainer = document.getElementById("step-two-container");

      stepOneContainer.classList.add("hidden");
      stepTwoContainer.classList.remove("hidden");
    }
    else if(step === 2){
      step++;

      let stepTwoContainer = document.getElementById("step-two-container");
      let stepThreeContainer = document.getElementById("step-three-container");

      document.querySelectorAll(".step")[1].classList.add("text-green-800");
      document.querySelectorAll(".step")[2].classList.remove("text-slate-700");

      stepTwoContainer.classList.add("hidden");
      stepThreeContainer.classList.remove("hidden");
    }
    else if(step === 3){
      let passwordInput = document.getElementById("password-input");
      let passwordConfirmInput = document.getElementById("confirm-password-input");

      password = passwordInput.value;
      passwordConfirm = passwordConfirmInput.value;

      const re = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

      const validatePassword = (password) => {
        return String(password)
          .match(re);
      };

      if(password !== passwordConfirm){
        return;
      }

      if(!validatePassword(password)){
        console.log("Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number and one special character");
        console.log(password)
        return;
      }


      step++;

      let stepThreeContainer = document.getElementById("step-three-container");
      let stepFourContainer = document.getElementById("step-four-container");

      stepThreeContainer.classList.add("hidden");
      stepFourContainer.classList.remove("hidden");

      let nextBTN = document.getElementById("next-btn");
      let finishBTN = document.getElementById("finish-btn");

      document.querySelectorAll(".step")[2].classList.add("text-green-800");
      document.querySelectorAll(".step")[3].classList.remove("text-slate-700");

      nextBTN.classList.add("hidden");
      finishBTN.classList.remove("hidden");
    }
});

let finishBTN = document.getElementById("finish-btn");
let form = document.getElementById("form");

form.addEventListener("keydown", function(event) {
  if (event.code === "Enter") { // 13 is the key code for Enter
    event.preventDefault();
    return false;
  }
});

finishBTN.addEventListener("click", function(event){
  event.preventDefault();
  createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
      const user = userCredential.user;

      setDoc(doc(db, "users", user.uid),{
        uid: user.uid,
        displayName: username,
        email: email
      });

      updateProfile(user, {
          displayName: username
      }).then(() => {
        form.submit();
    });
  })
  .catch((error) => {
      let errorCode = error.code;
      console.log(errorCode);
  });
});



