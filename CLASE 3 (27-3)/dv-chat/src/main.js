import { sendMessage, subscribeToChatMessages } from "./services/chat.js";

//   MANEJAMOS EL FORM

const form = document.getElementById("form-message");
const username = document.getElementById("username");
const message = document.getElementById("message");
const feedback = document.getElementById("feedback");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  feedback.innerHTML = "Enviando...";
  const data = {
    username: username.value,
    message: message.value,
  };

  sendMessage(data)
    .then(() => {
      feedback.innerHTML = "";
      message.value = "";
    })
    .catch((err) => {
      feedback.innerHTML = "Ocurrio un error al enviar el mensaje.";
    });
});

const chat = document.getElementById("chat");

subscribeToChatMessages((messages) => {
  const messageList = [];

  messages.forEach((message) => {
    messageList.push(`<li>
                          <b> ${message.username} dijo: </b>${message.message}
                      <li>`);
  });
  chat.innerHTML = `<ul>${messageList.join("")}</ul>`;
});
