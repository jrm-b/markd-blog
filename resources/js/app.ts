// import { DarkMode } from './ui_controls'

// document.addEventListener('DOMContentLoaded', () => {
//   const darkMode = new DarkMode('toggle-dark-mode')
//   darkMode.initDarkMode()
//   darkMode.toggleDarkMode()
// })

import { Darkmode } from './controls/ui_controls.js'

document.addEventListener('DOMContentLoaded', async () => {
  const darkmode = new Darkmode('toggle-dark-mode')
  await darkmode.init()
  const { listener, element } = darkmode.toggleDarkmode()
  element?.removeEventListener('click', listener!)
})
