import { initializeApp } from "firebase/app";
import {
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut
} from "firebase/auth";

initializeApp({
    apiKey: "AIzaSyDeLUMgNTnBvYuNbV8P5YILnDVm9l1FIoo",
    authDomain: "hello-id-provider.firebaseapp.com",
    projectId: "hello-id-provider",
    appId: "1:214834207189:web:8aeb8b58682c586f6f455c"
});
const auth = getAuth()
export {
    auth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut
}