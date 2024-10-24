import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js';
import { getAuth, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js';

const firebaseConfig = {
  apiKey: "AIzaSyBKkEEQd6F0DSJiRPZDtv8EfdgUcAEt4AM",
  authDomain: "arca-lobos.firebaseapp.com",
  projectId: "arca-lobos",
  storageBucket: "arca-lobos.appspot.com",
  messagingSenderId: "425836731918",
  appId: "1:425836731918:web:7acb23357909e02be5e65f"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const emailField = event.target.email;
    const passwordField = event.target.password;
    const email = emailField.value;
    const password = passwordField.value;

    signInWithEmailAndPassword(auth, email, password)
    .then(cred => {
        if (cred.user.emailVerified) {
            window.location.href = "./HTML/homePage.html";
        } else {            
            auth.signOut();
        }
    }).catch(error => {
        alert("Correo o contraseña incorrectas");
        emailField.value = "";
        passwordField.value = "";
    });
});