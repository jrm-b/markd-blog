/** @type {import('tailwindcss').Config} */
export default {
  // darkMode: 'selector',
  content: ['./resources/**/*.{js,ts,jsx,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        customback: 'hsla(var(--background-color) / <alpha-value>)',
        customtext: 'hsl(var(--text-color) / <alpha-value>)',
        primary: 'hsl(var(--primary-color) / <alpha-value>)',
        secondary: 'hsl(var(--secondary-color) / <alpha-value>)',
      },
      fontFamily: {
        atkinson: 'var(--main-font)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
