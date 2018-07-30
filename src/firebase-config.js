const Rebase = require('re-base')
const firebase = require('firebase')

const FirebaseConfig = {
    apiKey: "AIzaSyDgl5-BL0LbBGHKSJVP6N0U-IIXGyR4ggQ",
    authDomain: "portfolio-9e542.firebaseapp.com",
    databaseURL: "https://portfolio-9e542.firebaseio.com",
    projectId: "portfolio-9e542",
    storageBucket: "portfolio-9e542.appspot.com",
    messagingSenderId: "837199022650"
  };

  const app = firebase.initializeApp(FirebaseConfig)
  const config = Rebase.createClass(app.database())
  
  export const storage = app.storage() 
  export const auth = app.auth()
  export default config