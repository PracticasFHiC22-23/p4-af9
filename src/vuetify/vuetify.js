import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import * as locale from 'vuetify/locale'

export const vuetify = createVuetify({
  components,
  directives,
  locale,
  icons: {
    defaultSet: 'mdi' // This is already the default value - only for display purposes
  },
  theme: {
    themes: {
      light: {
        dark: false,
        colors: {
          primary: '#FFFFFF',
          secondary: '#FFFFFF'
        }
      }
    }
  }
})
