/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:'#838485',
        secundary:{
         1000:'#5d5e5f',
         buton:'#e09e10',
         100: '#4095CD',
         900: '#3498db',
         link:'#af0000'
        }
      }
    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('@headlessui/tailwindcss')
  ],
}

