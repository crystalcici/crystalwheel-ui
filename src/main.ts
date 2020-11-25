import {createApp} from 'vue';
import App from './App.vue';
import './index.css';
import {createWebHashHistory, createRouter} from 'vue-router';
import wheel from './components/wheel.vue';
import wheel2 from './components/wheel2.vue';

const history = createWebHashHistory();
const router = createRouter({
  history: history,
  routes: [
    {path: '/', component: wheel},
    {path: '/wheel2', component: wheel2},
  ],
});

// createApp(App).mount('#app');
const app = createApp(App);
app.use(router);
app.mount('#app');
