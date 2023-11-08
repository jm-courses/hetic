import { createApp, h } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';

import App from './App.js';

createApp({
  components: {
    App,
  },
  render: () => h(App),
}).mount('#app');
