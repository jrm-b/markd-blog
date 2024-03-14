export class DarkMode {
  #rootClass
  #toggleBtn
  constructor(elementId) {
    this.#toggleBtn = document.getElementById(elementId)
    this.#rootClass = document.documentElement.classList
  }

  initDarkMode() {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      localStorage.setItem('theme', 'dark')
      this.#rootClass.add('dark')
    } else {
      localStorage.setItem('theme', 'light')
      this.#rootClass.add('light')
    }
  }

  toggleDarkMode() {
    this.#toggleBtn.addEventListener('click', () => {
      if (localStorage.getItem('theme') === 'light') {
        this.#rootClass.remove('light')
        this.#rootClass.add('dark')
        localStorage.setItem('theme', 'dark')
      } else if (localStorage.getItem('theme') === 'dark') {
        this.#rootClass.remove('dark')
        this.#rootClass.add('light')
        localStorage.setItem('theme', 'light')
      }
    })
  }
}
