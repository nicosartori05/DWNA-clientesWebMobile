
<script>
import { subscribeToChatMessages, sendMessage } from "../services/chat.js";
export default {
    name: 'Chat',
    /*
    el 'data' define el "state" del componente.
    en informatica, nos referimos como "state" a los datos que pertenecen a una pieza de sofrtware, como puede ser un programa, un componente, etc.
    en frameworks como Vue, tipicamente consideramos al state como los datos que pertenecen especificamente al componente, que no puede recibir de un componente padre("props")
    y que pueden variar con el tiempo
    la propiedad data, recibe como valor una funcion que retorna una objeto con la data inicial del state
    */
    data: () => ({
        initialLoading: true,
        messages: [],
        form: {
            username: "",
            message: "",
        },
        formLoading: false,
    }),

    methods: {
        sendMessage(){
            this.formLoading = true;
            sendMessage({
                ...this.form
            })
            .then(() => {
                this.form.message = "";
            })
        }
    },

    //mounted es parte ed las funciones del ciclo de vida(life-cycle functions) de un componente.
    mounted(){
        subscribeToChatMessages(messages => {
            this.initialLoading = false,
            this.messages = messages;  
        });
    },
    };
</script>  


<template>
     <h1>Mi chat!</h1>
        <div class="row">
            <div id="chat" class="col-8 mb-3">
                <p v-if="initialLoading">Cargando...</p>
                <ul v-else>
                    <li v-for = "message in messages">
                        <b>{{message.username}} dijo: </b>{{message.message}}
                    </li>
                </ul>
            </div>
            <div class="col-4 mb-3">
                <form action="#" id="form-message" method="post" @submit.prevent="sendMessage">
                <div class="mb-3">
                    <label for="username" class="form-label">Usuario</label>
                    <input type="text" id="username" class="form-control" v-model="form.username" />
                </div>
                <div class="mb-3">
                    <label for="message" class="form-label">Mensaje</label>
                    <textarea
                    type="text"
                    id="message"
                    class="form-control"
                    v-model="form.message"
                    ></textarea>
                </div>

                <button type="submit" class="btn btn-primary">Enviar</button>
                </form>

                <div v-if="formLoading" class="mb-3">
                    <p>Enviando Mensaje...</p>
                </div>
            </div>
        </div>
</template>  