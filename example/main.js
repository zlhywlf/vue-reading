import { createApp } from "vue";
import { createVuetify } from "vuetify";
import App from "./App.js";

const app = createApp(App);
app.use(createVuetify());
app.mount("#app");
