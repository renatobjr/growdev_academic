/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import '@/styles/custom.css'

// Composables
import { createVuetify } from 'vuetify'

const GdTheme = {
  dark: false,
  colors: {
    background: "#F5F5F5",
    surface: "#fafafa",
    primary: "#2B385B",
    secondary: "#FA8533",
    accent: "#42BFDD",
    error: "#F44336",
    info: "#2196F3",
    success: "#4CAF50",
    warning: "#BF360C",
  }
}

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: "GdTheme",
    themes: {
      GdTheme,
    },
  }
})
