import { db } from "./firebase.js";
import { addDoc, collection} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

export const registrarp = async(usuario)=>{
    const docRef = await addDoc(collection(db, "usuario"),usuario);;
}
