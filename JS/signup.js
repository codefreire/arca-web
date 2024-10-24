import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js';
import {sendEmailVerification, getAuth, createUserWithEmailAndPassword, updateProfile } from 'https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js';

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

document.getElementById("signupForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;

    createUserWithEmailAndPassword(auth, email, password)
    .then(cred => {
        sendEmailVerification(auth.currentUser).then(() => {
            alert("Se ha enviado un correo de verificación. Por favor, verifica tu cuenta.");
        });
        setTimeout(() => {
            window.location.href = "../index.html";
        }, 3000);
    }).catch(error => {
        const errorCode = error.code;
        console.log(error);
        if(errorCode === "auth/email-already-in-use") {
            alert("El correo ya está en uso");
        } else if(errorCode === 'auth/weak-password') {
            alert("La contraseña debe tener al menos 6 caracteres");
        }
    });
});



