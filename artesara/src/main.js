import { createApp } from 'vue'
import App from './App.vue'
import VueRouter from './router'
import $ from 'jquery'
import 'bootstrap-icons/font/bootstrap-icons';
import 'bootstrap-icons/font/bootstrap-icons.css'
// import { BootstrapVue } from 'bootstrap-vue'


// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

const app = createApp(App)

app.use(VueRouter)
app.use($)
// app.use(BootstrapVue)

app.mount('#app')
