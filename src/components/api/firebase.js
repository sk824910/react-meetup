
import firebase from "firebase";




// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWcQPgUIetPtUuUa8DJGSye8-9C0XZ2eQ",
  authDomain: "react-project-fea92.firebaseapp.com",
  databaseURL: "https://react-project-fea92-default-rtdb.firebaseio.com",
  projectId: "react-project-fea92",
  storageBucket: "react-project-fea92.appspot.com",
  messagingSenderId: "552858351678",
  appId: "1:552858351678:web:851017e20a14f50259f96f",
  measurementId: "G-53D0Z22GSB",
};


const signInWithGoogle = async () => {
  try {
    const res = await auth.signInWithPopup(googleProvider);
    const user = res.user;
    const query = await db
      .collection("users")
      .where("uid", "==", user.uid)
      .get();
    if (query.docs.length === 0) {
      await db.collection("users").add({
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};


const signInWithEmailAndPassword = async (email, password) => {
  try {
    await auth.signInWithEmailAndPassword(email, password);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};


const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await auth.createUserWithEmailAndPassword(email, password);
    const user = res.user;
    await db.collection("users").add({
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};


const sendPasswordResetEmail = async (email) => {
  try {
    await auth.sendPasswordResetEmail(email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};


const logout = () => {
  auth.signOut();
};





const app = firebase.initializeApp(firebaseConfig);
const auth = app.auth();
const db = app.firestore();

const googleProvider = new firebase.auth.GoogleAuthProvider();


export {
  auth,
  db,
  signInWithEmailAndPassword,
  signInWithGoogle,
  registerWithEmailAndPassword,
  sendPasswordResetEmail,
  logout,
  firebaseConfig,
};
