import{createApp} from "vue";
import App from "./App.vue";
import router from "./router/router.js"

const app = createApp(App);

//declaramos que nuestra app de vue debe utilizar el router. esto hace que este disponible en todos los componentes
//  

app.use(router);

app.mount('#app');