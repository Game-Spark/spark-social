// Your Firebase configuration and initialization
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.0/firebase-app.js';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.6.0/firebase-auth.js';

const firebaseConfig = {
  apiKey: "AIzaSyCm7rdQlGd-nO7mePxT2vHnY4H1hawE9ks",
  authDomain: "spark-social-ded5c.firebaseapp.com",
  projectId: "spark-social-ded5c",
  storageBucket: "spark-social-ded5c.firebasestorage.app",
  messagingSenderId: "708647311925",
  appId: "1:708647311925:web:3678cffc795d6205a7ef7c",
  measurementId: "G-ZSH71RCB1E"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Show Login Form
function showLogin() {
  document.getElementById('authForm').style.display = 'block';
  document.getElementById('authTitle').textContent = 'Login';
  document.getElementById('authFormContent').onsubmit = function (e) {
    e.preventDefault();
    loginUser();
  };
}

// Show Signup Form
function showSignup() {
  document.getElementById('authForm').style.display = 'block';
  document.getElementById('authTitle').textContent = 'Signup';
  document.getElementById('authFormContent').onsubmit = function (e) {
    e.preventDefault();
    signupUser();
  };
}

// Signup function
function signupUser() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log('User created:', userCredential.user);
      closeAuthForm();
    })
    .catch((error) => {
      console.log('Error during signup', error);
    });
}

// Login function
function loginUser() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log('User logged in:', userCredential.user);
      closeAuthForm();
    })
    .catch((error) => {
      console.log('Error during login', error);
    });
}

// Close authentication form
function closeAuthForm() {
  document.getElementById('authForm').style.display = 'none';
}
