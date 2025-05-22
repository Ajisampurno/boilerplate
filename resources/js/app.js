// Bootstrap
import './bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

// Styles
import './assets/css/style.css';

// Datatables
import 'datatables.net-dt/css/dataTables.dataTables.css';
import 'datatables.net';

// Toastr
import 'toastr/build/toastr.min.css';
import toastr from 'toastr';

// Toastr Config
toastr.options = {
  closeButton: true,
  progressBar: true,
  positionClass: 'toast-top-right',
  timeOut: 3000,
};

// Vue & Plugins
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import axios from './plugins/axios';

// Global Components
import Modal from '@/components/Modal.vue';

const app = createApp(App);

// Register Global Components
app.component('Modal', Modal);

// Register Global Properties
app.config.globalProperties.$http = axios;
app.config.globalProperties.$toastr = toastr;

// Use Plugins & Mount App
app.use(router).mount('#app');
