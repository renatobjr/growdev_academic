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
// Students component
import GDListStudents from '@/components/students/GDListStudents.vue'
import GDFormStudent from '@/components/students/GDFormStudent.vue'

// Composables
import { createApp } from 'vue'

const app = createApp(App)

app
  .component('gd-card', GDCard)
  .component('gd-list-students', GDListStudents)
  .component('gd-form-student', GDFormStudent)

registerPlugins(app)

app.mount('#app')
