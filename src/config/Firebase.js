// import { initializeApp } from "firebase/app";
// import firebase from "firebase/compat/app";
// import "firebase/compat/auth";
// import "firebase/compat/firestore";
// import "firebase/compat/storage";
// import {
//   getAuth,
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
// } from "firebase/auth";
// import {
//   getFirestore,
//   collection,
//   setDoc,
//   getDoc,
//   getDocs,
//   query,
//   doc,
//   addDoc,
// } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyAOimcS1NYumd7B57NmzkZuUXHlX6V7vCk",
//   authDomain: "olx-mobile-app-ea572.firebaseapp.com",
//   projectId: "olx-mobile-app-ea572",
//   storageBucket: "olx-mobile-app-ea572.appspot.com",
//   messagingSenderId: "770404907597",
//   appId: "1:770404907597:web:26f1a0faff08313a48fa04",
//   measurementId: "G-3R6V1JPPK2",
// };

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const db = getFirestore(app);

// const userRegister = async (form) => {
//   const { name, email, password } = form;
//   const result = await createUserWithEmailAndPassword(auth, email, password);
//   const uid = result.user.uid;
//   await setDoc(doc(db, "users", uid), {
//     name,
//     email,
//     uid,
//   });
//   console.log("signup", result);
// };

// const userSignIn = async (email, password) => {
//   const result = await signInWithEmailAndPassword(auth, email, password);
//   console.log("signin", result);
// };

// const addsPostDb = async (adds) => {
//   try {
//     const docRef = await addDoc(collection(db, "adds"), {
//       adds,
//     });
//     console.log("Document written with ID: ", docRef.id);
//   } catch (e) {
//     console.error("Error adding document: ", e);
//   }
// };

// async function getAdds() {
//   const q = query(collection(db, "adds"));
//   const querySnapshot = await getDocs(q);
//   let data = [];
//   querySnapshot.forEach((doc) => {
//     // data = [...data, doc.data()]
//     const ad = { ...doc.data(), id: doc.id };
//     console.log("ad", data);
//     data.push(ad);
//   });
//   console.log("firebase", data);
//   return data;
// }

// export { userRegister, userSignIn, addsPostDb, getAdds, db, firebase };
