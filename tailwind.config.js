/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#eef1f7',
          100: '#d9e1ee',
          200: '#b3c1dc',
          300: '#8a9fc6',
          400: '#6480ac',
          500: '#4a6491',
          600: '#3a5079',
          700: '#2d3f63',
          800: '#243352',
          900: '#1c2842',
        },
        gold: {
          50: '#fbf6e7',
          100: '#f5e8bd',
          200: '#ecd489',
          300: '#e0bd55',
          400: '#d3a934',
          500: '#c1972a',
          600: '#a17a22',
          700: '#7d5f1c',
          800: '#5c4715',
          900: '#3d2f0e',
        },
        cream: '#f2efe6',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['"Source Sans 3"', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '1280px',
      },
    },
  },
  plugins: [],
}
