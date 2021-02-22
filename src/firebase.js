import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const app = firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  // databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
});

const firestore = app.firestore()

export const auth = app.auth()

// limiting what user has access to within the firestore
export const db = {
  folders: firestore.collection('folders'),
  files: firestore.collection('files'),
  formatDoc: doc => {
    return { id: doc.id, ...doc.data() }
  },
  getCurrentTimeStamp: firebase.firestore.FieldValue.serverTimestamp,
}

export default app
