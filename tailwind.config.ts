/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    // extend: {},
    colors: {
      soft: '#CEBC81',
      bgDark: '#19181A',
      textDark: '#19181A',
      textSoft: '#B19F9E',
      paleYellow: '#cfbc81',
      softRose: '#a26e84',
      superGreen: '#479860', 
      mint: '#d8f1e3', // e1f9f1
      golden: '#806543',
      darkRose: '#a6607c',
      tea: '#e8fcc2',
      aqua: '#d0f4ea',
      velvet: '#f9e5d9',
      tomato: '#f76566',
      ocean: '#18ACBA',
      rose: '#f7dfe1',
      abricot: '#F76566',
      bloody: '#692529',
      paynes: '#545f66',
      _black: '#000000',
      _white:'#FFFFFF'
    },
    fontFamily: {
      'sans': ['Times New Roman'],
      'display': ['Italiana'],

    },
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        'spin-slow': 'spin 3s linear infinite'
      },
      scale:{
        '200': '2.00'
      }
    },
  },
  plugins: [],
}

