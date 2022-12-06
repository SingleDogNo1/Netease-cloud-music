import 'uno.css'
// import '@unocss/reset/tailwind.css'
import { createApp, nextTick } from 'vue'
import App from './App.vue'
import './samples/node-api'

async function bootstrap() {
  const app = createApp(App)
  app.mount('#app')
  await nextTick()
  postMessage({ payload: 'removeLoading' }, '*')
}

bootstrap()
