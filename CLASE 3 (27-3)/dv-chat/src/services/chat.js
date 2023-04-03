// servicio para manejar todas las funcionalidades relativas al chat
//entre sus obligaciones, esta la de ser una capa de abstraccion con respecto a Firebase.

import { db } from "./firebase.js";
import {
  addDoc,
  collection,
  serverTimestamp,
  query,
  orderBy,
  onSnapshot,
} from "firebase/firestore";

/**
 * guarda mensaje en la base de datos.
 * @param {username: string, message: string} data
 * @returns {Promise<null>}
 */
export function sendMessage(data) {
  const chatRef = collection(db, "minichat");

  return (
    addDoc(chatRef, {
      ...data,
      created_at: serverTimestamp(),
    })
      //este then que retorne null, lo hacemos para que no se nos "escape" la referencia al documento que el metodo addDoc retorna, como resultado a la promesa.
      .then(() => null)
      .catch((err) => {
        console.error(
          "[chat.js sendMessage] Error al enviar el mensaje. ",
          err
        );
        throw err;
      })
  );
}

/**
 * crea una suscripcion para recibir los mensajes de chat.
 * cada vez que haya nuevos mensajes, se ejecuta la funcion callback, la que recibe los mensajes como un array de objetos.
 *
 * @param {(messages: [{username: string, message: string, created_at: Date}])} callback
 */
export function subscribeToChatMessages(callback) {
  const chatRef = collection(db, "minichat");
  const q = query(chatRef, orderBy("created_at"));

  onSnapshot(q, (snapshot) => {
    const output = [];

    snapshot.forEach((doc) => {
      output.push({
        username: doc.data().username,
        message: doc.data().message,
        created_at: doc.data().created_at.toDate(),
      });
    });

    //invocamos la funcion de callback que nos pasaron como argumento y le proveemos con los mensajes
    //parseados

    callback(output);
  });
}
