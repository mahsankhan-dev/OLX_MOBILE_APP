import firebase from "firebase/compat/app";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { initializeApp } from "firebase/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  setDoc,
  getDoc,
  getDocs,
  query,
  doc,
  addDoc,
  where,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAOimcS1NYumd7B57NmzkZuUXHlX6V7vCk",
  authDomain: "olx-mobile-app-ea572.firebaseapp.com",
  projectId: "olx-mobile-app-ea572",
  storageBucket: "olx-mobile-app-ea572.appspot.com",
  messagingSenderId: "770404907597",
  appId: "1:770404907597:web:26f1a0faff08313a48fa04",
  measurementId: "G-3R6V1JPPK2",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const userRegister = async (form) => {
  const { name, email, password, phone } = form;
  console.log("phone", name);
  const result = await createUserWithEmailAndPassword(auth, email, password);
  const uid = result.user.uid;
  await setDoc(doc(db, "users", uid), {
    phone,
    name,
    email,
    uid,
  });
  console.log("signup", result);
};

const userSignIn = async (email, password) => {
  const result = await signInWithEmailAndPassword(auth, email, password);
  console.log("signin", result);
};

const addsPostDb = async (adds) => {
  try {
    const docRef = await addDoc(collection(db, "adds"), {
      adds,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

async function getAdds() {
  const q = query(collection(db, "Add"));
  const querySnapshot = await getDocs(q);
  let data = [];
  querySnapshot.forEach((doc) => {
    // data = [...data, doc.data()]
    const ad = { ...doc.data(), id: doc.id };
    console.log("ad", ad);
    data.push(ad);
  });
  console.log("firebase", data);
  return data;
}

async function getUsers() {
  const uid = auth.currentUser.uid;
  const q = query(collection(db, "users"), where("uid", "==", uid));
  const querrySnapshot = await getDocs(q);
  let data = [];
  querrySnapshot.forEach((doc) => {
    data = [...data, doc.data()];
    console.log("User ki auth ka data ----> ", data);
  });
  return data;
}

const getAddById = async (id) => {
  const docRef = await doc(db, "Add", id);
  const docSnap = await getDoc(docRef);
  console.log("addbyId ---> ", docSnap.data());
  return docSnap.data();
};

const getUserAdd = async () => {
  const uid = auth.currentUser.uid;
  const q = query(collection(db, "Add"), where("user", "==", uid));
  const querrySnapshot = await getDocs(q);
  let data = [];
  querrySnapshot.forEach((doc) => {
    data = [...data, doc.data()];
    console.log("UserAdds ----> ", data);
  });
  return data;
};

async function getuserData(userid) {
  console.log("userid", userid);
  const docRef = doc(db, "users", userid);
  const docSnap = await getDoc(docRef);
  // setDocsnap2(docSnap.data())
  console.log("mydata", docSnap.data());
  return docSnap.data();
}

async function getUserProfileAdd(userid) {
  const q = query(collection(db, "Add"), where("user", "==", userid));
  const querrySnapshot = await getDocs(q);
  let data = [];
  querrySnapshot.forEach((doc) => {
    data = [...data, doc.data()];
    console.log("UserAdds ----> ", data);
  });
  return data;
}

async function getSearchAdd(title) {
  console.log("ok");
  const q = query(collection(db, "Add"), where("add.title", "==", title));
  const querySnapshot = await getDocs(q);
  let data = [];
  querySnapshot.forEach((doc) => {
    data = [...data, doc.data()];
    console.log("search add", doc.data());
  });
  return data;
}

export {
  userRegister,
  userSignIn,
  addsPostDb,
  getAdds,
  db,
  firebase,
  getAddById,
  getUserAdd,
  getUsers,
  auth,
  getuserData,
  getUserProfileAdd,
  getSearchAdd,
  app,
};
