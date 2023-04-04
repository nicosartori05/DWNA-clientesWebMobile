import Home from '../views/home.vue';
import Chat from '../views/chat.vue';
import Login from '../views/login.vue';
import Register from '../views/register.vue';
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/chat",
    component: Chat,
  },
  {
    path: "/iniciar-sesion",
    component: Login,
  },
  {
    path: "/registro",
    component: Register,
  },
];

const router = createRouter({
    routes,
    //history define como funciona la navegacion el Vue Router.
    //Puede ser con createWebHashHistory() o con createWebHistory()
    //el primero, q ue es el que vamos a usar, maneja la navegacion de las pantallas con el "hash" de la URL.
    /*
    por ejemplo:
    http://localhost/#/
    http://localhost/#/chat

    el segundo, maneja las rutas usando la API de JS ed History, generando URLS amigables. por ejemplo:
    http://localhost/
    http://localhost/chat
    porque usamos la version hash y no la amigable? 
    porque requiere un setup especial de backend. Tenemos que tener un servidor ocn nodeJS y con soporte para Vue y SSR(SERVER-SIDE Rendering).
    como no tenemos eso y no es el foco de la materia, nos vamos a manejar con el "hash".
    */
    history: createWebHashHistory(),
})

export default router;