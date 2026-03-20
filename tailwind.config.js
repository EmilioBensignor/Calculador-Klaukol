/** @type {import('tailwindcss').Config} */
export default {
  content: ['./app/**/*.{vue,js}'],
  theme: {
    screens: {
      'sm': '480px',
      'md': '744px',
      'lg': '1080px',
      'xl': '1280px',
      'xxl': '1440px',
    },
    fontFamily: {
      sans: ['Saira', 'sans-serif'],
    },
    extend: {
      colors: {
        brand: {
          red: '#E30613',
          'red-dark': '#B5050F',
          gray: {
            mid: "#E4E4E4",
            dark: "#616161",
          }
        },
      },
    },
  },
}
