/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'
// Login component
import GDCard from '@/components/auth/GDCard.vue'

// Composables
import { createApp } from 'vue'

const app = createApp(App)

app.component('gd-card', GDCard)

registerPlugins(app)

app.mount('#app')
