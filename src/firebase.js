// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage' // Import getStorage

import secrets from './secrets'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: secrets.firebaseConfig.apiKey,
  authDomain: secrets.firebaseConfig.authDomain,
  projectId: secrets.firebaseConfig.projectId,
  storageBucket: secrets.firebaseConfig.storageBucket,
  messagingSenderId: secrets.firebaseConfig.messagingSenderId,
  appId: secrets.firebase,
  measurementId: secrets.firebaseConfig.measurementId
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize Firestore Database
const db = getFirestore(app)

// Initialize Firebase Storage
const storage = getStorage(app)

export { app, db, storage }
