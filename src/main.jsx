import React from 'react'
import { initializeApp } from "firebase/app";
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

//! Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA5NXyY7mbkUAzI9k-FAugpJcg9y8wgpfc",
    authDomain: "artistas-1c8be.firebaseapp.com",
    projectId: "artistas-1c8be",
    storageBucket: "artistas-1c8be.appspot.com",
    messagingSenderId: "16002815233",
    appId: "1:16002815233:web:7a4927379dc796776fb700"
  };

//! Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
