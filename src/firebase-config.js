// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from '@firebase/firestore';
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAteEz4j5KRtF59NsibtIfYYUWkCde0oKg',
  authDomain: 'fainashop-b42a6.firebaseapp.com',
  projectId: 'fainashop-b42a6',
  storageBucket: 'fainashop-b42a6.appspot.com',
  messagingSenderId: '1028104922845',
  appId: '1:1028104922845:web:5f295dbcbc1cd3f3499d34',
  measurementId: 'G-EQTLNXGT67',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
