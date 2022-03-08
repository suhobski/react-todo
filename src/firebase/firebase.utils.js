import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDYiQrs4w2o5jVLhAc5xSvJQmii_ODv980',
  authDomain: 'todos-db-75bf3.firebaseapp.com',
  projectId: 'todos-db-75bf3',
  storageBucket: 'todos-db-75bf3.appspot.com',
  messagingSenderId: '566019119463',
  appId: '1:566019119463:web:b65be838805a177cecf7c2',
  measurementId: 'G-FCK6JQ3GD2',
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error cteacting user', error.message);
    }
  }

  // eslint-disable-next-line consistent-return
  return userRef;
};

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
