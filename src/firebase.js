// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDaVAnF1ouXEy6Ys04fZlmTwncVD1N18hk',
  authDomain: 'gear-share-687b7.firebaseapp.com',
  projectId: 'gear-share-687b7',
  storageBucket: 'gear-share-687b7.appspot.com',
  messagingSenderId: '652563073493',
  appId: '1:652563073493:web:9733c7cf19ed22f155c',
  measurementId: 'G-H7FL60N3FE'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize Firestore Database
const db = getFirestore(app)

export { app, db }
