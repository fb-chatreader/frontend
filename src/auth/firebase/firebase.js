import app from 'firebase/app';
import 'firebase/auth';

const config = {
  //these variables might need to be in env file
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: '', //domain that will contain the auth,
  databaseURL: '', //firebase URL
  projectId: '', //firebase id for project
  storageBucket: '', // user profile storage
  messagingSenderId: '' // need to look this up, looks like app specific sender id, may need to be in env file
};

//might need to refactor this for React Hooks
class Firebase {
  constructor() {
    app.initializeApp(config);

    this.auth = app.auth();

    this.facebookProvider = new app.auth.FacebookAuthProvider();
  }
  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignInWithFacebook = () => this.auth.signInWithPopup(this.facebookProvider);
  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password => this.auth.currentUser.updatePassword(password);
}
export default Firebase;
