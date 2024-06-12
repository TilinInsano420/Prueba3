import { db } from "./firebase.js";
import { addDoc, collection, getDocs, updateDoc, doc ,deleteDoc} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

export const registrarp = async(usuario)=>{
    const docRef = await addDoc(collection(db, "usuario"),usuario);
}

export const Recargador = async()=>{
    //Recuperar la ref (ruta)
    const ref = collection(db, "usuario")
    //Recupera una captura de la misma base de datos
    const qSnap = await getDocs(ref)
    let listado = []
    qSnap.forEach((doc) => {
        console.log(doc.data());
        listado.push({...doc.data(),id:doc.id})
    });
    return listado;
}

export const actualizaru = async(objeto,id)=>{
    const ref = doc(db,"usuario",id);
    await updateDoc(ref,objeto)
}

export const eliminar = async(id)=>{
    const ref = doc(db,"usuario",id);
    await deleteDoc(ref);
}