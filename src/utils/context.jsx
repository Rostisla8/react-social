import { createContext} from "react";

import React from 'react';
import firebase from "firebase"; 
import 'firebase/firestore'
import 'firebase/auth'


export const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyCSrnOtV7OuI8uy8ZaXq8C2On4fReDZ2ww",
  authDomain: "brest-news.firebaseapp.com",
  projectId: "brest-news",
  storageBucket: "brest-news.appspot.com",
  messagingSenderId: "273580256148",
  appId: "1:273580256148:web:89ee00785e159d4d293d81"
});


const auth = firebase.auth()
const firestore = firebase.firestore()

export const Context = createContext();

export const ContextProvider = ({children}) =>{
    return (
        <Context.Provider value = {{auth , firestore}} >{children}</Context.Provider>
    )
}





