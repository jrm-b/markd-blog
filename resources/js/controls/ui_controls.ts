export class Darkmode {
  #rootClass: DOMTokenList
  #toggleBtn: HTMLElement | null
  constructor(elementId: string) {
    this.#rootClass = document.documentElement.classList
    this.#toggleBtn = document.getElementById(elementId)
  }

  /*
   * Init localstorage and root element theme value
   * based on current localstorage or system preferences
   */

  async init() {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark').matches)
    ) {
      localStorage.setItem('theme', 'dark')
      this.#rootClass.add('dark')
    } else if (
      localStorage.theme === 'light' ||
      (!('theme' in localStorage) && window.matchMedia('(prefer-color-scheme: light').matches)
    ) {
      localStorage.setItem('theme', 'light')
      this.#rootClass.add('light')
    }
  }

  /*
   * Add click listener on this.#toggleBtn element
   * toggling dark mode theme value in localstorage and root element
   */

  toggleDarkmode() {
    const darkmodeListener = this.#toggleBtn?.addEventListener('click', () => {
      switch (localStorage.getItem('theme')) {
        case 'light':
          this.#rootClass.remove('light')
          this.#rootClass.add('dark')
          localStorage.setItem('theme', 'dark')
          break
        case 'dark':
          this.#rootClass.remove('dark')
          this.#rootClass.add('light')
          localStorage.setItem('theme', 'light')
          break
      }
    })
    return { listener: darkmodeListener, element: this.#toggleBtn }
  }
}
