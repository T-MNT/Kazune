// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const app = firebase.initializeApp({
  apiKey: 'AIzaSyC-RAK1kxfrBmmuJQswOfOag0fDsDq0pgw',
  authDomain: 'naruto-data.firebaseapp.com',
  databaseURL:
    'https://naruto-data-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'naruto-data',
  storageBucket: 'naruto-data.appspot.com',
  messagingSenderId: '611188670934',
  appId: '1:611188670934:web:d5002cf5dfbe5515b32477',
});

// Initialize Firebase
export default app;
