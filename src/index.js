import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyBZUts_2TyuemEY34rq48b8iVFQwwMWrvk",
    authDomain: "hellovisitors-backend.firebaseapp.com",
    projectId: "hellovisitors-backend",
    storageBucket: "hellovisitors-backend.appspot.com",
    messagingSenderId: "287797356475",
    appId: "1:287797356475:web:5dbe1ba16c687d985b869e",
    measurementId: "G-XVJ4VG13GP",
    databaseURL:
        "https://hellovisitors-backend.asia-southeast1.firebasedatabase.app",
};

export const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
