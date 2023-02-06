import { defineTheme, palette } from 'pinceau'

export default defineTheme({
  alpine: {
    backdrop: {
      backgroundColor: {
        initial: '#e0ffaa',
        dark: '#02410d'
      }
    }
  },
  color: {
    primary: palette('green')
  }
})
