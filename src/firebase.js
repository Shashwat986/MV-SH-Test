import { initializeApp } from "firebase/app";
import { getDatabase, push, get, set, remove, ref as dbRef } from 'firebase/database'

const firebaseConfig = {
  apiKey: "AIzaSyC8tne9IlUq_Wt-nTH1ZUhP_rRsnqcPQks",
  authDomain: "mv-test-531a6.firebaseapp.com",
  projectId: "mv-test-531a6",
  storageBucket: "mv-test-531a6.appspot.com",
  messagingSenderId: "1059321271037",
  appId: "1:1059321271037:web:3da495575653c13ed5a494",
  databaseURL: "https://mv-test-531a6-default-rtdb.firebaseio.com"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

export const db = getDatabase(firebaseApp)

export const firebaseWriter = {
    db,
    ref (key) {
        return dbRef(db, key)
    },
    set (key, val) {
        console.log(key, val)
        set(dbRef(db, key), val)
    },
    push (key, val) {
        const newV = push(dbRef(db, key))
        set(newV, val)
    },
    del (key) {
        remove(dbRef(db, key))
    }
}

window.db = db
window.dbRef = dbRef
window.get = get
