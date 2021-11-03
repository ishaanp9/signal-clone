import firebase from 'firebase/app'
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAWTNHG3-mfhxWVT7FOD12rsexo6lYkhxw",
    authDomain: "signal-clone-44403.firebaseapp.com",
    projectId: "signal-clone-44403",
    storageBucket: "signal-clone-44403.appspot.com",
    messagingSenderId: "994105672833",
    appId: "1:994105672833:web:91c12054af55ac78b43980"
  };

  let app;

  if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig)
  } else {
    app = firebase.app();
  }

  const db = app.firestore();
  const auth = firebase.auth();

  export { db, auth};