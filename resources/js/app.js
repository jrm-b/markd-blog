import { DarkMode } from './ui_controls'

document.addEventListener('DOMContentLoaded', () => {
  const darkMode = new DarkMode('toggle-dark-mode')
  darkMode.initDarkMode()
  darkMode.toggleDarkMode()
})
