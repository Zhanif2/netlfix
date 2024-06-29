// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBLzLBEteZl-_6lZWtPFLpNFRz2CIByEJc",
    authDomain: "netflixclone-89e55.firebaseapp.com",
    projectId: "netflixclone-89e55",
    storageBucket: "netflixclone-89e55.appspot.com",
    messagingSenderId: "903812367748",
    appId: "1:903812367748:web:1151118f4965adcfa1c9d1"
  };
// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }